import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import { PostService } from '../services/post-service/post.service';
import { Post } from '../models/post-models/Post';
import { AccountDataService } from "../services/account-data-service/account-data.service";
import {AccountInfo} from "../models/account-models/AccountInfo";
import {FullName} from "../models/account-models/FullName";

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  private posts: Array<Post>;
  private fullName: FullName;
  private viewedAccountInfo: AccountInfo;
  private paramUsername: string;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService) { }

  ngOnInit() {
    this.checkIfViewedLoggedInAccount();
  }

  checkIfViewedLoggedInAccount(){
    this.route.params.subscribe(
      param => {
        this.paramUsername = param['username'];
        this.setViewedAccountInfo(this.paramUsername);
      }
    )
  }

  setViewedAccountInfo(username: string){
    this.accountService.getByUsername(username).subscribe(
      (account: any) => {
        this.fullName = new FullName(
          account.fullName.firstName,
          account.fullName.lastName
        );
        this.viewedAccountInfo = new AccountInfo(
          account.gmail,
          account.username,
          this.fullName,
          account.followers
        );
      }
    );
  }

}
