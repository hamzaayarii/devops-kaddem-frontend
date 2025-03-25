import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeListComponent } from './equipe-list/equipe-list.component';
import { EquipeCreateComponent } from './equipe-create/equipe-create.component';
import { EquipeUpdateComponent } from './equipe-update/equipe-update.component';

const routes: Routes = [{ path: '', component: EquipeListComponent },
{ path: 'create', component: EquipeCreateComponent },
{ path: 'update', component: EquipeUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
