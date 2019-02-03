import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import { PostService } from '../services/post-service/post.service';
import {AccountInfo} from "../models/account-models/AccountInfo";
import {FullName} from "../models/account-models/FullName";
import {Post} from "../models/post-models/Post";

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  private fullName: FullName;
  private viewedAccountInfo: AccountInfo;
  private posts: Array<Post>;
  private paramUsername: string;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private postService: PostService) { }

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
        this.fullName = FullName.anyToObject(account.fullName);
        this.viewedAccountInfo = AccountInfo.anyToObject(account);
      }
    );
    this.getPosts(username);
  }

  getPosts(username: string){
    this.postService.getByAccountUsername(username).subscribe(
      (posts: Array<Post>) => {
        this.posts = new Array<Post>();
        for(let post of posts){
          this.posts.push(Post.anyToObject(post));
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
