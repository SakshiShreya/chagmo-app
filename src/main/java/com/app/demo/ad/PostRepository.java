package com.app.demo.ad;

import com.app.demo.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    public Collection<Post> findByAccountUsername(String username);

}