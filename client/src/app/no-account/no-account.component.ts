import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-account',
  templateUrl: './no-account.component.html',
  styleUrls: ['./no-account.component.css']
})
export class NoAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Reached");
  }

}