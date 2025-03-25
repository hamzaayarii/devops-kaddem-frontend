import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementUpdateComponent } from './departement-update/departement-update.component';
import { DepartementCreateComponent } from './departement-create/departement-create.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DepartementUpdateComponent,
    DepartementCreateComponent,
    DepartementListComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DepartementModule { }
