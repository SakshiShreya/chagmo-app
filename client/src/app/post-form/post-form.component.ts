import {Component, Input, OnInit} from '@angular/core';
import {PostForm} from "../models/form-models/PostForm";
import {Post} from "../models/post-models/Post";
import {Subject} from "../models/Subject";
import {AccountDataService} from "../services/account-data-service/account-data.service";
import {SubjectService} from "../services/subject-service/subject.service";
import {PostService} from "../services/post-service/post.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  private postForm: PostForm;

  constructor(private postService: PostService,
              private subjectService: SubjectService,
              private accountData: AccountDataService) { }

  ngOnInit() {
  }

  addPost(postForm: any){
    this.postForm = new PostForm(
      postForm.content,
      postForm.subjects
    );
    let post = new Post(
      postForm.content,
      null,
      this.accountData.getAccount()
    );
    this.subjectService.getByNames(this.postForm.getSubjectNames()).subscribe(
      (subjects: any) => {
        let subs = new Array<Subject>();
        for(let sub of subjects){
          subs.push(new Subject(sub.id, sub.name));
        }
        post.setSubjects(subs);
        this.postService.save(post).subscribe(
          res => console.log(res),
          err => console.log(err)
        );
      }
    )
  }

}
