import {PostAccountInfo} from "../post-models/PostAccountInfo";
import {FullName} from "../FullName";

export class AccountInfo extends PostAccountInfo {

  constructor(id: number,
              private gmail: string,
              private username: string,
              fullName: FullName){
    super(id, fullName);
  }

}
