import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PolicyFamily from './interfaces/PolicyFamily';
import Policy from './interfaces/Policy';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPolicyFamilies(): Observable<PolicyFamily[]> {
    return this.http.get<PolicyFamily[]>('http://localhost:3000/policyFamily')
  }

  getPolicyById(id: string): Observable<Policy> {
    return this.http.get<Policy>(`http://localhost:3000/policy/${id}`);
  }
}
