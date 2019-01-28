import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { AccountInfo } from "../models/account-models/AccountInfo";
import { Account } from "../models/account-models/Account";
import {FullName} from "../models/FullName";
import {Post} from "../models/post-models/Post";
import {PostAccountInfo} from "../models/post-models/PostAccountInfo";
import {Subject} from "../models/Subject";
import {PostService} from "../services/post-service/post.service";
import {SubjectService} from "../services/subject-service/subject.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private isLoggedInAccount: boolean = false;

  private loggedInPostAccountInfo: PostAccountInfo;
  private loggedInAccount: Account;
  private loggedInAccountInfo: AccountInfo;

  private postWindowOpened = false;

  constructor(private router: Router,
              private accountService: AccountService,
              private postService: PostService,
              private subjectService: SubjectService,
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
        this.loggedInAccount = new Account(
          accountInfo.id,
          accountInfo.gmail,
          accountInfo.username,
          fullName,
          accountInfo.password
        );
        this.loggedInPostAccountInfo = new PostAccountInfo(
          accountInfo.id,
          fullName
        );
        console.log(this.loggedInAccount);
      },
      error => console.log(error)
    )
  }

  addPost(postForm: any){
    /**
     * I have not found a good solution for posting.
     * This will be certainly changed, because "subjects" ar null
     *  */
    let post = new Post(
      postForm.content,
      null, // subjects
      this.loggedInAccount
    );
    this.postService.save(post).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.closePostWindow();
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

  openPostWindow(){
    this.postWindowOpened = true;
  }

  closePostWindow(){
    this.postWindowOpened = false;
  }

  /**
   * 
   */

  logOut(){
    this.localStorage.removeAll();
    this.router.navigate(['/']);
  }

}
