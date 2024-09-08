package com.team.aluminiNetwork.models;

import lombok.Data;

@Data
public class PostRequest {
    private String title;
    private String description;
    private String[] image;
}
