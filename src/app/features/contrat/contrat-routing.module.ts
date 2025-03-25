import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratListComponent } from './contrat-list/contrat-list.component';
import { ContratCreateComponent } from './contrat-create/contrat-create.component';
import { ContratUpdateComponent } from './contrat-update/contrat-update.component';

const routes: Routes = [{ path: '', component: ContratListComponent },
{ path: 'create', component: ContratCreateComponent },
{ path: 'update', component: ContratUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
