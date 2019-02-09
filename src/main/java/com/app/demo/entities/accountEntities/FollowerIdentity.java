package com.app.demo.entities.accountEntities;


import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Embeddable
public class FollowerIdentity {

    @NotNull
    @Column(name="followerUsername")
    private String followerUsername;

    @NotNull
    @ManyToOne
    private Account account;

    public String getFollowerUsername() {
        return followerUsername;
    }

    public void setFollowerUsername(String followerUsername) {
        this.followerUsername = followerUsername;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
