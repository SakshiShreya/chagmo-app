import {FullName} from "../account-models/FullName";
import {Account} from "../account-models/Account";

export class Post {

  constructor(private fullName: FullName,
              private account: Account,
              private userImageUrl: string,
              private postType: string,
              private script: string,
              private imageUrl: string,
              private ratings: number,
              private comments: number,
              private shares: number,
              private date: string){ }

  getFullName(): FullName {
    return this.fullName;
  }

  setFullName(value: FullName) {
    this.fullName = value;
  }

  getAccount(): Account {
    return this.account;
  }

  setAccount(value: Account) {
    this.account = value;
  }

  getUserImageUrl(): string {
    return this.userImageUrl;
  }

  setUserImageUrl(value: string) {
    this.userImageUrl = value;
  }

  getPostType(): string {
    return this.postType;
  }

  setPostType(value: string) {
    this.postType = value;
  }

  getScript(): string {
    return this.script;
  }

  setScript(value: string) {
    this.script = value;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }

  setImageUrl(value: string) {
    this.imageUrl = value;
  }

  getRatings(): number {
    return this.ratings;
  }

  setRatings(value: number) {
    this.ratings = value;
  }

  getComments(): number {
    return this.comments;
  }

  setComments(value: number) {
    this.comments = value;
  }

  getShares(): number {
    return this.shares;
  }

  setShares(value: number) {
    this.shares = value;
  }

  getDate(): string {
    return this.date;
  }

  setDate(value: string) {
    this.date = value;
  }

  static anyToObject(any: any){
    let fullName = FullName.anyToObject(any.fullName);
    return new Post(
      fullName,
      any.account,
      any.userImageUrl,
      any.postType,
      any.script,
      any.imageUrl,
      any.ratings,
      any.comments,
      any.shares,
      any.date
    );
  }

}
