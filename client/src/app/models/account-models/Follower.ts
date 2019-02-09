import {Account} from "./Account";

export class Follower {

  private id: number;
  private followerUsername: string;
  private account: Account;

  constructor() { }


  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getFollowerUsername(): string {
    return this.followerUsername;
  }

  setFollowerUsername(value: string) {
    this.followerUsername = value;
  }

  getAccount(): Account {
    return this.account;
  }

  setAccount(value: Account) {
    this.account = value;
  }

  static anyToObject(any: any){
    let account = Account.anyToObject(any.account);
    let follower = new Follower();
    follower.setFollowerUsername(any.followerUsername);
    follower.setAccount(any.account);
    return follower;
  }

}
