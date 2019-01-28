import {PostAccountInfo} from "../post-models/PostAccountInfo";
import {FullName} from "../FullName";

export class AccountInfo extends PostAccountInfo {

  constructor(id: number,
              private gmail: string,
              private username: string,
              fullName: FullName){
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
}
