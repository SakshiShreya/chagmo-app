import {AccountInfo} from "./AccountInfo";
import {FullName} from "./FullName";
import {SecuredAccountData} from "./SecuredAccountData";

export class Account extends AccountInfo {

  constructor(username: string,
              fullName: FullName,
              private securedAccountData: SecuredAccountData) {
    super(username, fullName);
  }

  getSecuredAccountData(): SecuredAccountData {
    return this.securedAccountData;
  }

  setSecuredAccountData(value: SecuredAccountData) {
    this.securedAccountData = value;
  }

  static anyToObject(any: any){
    let fullName = new FullName(
      any.fullName.firstName,
      any.fullName.lastName
    );
    let securedAccountData = new SecuredAccountData(
      any.securedAccountData.gmail,
      any.securedAccountData.password
    );
    return new Account(
      any.username,
      fullName,
      securedAccountData
    );
  }

}
