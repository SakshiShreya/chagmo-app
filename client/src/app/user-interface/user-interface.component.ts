import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account-service/account.service';
import { PostService } from '../post-service/post.service';
import { Post } from '../models/post-models/Post';
import { PostAccountInfo } from '../models/post-models/PostAccountInfo';
import { FullName } from '../models/FullName';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  private viewedAccountInfo: any;
  private posts: Array<Post> = new Array();

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private postService: PostService) { }

  ngOnInit() {
    this.getViewedAccountInfo();
  }

  getViewedAccountInfo(){
    this.route.params.subscribe(
      param => {
        this.accountService.getByGmail(param['gmail']).subscribe(
          accountInfo => {
            console.log(accountInfo);
            this.viewedAccountInfo = accountInfo;
            this.getPosts(this.viewedAccountInfo.id);
          }
        )
      },
      err => {
        console.log(err);
      }
    )
  }

  getPosts(id: number){
    this.postService.getByAccountId(id).subscribe(
      res => {
        let postsOfAnyType: any = res;
        for(let post of postsOfAnyType){
          let fullName = new FullName(post.account.fullName.firstName, post.account.fullName.lastName);
          let accInfo = new PostAccountInfo(post.account.id, fullName);
          this.posts.push(new Post(post.message, accInfo));
        }
        console.log(this.posts);
      },
      err => console.log(err)
    )
  }

}
