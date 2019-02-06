import { Component, OnInit } from '@angular/core';
import { Account } from "../models/account-models/Account";
import { Router } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import { PostService } from "../services/post-service/post.service";
import { SubjectService } from "../services/subject-service/subject.service";
import { AuthenticationService } from "../services/authentication-service/authentication.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private isLoggedInAccount: boolean = false;
  private loggedInAccount: Account;

  public postWindowOpened = false;

  constructor(private router: Router,
              private accountService: AccountService,
              private postService: PostService,
              private subjectService: SubjectService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if(this.authenticationService.isLoggedIn()){
      console.log("You are logged in");
      this.isLoggedInAccount = true;
      this.loggedInAccount = this.authenticationService.getLoggedInAccount();
    }else {
      this.router.navigate(['/no-account']);
    }
  }

  moveToDashboardComponent(){
    this.router.navigate(['']);
  }

  moveToAccountComponent(){
    this.router.navigate([this.loggedInAccount.getUsername()]);
  }

  moveToTrendsComponent(){
    console.log("Got there");
    this.router.navigate(['trends']);
  }

  openOrClosePostWindow(){
    if(this.postWindowOpened){
      this.postWindowOpened = false;
    }else {
      this.postWindowOpened = true;
    }
  }

  logOut(){
    this.authenticationService.tryLogout();
  }

}
