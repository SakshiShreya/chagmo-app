package com.app.demo.entities.accountEntities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Follower {

    @Id
    @NotNull
    @GeneratedValue
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @NotNull
    @Column(name = "followerUsername")
    private String followerUsername;

    @NotNull
    @ManyToOne
    private Account account;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFollowerUsername() {
        return followerUsername;
    }

    public void setFollowerUsername(String followerUsername) {
        this.followerUsername = followerUsername;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    @Override
    public String toString() {
        return "Follower{" +
                ", followerUsername='" + followerUsername + '\'' +
                ", account=" + account +
                '}';
    }
}