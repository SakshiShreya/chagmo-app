import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../../models/account-models/Account";
import {CoreService} from "../CoreService";

/**
 * 
 * This is the service that gets information from backend.
 * Basically I have another server running at //localhost:8080 port,
 * and I get information from there.
 */

@Injectable({
  providedIn: "root"
})
export class AccountService extends CoreService {

  private API = CoreService.getAPI() + "/accounts";

  constructor(private http: HttpClient) {
    super();
  }

  /**
   *  Note that methods can be called however you want
   */

  /**
   *  Get all the accounts
   */
  getAll() {
    return this.http.get(this.API);
  }

  /**
   *  Get an account using its id
   */
  getById(id: number): any {
    return this.http.get(this.API + "/" + id);
  }

  /**
   *  Get an account using its gmail address
   */
  getByGmail(gmail: string): any {
    return this.http.get(this.API + "/gmails/" + gmail);
  }

  getByUsername(username: string): any {
    return this.http.get(this.API + "/usernames/" + username);
  }

  /**
   *  Save or update given account info
   */
  save(account: Account) {
    return this.http.post(this.API + "/add", JSON.stringify(account),
      {headers: CoreService.getHttpHeader()});
  }

  delete(id: number) {
    return this.http.delete(this.API + "/delete/" + id);
  }

  update(accountForm: any){
    // ...
  }

}