import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AccountService } from "./account-service/account.service";
import { HttpClientModule } from "@angular/common/http";
import { AccountComponent } from './account/account.component';
import { NoAccountComponent } from './no-account/no-account.component';
import { LocalStorageService } from './local-storage/local-storage.service';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
        path: ":gmail",
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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouters),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AccountService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}