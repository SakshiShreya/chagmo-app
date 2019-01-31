import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import { PostService } from '../services/post-service/post.service';
import { Post } from '../models/post-models/Post';
import { PostAccountInfo } from '../models/post-models/PostAccountInfo';
import { FullName } from '../models/FullName';
import {AccountInfo} from "../models/account-models/AccountInfo";
import {AccountComponent} from "../account/account.component";
import {AccountDataService} from "../services/account-data-service/account-data.service";

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  private posts: Array<Post>;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private postService: PostService,
              private accountData: AccountDataService) { }

  ngOnInit() {

  }

}
