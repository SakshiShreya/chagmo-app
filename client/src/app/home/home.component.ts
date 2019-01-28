import { Component, OnInit } from "@angular/core";
import { AccountService } from "../account-service/account.service";
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';
import {LoginForm} from "../models/account-models/LoginForm";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  private loginForm: LoginForm;

  constructor(private accountService: AccountService,
              private router: Router,
              private localStorage: LocalStorageService) {}

  ngOnInit(){
    if(this.localStorage.loggedIn()){
      this.router.navigate(['dashboard']);
    }
  }

  logIn(loginInfo) {
    this.localStorage.removeAll();
    this.loginForm = new LoginForm(loginInfo.gmail, loginInfo.password);
    this.accountService.getByGmail(this.loginForm.gmail).subscribe(
      res => {
        console.log(res.username);
        if(this.loginForm.gmail == res.gmail){
          if(this.loginForm.password == res.password){
            if(this.localStorage.setloggedAccountUsername(res.username)){
              this.router.navigate(["dashboard"]);
            }else {
              console.log("Sorry, something went wrong");
            }
          }
        }else {
          console.log("Failed to log in");
        }
      },
      err => console.log(err)
    )
  }

}
