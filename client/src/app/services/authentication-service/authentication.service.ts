import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {LoginForm} from "../../models/form-models/LoginForm";
import {CoreService} from "../CoreService";
import {Account} from "../../models/account-models/Account";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends CoreService {

  private currentUser = "CURRENTUSER";
  private loggedInAccount: Account;

  constructor(private http: HttpClient,
              private router: Router) {
    super();
  }

  tryLogin(loginForm: LoginForm){
    return this.http.post(CoreService.getAPI() + "/login",
      JSON.stringify(loginForm),
      {headers: CoreService.getHttpHeader()}).subscribe(
      (account: any) => {
          console.log(account);
          if (account != null) {
            localStorage.setItem(this.currentUser, JSON.stringify(account));
            this.router.navigate(['dashboard']);
          } else {
            console.log("gmail or password is wrong");
          }
        }
    );
  }

  tryLogout(){
    localStorage.clear();
  }

  loggedIn(): boolean {
    if(localStorage.getItem(this.currentUser)){
      return true;
    }
    return false;
  }

  setLoggedInAccountInformations(){
    let acc = localStorage.getItem(this.currentUser);
    console.log(JSON.parse(acc));
  }

  getLoggedInAccount(): Account {
    this.setLoggedInAccount();
    return this.loggedInAccount;
  }

  setLoggedInAccount() {
    let acc = JSON.parse(localStorage.getItem(this.currentUser));
    this.loggedInAccount = new Account(
      acc.id,
      acc.gmail,
      acc.username,
      acc.fullName,
      acc.password,
      acc.followers
    );
  }

}
