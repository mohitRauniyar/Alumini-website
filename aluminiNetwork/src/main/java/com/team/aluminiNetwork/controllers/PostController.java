package com.team.aluminiNetwork.controllers;

import com.team.aluminiNetwork.models.Post;
import com.team.aluminiNetwork.models.PostRequest;
import com.team.aluminiNetwork.services.PostService;
import com.team.aluminiNetwork.utils.JwtUtil;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/api/post")
public class PostController {
    private final PostService postService;
    private final JwtUtil jwtUtil;

    @Autowired
    public PostController(PostService postService, JwtUtil jwtUtil) {
        this.postService = postService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/add")
    public ResponseEntity<?> createPost(@RequestBody PostRequest postRequest, @CookieValue("access_token") String cookie) {
        if (cookie.isEmpty()) {
            return ResponseEntity.badRequest().body("No cookie captured.");
        }

        String userId;
        try {
            userId = jwtUtil.extractId(cookie);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid access token.");
        }

        if (postRequest.getTitle() == null || postRequest.getDescription() == null) {
            return ResponseEntity.badRequest().body("All fields are required.");
        }

        try {
            Post post = new Post();
            post.setOwner(userId);
            post.setTitle(postRequest.getTitle());
            post.setDescription(postRequest.getDescription());
            post.setPostedOn(new Date());
            post.setImage(postRequest.getImage());

            postService.createPost(post);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while creating the post.");
        }
        return ResponseEntity.ok("Post created successfully.");
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updatePost(@PathVariable("id") String idString,
                                        @RequestBody PostRequest updateRequest,
                                        @CookieValue("access_token") String cookie) {
        if (cookie.isEmpty()) {
            return ResponseEntity.badRequest().body("No cookie captured.");
        }

        String userId;
        try {
            userId = jwtUtil.extractId(cookie);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid access token.");
        }

        if (idString.length() != 24 || !idString.matches("^[a-fA-F0-9]{24}$")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post not found.");
        }

        ObjectId id = new ObjectId(idString);
        try {
            Post existingPost = postService.getPostById(id);
            if (existingPost == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post not found.");
            }

            if (!existingPost.getOwner().equals(userId)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to update this post.");
            }

            if (updateRequest.getTitle() != null) {
                existingPost.setTitle(updateRequest.getTitle());
            }
            if (updateRequest.getDescription() != null) {
                existingPost.setDescription(updateRequest.getDescription());
            }
            if (updateRequest.getImage() != null) {
                existingPost.setImage(updateRequest.getImage());
            }

            postService.updatePost(existingPost);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while updating the post.");
        }
        return ResponseEntity.ok("Post updated successfully.");
    }
}
