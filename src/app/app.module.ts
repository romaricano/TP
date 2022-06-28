import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PersonneComponent } from './personne/personne.component';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {PersonneService} from "./personne/services/personneservice";
import {ConfirmationService, MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Departementservice} from "./personne/services/departementservice";
import {DropdownModule} from "primeng/dropdown";
import {SelectButtonModule} from "primeng/selectbutton";
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {AutoCompleteModule} from "primeng/autocomplete";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    FormsModule,
    DialogModule,
    ConfirmDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    SelectButtonModule,
    InputTextModule,
    InputNumberModule,
    AutoCompleteModule,
  ],
  providers: [PersonneService, MessageService, ConfirmationService, Departementservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
