import { Injectable } from '@angular/core';
import { CoreService } from "../CoreService";
import { HttpClient } from "@angular/common/http";
import { Follower } from "../../models/account-models/Follower";

@Injectable({
  providedIn: 'root'
})
export class FollowerService extends CoreService {

  private API = CoreService.getAPI() + "/followers";

  constructor(private http: HttpClient) {
    super();
  }

  getAll(){
    return this.http.get(this.API);
  }

  getByFollowerUsername(username: string){
    return this.http.get(this.API + "/" + username);
  }

  getByAccountUsername(username: string){
    return this.http.get(this.API + "/accountUsername/" + username);
  }

  save(follower: Follower){
    return this.http.post(this.API + "/add",
      JSON.stringify(follower),
      {headers: CoreService.getHttpHeader()});
  }

}
