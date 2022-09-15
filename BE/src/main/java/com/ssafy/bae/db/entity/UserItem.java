package com.ssafy.bae.db.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "users_items")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class UserItem extends BaseEntity {

    @Column(name = "name", columnDefinition = "varchar(20) NOTNULL")
    String name;
    @Column(name = "user_id", columnDefinition = "varchar(30) NOTNULL")
    String userId;
    @Column(name = "episode", columnDefinition = "int")
    int episode;
    @Column(name = "chapter", columnDefinition = "int")
    int chapter;

}
