package com.app.demo.ad;

import com.app.demo.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface PostRepository extends JpaRepository<Post, Long> {

    public Collection<Post> findByAccountUsername(String username);

}