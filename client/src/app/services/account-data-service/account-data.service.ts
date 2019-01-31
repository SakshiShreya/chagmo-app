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


  getAccount(): Account {
    return this.account;
  }

  setAccount(value: Account) {
    this.account = value;
  }

  getAccountInfo(): AccountInfo {
    return this.accountInfo;
  }

  setAccountInfo(value: AccountInfo) {
    this.accountInfo = value;
  }

  getPostAccountInfo(): PostAccountInfo {
    return this.postAccountInfo;
  }

  setPostAccountInfo(value: PostAccountInfo) {
    this.postAccountInfo = value;
  }
}
