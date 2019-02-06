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
            this.moveToHomepage();
          } else {
            console.log("gmail or password is wrong");
          }
        }
    );
  }

  tryLogout(){
    localStorage.clear();
    this.moveToStarter();
  }

  isLoggedIn(): boolean {
    if(localStorage.getItem(this.currentUser)){
      return true;
    }
    return false;
  }

  getLoggedInAccount(): Account {
    this.setLoggedInAccount();
    return this.loggedInAccount;
  }

  setLoggedInAccount() {
    let acc = JSON.parse(localStorage.getItem(this.currentUser));
    if (acc != null) {
      this.loggedInAccount = Account.anyToObject(acc);
    } else {
      this.loggedInAccount = null;
    }
  }

  moveToStarter(){
    this.router.navigate(['']);
  }

  moveToHomepage(){
    this.router.navigate(['homepage']);
  }

}
