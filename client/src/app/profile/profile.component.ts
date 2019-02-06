import {Component, Input, OnInit} from '@angular/core';
import {ProfileFollowers} from "../models/ProfileFollowers";
import {FollowerService} from "../services/follower-service/follower.service";
import {AuthenticationService} from "../services/authentication-service/authentication.service";
import {AccountInfo} from "../models/account-models/AccountInfo";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @Input() viewedAccountInfo: AccountInfo;

  @Input() isViewedLoggedInAccount: boolean;
  @Input() isFollowed: boolean;

  @Input() profileFollowers: ProfileFollowers;

  followedText: string = "Follow";

  private textFollowers = "Followers";
  private textFollowing = "Following";

  constructor(private followerService: FollowerService,
              private authenticationService: AuthenticationService) { }


  onFollowButtonClick(){
    console.log("click");
    let followerUsername = this.authenticationService.getLoggedInAccount().getUsername();
    let accountusername = this.viewedAccountInfo.getUsername();
    this.followerService.autoFollowOrUnfollow(followerUsername, accountusername).subscribe();
  }

  follow(){
  }

  unFollow(){
  }

}
