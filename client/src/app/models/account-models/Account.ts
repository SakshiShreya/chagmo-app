import {AccountInfo} from "./AccountInfo";
import {FullName} from "./FullName";

export class Account extends AccountInfo {


  constructor(private id: number,
              gmail: string,
              username: string,
              fullName: FullName,
              private password: string,
              followers: Array<Account>) {
    super(gmail, username, fullName, followers);
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(value: string) {
    this.password = value;
  }
}
