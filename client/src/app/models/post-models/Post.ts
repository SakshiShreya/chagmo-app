import { PostAccountInfo } from './PostAccountInfo';
import {Subject} from "../Subject";

export class Post {

  constructor(private content: string,
              private subjects: Array<Subject>,
              private account: PostAccountInfo){
  }

  getMessage() : string {
    return this.content;
  }

  getSubjects(): Array<Subject> {
    return this.subjects;
  }

  setSubjects(value: Array<Subject>) {
    this.subjects = value;
  }

  getPostAccountInfo() : PostAccountInfo {
    return this.account;
  }

}
