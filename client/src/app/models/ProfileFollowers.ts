import { Follower } from "./account-models/Follower";

export class ProfileFollowers {

  private followers: Array<Follower>;
  private following: Array<Follower>;

  constructor() { }

  getFollowers(): Array<Follower> {
    return this.followers;
  }

  setFollowers(value: Array<Follower>) {
    this.followers = value;
  }

  getFollowing(): Array<Follower> {
    return this.following;
  }

  setFollowing(value: Array<Follower>) {
    this.following = value;
  }
}
