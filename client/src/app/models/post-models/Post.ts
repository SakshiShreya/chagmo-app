import { PostAccountInfo } from './PostAccountInfo';

export class Post {

    constructor(private message: string, private postAccountInfo: PostAccountInfo){ }
    
    public get Message() : string {
        return this.message;
    }

    public get PostAccountInfo() : PostAccountInfo {
        return this.postAccountInfo;
    }    

}