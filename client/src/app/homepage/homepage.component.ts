import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post-models/Post";
import {FullName} from "../models/account-models/FullName";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  posts: Array<any>;

  constructor() { }

  ngOnInit() {

    this.posts = new Array<Post>();

    // this.posts.push(
    //   new Post(
    //     new FullName("John", "Smith"),
    //     "john7",
    //     "assets/images/Profile-Placeholder.png",
    //     "Image",
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
    //     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
    //     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
    //     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
    //     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
    //     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "assets/images/placeholder.png",
    //     327,
    //     24,
    //     17,
    //     "2019-02-07"
    //   )
    // );
    //
    // this.posts.push(
    //   new Post(
    //     new FullName("John", "Smith"),
    //     "john7",
    //     "assets/images/Profile-Placeholder.png",
    //     "Post",
    //     "Some random text, Some random text, Some random text, Some random text, Some random text, Some random text, Some random text, Some random text",
    //     null,
    //     23,
    //     1,
    //     0,
    //     "2019-02-05"
    //   )
    // );

  }
}
