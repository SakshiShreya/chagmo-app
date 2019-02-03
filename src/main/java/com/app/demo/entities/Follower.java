package com.app.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Follower {

    @Id
    @Column(name="followerUsername")
    private String followerUsername;

    @ManyToOne
    private Account account;

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
                "followerUsername='" + followerUsername + '\'' +
                ", account=" + account +
                '}';
    }
}