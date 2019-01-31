import { Component } from "@angular/core";
import { AccountService } from '../services/account-service/account.service';
import {FullName} from "../models/FullName";
import {Account} from "../models/account-models/Account";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent {
  constructor(private accountService: AccountService) {}

  addAccount(accountForm: any) {
    let fullName = new FullName(
      accountForm.first_name,
      accountForm.last_name);
    let account = new Account(
      accountForm.id,
      accountForm.gmail,
      accountForm.username,
      fullName,
      accountForm.password,
      null
    );

    this.accountService.save(account).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
