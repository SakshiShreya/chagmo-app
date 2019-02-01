package com.app.demo.components.controllers;

import com.app.demo.components.services.AuthenticationService;
import com.app.demo.entities.Account;
import com.app.demo.models.LoginForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public Account tryLogin(@RequestBody LoginForm loginForm){
        return authenticationService.tryLogin(loginForm);
    }

}
