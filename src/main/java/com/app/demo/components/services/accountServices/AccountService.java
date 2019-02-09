package com.app.demo.components.services.accountServices;

import java.util.*;

import com.app.demo.ad.accountRepositories.AccountRepository;
import com.app.demo.entities.accountEntities.Account;

import com.app.demo.entities.accountEntities.SecuredAccountData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService{

    @Autowired
    private AccountRepository accountRepo;

    @Autowired
    private SecuredDataService securedDataService;

    public Collection<Account> getAll(){
        return accountRepo.findAll();
    }

    public Optional<Account> getByUsername(String username) {
        return accountRepo.findByUsername(username);
    }

    public Optional<Account> getBySecuredData(SecuredAccountData securedAccountData){
        return accountRepo.findAccountBySecuredAccountData(securedAccountData);
    }

    public Account add(Account account) {
        securedDataService.add(account.getSecuredAccountData());
        return accountRepo.save(account);
    }

    public Account update(Account account){
        return accountRepo.save(account);
    }

    public boolean remove(String username){
        Account account = accountRepo.findByUsername(username).orElse(null);
        if(account != null){
            accountRepo.delete(account);
            return true;
        }
        return false;
    }

}