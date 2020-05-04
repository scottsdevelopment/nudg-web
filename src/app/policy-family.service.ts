import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import PolicyFamily from './interfaces/PolicyFamily';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, concatMap, flatMap } from 'rxjs/operators';
import Policy from './interfaces/Policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyFamilyService {

  private $policyFamilies: BehaviorSubject<PolicyFamily[]> = new BehaviorSubject([]);

  constructor(private api: ApiService) {
    this.api.getPolicyFamilies()
    .subscribe((response) => {
      this.$policyFamilies.next(response);
    });
  }

  getPolicyFamilies(): Observable<PolicyFamily[]> {
    return this.$policyFamilies.asObservable();
  }

  getPolicyFamilyById(id: number|string): Observable<PolicyFamily> {
    return this.$policyFamilies
    .pipe(
      concatMap((policyFamily) => policyFamily),
      filter((policyFamily) => policyFamily.id == id)
    );
  }

  getPolicyById(id: number|string): Observable<Policy> {
    return this.$policyFamilies
    .pipe(
      concatMap((policyFamily) => policyFamily),
      concatMap((policyFamily) => policyFamily.policies),
      filter((policy) => policy.id == id)
    );
  }

  getPolicyByIndex(id: number|string): Observable<Policy> {
    return this.$policyFamilies
    .pipe(
      flatMap((policyFamily) => policyFamily),
      flatMap((policyFamily) => policyFamily.policies),
      filter((_, index) => index == id)
    );
  }
}
