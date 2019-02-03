package com.app.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Follower {

    @Id
    @Column(name = "follower_username")
    private String username;

    @ManyToOne
    private Account account;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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
                "username='" + username + '\'' +
                ", account=" + account +
                '}';
    }
}
