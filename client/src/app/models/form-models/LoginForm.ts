export class LoginForm {

  constructor(private gmail: string,
              private password: string){ }

  getGmail(): string {
    return this.gmail;
  }

  getPassword(): string {
    return this.password;
  }

  setGmail(value: string) {
    this.gmail = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

}
