package com.team.aluminiNetwork.controllers;

import com.team.aluminiNetwork.models.Alumini;
import com.team.aluminiNetwork.services.AluminiService;
import jakarta.validation.Valid;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class SignupController {
    private final AluminiService aluminiService;
    @Autowired
    public SignupController (AluminiService aluminiService) {
        this.aluminiService = aluminiService;
    }
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@Valid @RequestBody Alumini alumini){
        if (alumini.getFirstname() == null || alumini.getEmail() == null || alumini.getPassword() == null || alumini.getRegistrationNumber() == null) {
            return new ResponseEntity<String>("All fields are required", HttpStatusCode.valueOf(400));
        }
        alumini.setPassword(BCrypt.hashpw(alumini.getPassword(), BCrypt.gensalt()));
        try{
            aluminiService.saveAlumini(alumini);
            return new ResponseEntity<String>("Signup Successful", HttpStatusCode.valueOf(200));
        }catch (DataIntegrityViolationException e) { // or whatever specific exception you identified
            return new ResponseEntity<String>("Email or Registration Number already exists.", HttpStatusCode.valueOf(409));
        }
        catch(Exception e){
            return new ResponseEntity<String>("Error occurred during signup", HttpStatusCode.valueOf(500));
        }
    }
}
