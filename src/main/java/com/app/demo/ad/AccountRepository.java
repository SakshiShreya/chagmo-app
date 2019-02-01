package com.app.demo.ad;

import java.util.Optional;

import com.app.demo.entities.Account;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {

    public Optional<Account> findByGmail(String gmail);

    public Optional<Account> findByUsername(String username);

}