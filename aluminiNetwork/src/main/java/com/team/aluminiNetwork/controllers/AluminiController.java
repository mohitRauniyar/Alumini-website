package com.team.aluminiNetwork.controllers;

import com.team.aluminiNetwork.models.Alumini;
import com.team.aluminiNetwork.models.Password;
import com.team.aluminiNetwork.services.AluminiService;
import com.team.aluminiNetwork.utils.JwtUtil;
import jakarta.validation.Valid;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        if(cookie.isEmpty()){
            return new ResponseEntity<>("No cookie captured.", HttpStatus.BAD_REQUEST);
        }
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
//        alumini.setPassword(BCrypt.hashpw(alumini.getPassword(), BCrypt.gensalt()));
        try{
            aluminiService.findByIdAndUpdate(alumini, id);
            return new ResponseEntity<>("Profile updated Successfully.", HttpStatus.OK);
        }catch(DataIntegrityViolationException e){
            return new ResponseEntity<>("Profile not found.", HttpStatus.BAD_REQUEST);
        }catch(Exception e){
            return new ResponseEntity<>("Internal Server Error.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteAlumini(@Valid @RequestBody Password password, @CookieValue("access_token") String cookie){
        if(cookie.isEmpty()){
            return new ResponseEntity<>("No cookie captured.", HttpStatus.BAD_REQUEST);
        }
        String id;
        try {
            id = jwtUtil.extractId(cookie);
            System.out.println(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Invalid access token.", HttpStatus.UNAUTHORIZED);
        }
        Alumini alumini = aluminiService.findById(id);
        boolean validPassword = BCrypt.checkpw(password.getPassword(), alumini.getPassword());
        if (!validPassword) {
            return new ResponseEntity<>("Incorrect Credentials", HttpStatus.FORBIDDEN);
        }
        aluminiService.deleteAluminiById(id);

        // Create a cookie with the same name and set its max age to 0 to delete it
        ResponseCookie deleteCookie = ResponseCookie.from("access_token", "")
                .path("/api")
                .maxAge(0)
                .httpOnly(true)
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, deleteCookie.toString())
                .body("Alumni record deleted and access token cookie removed.");

    }

    @PostMapping("/signout")
    public ResponseEntity<?> signout(@CookieValue("access_token") String cookie){
        ResponseCookie deleteCookie = ResponseCookie.from("access_token", "")
                .path("/api")
                .maxAge(0)
                .httpOnly(true)
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, deleteCookie.toString())
                .body("User signed out successfully.");
    }
}
