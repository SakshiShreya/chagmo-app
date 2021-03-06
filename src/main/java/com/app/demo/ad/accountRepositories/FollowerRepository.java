package com.app.demo.ad.accountRepositories;

import com.app.demo.entities.accountEntities.Follower;
import com.app.demo.entities.accountEntities.FollowerIdentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface FollowerRepository extends JpaRepository<Follower, Long> {

    public Collection<Follower> findFollowersByFollowerUsername(String username);

    public Collection<Follower> findFollowersByAccount_Username(String username);

    public Optional<Follower> findFollowerByFollowerUsernameAndAccountUsername(String accountUsername,
                                                                               String followerUsername);

}
