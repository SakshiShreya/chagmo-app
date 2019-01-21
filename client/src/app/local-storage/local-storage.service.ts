import { Injectable } from '@angular/core';
import { AccountService } from '../account-service/account.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorage = window.localStorage;
  private loggedAccount: boolean = false;
  private STORAGEACCOUNTNAME = "ACCOUNTNAME";
  private loggedAccountGmail: string;
  private maxLenght = 1;

  constructor(private accountService: AccountService) { }

  getLoggedAccountGmail(){
    return this.localStorage.getItem(this.STORAGEACCOUNTNAME);
  }

  setloggedAccountGmail(accountGmail: any){
    this.localStorage.setItem(this.STORAGEACCOUNTNAME, accountGmail);
    this.loggedAccountGmail = this.getLoggedAccountGmail();
    return this.loggedIn();
  }

  loggedIn(): boolean {
    if(this.localStorage.getItem(this.STORAGEACCOUNTNAME)){
      return true;
    }
    return false;
  }

  removeAll(){
    this.localStorage.clear();
  }

}
