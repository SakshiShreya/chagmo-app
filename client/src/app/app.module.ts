import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AccountService } from "./services/account-service/account.service";
import { HttpClientModule } from "@angular/common/http";
import { AccountComponent } from './account/account.component';
import { NoAccountComponent } from './no-account/no-account.component';
import { PostService } from './services/post-service/post.service';
import { SubjectService } from "./services/subject-service/subject.service";
import { AuthenticationService } from "./services/authentication-service/authentication.service";
import { TrendsComponent } from './trends/trends.component';
import { TrendsListComponent } from './trends-list/trends-list.component';
import { PostComponent } from './homepage/post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StarterComponent } from './starter/starter.component';
import { UserpageComponent } from './userpage/userpage.component';
import { PostFormComponent } from './post-form/post-form.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {environment} from "../environments/environment";
import {FollowerService} from "./services/follower-service/follower.service";
import {ImageService} from "./services/image-service/image.service";

const appRouters: Routes = [
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "no-account",
    component: NoAccountComponent
  },
  {
    path: "",
    component: StarterComponent
  },
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "homepage",
        component: HomepageComponent
      },
      {
        path: "trends",
        component: TrendsComponent
      },
      {
        path: ":username",
        component: UserpageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    HomepageComponent,
    HomeComponent,
    SignUpComponent,
    AccountComponent,
    NoAccountComponent,
    UserpageComponent,
    TrendsComponent,
    TrendsListComponent,
    PostComponent,
    ProfileComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouters),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    AccountService,
    PostService,
    SubjectService,
    AuthenticationService,
    FollowerService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
