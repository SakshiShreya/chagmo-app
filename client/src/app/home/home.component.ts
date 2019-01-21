import { Component, OnInit } from "@angular/core";
import { AccountService } from "../account-service/account.service";
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountService,
              private router: Router,
              private localStorage: LocalStorageService) {}

  logIn(accountInfo) {
    this.accountService.getByGmail(accountInfo.gmail).subscribe(
      res => {
        if(accountInfo.gmail == res.gmail){
          if(accountInfo.password == accountInfo.password){
            if(this.localStorage.setloggedAccountGmail(accountInfo.gmail)){
              this.router.navigate(["dashboard"]);
            }else {
              console.log("Sorry something went wrong");
            }
          }
        }else {
          console.log("Failed to log in");
        }
      }
    )
  }

  ngOnInit(){
    if(this.localStorage.loggedIn()){
      this.router.navigate(['dashboard']);
    }
  }

}