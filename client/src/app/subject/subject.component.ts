import { Component, OnInit } from '@angular/core';
import {Subject} from "../models/Subject";
import {SubjectService} from "../services/subject-service/subject.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  private subjects: Array<Subject> = new Array<Subject>();

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.getAll().subscribe(
      (allSubjects: any) => {
        this.subjects = allSubjects;
      }
    )
  }

}
