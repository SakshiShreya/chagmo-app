export class SecuredAccountData {

  constructor(private gmail: string,
              private password: string) { }


  getGmail(): string {
    return this.gmail;
  }

  setGmail(value: string) {
    this.gmail = value;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(value: string) {
    this.password = value;
  }

}
