package com.team.aluminiNetwork.controllers;

import com.team.aluminiNetwork.models.Alumini;
import com.team.aluminiNetwork.services.AluminiService;
import com.team.aluminiNetwork.utils.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    private final JwtUtil jwtUtil;
    private final AluminiService aluminiService;

    public ProfileController(JwtUtil jwtUtil, AluminiService aluminiService) {
        this.jwtUtil = jwtUtil;
        this.aluminiService = aluminiService;
    }

    @GetMapping("/alumini")
    public ResponseEntity<?> getAluminiProfile(@CookieValue("access_token") String cookie){
        if(cookie.isEmpty()){
            return new ResponseEntity<>("No cookie captured.", HttpStatus.BAD_REQUEST);
        }
        String id;
        Alumini alumini;
        try {
            id = jwtUtil.extractId(String.valueOf(cookie));
        } catch (Exception e) {
            return new ResponseEntity<>("Invalid access token.", HttpStatus.UNAUTHORIZED);
        }
        try{
            alumini = aluminiService.findById(id);
        }catch(Exception e){
            return new ResponseEntity<>("Some error occurred.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if(alumini == null){
            return new ResponseEntity<>("No alumini found for this id.", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(alumini, HttpStatus.OK);
    }
}
