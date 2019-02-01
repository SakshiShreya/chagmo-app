import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // we will actually get this data from server
  user = {
    name: "John Smith",
    img: "assets/images/Profile-Placeholder.png"
  };

  post = {
    postType: "Post",
    data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "assets/images/placeholder.png",
    rating: 327,
    comments: 24,
    shares: 17
  }

  constructor() { }

  ngOnInit() {
  }

}
