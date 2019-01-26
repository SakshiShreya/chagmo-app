import {PostAccountInfo} from "./PostAccountInfo";
import {FullName} from "../FullName";

export class AccountInfo extends PostAccountInfo {

  constructor(id: number,
              fullName: FullName,
              private gmail: string){
    super(id, fullName);
  }

  get Gmail(){
    return this.gmail;
  }

}
