package com.app.demo.components.controllers;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.components.services.AccountService;
import com.app.demo.entities.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("")
    public Collection<Account> findAll(){
        return accountService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Account> findById(@PathVariable int id){
        return accountService.getById(id);
    }

    @GetMapping("/gmails/{gmail}")
    public Optional<Account> findByGmail(@PathVariable String gmail){
        return accountService.getByGmail(gmail);
    }

    @GetMapping("/usernames/{username}")
    public Optional<Account> findByUsername(@PathVariable String username){
        return accountService.getByUsername(username);
    }

    @PostMapping("/add")
    public Account save(@RequestBody Account account){
        return accountService.addAccount(account);
    }

    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable int id){
        return accountService.remove(id);
    }

}