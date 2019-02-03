import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CoreService} from "../CoreService";
import {Post} from "../../models/post-models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService extends CoreService {

  private API = CoreService.getAPI() + "/posts";

  constructor(private http: HttpClient) {
    super();
  }
  
  getAll(){
    return this.http.get(this.API);
  }

  getById(id: number){
    return this.http.get(this.API+"/"+id);
  }

  getByAccountUsername(username: string){
    return this.http.get(this.API + "/byAccount/" + username);
  }

  save(post: Post){
    return this.http.post(this.API+"/add",
      JSON.stringify(post),
      {headers: CoreService.getHttpHeader()});
  }

}
