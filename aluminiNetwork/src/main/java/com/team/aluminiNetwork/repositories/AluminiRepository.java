package com.team.aluminiNetwork.repositories;

import com.team.aluminiNetwork.models.Alumini;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AluminiRepository extends MongoRepository<Alumini, ObjectId> {

    Alumini findByRegistrationNumber(String registrationNumber);

}
