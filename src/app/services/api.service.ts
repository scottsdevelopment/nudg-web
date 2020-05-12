import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Policy from './../interfaces/Policy';
import RevisionDeficiency from './../interfaces/RevisionDeficiency';
import { environment } from './../../environments/environment';
import AppState from './../interfaces/AppState';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getStore(): Observable<AppState> {
    return this.http.get<AppState>(`${environment.apiEndpoint}/store`)
  }

  getPolicyById(id: string): Observable<Policy> {
    return this.http.get<Policy>(`${environment.apiEndpoint}/policy/${id}`);
  }

  getDeficiencyById(id: string|number): Observable<RevisionDeficiency> {
    return this.http.get<RevisionDeficiency>(`${environment.apiEndpoint}/deficiency/${id}`);
  }

  createDeficiency(deficiency: Partial<RevisionDeficiency>) {
    return this.http.post<RevisionDeficiency>(`${environment.apiEndpoint}/deficiency`, deficiency);
  }

  updateDeficiency(id: string|number, deficiency: Partial<RevisionDeficiency>) {
    return this.http.put<RevisionDeficiency>(`${environment.apiEndpoint}/deficiency/${id}`, deficiency);
  }
}
