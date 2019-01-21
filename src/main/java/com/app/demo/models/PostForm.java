package com.app.demo.models;

public class PostForm{

    private String message;
    private int accountId;

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

    @Override
    public String toString() {
        return "PostForm = [message: "+this.message+", account_id: "+this.accountId+"]";
    }

}