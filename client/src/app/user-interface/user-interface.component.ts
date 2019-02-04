import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import { PostService } from '../services/post-service/post.service';
import {AccountInfo} from "../models/account-models/AccountInfo";
import {FullName} from "../models/account-models/FullName";
import {Post} from "../models/post-models/Post";
import {Follower} from "../models/account-models/Follower";
import {FollowerService} from "../services/follower-service/follower.service";

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  private paramUsername: string;
  fullName: FullName;
  viewedAccountInfo: AccountInfo;

  private textFollowers = "Followers";
  private textFollowing = "Following";
  private followers: Array<Follower>;
  private following: Array<Follower>;
  private posts: Array<Post>;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private postService: PostService,
              private followerService: FollowerService) { }

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
    this.setFollowerRelatedData(username);
    this.setPosts(username);
  }

  setFollowerRelatedData(username: string){
    this.followerService.getByAccountUsername(username).subscribe(
      (followers: any) => {
        this.following = new Array<Follower>();
        for(let follower of followers){
          this.following.push(Follower.anyToObject(follower));
        }
      },
      err => console.log(err)
    );
    this.followerService.getByFollowerUsername(username).subscribe(
      (followers: any) => {
        this.followers = new Array<Follower>();
        for(let follower of followers){
          this.followers.push(Follower.anyToObject(follower));
        }
      },
      err => console.log(err)
    )
  }

  setPosts(username: string){
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
