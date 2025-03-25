import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { DepartementCreateComponent } from './departement-create/departement-create.component';
import { DepartementUpdateComponent } from './departement-update/departement-update.component';

const routes: Routes = [{ path: '', component: DepartementListComponent },
{ path: 'create', component: DepartementCreateComponent },
{ path: 'update', component: DepartementUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
