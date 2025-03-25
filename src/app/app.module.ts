import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header/header.component';
import { FooterComponent } from './shared/components/footer/footer/footer.component';
import { ContratModule } from './features/contrat/contrat.module';
import { DepartementModule } from './features/departement/departement.module';
import { EquipeModule } from './features/equipe/equipe.module';
import { EtudiantModule } from './features/etudiant/etudiant.module';
import { UniversiteModule } from './features/universite/universite.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
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
    UniversiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
