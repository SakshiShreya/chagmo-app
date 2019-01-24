export class FullName {

    constructor(private firstName: string, private lastName: string){ }
    
    public get FirstName() : string {
        return this.firstName;
    }

    public get LastName() : string {
        return this.lastName
    }
    
}