import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import { PostService } from '../services/post-service/post.service';
import {AccountInfo} from "../models/account-models/AccountInfo";
import {FullName} from "../models/account-models/FullName";
import {Post} from "../models/post-models/Post";
import {FollowerService} from "../services/follower-service/follower.service";
import {AuthenticationService} from "../services/authentication-service/authentication.service";
import {Follower} from "../models/account-models/Follower";
import {ProfileFollowers} from "../models/ProfileFollowers";

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  fullName: FullName;
  viewedAccountInfo: AccountInfo;

  profileFollowers: ProfileFollowers;

  isViewedLoggedInAccount: boolean = false;
  isFollowingViewedAccount: boolean = false;

  private posts: Array<Post>;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private postService: PostService,
              private followerService: FollowerService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.checkIfViewedLoggedInAccount();
  }

  checkIfViewedLoggedInAccount(){
    this.route.params.subscribe(
      param => {
        let viewedUsername = param['username'];
        let isFollowing = this.authenticationService
          .getLoggedInAccount()
          .getUsername() == viewedUsername;
        this.setIsViewedLoggedInAccount(isFollowing);
        this.setViewedAccountInfo(viewedUsername);
      }
    )
  }

  setIsViewedLoggedInAccount(isFollowing: boolean){
    this.isViewedLoggedInAccount = isFollowing;
  }

  setIsFollowingViewedAccount(isFollowing: boolean){
    this.isFollowingViewedAccount = isFollowing;
  }

  setViewedAccountInfo(username: string){
    this.accountService.getByUsername(username).subscribe(
      (account: any) => {
        this.fullName = FullName.anyToObject(account.fullName);
        this.viewedAccountInfo = AccountInfo.anyToObject(account);
      }
    );
    this.setPosts(username);
    this.setFollowerRelatedData(username);
  }

  setFollowerRelatedData(username: string){
    this.profileFollowers = new ProfileFollowers();
    this.getFollowers(username);
    this.getFollowings(username);
  }

  getFollowers(username: string){
    this.followerService.getByAccountUsername(username).subscribe(
      (followersAny: any) => {
        this.profileFollowers.setFollowers(new Array<Follower>());
        for(let followerAny of followersAny){
          let follower = Follower.anyToObject(followerAny);
          this.profileFollowers.getFollowers().push(follower);
          if(follower.getFollowerUsername() == this.authenticationService.getLoggedInAccount().getUsername()){
            this.setIsFollowingViewedAccount(true);
          }
        }
      },
      err => console.log(err)
    )
  }

  getFollowings(username: string){
    this.followerService.getByFollowerUsername(username).subscribe(
      (followingsAny: any) => {
        this.profileFollowers.setFollowing(new Array<Follower>());
        for(let followerAny of followingsAny){
          let follower = Follower.anyToObject(followerAny);
          this.profileFollowers.getFollowing().push(follower);
        }
      },
      err => console.log(err)
    );
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
