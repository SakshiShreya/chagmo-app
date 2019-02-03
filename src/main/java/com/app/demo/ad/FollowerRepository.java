package com.app.demo.ad;

import com.app.demo.entities.Follower;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface FollowerRepository extends JpaRepository<Follower, String> {

    public Collection<Follower> findFollowersByFollowerUsername(String username);

    public Collection<Follower> findFollowersByAccount_Username(String username);

}
