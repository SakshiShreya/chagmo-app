import { Injectable } from '@angular/core';
import {Account} from "../../models/account-models/Account";
import {AccountInfo} from "../../models/account-models/AccountInfo";
import {FullName} from "../../models/account-models/FullName";

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  private account: Account;
  private accountInfo: AccountInfo;
  private fullName: FullName;

  constructor() { }

  setAccountInformations(accountInfo: Account){
    this.account = accountInfo;
    this.fullName = this.account.getFullName();
    this.accountInfo = new AccountInfo(
      this.account.getGmail(),
      this.account.getUsername(),
      this.fullName,
      this.account.getFollowers()
    );
  }

  getAccount(): Account {
    return this.account;
  }

  setAccount(value: Account){
    this.account = value;
  }

  getAccountInfo(): AccountInfo {
    return this.accountInfo;
  }

  setAccountInfo(value: AccountInfo) {
    this.accountInfo = value;
  }

  getFullName(): FullName {
    return this.fullName;
  }

  setFullName(value: FullName) {
    this.fullName = value;
  }
}
