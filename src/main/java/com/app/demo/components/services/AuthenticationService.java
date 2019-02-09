package com.app.demo.components.services;

import com.app.demo.components.services.accountServices.AccountService;
import com.app.demo.components.services.accountServices.SecuredDataService;
import com.app.demo.entities.accountEntities.Account;
import com.app.demo.entities.accountEntities.SecuredAccountData;
import com.app.demo.models.LoginForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private AccountService accountService;

    @Autowired
    private SecuredDataService securedDataService;

    public Account tryLogin(LoginForm loginForm){
        SecuredAccountData securedAccountData = securedDataService.getByGmail(loginForm.getGmail()).orElse(null);
        if(securedAccountData == null)
            return null;

        Account account = accountService.getBySecuredData(securedAccountData).orElse(null);
        if(account == null)
            return null;

        if(loginForm.getPassword().equals(account
                .getSecuredAccountData()
                .getPassword())){
            return account;
        }
        return null;
    }

}
