package com.app.demo.ad;

import com.app.demo.models.Post;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long>{
    
}