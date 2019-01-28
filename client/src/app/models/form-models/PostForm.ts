import {Subject} from "../Subject";

export class PostForm {

  constructor(private content: string,
              private subjectNames: string) { }

  getContent(): string {
    return this.content;
  }

  setContent(value: string) {
    this.content = value;
  }

  getSubjectNames(): string {
    return this.subjectNames;
  }

  setSubjectNames(value: string) {
    this.subjectNames = value;
  }
}
