import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

/**
 * 
 * This is the service that gets information from backend.
 * Basicly I have another server running at //localhost:8080 port, 
 * and I get information from there.
 */

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private API = "//localhost:8080";

  constructor(private http: HttpClient) {}

  /**
   *  Note that mothods can be called however you want
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
  save(accountForm: any) {
    return this.http.put(this.API + "/addAccount", accountForm);
  }

  /**
   *  For now I do not have here save only and delete, 
   *  but it really easy to add as others.
   */
}
