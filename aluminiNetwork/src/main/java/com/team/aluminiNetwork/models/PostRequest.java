package com.team.aluminiNetwork.models;

import lombok.Data;

@Data
public class PostRequest {
    private String category;
    private String caption;
    private String[] media;
}
