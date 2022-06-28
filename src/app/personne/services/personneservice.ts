import {HttpClient, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Personne } from '../models/personne';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PersonneService {

  private urlPersonne = 'http://localhost:8080/ws/personnes';

  constructor(private http: HttpClient) { }

  create(personne: Personne): Observable<void> {
    return this.http.post<void>(this.urlPersonne, personne.serialize());
  }

  update(personne: Personne): Observable<void> {
    return this.http.put<void>(`${this.urlPersonne}/${personne.id}`, personne.serialize());
  }

  delete(personne: Personne): Observable<void>{
    return this.http.delete<void>(`${this.urlPersonne}/${personne.id}`);
  }

  getPersonne(personneId: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.urlPersonne}/${personneId}`).pipe(
      map(personne => new Personne().deserialize(personne)));
  }

  getAllPersonne():Observable<Personne[]>{
    return this.http.get<Personne[]>(this.urlPersonne).pipe(
      map(personnes => personnes.map(personne => new Personne().deserialize(personne)))
    )
  }

}
