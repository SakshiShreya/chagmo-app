package com.app.demo.ad;

import com.app.demo.entities.Account;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {

    public Optional<Account> findByUsername(String username);

    public Optional<Account> findByGmail(String gmail);

}