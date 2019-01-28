package com.app.demo.models.accountModels;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="account")
public class Account {

    @Id
    @GeneratedValue
    @Column(name="id", nullable=false, unique=true)
    private Long id;

    @Column(name="gmail", nullable=false, unique=true)
    private String gmail;

    @Column(name="username", nullable=false, unique=true)
    private String username;

    @Column(name="full_name")
    private FullName fullName;

    @Column(name="password")
    private String password;

    // @OneToMany(mappedBy="account")
    // List<Post> posts = new ArrayList<Post>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    // public List<Post> getPosts() {
    //     return posts;
    // }

    // public void setPosts(List<Post> posts) {
    //     this.posts = posts;
    // }

    @Override
    public String toString() {
        return "Account = [id: " + this.id + ", gmail: " + this.gmail + ", full_name: " + this.fullName.toString() + ", password: "
                + this.password + "]";
    }

}