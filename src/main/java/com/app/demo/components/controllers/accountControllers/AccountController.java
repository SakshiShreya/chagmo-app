package com.app.demo.components.controllers.accountControllers;

import java.util.Collection;
import java.util.Optional;

import com.app.demo.components.services.accountServices.AccountService;
import com.app.demo.entities.accountEntities.Account;

import com.app.demo.entities.accountEntities.SecuredAccountData;
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

//    @GetMapping("/gmails/{gmail}")
//    public Optional<Account> findByGmail(@PathVariable String gmail){
//        return accountService.getByGmail(gmail);
//    }

    @GetMapping("/usernames/{username}")
    public Optional<Account> findByUsername(@PathVariable String username){
        return accountService.getByUsername(username);
    }

    @GetMapping("/securedData")
    public Optional<Account> findBySecuredData(@RequestBody SecuredAccountData securedAccountData){
        return accountService.getBySecuredData(securedAccountData);
    }

    @PostMapping("/add")
    public Account save(@RequestBody Account account){
        return accountService.add(account);
    }

    @DeleteMapping("/delete/{username}")
    public boolean delete(@PathVariable String username){
        return accountService.remove(username);
    }

}