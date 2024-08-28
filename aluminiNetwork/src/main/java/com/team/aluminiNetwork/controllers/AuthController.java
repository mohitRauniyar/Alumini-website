package com.team.aluminiNetwork.controllers;

import com.team.aluminiNetwork.models.Alumini;
import com.team.aluminiNetwork.models.SigninRequest;
import com.team.aluminiNetwork.services.AluminiService;
import com.team.aluminiNetwork.utils.JwtUtil;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AluminiService aluminiService;
    private final JwtUtil jwtUtil;
    @Autowired
    public AuthController(AluminiService aluminiService, JwtUtil jwtUtil) {

        this.aluminiService = aluminiService;
        this.jwtUtil = jwtUtil;
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

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@Valid @RequestBody SigninRequest req, HttpServletResponse response) {
        String registrationNumber = req.getRegistrationNumber();
        String password = req.getPassword();
        String jwtSecretKey = jwtUtil.getJwtSecretKey();

        if (registrationNumber == null || registrationNumber.isEmpty() || password == null || password.isEmpty()) {
            return new ResponseEntity<>("All fields are required", HttpStatus.BAD_REQUEST);
        }
        try {
            Alumini validAlumini = aluminiService.findByRegistrationNumber(registrationNumber);
            if(validAlumini == null){
                return new ResponseEntity<>("Incorrect Credentials", HttpStatus.BAD_REQUEST);
            }
            boolean validPassword = BCrypt.checkpw(password, validAlumini.getPassword());
            if (!validPassword) {
                return new ResponseEntity<>("Incorrect Credentials", HttpStatus.BAD_REQUEST);
            }
            String token = Jwts.builder()
                    .setSubject(validAlumini.getId().toString())
                    .setIssuedAt(new Date())
                    .signWith(SignatureAlgorithm.HS256, jwtSecretKey)
                    .compact();
            Cookie cookie = new Cookie("access_token", token);
            cookie.setHttpOnly(true);
            response.addCookie(cookie);
            validAlumini.setPassword(null);

            return new ResponseEntity<>(validAlumini, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error occurred during signin", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}