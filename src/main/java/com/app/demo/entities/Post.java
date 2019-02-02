package com.app.demo.entities;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Entity(name="post")
public class Post{

    @Id
    @GeneratedValue
    @Column(name="id", nullable=false, unique=true)
    private Long id;

    @Column(name="fullName", nullable=false)
    private FullName fullName;

    @Column(name="userImageUrl")
    private String userImageUrl;

    @Column(name="postType", nullable = false)
    private String postType;

    @Column(name="script", nullable = true)
    private String script;

    @Column(name="imageUrl", nullable = true)
    private String imageUrl;

    @Column(name="ratings")
    private int ratings = 0;

    @Column(name="comments")
    private int comments = 0;

    @Column(name="shares")
    private int shares = 0;

    @ManyToOne
    @JoinColumn(name="account")
    private Account account;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public FullName getFullName() {
        return fullName;
    }

    public void setFullName(FullName fullName) {
        this.fullName = fullName;
    }

    public String getUserImageUrl() {
        return userImageUrl;
    }

    public void setUserImageUrl(String userImageUrl) {
        this.userImageUrl = userImageUrl;
    }

    public String getPostType() {
        return postType;
    }

    public void setPostType(String postType) {
        this.postType = postType;
    }

    public String getScript() {
        return script;
    }

    public void setScript(String script) {
        this.script = script;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getRatings() {
        return ratings;
    }

    public void setRatings(int ratings) {
        this.ratings = ratings;
    }

    public int getComments() {
        return comments;
    }

    public void setComments(int comments) {
        this.comments = comments;
    }

    public int getShares() {
        return shares;
    }

    public void setShares(int shares) {
        this.shares = shares;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", fullName=" + fullName +
                ", userImageUrl='" + userImageUrl + '\'' +
                ", postType='" + postType + '\'' +
                ", script='" + script + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", ratings=" + ratings +
                ", comments=" + comments +
                ", shares=" + shares +
                ", account=" + account +
                '}';
    }

}