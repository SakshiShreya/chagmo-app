package com.app.demo.components.controllers;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.ad.AccountRepository;
import com.app.demo.ad.PostRepository;
import com.app.demo.models.Account;
import com.app.demo.models.AccountForm;
import com.app.demo.models.FullName;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {

    @Autowired
    private AccountRepository accountRepo;

    @Autowired
    private PostRepository postRepo;

    @GetMapping("/accounts")
    public Collection<Account> getAll() {
        return accountRepo.findAll();
    }

    @GetMapping("/account/{id}")
    public Optional<Account> getOne(@PathVariable int id) {
        Optional<Account> acc = accountRepo.findById(Long.valueOf(id));
        return acc;
    }

    @GetMapping("/accountGmail/{gmail}")
    public Optional<Account> getByGmail(@PathVariable String gmail) {
        return accountRepo.findByGmail(gmail);
    }

    @PutMapping("/addAccount")
    public Account addAccount(@RequestBody AccountForm accountForm) {
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

}