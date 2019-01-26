package com.app.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="subject")
public class Subject {

    @Id
    @GeneratedValue
    @Column(name="id", nullable=false, unique=true)
    private Long id;

    @Column(name="name", nullable=false, unique=true)
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Subject{" +
                "id=" + id + ", " +
                "name='" + name + '\'' +
                '}';
    }
}
