package com.app.demo.entities.accountEntities;

import javax.persistence.*;

@Entity(name="securedData")
public class SecuredAccountData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @Column(name = "gmail", nullable = false, unique = true)
    private String gmail;

    @Column(name = "password", nullable = false)
    private String password;

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "SecuredAccountData{" +
                "id=" + id +
                ", gmail='" + gmail + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

}
