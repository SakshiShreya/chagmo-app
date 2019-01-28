import { FullName } from '../FullName';

export class PostAccountInfo {

    constructor(private id: number, private fullName: FullName){ }

    public getId() : number {
        return this.id;
    }

    public getFullName() : FullName {
        return this.fullName;
    }

}
