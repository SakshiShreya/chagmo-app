package com.app.demo.components.services.accountServices;

import com.app.demo.ad.accountRepositories.FollowerRepository;
import com.app.demo.entities.accountEntities.Follower;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class FollowerService {

    @Autowired
    private FollowerRepository followerRepo;

    public Collection<Follower> getAll(){
        return followerRepo.findAll();
    }

    public Collection<Follower> getByUsername(String username){
        return followerRepo.findFollowersByFollowerUsername(username);
    }

    public Collection<Follower> getByAccountUsername(String username){
        return followerRepo.findFollowersByAccount_Username(username);
    }

    public Follower add(Follower follower){
        return followerRepo.save(follower);
    }

}
