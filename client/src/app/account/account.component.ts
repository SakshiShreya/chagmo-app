import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import { AccountInfo } from "../models/account-models/AccountInfo";
import { Account } from "../models/account-models/Account";
import { FullName } from "../models/FullName";
import { Post } from "../models/post-models/Post";
import { PostAccountInfo } from "../models/post-models/PostAccountInfo";
import { PostService } from "../services/post-service/post.service";
import { SubjectService } from "../services/subject-service/subject.service";
import {PostForm} from "../models/form-models/PostForm";
import {Subject} from "../models/Subject";
import {AuthenticationService} from "../services/authentication-service/authentication.service";
import {AccountDataService} from "../services/account-data-service/account-data.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private isLoggedInAccount: boolean = false;

  public loggedInPostAccountInfo: PostAccountInfo;
  public loggedInAccount: Account;
  public loggedInAccountInfo: AccountInfo;

  private postForm: PostForm;

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
      this.setLoggedAccountInfo();
    }else {
      this.router.navigate(['/no-account']);
    }
  }

  setLoggedAccountInfo(){
    this.accountService.getByUsername(
      this.authenticationService.getLoggedInAccount().getUsername()
    ).subscribe(
      accountInfo => {
        let fullName = new FullName(
          accountInfo.fullName.firstName,
          accountInfo.fullName.lastName
        );
        this.accountData.setAccount(new Account(
            accountInfo.id,
            accountInfo.gmail,
            accountInfo.username,
            fullName,
            accountInfo.password
          ));
        this.accountData.setAccountInfo(new AccountInfo(
            accountInfo.id,
            accountInfo.gmail,
            accountInfo.username,
            fullName
          )
        );
        this.accountData.setPostAccountInfo(new PostAccountInfo(
            accountInfo.id,
            fullName
          )
        );
      },
      error => console.log(error)
    )
  }

  addPost(postForm: any){
    this.postForm = new PostForm(
      postForm.content,
      postForm.subjects
    );
    this.subjectService.getByNames(this.postForm.getSubjectNames()).subscribe(
      (subjects: any) => {
        let subs = new Array<Subject>();
        for(let sub of subjects){
          subs.push(new Subject(sub.id, sub.name));
        }
        let post = new Post(
          postForm.content,
          subs,
          this.loggedInAccount
        );
        this.postService.save(post).subscribe(
          res => console.log(res),
          err => console.log(err)
        );
      }
    )
  }

  moveToDashboard(){
    this.router.navigate(['dashboard']);
  }

  moveToAccount(){
    this.router.navigate([this.accountData.getAccountInfo().getUsername()]);
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
    this.authenticationService.clearStorage();
    this.router.navigate(['/']);
  }

}
