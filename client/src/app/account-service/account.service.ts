import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

/**
 * 
 * This is the service that gets information from backend.
 * Basically I have another server running at //localhost:8080 port,
 * and I get information from there.
 */

const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

@Injectable({
  providedIn: "root"
})
export class AccountService {

  // private API = "https://spring-boot-t-app.herokuapp.com";
  private API = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  /**
   *  Note that methods can be called however you want
   */

  /**
   *  Get all the accounts
   */
  getAll() {
    return this.http.get(this.API + "/accounts");
  }

  /**
   *  Get an account using its id
   */
  getById(id: number): any {
    return this.http.get(this.API + "/account/" + id);
  }

  /**
   *  Get an account using its gmail address
   */
  getByGmail(gmail: string): any {
    return this.http.get(this.API + "/accountGmail/" + gmail);
  }

  /**
   *  Save or update given account info
   */
  save(account: Account) {
    return this.http.post(this.API + "/addAccount", JSON.stringify(account),
      {headers: headers});
  }

  delete(id: number) {
    return this.http.delete(this.API + "/deleteAccount/" + id);
  }

  update(accountForm: any){
    // ...
  }

}
