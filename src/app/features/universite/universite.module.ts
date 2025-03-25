import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteCreateComponent } from './universite-create/universite-create.component';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StatComponent } from './stat/stat.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';


@NgModule({
  declarations: [
    UniversiteCreateComponent,
    UniversiteListComponent,
    UniversiteUpdateComponent,
    StatComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class UniversiteModule { }
