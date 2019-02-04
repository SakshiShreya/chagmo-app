package com.app.demo.ad.accountRepositories;

import com.app.demo.entities.accountEntities.Account;

import com.app.demo.entities.accountEntities.SecuredAccountData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {

    public Optional<Account> findByUsername(String username);

    public Optional<Account> findAccountBySecuredAccountData(SecuredAccountData securedAccountData);

}