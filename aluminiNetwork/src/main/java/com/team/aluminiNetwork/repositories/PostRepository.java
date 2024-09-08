package com.team.aluminiNetwork.repositories;

import com.team.aluminiNetwork.models.Post;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends MongoRepository<Post, ObjectId> {

}
