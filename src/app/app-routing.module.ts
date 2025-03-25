import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AuthentificationGuardService } from './features/auth/authentification-guard.service';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthentificationGuardService],
    children: [
      { path: 'etudiant', loadChildren: () => import('./features/etudiant/etudiant.module').then(m => m.EtudiantModule) },
      { path: 'contrat', loadChildren: () => import('./features/contrat/contrat.module').then(m => m.ContratModule) },
      { path: 'departement', loadChildren: () => import('./features/departement/departement.module').then(m => m.DepartementModule) },
      { path: 'equipe', loadChildren: () => import('./features/equipe/equipe.module').then(m => m.EquipeModule) },
      { path: 'universite', loadChildren: () => import('./features/universite/universite.module').then(m => m.UniversiteModule) }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //  { path: '**', component: NotFoundComponent } // Catch-all for invalid routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
