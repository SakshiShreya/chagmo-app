package com.app.demo.components.services;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.ad.AccountRepository;
import com.app.demo.models.Account;
import com.app.demo.models.AccountForm;
import com.app.demo.models.FullName;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService{

    @Autowired
    private AccountRepository accountRepo;

    public Collection<Account> getAll(){
        return accountRepo.findAll();
    }

    public Optional<Account> getById(int id) {
        return accountRepo.findById(Long.valueOf(id));
    }

    public Optional<Account> getByGmail(String gmail) {
        return accountRepo.findByGmail(gmail);
    }

    public Account addAccount(AccountForm accountForm) {
        FullName fullName = new FullName();
        fullName.setFirstName(accountForm.getFirst_name());
        fullName.setLastName(accountForm.getLast_name());
        Account account = new Account();
        account.setGmail(accountForm.getGmail());
        account.setFullName(fullName);
        account.setPassword(accountForm.getPassword());
        account = accountRepo.save(account);
        return account;
    }

    public boolean remove(int id){
        Account account = accountRepo.findById(Long.valueOf(id)).orElse(null);
        if(account != null){
            accountRepo.delete(account);
            return true;
        }
        return false;
    }

}