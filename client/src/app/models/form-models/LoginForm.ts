export class LoginForm {

  constructor(private _gmail: string,
              private _password: string){ }

  get gmail(): string {
    return this._gmail;
  }

  get password(): string {
    return this._password;
  }

  set gmail(value: string) {
    this._gmail = value;
  }

  set password(value: string) {
    this._password = value;
  }

}
