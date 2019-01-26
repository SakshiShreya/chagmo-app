package com.app.demo.models;

public class PostForm{

    private String message;
    private int accountId;
    private int subjectId;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getAccountId() {
        return accountId;
    }
    
    public void setAccount(int accountId) {
        this.accountId = accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    @Override
    public String toString() {
        return "PostForm{" +
                "message='" + message + '\'' +
                ", accountId=" + accountId +
                ", subjectId=" + subjectId +
                '}';
    }
}