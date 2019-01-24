package com.app.demo.components.controllers;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.ad.AccountRepository;
import com.app.demo.ad.PostRepository;
import com.app.demo.components.services.AccountService;
import com.app.demo.models.Account;
import com.app.demo.models.AccountForm;
import com.app.demo.models.FullName;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/accounts")
    public Collection<Account> findAll(){
        return accountService.getAll();
    }

    @GetMapping("/account/{id}")
    public Optional<Account> findById(@PathVariable int id){
        return accountService.getById(id);
    }

    @GetMapping("/accountGmail/{gmail}")
    public Optional<Account> findByGmail(@PathVariable String gmail){
        return accountService.getByGmail(gmail);
    }

    @PostMapping("/addAccount")
    public Account save(@RequestBody AccountForm accountForm){
        return accountService.addAccount(accountForm);
    }

}