import {FullName} from "../account-models/FullName";

export class Post {

  constructor(private fullName: FullName,
              private username: string,
              private userImage: string,
              private postType: string,
              private script: string,
              private image: string,
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

  getUserImage(): string {
    return this.userImage;
  }

  setUserImage(value: string) {
    this.userImage = value;
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

  getImage(): string {
    return this.image;
  }

  setImage(value: string) {
    this.image = value;
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

}
