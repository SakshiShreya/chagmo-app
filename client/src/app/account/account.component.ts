import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account-service/account.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private loggedInAccount: boolean  = false;
  private loggedInAccountInfo: any;

  constructor(private router: Router,
              private accountService: AccountService,
              private localStorage: LocalStorageService) { }

  ngOnInit() {
    if(this.loggedIn()){
      console.log("You are logged in");
      this.setLoggedAccountInfo(this.localStorage.getLoggedAccountGmail());
    }else {
      this.router.navigate(['/no-account']);
    }
  }

  /**
   * I have this two methods here becaouse we may 
   * add some conditions and it is not directly from html file
   */
  moveToDashboard(){
    this.router.navigate(['dashboard']);
  }

  moveToAccount(){
    this.router.navigate([this.loggedInAccountInfo.gmail]);
  }

  /**
   * 
   */

  logOut(){
    this.localStorage.removeAll();
    this.router.navigate(['/']);
  }

  setLoggedAccountInfo(accountGmail){
    this.accountService.getByGmail(accountGmail).subscribe(
      accountInfo => {
        this.loggedInAccountInfo = accountInfo;
      },
      error => console.log(error)
    )
  }

  loggedIn(){
    this.loggedInAccount = this.localStorage.loggedIn();
    return this.loggedInAccount;
  }

}
