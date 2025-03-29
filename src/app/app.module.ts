import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContratModule } from './features/contrat/contrat.module';
import { DepartementModule } from './features/departement/departement.module';
import { EquipeModule } from './features/equipe/equipe.module';
import { EtudiantModule } from './features/etudiant/etudiant.module';
import { UniversiteModule } from './features/universite/universite.module';
import { AuthModule } from './features/auth/auth.module';
import { HomeComponent } from './features/home/home.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ContratModule,
    DepartementModule,
    EquipeModule,
    EtudiantModule,
    UniversiteModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
