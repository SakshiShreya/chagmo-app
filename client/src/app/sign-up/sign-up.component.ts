import { Component } from "@angular/core";
import { AccountService } from '../account-service/account.service';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent {
  constructor(private accountService: AccountService) {}

  addAccount(accountForm: any) {
    this.accountService
      .save(accountForm)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}