package com.app.demo.models;

public class LoginForm {

    private String gmail;

    private String password;

    public String getGmail() {
        return gmail;
    }

    public void setGmail(String gmail) {
        this.gmail = gmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "LoginForm{" +
                "gmail='" + gmail + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

}
