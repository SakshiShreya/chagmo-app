package com.app.demo.components.controllers;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.components.services.accountServices.AccountService;
import com.app.demo.components.services.PostService;
import com.app.demo.entities.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private PostService postService;

    @GetMapping("")
    public Collection<Post> findAll(){
        return postService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Post> findById(@PathVariable int id){
        return postService.getById(id);
    }

    @GetMapping("/byAccount/{username}")
    public Collection<Post> findByAccountUsername(@PathVariable String username){
        return postService.getByAccountUsername(username);
    }

    @PostMapping("/add")
    public Post save(@RequestBody Post post){
        return postService.addPost(post);
    }

}