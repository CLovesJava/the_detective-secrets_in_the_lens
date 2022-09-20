package com.ssafy.bae.api.dto;

import com.ssafy.bae.db.entity.User;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserResDto {

    long idx;
    String userId;
    String tokenId;
    String service;
    int point;
    int episode;
    int chapter;

    public UserResDto(String userId, String tokenId, String service){
        this.userId = userId;
        this.tokenId = tokenId;
        this.service = service;
    }

    public UserResDto(User user){
        userId = user.getUserId();
        tokenId = user.getTokenId();
        service = user.getService();
        point = user.getPoint();
        episode = user.getEpisode();
        chapter = user.getChapter();
    }

    public User toEntity(){
        return User.builder()
                .userId(userId)
                .tokenId(tokenId)
                .service(service)
                .point(point)
                .episode(episode)
                .chapter(chapter)
                .build();
    }
}
