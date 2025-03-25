import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contrat', loadChildren: () => import('./features/contrat/contrat.module').then(m => m.ContratModule) },
  { path: 'departement', loadChildren: () => import('./features/departement/departement.module').then(m => m.DepartementModule) },
  { path: 'equipe', loadChildren: () => import('./features/equipe/equipe.module').then(m => m.EquipeModule) },
  { path: 'etudiant', loadChildren: () => import('./features/etudiant/etudiant.module').then(m => m.EtudiantModule) },
  { path: 'universite', loadChildren: () => import('./features/universite/universite.module').then(m => m.UniversiteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
