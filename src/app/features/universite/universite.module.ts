import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteCreateComponent } from './universite-create/universite-create.component';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UniversiteCreateComponent,
    UniversiteListComponent,
    UniversiteUpdateComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UniversiteModule { }
