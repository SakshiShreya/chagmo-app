import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "../../models/Subject";
import {CoreService} from "../CoreService";

@Injectable({
  providedIn: 'root'
})
export class SubjectService extends CoreService {

  constructor(private http: HttpClient) {
    super();
  }

  getAll() {
    return this.http.get(CoreService.getAPI() + "/subjects");
  }

  getById(id: number) {
    return this.http.get(CoreService.getAPI() + "/subject/" + id);
  }

  getByName(name: string){
    return this.http.get(CoreService.getAPI() + "/subjectName/" + name);
  }

  save(subject: Subject){
    return this.http.post(CoreService.getAPI() + "/addSubject", JSON.stringify(subject)).subscribe();
  }

}
