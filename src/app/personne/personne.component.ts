import { Component, OnInit } from '@angular/core';
import {Personne} from "./models/personne";
import {PersonneService} from "./services/personneservice";
import {ConfirmationService, MessageService} from "primeng/api";
import {Departement} from "./models/departement";
import {Departementservice} from "./services/departementservice";

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personneDialog!: boolean;

  personnes: Personne[] = [];

  departements: Departement[] = [];

  filteredDepartement: Departement[] = [];

  personne!: Personne;

  selectedPersonnes!: Personne[];

  submitted!: boolean;

  edit!:boolean;

  constructor(private personneService: PersonneService, private departementService:Departementservice, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
   this.getAllDepartement();
   this.getAllPersonne();
  }

  getAllPersonne(){
    this.personneService.getAllPersonne().subscribe(personnes => {
      this.personnes = personnes
    },error => this.messageService.add({severity:'error', summary: 'Echec', detail: 'Une erreur s\'est produite lors de la récupération des personnes !', life: 3000}));

  }

  getAllDepartement(){
    this.departementService.getAllDepartement().subscribe(data => {
      this.departements = data;
      this.filteredDepartement =data;
    })
  }

  openNew() {
    this.personne = new Personne();
    this.submitted = false;
    this.personneDialog = true;
    this.edit = false;
  }

  deleteSelectedPersonnes() {
    this.confirmationService.confirm({
      message: 'Etes-vous sur de vouloir vraiment supprimer ces personnes?',
      header: 'Confirmer',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // this.personnes = this.personnes.filter(val => !this.selectedPersonnes.includes(val));
        this.selectedPersonnes = [];
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Personnes éffacées', life: 3000});
      }
    });
  }

  editPersonne(personne: Personne) {
    this.personne = personne;
    this.personneDialog = true;
    this.edit = true;
  }

  deletePersonne(personne: Personne) {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer ' + personne.nom + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.personneService.delete(personne).subscribe(data => {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Personne éffacée', life: 3000});
        }, error => this.messageService.add({severity:'error', summary: 'Echec', detail: 'Une erreur s\'est produite lors de la suppression !', life: 3000}));
      }
    });
  }

  hideDialog() {
    this.personneDialog = false;
    this.submitted = false;
  }

  savePersonne() {
    if(this.edit) {
      if(this.personne.valid()){
        this.personneService.update(this.personne).subscribe(value => {
          this.personneDialog = false;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Personne Modifiée avec succès !', life: 3000});
        }, error => this.messageService.add({severity:'error', summary: 'Echec', detail: 'Echec de la modification !', life: 7000}));
      }else this.messageService.add({severity:'error', summary: 'Echec validation', detail: 'Formulaire non valide !', life: 7000});
      this.edit = false;

    }
    else {
      if(this.personne.valid()) {
        this.personneService.create(this.personne).subscribe(value => {
          this.personneDialog = false;
          this.personnes.push(this.personne);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Personne ajoutée avec succès !', life: 3000});
        }, error => {
          this.messageService.add({severity:'error', summary: 'Echec', detail: 'Echec de l\'ajout !', life: 7000});
        });
      }else this.messageService.add({severity:'error', summary: 'Echec validation', detail: 'Formulaire non valide !', life: 7000});
    }
    this.submitted = true;

  }

  searchDepartement({event}: { event: any }) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.departements.length; i++) {
      if (this.departements[i].designation!.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(this.departements[i]);
      }
    }

    this.filteredDepartement = filtered;
  }

}
