import {PostAccountInfo} from "../post-models/PostAccountInfo";
import {FullName} from "../FullName";
import {Account} from "./Account";

export class AccountInfo extends PostAccountInfo {

  constructor(id: number,
              private gmail: string,
              private username: string,
              fullName: FullName,
              private followers: Array<Account>){
    super(id, fullName);
  }

  getGmail(): string {
    return this.gmail;
  }

  setGmail(value: string) {
    this.gmail = value;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(value: string) {
    this.username = value;
  }


  getFollowers(): Array<Account> {
    return this.followers;
  }

  setFollowers(value: Array<Account>) {
    this.followers = value;
  }
}
