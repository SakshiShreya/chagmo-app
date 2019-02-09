import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post-models/Post";
import {AuthenticationService} from "../services/authentication-service/authentication.service";
import {PostService} from "../services/post-service/post.service";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import {ImageService} from "../services/image-service/image.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post = null;
  image: File = null;

  constructor(private postService: PostService,
              private authenticationService: AuthenticationService,
              private storage: AngularFireStorage,
              private imageService: ImageService) { }

  ngOnInit() {
  }

  onImageChange(event){
    this.image = event.target.files[0];
  }

  addPost(postForm: any) {
    this.post = new Post(
      this.authenticationService.getLoggedInAccount().getFullName(),
      this.authenticationService.getLoggedInAccount(),
      "assets/images/Profile-Placeholder.png",
      "Image",
      postForm.script,
      null,
      0,
      0,
      0,
      null,
    );
    if (this.image != null) {
      this.imageService.uploadImage(this.image).then(
        a => {
          if(a.state === "success"){
            console.log("image is successfully uploaded");
            this.imageService.getReference().getDownloadURL().subscribe(
              url => {
                console.log("post has successfully been made");
                this.post.setImageUrl(url);
                this.savePost();
              }
            )
          }
        }
      );
    }else {
      this.savePost();
    }
  }

  savePost(){
    this.postService.save(this.post).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
