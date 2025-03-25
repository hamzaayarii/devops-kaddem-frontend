import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DepartementService } from 'src/app/core/services/api/departement.service';
import { EtudiantService } from 'src/app/core/services/api/etudiant.service';
import { UniversiteService } from 'src/app/core/services/api/universite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalUniversites: number = 0;
  totalEtudiants: number = 0;
  totalDepartements: number = 0;
  currentRoute: string = '';

  constructor(
    private router: Router,
    private universiteService: UniversiteService,
    private etudiantService: EtudiantService,
    private departementService: DepartementService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats() {
    // Load Universities
    this.universiteService.getAllUniversites().subscribe({
      next: (data) => (this.totalUniversites = data.length),
      error: (err) => console.error('Error loading universities', err)
    });

    //   // Load Etudiants
    //   this.etudiantService.getAllEtudiants().subscribe({
    //     next: (data) => (this.totalEtudiants = data.length),
    //     error: (err) => console.error('Error loading students', err)
    //   });

    //   // Load Departements
    //   this.departementService.getAllDepartements().subscribe({
    //     next: (data) => (this.totalDepartements = data.length),
    //     error: (err) => console.error('Error loading departments', err)
    //   });
    // }
  }

  isChildRouteActive(): boolean {
    return this.currentRoute !== '/home' && this.currentRoute.startsWith('/home/');
  }
}


