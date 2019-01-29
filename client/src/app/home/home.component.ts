import { Component, OnInit } from "@angular/core";
import { AccountService } from "../services/account-service/account.service";
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import {LoginForm} from "../models/form-models/LoginForm";

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
        // console.log(res.username);
        if(res != null && this.loginForm.gmail == res.gmail){
          if(this.loginForm.password == res.password){
            if(this.localStorage.setloggedAccountUsername(res.username)){
              this.router.navigate(["dashboard"]);
            }else {
              console.log("Sorry, something went wrong");
            }
          }
        }else {
          this.noSuchEmail = true;
          this.errorMsg = "No such email exists.";
          console.log("Failed to log in");
        }
      },
      err => console.log(err)
    )
  }

}
