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
  private posts: Array<Post>;
  private fullName: FullName;
  private postAccountInfo: PostAccountInfo;

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
            this.viewedAccountInfo = accountInfo;
            this.storeDataInformation(this.viewedAccountInfo);
            this.getPosts();
          }
        )
      },
      err => {
        console.log(err);
      }
    )
  }

  storeDataInformation(accInfo: any){
    this.fullName = new FullName(accInfo.fullName.firstName, accInfo.fullName.firstName);
    this.postAccountInfo = new PostAccountInfo(accInfo.id, this.fullName);
  }

  getPosts(){
    this.postService.getByAccountId(this.postAccountInfo.Id).subscribe(
      res => {
        let postsOfAnyType: any = res;
        this.posts = new Array<Post>();
        for(let post of postsOfAnyType){
          this.posts.push(new Post(post.message, this.postAccountInfo));
        }
      },
      err => console.log(err)
    )
  }

}
