package com.app.demo.components.services.accountServices;

import com.app.demo.ad.accountRepositories.FollowerRepository;
import com.app.demo.entities.accountEntities.Account;
import com.app.demo.entities.accountEntities.Follower;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class FollowerService {

    @Autowired
    private FollowerRepository followerRepo;

    @Autowired
    private AccountService accountService;

    public Collection<Follower> getAll(){
        return followerRepo.findAll();
    }

    public Optional<Follower> getByFollowerAndAccount(String follower, String account){
        return followerRepo.findFollowerByFollowerUsernameAndAccountUsername(follower, account);
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

    public boolean remove(String followerUsername, String accountUsername){
        Follower follower = getByFollowerAndAccount(followerUsername, accountUsername).orElse(null);
        if(follower != null){
            followerRepo.delete(follower);
            return true;
        }
        return false;
    }

    public void remove(Follower follower){
        followerRepo.delete(follower);
    }

    public void autoFollowOrUnfollow(String followerUsername, String accountusername) throws Exception {
        Follower follower = getByFollowerAndAccount(followerUsername, accountusername).orElse(null);
        Account account = accountService.getByUsername(accountusername).orElse(null);
        if(account == null){
            throw new Exception("Warning : logged in account is not in the database");
        }
        if(follower == null){
            Follower newFollower = new Follower();
            newFollower.setFollowerUsername(followerUsername);
            newFollower.setAccount(account);
            add(newFollower);
            System.out.println(newFollower);
        }else if(follower != null){
            remove(follower);
        }
    }

}
