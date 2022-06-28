import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonneComponent} from './personne.component';
import {Personne} from "./models/personne";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Departement} from "./models/departement";
import {ConfirmationService, MessageService} from "primeng/api";
import {PersonneService} from "./services/personneservice";
import {of} from "rxjs";
import {Departementservice} from "./services/departementservice";
import {HttpClient} from "@angular/common/http";

describe('PersonneComponent', () => {
  let component: PersonneComponent;
  let fixture: ComponentFixture<PersonneComponent>;

  let personneServiceSpy: jasmine.SpyObj<PersonneService>;

  // const personneServiceStub = jasmine.createSpyObj('PersonneService',["getAllPersonne"]);
  let departementServiceStub = jasmine.createSpyObj("DepartementService", ["getAllDepartement"])

  beforeEach(async () => {
    const personneServiceStub = jasmine.createSpyObj('PersonneService',["getAllPersonne"]);
    await TestBed.configureTestingModule({
      declarations: [ PersonneComponent ],
      providers: [
        {provide: MessageService},
        {provide: ConfirmationService},
        {provide: PersonneService, useValue: personneServiceStub},
        {provide: HttpClient}],
      imports : [HttpClientTestingModule,]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneComponent);
    component = fixture.componentInstance;
    // const personnes = [
    //   new Personne(15, "FIRST", "PERSONNE", 99, new Departement()),
    //   new Personne(16, "SECOND", "PERSONNE", 99, new Departement()),
    //   new Personne(17, "THIRD", "PERSONNE", 99, new Departement()),
    //   new Personne(18, "FOURTH", "PERSONNE", 99, new Departement()),
    // ]
    let personne = new Personne();
    // personneServiceStub.getAllPersonne().and.returnValue(of(personne));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should create getAllPersonne spy method', function() {
    // expect(personneServiceStub !== undefined)
    // expect(personneServiceStub.getAllPersonne()).toBeDefined();
  });

  // fit('should get all personne', () => {
  //   //WHEN
  //   component.getAllPersonne();
  //
  //   //THEN
  //   expect(personneServiceStub.getAllPersonne).toHaveBeenCalled();
  //   expect(component.getAllPersonne).toHaveSize(4);
  // });
  //
  // fit('should get all departement', () => {
  //   //GIVEN
  //   const departements = [
  //     new Departement(1, "FIRST DEPARTEMENT"),
  //     new Departement(2, "SECOND DEPARTEMENT"),
  //     new Departement(3, "THIRD DEPARTEMENT"),
  //   ]
  //   departementServiceStub.getAllDepartement.and.returnValue(of());
  //   //WHEN
  //   component.getAllDepartement();
  //
  //   //THEN
  //   expect(departementServiceStub.getAllDepartement).toHaveBeenCalled();
  //   expect(component.getAllDepartement).toHaveSize(3);
  // });

});
