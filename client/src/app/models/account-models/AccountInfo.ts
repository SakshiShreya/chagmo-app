import {FullName} from "./FullName";
import {Account} from "./Account";

export class AccountInfo {

  constructor(private gmail: string,
              private username: string,
              private fullName: FullName,
              private followers: Array<Account>){
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

  getFullName(): FullName {
    return this.fullName;
  }

  setFullName(value: FullName) {
    this.fullName = value;
  }

  getFollowers(): Array<Account> {
    return this.followers;
  }

  setFollowers(value: Array<Account>) {
    this.followers = value;
  }

  static anyToObject(any: any){
    let fullName = new FullName(
      any.fullName.firstName,
      any.fullName.lastName
    );
    return new AccountInfo(
      any.gmail,
      any.username,
      fullName,
      any.followers
    )
  }

}
