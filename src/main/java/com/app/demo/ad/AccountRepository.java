package com.app.demo.ad;

import com.app.demo.entities.Account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {

    public Optional<Account> findByUsername(String username);

    public Optional<Account> findByGmail(String gmail);

}