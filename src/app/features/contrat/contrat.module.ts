import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratListComponent } from './contrat-list/contrat-list.component';
import { ContratCreateComponent } from './contrat-create/contrat-create.component';
import { ContratUpdateComponent } from './contrat-update/contrat-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContratListComponent,
    ContratCreateComponent,
    ContratUpdateComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContratModule { }
