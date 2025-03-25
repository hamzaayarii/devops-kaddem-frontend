import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantUpdateComponent } from './etudiant-update/etudiant-update.component';
import { EtudiantCreateComponent } from './etudiant-create/etudiant-create.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EtudiantUpdateComponent,
    EtudiantCreateComponent,
    EtudiantListComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EtudiantModule { }
