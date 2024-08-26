package com.team.aluminiNetwork.utils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    @Value("${JWT_SECRET_KEY}")
    private String jwtSecretKey;

    public String getJwtSecretKey() {
        return jwtSecretKey;
    }

}
