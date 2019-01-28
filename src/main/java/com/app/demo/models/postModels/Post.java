package com.app.demo.models.postModels;

import javax.persistence.*;

import com.app.demo.models.Subject;
import com.app.demo.models.accountModels.Account;

import java.util.ArrayList;
import java.util.List;

@Entity(name="post")
public class Post{

    @Id
    @GeneratedValue
    @Column(name="id", nullable=false, unique=true)
    private Long id;

    @Column(name="content", nullable=false, unique=false)
    private String content;

    @ManyToMany
    private List<Subject> subjects = new ArrayList<Subject>();

    @ManyToOne
    private Account account;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Account getAccount() {
        return account;
    }
    
    public void setAccount(Account account) {
        this.account = account;
    }

    public List<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<Subject> subjects) {
        this.subjects = subjects;
    }

    @Override
    public String toString() {
        return "Post = [id: "+this.id+", content: "+this.content+", account: "+this.account.toString()
        +"]";
    }

}