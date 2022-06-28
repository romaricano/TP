export class Departement {
  code?: number;
  designation?:string;

  constructor(code?: number, designation?: string) {
    this.code = code;
    this.designation = designation;
  }

  deserialize(input: any): Departement {
    Object.assign(this, input);
    return this;
  }

}
