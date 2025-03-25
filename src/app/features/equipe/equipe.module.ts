import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeListComponent } from './equipe-list/equipe-list.component';
import { EquipeCreateComponent } from './equipe-create/equipe-create.component';
import { EquipeUpdateComponent } from './equipe-update/equipe-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EquipeListComponent,
    EquipeCreateComponent,
    EquipeUpdateComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EquipeModule { }
