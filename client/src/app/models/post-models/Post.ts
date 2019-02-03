import {FullName} from "../account-models/FullName";

export class Post {

  constructor(private fullName: FullName,
              private username: string,
              private userImageUrl: string,
              private postType: string,
              private script: string,
              private imageUrl: string,
              private ratings: number,
              private comments: number,
              private shares: number){ }

  getFullName(): FullName {
    return this.fullName;
  }

  setFullName(value: FullName) {
    this.fullName = value;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(value: string) {
    this.username = value;
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

  static anyToObject(any: any){
    let fullname = new FullName(
      any.fullName.firstName,
      any.fullName.lastName,
    );
    return new Post(
      fullname,
      any.username,
      any.userImageUrl,
      any.postType,
      any.script,
      any.imageUrl,
      any.ratings,
      any.comments,
      any.shares
    );
  }

}
