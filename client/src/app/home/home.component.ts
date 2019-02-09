import { Component, OnInit } from "@angular/core";
import { AccountService } from "../services/account-service/account.service";
import { Router } from '@angular/router';
import {LoginForm} from "../models/form-models/LoginForm";
import {AuthenticationService} from "../services/authentication-service/authentication.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  private loginForm: LoginForm;
  noSuchEmail: boolean = false;
  errorMsg: string = "";

  constructor(private accountService: AccountService,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(){
  }

  logIn(loginInfo) {
    this.loginForm = new LoginForm(loginInfo.gmail, loginInfo.password);
    this.authenticationService.tryLogin(this.loginForm);
  }

}
