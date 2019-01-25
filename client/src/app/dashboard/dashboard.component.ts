import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service';
import {Post} from "../models/post-models/Post";
import {PostService} from "../post-service/post.service";
import {LocalStorageService} from "../local-storage/local-storage.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private posts: Array<Post> = new Array<Post>();

  constructor(private accountService: AccountService,
              private postService: PostService,
              private localStorage: LocalStorageService) { }

  ngOnInit() {

  }

  addPost(inputValue){
    this.accountService.getByGmail(this.localStorage.getLoggedAccountGmail()).subscribe(
      res => {
        let post = {
          "message": inputValue.value,
          "accountId": res.id
        };
        console.log(post);
        this.postService.save(post);
      }
    );
  }

}
