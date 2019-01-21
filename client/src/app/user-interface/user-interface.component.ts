import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account-service/account.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  private viewedAccountInfo: any;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService) { }

  ngOnInit() {
    this.getViewedAccount();
  }

  getViewedAccount(){
    this.route.params.subscribe(
      param => {
        this.accountService.getByGmail(param['gmail']).subscribe(
          accountInfo => {
            this.viewedAccountInfo = accountInfo;
          }
        )
      },
      err => {
        console.log(err);
      }
    )
  }

}
