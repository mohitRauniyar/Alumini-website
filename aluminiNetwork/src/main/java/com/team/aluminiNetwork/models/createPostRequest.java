package com.team.aluminiNetwork.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
public class createPostRequest {
    private String title;
    private String description;
    private String[] image;
}
