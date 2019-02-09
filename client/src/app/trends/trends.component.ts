import { Component, OnInit } from '@angular/core';
import {Subject} from "../models/Subject";

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  public trendingTitleForEveryone = "everyone";

  public trendingTitleForYou = "you";

  public trendingEverywhere: Array<Subject>;

  public trendingForYou: Array<Subject>;

  constructor() { }

  ngOnInit() {
    this.trendingEverywhere = new Array<Subject>();
    this.trendingEverywhere.push(new Subject(6, "Art"));
    this.trendingEverywhere.push(new Subject(6, "Book"));

    this.trendingForYou = new Array<Subject>();
    this.trendingForYou.push(new Subject(4, "Dreams"));
    this.trendingForYou.push(new Subject(4, "Drawings"));

  }

}
