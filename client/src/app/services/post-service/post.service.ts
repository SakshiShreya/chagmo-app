import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CoreService} from "../CoreService";
import {Post} from "../../models/post-models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService extends CoreService {

  constructor(private http: HttpClient) {
    super();
  }
  
  getAll(){
    return this.http.get(CoreService.getAPI()+"/posts");
  }

  getById(id: number){
    return this.http.get(CoreService.getAPI()+"/post/"+id);
  }

  getByAccountId(id: number){
    return this.http.get(CoreService.getAPI()+"/posts/"+id);
  }

  save(post: Post){
    return this.http.post(CoreService.getAPI()+"/addPost",
      JSON.stringify(post),
      {headers: CoreService.getHttpHeader()});
  }

}
