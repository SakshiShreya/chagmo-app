import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account-service/account.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { AccountInfo } from "../models/account-models/AccountInfo";
import {FullName} from "../models/FullName";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private loggedInAccount: boolean = false;

  private loggedInAccountInfo: AccountInfo;

  constructor(private router: Router,
              private accountService: AccountService,
              private localStorage: LocalStorageService) { }

  ngOnInit() {
    if(this.localStorage.loggedIn()){
      console.log("You are logged in");
      this.setLoggedAccountInfo();
    }else {
      this.router.navigate(['/no-account']);
    }
  }

  setLoggedAccountInfo(){
    this.accountService.getByUsername(this.localStorage.getLoggedAccountUsername()).subscribe(
      accountInfo => {
        let fullName = new FullName(
          accountInfo.fullName.firstName,
          accountInfo.fullName.lastName
        );
        this.loggedInAccountInfo = new AccountInfo(
          accountInfo.id,
          accountInfo.gmail,
          accountInfo.username,
          fullName
        );
        console.log(this.loggedInAccountInfo);
      },
      error => console.log(error)
    )
  }

  /**
   * I have this two methods here becaouse we may 
   * add some conditions and it is not directly from html file
   */
  moveToDashboard(){
    this.router.navigate(['dashboard']);
  }

  moveToAccount(){
    this.router.navigate([this.loggedInAccountInfo.getUsername()]);
  }

  /**
   * 
   */

  logOut(){
    this.localStorage.removeAll();
    this.router.navigate(['/']);
  }

}
