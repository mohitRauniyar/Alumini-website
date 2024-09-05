package com.team.aluminiNetwork.services;

import com.team.aluminiNetwork.models.Post;
import com.team.aluminiNetwork.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final MongoTemplate mongoTemplate;

    @Autowired
    public PostService(PostRepository postRepository, MongoTemplate mongoTemplate) {
        this.postRepository = postRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public void createPost(Post post) {
        postRepository.save(post);
    }
}
