package com.app.demo.components.services;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.ad.AccountRepository;
import com.app.demo.ad.PostRepository;
import com.app.demo.ad.SubjectRepository;
import com.app.demo.models.postModels.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService{

    @Autowired
    private PostRepository postRepo;

    @Autowired
    private AccountRepository accountRepo;

    @Autowired
    private SubjectRepository subjectRepo;

    public Collection<Post> getAll(){
        return postRepo.findAll();
    }

    public Optional<Post> getById(int id){
        return postRepo.findById(Long.valueOf(id));
    }

    public Collection<Post> getByAccountId(int id){
        return postRepo.findByAccountId(Long.valueOf(id));
    }

    public Post addPost(Post post){
        return postRepo.save(post);
    }

}