package com.app.demo.components.services;

import com.app.demo.entities.Account;
import com.app.demo.models.LoginForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private AccountService accountService;

    public Account tryLogin(LoginForm loginForm){
        Account account = accountService.getByGmail(loginForm.getGmail()).orElse(null);
        if(account == null){
            return null;
        }
        if(loginForm.getPassword().endsWith(account.getPassword())){
            return account;
        }
        return null;
    }

}
