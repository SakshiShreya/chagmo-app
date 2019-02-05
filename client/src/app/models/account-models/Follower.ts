import {Account} from "./Account";

export class Follower {

  constructor(private id: number,
              private followerUsername: string,
              private account: Account) { }


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
    return new Follower(
      any.id,
      any.followerUsername,
      account
    );
  }

}
