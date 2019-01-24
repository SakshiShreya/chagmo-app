package com.app.demo.components.services;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.ad.AccountRepository;
import com.app.demo.ad.PostRepository;
import com.app.demo.models.Account;
import com.app.demo.models.Post;
import com.app.demo.models.PostForm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService{

    @Autowired
    private PostRepository postRepo;

    @Autowired
    private AccountRepository accountRepo;

    public Collection<Post> getAll(){
        return postRepo.findAll();
    }

    public Optional<Post> getById(int id){
        return postRepo.findById(Long.valueOf(id));
    }

    public Collection<Post> getByAccountId(int id){
        return postRepo.findByAccountId(Long.valueOf(id));
    }

    public Post addPost(PostForm postForm){
        Account acc = accountRepo.getOne(Long.valueOf(postForm.getAccountId()));
        Post post = new Post();
        post.setMessage(postForm.getMessage());
        post.setAccount(acc);
        return postRepo.save(post);
    }

}