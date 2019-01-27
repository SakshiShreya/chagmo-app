package com.app.demo.components.controllers;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.components.services.AccountService;
import com.app.demo.models.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public Account save(@RequestBody Account account){
        return accountService.addAccount(account);
    }

    @DeleteMapping("/deleteAccount/{id}")
    public boolean delete(@PathVariable int id){
        return accountService.remove(id);
    }

}