import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../models/Subject";

@Component({
  selector: 'app-trends-list',
  templateUrl: './trends-list.component.html',
  styleUrls: ['./trends-list.component.css']
})
export class TrendsListComponent implements OnInit {

  @Input() trendingSubjects: Array<Subject>;

  @Input() trendingTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
