import {FullName} from "./FullName";
import {Account} from "./Account";

export class AccountInfo {

  constructor(private username: string,
              private fullName: FullName){
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

  static anyToObject(any: any){
    let fullName = new FullName(
      any.fullName.firstName,
      any.fullName.lastName
    );
    return new AccountInfo(
      any.username,
      fullName
    )
  }

}
