export class FullName {

    constructor(private firstName: string, private lastName: string){ }
    
    public getFirstName() : string {
        return this.firstName;
    }

    public getLastName() : string {
        return this.lastName
    }
    
}
