import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../../models/account-models/Account";
import {CoreService} from "../CoreService";

@Injectable({
  providedIn: "root"
})
export class AccountService extends CoreService {

  private API = CoreService.getAPI() + "/accounts";

  constructor(private http: HttpClient) {
    super();
  }

  getAll() {
    return this.http.get(this.API);
  }

  getByUsername(username: string): any {
    return this.http.get(this.API + "/usernames/" + username);
  }

  // getByGmail(gmail: string): any {
  //   return this.http.get(this.API + "/gmails/" + gmail);
  // }

  save(account: Account) {
    return this.http.post(this.API + "/add", JSON.stringify(account),
      {headers: CoreService.getHttpHeader()});
  }

  delete(id: number) {
    return this.http.delete(this.API + "/delete/" + id);
  }

}
