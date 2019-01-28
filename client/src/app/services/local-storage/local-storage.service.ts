import { Injectable } from '@angular/core';
import { AccountService } from '../account-service/account.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorage = window.localStorage;
  private STORAGEACCOUNTNAME = "ACCOUNUSERTNAME";
  private loggedAccountUsername: string;
  private maxLenght = 1;

  constructor(private accountService: AccountService) { }

  getLoggedAccountUsername(){
    this.loggedAccountUsername = this.localStorage.getItem(this.STORAGEACCOUNTNAME);
    return this.loggedAccountUsername;
  }

  setloggedAccountUsername(accountUsername: string): boolean {
    if (this.localStorage.length === 0) {
      this.localStorage.setItem(this.STORAGEACCOUNTNAME, accountUsername);
      return this.loggedIn();
    }
    console.log("more than one account in local storage");
    return false;
  }

  loggedIn(): boolean {
    if(this.localStorage.getItem(this.STORAGEACCOUNTNAME)){
      return true;
    }
    return false;
  }

  getLenght(){
    return this.localStorage.length;
  }

  removeAll(){
    this.localStorage.clear();
  }

}
