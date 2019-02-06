package com.app.demo.entities.postEntities;

import com.app.demo.entities.accountEntities.Account;
import com.app.demo.entities.accountEntities.FullName;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity(name="post")
public class Post{

    @Id
    @NotNull
    @GeneratedValue
    @Column(name="id", unique=true)
    private Long id;

    @NotNull
    @Column(name="fullName")
    private FullName fullName;

    @Column(name="userImageUrl")
    private String userImageUrl;

    @NotNull
    @Column(name="postType")
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

    @NotNull
    @Column(name="date")
    private LocalDateTime date;

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

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
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
                ", date=" + date +
                ", account=" + account +
                '}';
    }
}