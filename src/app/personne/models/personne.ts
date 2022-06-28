import {Departement} from "./departement";

export class Personne {
  id?:number;
  nom?:string;
  prenoms?:string;
  age?:number;
  departement?:Departement;


  constructor(id?: number, nom?: string, prenoms?: string, age?: number, departement?: Departement) {
    this.id = id;
    this.nom = nom;
    this.prenoms = prenoms;
    this.age = age;
    this.departement = departement;
  }

  serialize(): any {
    const personneObj: any = Object.assign({}, this);
    return personneObj;
  }

  valid():boolean{
    if(this.nom && this.prenoms && this.age && this.departement){
      this.nom = this.nom.trim();
      this.prenoms = this.prenoms.trim();
      return true;
    }
    else return false;
  }

  deserialize(input: any): Personne {
    Object.assign(this, input);
    if (input.departement) {
      this.departement = new Departement().deserialize(input.departement);
    }
    return this;
  }

}
