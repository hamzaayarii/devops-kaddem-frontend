import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtudiantCreateComponent } from './etudiant-create/etudiant-create.component';
import { EtudiantUpdateComponent } from './etudiant-update/etudiant-update.component';

const routes: Routes = [{ path: '', component: EtudiantListComponent },
{ path: 'create', component: EtudiantCreateComponent },
{ path: 'update', component: EtudiantUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
