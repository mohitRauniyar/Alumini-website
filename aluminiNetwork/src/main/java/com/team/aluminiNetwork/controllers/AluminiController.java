package com.team.aluminiNetwork.controllers;

import com.team.aluminiNetwork.models.Alumini;
import com.team.aluminiNetwork.models.UpdateProfileRequest;
import com.team.aluminiNetwork.services.AluminiService;
import com.team.aluminiNetwork.utils.JwtUtil;
import jakarta.validation.Valid;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/api/alumini")
public class AluminiController {

    private final AluminiService aluminiService;
    private final JwtUtil jwtUtil;

    @Autowired
    public AluminiController(AluminiService aluminiService, JwtUtil jwtUtil) {
        this.aluminiService = aluminiService;
        this.jwtUtil = jwtUtil;
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateProfile(@Valid @RequestBody Alumini alumini, @CookieValue("access_token") String cookie){
        String id;
        try {
            id = jwtUtil.extractId(cookie);
        } catch (Exception e) {
            return new ResponseEntity<>("Invalid access token.", HttpStatus.UNAUTHORIZED);
        }
        if(alumini.getPassword().length() < 6){
            return new ResponseEntity<>("Password must be at least 6 characters.", HttpStatus.BAD_REQUEST);
        }
        if(alumini.getFirstname() == null || alumini.getFirstname().matches("/^[A-Za-z]{2,}/")){
            return new ResponseEntity<>("Please input a valid firstname.", HttpStatus.BAD_REQUEST);
        }
        alumini.setPassword(BCrypt.hashpw(alumini.getPassword(), BCrypt.gensalt()));
        try{
            aluminiService.findByIdAndUpdate(alumini, id);
            return new ResponseEntity<>("Profile updated Successfully.", HttpStatus.OK);
        }catch(DataIntegrityViolationException e){
            return new ResponseEntity<>("Profile not found.", HttpStatus.BAD_REQUEST);
        }catch(Exception e){
            return new ResponseEntity<>("Internal Server Error.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
