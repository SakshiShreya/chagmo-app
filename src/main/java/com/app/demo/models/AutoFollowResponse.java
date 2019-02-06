package com.app.demo.models;

import com.app.demo.entities.accountEntities.Follower;

public class AutoFollowResponse {

    private Follower follower;

    private boolean isFollowed;

    public AutoFollowResponse() { }

    public AutoFollowResponse(Follower follower, boolean isFollowed) {
        this.follower = follower;
        this.isFollowed = isFollowed;
    }

    public Follower getFollower() {
        return follower;
    }

    public void setFollower(Follower follower) {
        this.follower = follower;
    }

    public boolean isFollowed() {
        return isFollowed;
    }

    public void setFollowed(boolean followed) {
        isFollowed = followed;
    }
}
