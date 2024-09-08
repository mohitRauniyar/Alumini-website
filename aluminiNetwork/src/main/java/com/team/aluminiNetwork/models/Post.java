package com.team.aluminiNetwork.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Post {
    @Id
    private ObjectId id;
    private String owner;
    private String category;
    private String caption;
    private Date postedOn;
    private String[] media;
    private Integer likes = 0;
}
