import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { UniversiteService } from 'src/app/core/services/api/universite.service';
import { Universite } from 'src/app/shared/models/universite.model';



@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  universites: Universite[] = [];
  totalUniversites: number = 0;
  totalDepartements: number = 0;

  constructor(private universiteService: UniversiteService) { }

  ngOnInit(): void {
    this.getUniversitesStats();
  }

  // Fetching the statistics
  getUniversitesStats() {
    this.universiteService.getAllUniversites().subscribe(data => {
      this.universites = data;
      this.totalUniversites = this.universites.length;
      this.totalDepartements = this.universites.reduce((acc, uni) => acc + uni.departements.length, 0);
    });
  }

  // Export statistics to PDF
  exportPDF() {
    const doc = new jsPDF();
    doc.text(`Total Universites: ${this.totalUniversites}`, 10, 10);
    doc.text(`Total Departements: ${this.totalDepartements}`, 10, 20);
    doc.save('universites-stats.pdf');
  }

  // Export statistics to Excel
  // exportExcel() {
  //   const ws = xls.utils.json_to_sheet([{
  //     'Total Universites': this.totalUniversites,
  //     'Total Departements': this.totalDepartements
  //   }]);

  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Universite Stats');
  //   XLSX.writeFile(wb, 'universites-stats.xlsx');
  // }
}
