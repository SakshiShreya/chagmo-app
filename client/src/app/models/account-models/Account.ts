import {AccountInfo} from "./AccountInfo";
import {FullName} from "../FullName";

export class Account extends AccountInfo {


  constructor(id: number,
              gmail: string,
              username: string,
              fullName: FullName,
              private password: string) {
    super(id, gmail, username, fullName);
  }

}
