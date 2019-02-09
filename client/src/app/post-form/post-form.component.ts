import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post-models/Post";
import {AuthenticationService} from "../services/authentication-service/authentication.service";
import {PostService} from "../services/post-service/post.service";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post = null;
  image: File = null;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onImageChange(event){
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref(randomId);
    this.task = this.ref.put(event.target.files[0]);
  }

  addPost(event: any){
    // console.log(this.post);
    // this.postService.save(this.post).subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
    // )
  }

}
