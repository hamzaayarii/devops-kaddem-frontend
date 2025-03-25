import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { UniversiteCreateComponent } from './universite-create/universite-create.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';

const routes: Routes = [{ path: '', component: UniversiteListComponent },
{ path: 'create', component: UniversiteCreateComponent },
{ path: 'update', component: UniversiteUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
