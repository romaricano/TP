import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {Departement} from "../models/departement";
import {map} from "rxjs/operators";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class Departementservice {

  private urlService = 'http://localhost:8080/ws/departements';

  constructor(private http: HttpClient) { }

  getAllDepartement():Observable<Departement[]>{
    return this.http.get<Departement[]>(this.urlService).pipe(
      map(departements => departements.map(departement => new Departement().deserialize(departement)))
    )
  }

}
