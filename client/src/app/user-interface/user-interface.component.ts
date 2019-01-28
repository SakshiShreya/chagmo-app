import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account-service/account.service';
import { PostService } from '../post-service/post.service';
import { Post } from '../models/post-models/Post';
import { PostAccountInfo } from '../models/post-models/PostAccountInfo';
import { FullName } from '../models/FullName';
import {AccountInfo} from "../models/account-models/AccountInfo";

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  private viewedAccountInfo: AccountInfo;
  private posts: Array<Post>;
  private viewedAccountFullName: FullName;
  private viewedAccountPostAccountInfo: PostAccountInfo;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private postService: PostService) { }

  ngOnInit() {
    this.setVewiedAccountInformations();
  }

  setVewiedAccountInformations(){
    this.route.params.subscribe(
      param => {
        this.accountService.getByUsername(param['username']).subscribe(
          accountInfo => {
            this.setViewedAccountFullName(accountInfo.fullName);
            this.setViewedAccountInfo(accountInfo);
            this.setViewedPostAccountInfo(accountInfo);
          }
        )
      },
      err => {
        console.log(err);
      }
    )
  }

  setViewedAccountFullName(fullName: any){
    this.viewedAccountFullName = new FullName(
      fullName.firstName,
      fullName.lastName
    );
  }

  setViewedAccountInfo(accInfo: any){
    this.viewedAccountInfo = new AccountInfo(
      accInfo.id,
      accInfo.gmail,
      accInfo.username,
      this.viewedAccountFullName
    );
  }

  setViewedPostAccountInfo(accInfo: any){
    this.viewedAccountPostAccountInfo = new PostAccountInfo(
      accInfo.id,
      this.viewedAccountFullName
    );
  }

}
