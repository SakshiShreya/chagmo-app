import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  posts = [{
    userName: "John Smith",
    userImg: "assets/images/Profile-Placeholder.png",
    postType: "Image",
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
  },
  {
    userName: "Sakshi Shreya",
    userImg: "assets/images/Profile-Placeholder.png",
    postType: "Post",
    data: "Some random text, Some random text, Some random text, Some random text, Some random text, Some random text, Some random text, Some random text",
    rating: 23,
    comments: 1,
    shares: 0
  }];

}
