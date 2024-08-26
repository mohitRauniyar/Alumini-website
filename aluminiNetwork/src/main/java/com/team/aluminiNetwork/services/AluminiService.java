package com.team.aluminiNetwork.services;

import com.mongodb.DuplicateKeyException;
import com.team.aluminiNetwork.models.Alumini;
import com.team.aluminiNetwork.repositories.AluminiRepository;
import jakarta.validation.constraints.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AluminiService {

    private final AluminiRepository aluminiRepository;

    @Autowired
    public AluminiService(AluminiRepository aluminiRepository) {
        this.aluminiRepository = aluminiRepository;
    }
    public void saveAlumini(Alumini alumini){
        aluminiRepository.save(alumini);
    }
    public Alumini findByRegistrationNumber(String registrationNumber){
        return aluminiRepository.findByRegistrationNumber(registrationNumber);
    }
}
