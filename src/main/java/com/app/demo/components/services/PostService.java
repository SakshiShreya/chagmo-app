package com.app.demo.components.services;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.ad.AccountRepository;
import com.app.demo.ad.PostRepository;
import com.app.demo.ad.SubjectRepository;
import com.app.demo.models.Account;
import com.app.demo.models.Post;
import com.app.demo.models.PostForm;

import com.app.demo.models.Subject;
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

    public Post addPost(PostForm postForm){
        Account acc = accountRepo.findById(Long.valueOf(postForm.getAccountId())).orElse(null);
        Subject sub = subjectRepo.findById(Long.valueOf(postForm.getSubjectId())).orElse(null);
        if(acc != null && sub != null) {
            Post post = new Post();
            post.setMessage(postForm.getMessage());
            post.setAccount(acc);
            post.setSubject(sub);
            return postRepo.save(post);
        }
        return null;
    }

}