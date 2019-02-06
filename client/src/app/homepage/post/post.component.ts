import { Component, OnInit, Input } from '@angular/core';
import {Post} from "../../models/post-models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  year: string;
  month: string;
  day: string;

  constructor() { }

  ngOnInit() {
    let date = this.post.getDate().substring(0, 10);
    let dates = date.split("-");
    this.year = dates[0];
    this.month = dates[1];
    this.day = dates[2];
  }

}
