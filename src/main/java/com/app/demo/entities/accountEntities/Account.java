package com.app.demo.entities.accountEntities;

import com.app.demo.entities.Post;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity(name="account")
public class Account {

    @Id
    @Column(name="username", nullable=false, unique=true)
    private String username;

    @Column(name="fullName", nullable = false)
    private FullName fullName;

    @OneToOne
    private SecuredAccountData securedAccountData;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "account")
    private Collection<Post> posts = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "account")
    private Collection<Follower> followers = new ArrayList<>();

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

    public SecuredAccountData getSecuredAccountData() {
        return securedAccountData;
    }

    public void setSecuredAccountData(SecuredAccountData securedAccountData) {
        this.securedAccountData = securedAccountData;
    }

    @Override
    public String toString() {
        return "Account{" +
                "username='" + username + '\'' +
                ", fullName=" + fullName +
                ", securedAccountData=" + securedAccountData +
                '}';
    }
}