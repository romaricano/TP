import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonneComponent} from "./personne/personne.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";

const routes: Routes = [
  {
    path: '', component: NavBarComponent,
  },
  {
    path: 'personnes', component: PersonneComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
