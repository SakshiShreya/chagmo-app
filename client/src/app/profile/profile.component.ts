import {Component, Input, OnInit} from '@angular/core';
import {ProfileFollowers} from "../models/ProfileFollowers";
import {FollowerService} from "../services/follower-service/follower.service";
import {AuthenticationService} from "../services/authentication-service/authentication.service";
import {AccountInfo} from "../models/account-models/AccountInfo";
import {Follower} from "../models/account-models/Follower";

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
              private authenticationService: AuthenticationService) {
  }

  onFollowButtonClick(){
    let followerUsername = this.authenticationService.getLoggedInAccount().getUsername();
    let accountusername = this.viewedAccountInfo.getUsername();
    this.followerService.autoFollowOrUnfollow(followerUsername, accountusername).subscribe(
      (followResponse: any) => {
        this.followOrUnfollow(followResponse);
      }
    );
  }

  followOrUnfollow(followResponse: any){
    let isFollowed = followResponse.followed;
    let follower = Follower.anyToObject(followResponse.follower);
    this.setIsFollowed(isFollowed);
    if(isFollowed){
      this.addFollower(follower);
    } else if(!isFollowed) {
      this.removeFollower(follower);
    }
  }

  setIsFollowed(isFollowed: boolean){
    this.isFollowed = isFollowed;
  }

  addFollower(follower: Follower){
    console.log(follower);
    this.profileFollowers.getFollowers().push(follower);
    console.log(this.profileFollowers.getFollowers());
  }

  removeFollower(follower: Follower){
    let index = this.profileFollowers.getFollowers().findIndex(
      foll => foll.getId() === follower.getId()
    );
    this.profileFollowers.getFollowers().splice(index, 1);
    console.log(this.profileFollowers.getFollowers());
  }

}
