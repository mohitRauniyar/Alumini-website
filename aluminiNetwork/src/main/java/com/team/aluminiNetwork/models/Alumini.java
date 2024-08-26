package com.team.aluminiNetwork.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "alumini")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Alumini {
    @Id
    private ObjectId id;
    @NotNull
    private String campus;
    @Indexed(unique = true)
    @NotNull
    private String registrationNumber;
    private String firstname;
    private String lastname;
    @NotNull
    private Integer passingYear;
    @Email
    @Indexed(unique = true)
    @NotNull
    private String email;
    @NotNull
    private String password;
    private String workingCountry;
    private String workingCity;
}