package com.app.demo.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity(name="account")
public class Account {

    @Id
    @Column(name="username", nullable=false, unique=true)
    private String username;

    @Column(name="gmail", nullable=false, unique=true)
    private String gmail;

    @Column(name="fullName")
    private FullName fullName;

    @Column(name="password")
    private String password;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "account")
    private Collection<Post> posts = new ArrayList<>();

    public String getGmail() {
        return gmail;
    }

    public void setGmail(String gmail) {
        this.gmail = gmail;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public FullName getFullName() {
        return fullName;
    }

    public void setFullName(FullName fullName) {
        this.fullName = fullName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Account{" +
                "username='" + username + '\'' +
                ", gmail='" + gmail + '\'' +
                ", fullName=" + fullName +
                ", password='" + password +
                '}';
    }
}