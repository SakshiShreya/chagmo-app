package com.app.demo.components.services;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.ad.AccountRepository;
import com.app.demo.entities.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService{

    @Autowired
    private AccountRepository accountRepo;

    public Collection<Account> getAll(){
        return accountRepo.findAll();
    }

    public Optional<Account> getByUsername(String username) {
        return accountRepo.findByUsername(username);
    }

    public Optional<Account> getByGmail(String gmail) {
        return accountRepo.findByGmail(gmail);
    }

    public Account addAccount(Account account) {
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