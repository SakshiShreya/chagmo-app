import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // private API = "https://spring-boot-t-app.herokuapp.com";
  private API = "http://localhost:8080";

  constructor(private http: HttpClient) { }
  
  getAll(){
    return this.http.get(this.API+"/posts");
  }

  getById(id: number){
    return this.http.get(this.API+"/post/"+id);
  }

  getByAccountId(id: number){
    return this.http.get(this.API+"/posts/"+id);
  }

  save(postForm: any){
    return this.http.post(this.API+"/addPost", postForm).subscribe();
  }

}
