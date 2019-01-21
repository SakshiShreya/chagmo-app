package com.app.demo.models;

public class AccountForm{

    private String gmail;
    private String first_name;
    private String last_name;
    private String password;

    public String getGmail() {
        return gmail;
    }

    public void setGmail(String gmail) {
        this.gmail = gmail;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Account = [gmail: " + this.gmail + ", first_name: " + this.first_name + ", last_name: "+ this.last_name +", password: "
                + this.password + "]";
    }

}