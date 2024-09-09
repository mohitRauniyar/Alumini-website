package com.team.aluminiNetwork.services;

import com.team.aluminiNetwork.models.Post;
import com.team.aluminiNetwork.repositories.PostRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public void createPost(Post post) {
        postRepository.save(post);
    }

    public Post getPostById(ObjectId id) {
        return postRepository.findById(id).orElse(null);
    }

    public void updatePost(Post existingPost) {
        postRepository.save(existingPost);
    }

    public Page<Post> findAll(Pageable pageable) {return postRepository.findAll(pageable);
    }
}
