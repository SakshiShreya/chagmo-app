package com.app.demo.components.controllers;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.ad.AccountRepository;
import com.app.demo.ad.PostRepository;
import com.app.demo.components.services.AccountService;
import com.app.demo.components.services.PostService;
import com.app.demo.models.Account;
import com.app.demo.models.Post;
import com.app.demo.models.PostForm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PostController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private PostService postService;

    @GetMapping("/posts")
    public Collection<Post> findAll(){
        return postService.getAll();
    }

    @GetMapping("/post/{id}")
    public Optional<Post> findById(@PathVariable int id){
        return postService.getById(id);
    }

    @GetMapping("/posts/{id}")
    public Collection<Post> findByAccountId(@PathVariable int id){
        return postService.getByAccountId(id);
    }

    @PostMapping("/addPost")
    public Post save(@RequestBody Post post){
        return postService.addPost(post);
    }

}