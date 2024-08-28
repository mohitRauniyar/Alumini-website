package com.team.aluminiNetwork.services;

import com.mongodb.DuplicateKeyException;
import com.mongodb.client.result.UpdateResult;
import com.team.aluminiNetwork.models.Alumini;
import com.team.aluminiNetwork.repositories.AluminiRepository;
import jakarta.validation.constraints.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class AluminiService {

    private final AluminiRepository aluminiRepository;
    private final MongoTemplate mongoTemplate;

    @Autowired
    public AluminiService(AluminiRepository aluminiRepository, MongoTemplate mongoTemplate) {
        this.aluminiRepository = aluminiRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public void saveAlumini(Alumini alumini) {
        aluminiRepository.save(alumini);
    }

    public Alumini findByRegistrationNumber(String registrationNumber) {
        return aluminiRepository.findByRegistrationNumber(registrationNumber);
    }

    public void findByIdAndUpdate(Alumini alumini, String id) {
        Query query = new Query(Criteria.where("_id").is(id));
        Update update = new Update()
                .set("campus", alumini.getCampus())
                .set("firstname", alumini.getFirstname())
                .set("lastname", alumini.getLastname())
                .set("passingYear", alumini.getPassingYear())
                .set("email", alumini.getEmail())
                .set("password", alumini.getPassword())
                .set("workingCountry", alumini.getWorkingCountry())
                .set("workingCity", alumini.getWorkingCity())
                .set("profilePicture", alumini.getProfilePicture());

        UpdateResult result = mongoTemplate.updateFirst(query, update, Alumini.class);
        if (result.getMatchedCount() == 0) {
            throw new DataIntegrityViolationException("No document found with the given registration number");
        }
    }
}
