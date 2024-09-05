package com.team.aluminiNetwork.repositories;

import com.team.aluminiNetwork.models.Alumini;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AluminiRepository extends MongoRepository<Alumini, ObjectId> {

    Alumini findByRegistrationNumber(String registrationNumber);

    Alumini findById(String id);

    void deleteById(String id);
}
