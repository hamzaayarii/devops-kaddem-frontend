import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AuthentificationGuardService } from './features/auth/authentification-guard.service';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthentificationGuardService] },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'contrat', loadChildren: () => import('./features/contrat/contrat.module').then(m => m.ContratModule) },
  { path: 'departement', loadChildren: () => import('./features/departement/departement.module').then(m => m.DepartementModule) },
  { path: 'equipe', loadChildren: () => import('./features/equipe/equipe.module').then(m => m.EquipeModule) },
  { path: 'etudiant', loadChildren: () => import('./features/etudiant/etudiant.module').then(m => m.EtudiantModule) },
  { path: 'universite', loadChildren: () => import('./features/universite/universite.module').then(m => m.UniversiteModule) },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
