import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { UniversiteService } from 'src/app/core/services/api/universite.service';
import { Universite } from 'src/app/shared/models/universite.model';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {

  listUniversites: Universite[] = [];
  input!: any;
  nombre = 4;
  page = 1;

  constructor(private route: Router, private universiteService: UniversiteService) { }

  ngOnInit(): void {
    this.pagination(this.nombre, this.page);
  }

  getUniversites() {
    this.universiteService.getAllUniversites().subscribe(data => {
      this.listUniversites = data;
    });
  }

  deleteUniversite(id: number) {
    this.universiteService.deleteUniversite(id).subscribe(() => {
      this.getUniversites();
    });
  }

  exportPDF() {
    const doc = new jsPDF();

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    let yOffset = 10;

    // Add some title or header to the PDF
    doc.text("Universities List", 10, yOffset);
    yOffset += 10;

    // Add the table headers
    const headers = ['ID', 'Nom Universite'];
    doc.text(headers.join(" | "), 10, yOffset);
    yOffset += 10;

    // Add each university to the PDF
    this.listUniversites.forEach(universite => {
      const row = [universite.idUniv.toString(), universite.nomUniv];
      doc.text(row.join(" | "), 10, yOffset);
      yOffset += 10;
    });

    // Save the document as PDF
    doc.save('universites.pdf');
  }

  exportExcel() {
    this.universiteService.excelExport().subscribe(data => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'universites.xlsx';
      link.click();
    });
  }

  pagination(nbre: number, page: number) {
    this.universiteService.pagination(nbre, page).subscribe(data => {
      this.listUniversites = data;
    });
  }
}
