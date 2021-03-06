package com.app.demo.components.controllers.accountControllers;

import com.app.demo.components.services.accountServices.FollowerService;
import com.app.demo.entities.accountEntities.Follower;
import com.app.demo.models.AutoFollowResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/accounts/followers")
@CrossOrigin(origins = "http://localhost:4200")
public class FollowerController {

    @Autowired
    private FollowerService followerService;

    @GetMapping("")
    public Collection<Follower> findAll(){
        return followerService.getAll();
    }

    @GetMapping("/byFollowerAndAccount/{followerUsername}/{accountUsername}")
    public Optional<Follower> findByAccountAnfFollower(@PathVariable String followerUsername,
                                                       @PathVariable String accountUsername){
        return followerService.getByFollowerAndAccount(followerUsername, accountUsername);
    }

    @GetMapping("/followerUsername/{username}")
    public Collection<Follower> findByUsername(@PathVariable String username){
        return followerService.getByUsername(username);
    }

    @GetMapping("/accountUsername/{username}")
    public Collection<Follower> findByAccountUsername(@PathVariable String username){
        return followerService.getByAccountUsername(username);
    }

    @PostMapping("/add")
    public Follower save(@RequestBody Follower follower){
        return followerService.add(follower);
    }

    @DeleteMapping("/delete/{followerUsername}/{accountUsername}")
    public boolean delete(@PathVariable String followerUsername,
                          @PathVariable String accountUsername){
        return followerService.remove(followerUsername, accountUsername);
    }

    @GetMapping("/autoFollowOrUnfollow/{followerUsername}/{accountUsername}")
    public AutoFollowResponse autoFollowOrUnfollow(@PathVariable String followerUsername,
                                                   @PathVariable String accountUsername){
        return followerService.autoFollowOrUnfollow(followerUsername, accountUsername);
    }

}