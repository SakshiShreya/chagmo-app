import {HttpHeaders} from "@angular/common/http";

export class CoreService {

  // private static API = "https://spring-boot-t-app.herokuapp.com";
  private static API = "http://localhost:8080";

  private static httpHeader = new HttpHeaders(
    {'Content-Type':'application/json'}
  );

  static getAPI(): string {
    return this.API;
  }

  static setAPI(value: string) {
    this.API = value;
  }

  static getHttpHeader(): HttpHeaders {
    return this.httpHeader;
  }

  static setHttpHeader(value: HttpHeaders) {
    this.httpHeader = value;
  }
}
