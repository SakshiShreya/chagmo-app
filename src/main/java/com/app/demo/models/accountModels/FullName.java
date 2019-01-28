package com.app.demo.models.accountModels;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class FullName {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    public FullName(){}

    public FullName(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString(){
        return "FullName = [first_name: "+this.firstName+", last_name: "+this.lastName+"]";
    }

}