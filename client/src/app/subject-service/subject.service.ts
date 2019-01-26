import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "../models/Subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  // private API = "https://spring-boot-t-app.herokuapp.com";
  private API = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.API + "/subjects");
  }

  getById(id: number) {
    return this.http.get(this.API + "subject/" + id);
  }

  save(subject: Subject){
    return this.http.post(this.API + "addSubject", subject).subscribe();
  }

}
