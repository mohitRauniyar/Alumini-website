package com.team.aluminiNetwork.utils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;
import java.util.function.Function;

@Component
public class JwtUtil {

    @Value("${JWT_SECRET_KEY}")
    private String jwtSecretKey;

    public String getJwtSecretKey() {
        return jwtSecretKey;
    }

    public String extractId(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // General method to extract any claim
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Method to extract all claims
    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(jwtSecretKey)
                .parseClaimsJws(token)
                .getBody();
    }


}
