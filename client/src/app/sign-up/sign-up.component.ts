import { Component } from "@angular/core";
import { AccountService } from '../services/account-service/account.service';
import {FullName} from "../models/account-models/FullName";
import {Account} from "../models/account-models/Account";
import {SecuredAccountData} from "../models/account-models/SecuredAccountData";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent {
  constructor(private accountService: AccountService) {}

  addAccount(accountForm: any) {
    let securedAccountData = new SecuredAccountData(
      accountForm.gmail,
      accountForm.password
    );
    let fullName = new FullName(
      accountForm.first_name,
      accountForm.last_name);
    let account = new Account(
      accountForm.username,
      fullName,
      securedAccountData
    );

    this.accountService.save(account).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
