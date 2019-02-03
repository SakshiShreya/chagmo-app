package com.app.demo.components.controllers;

import com.app.demo.components.services.FollowerService;
import com.app.demo.entities.Follower;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/followers")
@CrossOrigin(origins = "http://localhost:4200")
public class FollowerController {

    @Autowired
    private FollowerService followerService;

    @GetMapping("")
    public Collection<Follower> findAll(){
        return followerService.getAll();
    }

    @GetMapping("/{username}")
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

}
