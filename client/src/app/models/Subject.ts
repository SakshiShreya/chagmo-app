export class Subject {

  constructor(private id: number, private name: string){ }


  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

}
