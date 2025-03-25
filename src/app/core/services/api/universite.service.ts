import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universite } from 'src/app/shared/models/universite.model';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private baseUrl = 'http://localhost:8089/kaddem/universite';


  constructor(private http: HttpClient) { }

  // Retrieve all universites
  getAllUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.baseUrl}/retrieve-all-universites`);
  }

  // Retrieve a specific universite by ID
  getUniversiteById(id: number): Observable<Universite> {
    return this.http.get<Universite>(`${this.baseUrl}/retrieve-universite/${id}`);
  }

  // Add a new universite
  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.baseUrl}/add-universite`, universite);
  }

  // Update an existing universite
  updateUniversite(universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.baseUrl}/update-universite`, universite);
  }

  // Delete a universite
  deleteUniversite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove-universite/${id}`);
  }

  // Assign universite to departement
  assignUniversiteToDepartement(universiteId: number, departementId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/affecter-universite-departement/${universiteId}/${departementId}`, {});
  }

  // Retrieve departements for a specific universite
  getDepartementsForUniversite(universiteId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listerDepartementsUniversite/${universiteId}`);
  }


  pdfExport(): Observable<Blob> {
    return this.http.get<Blob>(`${this.baseUrl}/export-pdf`, { responseType: 'blob' as 'json' });
  }

  pagination(nbre: number, page: number): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.baseUrl}/retrieve-all-universites?page=${page}&size=${nbre}`);
  }
}
