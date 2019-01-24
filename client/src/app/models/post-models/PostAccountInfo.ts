import { FullName } from '../FullName';

export class PostAccountInfo {

    constructor(private id: number, private fullName: FullName){ }

    public get Id() : number {
        return this.id;
    }

    public get FullName() : FullName {
        return this.fullName;
    }

}