import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication-service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    if(this.authenticationService.isLoggedIn()){
      this.isLoggedIn = true;
      this.router.navigate(['homepage']);
    }else if(!this.authenticationService.isLoggedIn()) {
      this.isLoggedIn = false;
    }
  }

}
