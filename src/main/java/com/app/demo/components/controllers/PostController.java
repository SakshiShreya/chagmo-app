package com.app.demo.components.controllers;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.ad.AccountRepository;
import com.app.demo.ad.PostRepository;
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
    private AccountRepository accountRepo;

    @Autowired
    private PostRepository postRepo;

    @GetMapping("/posts")
    public Collection<Post> getAll(){
        return postRepo.findAll();
    }

    @GetMapping("/post/{id}")
    public Optional<Post> get(@PathVariable int id){
        return postRepo.findById(Long.valueOf(id));
    }

    @PostMapping("/addPost")
    public Post addPost(@RequestBody PostForm postForm){
        Account acc = accountRepo.getOne(Long.valueOf(postForm.getAccountId()));
        Post post = new Post();
        post.setMessage(postForm.getMessage());
        post.setAccount(acc);
        return postRepo.save(post);
    }

}