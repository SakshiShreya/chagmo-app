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
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostService } from './services/post-service/post.service';
import { SubjectComponent } from './subject/subject.component';
import { SubjectService } from "./services/subject-service/subject.service";

/**
 *  App routers
 */
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
    component: HomeComponent
  },
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "subjects",
        component: SubjectComponent
      },
      {
        path: ":username",
        component: UserInterfaceComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    AccountComponent,
    NoAccountComponent,
    UserInterfaceComponent,
    DashboardComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouters),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    AccountService,
    PostService,
    SubjectService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
