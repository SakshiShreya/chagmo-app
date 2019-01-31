import { Injectable } from '@angular/core';
import {Account} from "../../models/account-models/Account";
import {AccountInfo} from "../../models/account-models/AccountInfo";
import {PostAccountInfo} from "../../models/post-models/PostAccountInfo";

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  private account: Account;
  private accountInfo: AccountInfo;
  private postAccountInfo: PostAccountInfo;

  constructor() { }

  setAccountInformations(accountInfo: Account){
    this.account = accountInfo;
    this.accountInfo = new AccountInfo(
      this.account.getId(),
      this.account.getGmail(),
      this.account.getUsername(),
      this.account.getFullName(),
      this.account.getFollowers()
    );
    this.postAccountInfo = new PostAccountInfo(
      this.account.getId(),
      this.account.getFullName()
    );
  }

  getAccount(): Account {
    return this.account;
  }

  getAccountInfo(): AccountInfo {
    return this.accountInfo;
  }

  getPostAccountInfo(): PostAccountInfo {
    return this.postAccountInfo;
  }
}
