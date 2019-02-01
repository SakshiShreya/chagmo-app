import {HttpHeaders} from "@angular/common/http";

export class CoreService {

  private static _API = "https://spring-boot-t-app.herokuapp.com";
  // private static _API = "http://localhost:8080";

  private static httpHeader = new HttpHeaders(
    {'Content-Type':'application/json'}
  );

  static getAPI(): string {
    return this._API;
  }

  static setAPI(value: string) {
    this._API = value;
  }


  static getHttpHeader(): HttpHeaders {
    return this.httpHeader;
  }

  static setHttpHeader(value: HttpHeaders) {
    this.httpHeader = value;
  }
}
