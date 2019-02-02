import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import { PostService } from "../services/post-service/post.service";
import { SubjectService } from "../services/subject-service/subject.service";
import { AuthenticationService } from "../services/authentication-service/authentication.service";
import { AccountDataService } from "../services/account-data-service/account-data.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private isLoggedInAccount: boolean = false;

  public postWindowOpened = false;

  constructor(private router: Router,
              private accountService: AccountService,
              private postService: PostService,
              private subjectService: SubjectService,
              private authenticationService: AuthenticationService,
              private accountData: AccountDataService) { }

  ngOnInit() {
    if(this.authenticationService.loggedIn()){
      console.log("You are logged in");
      this.isLoggedInAccount = true;
      this.setLoggedAccountInfo();
    }else {
      this.router.navigate(['/no-account']);
    }
  }

  setLoggedAccountInfo(){
    this.accountData.setAccountInformations(
      this.authenticationService.getLoggedInAccount()
    );
  }

  moveToDashboardComponent(){
    this.router.navigate(['dashboard']);
  }

  moveToAccountComponent(){
    this.router.navigate([this.accountData.getAccountInfo().getUsername()]);
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
    this.router.navigate(['/']);
  }

  // new comment is added

}
