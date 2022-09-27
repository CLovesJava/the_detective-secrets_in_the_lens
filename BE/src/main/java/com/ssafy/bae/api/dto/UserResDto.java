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
    int episode;
    int chapter;

    public UserResDto(User user){
        userId = user.getUserId();
        episode = user.getEpisode();
        chapter = user.getChapter();
    }

    public User toEntity(){
        return User.builder()
                .userId(userId)
                .episode(episode)
                .chapter(chapter)
                .build();
    }
}
