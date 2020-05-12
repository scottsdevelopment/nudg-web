import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import PolicyFamily from '../interfaces/PolicyFamily';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, concatMap, flatMap } from 'rxjs/operators';
import Policy from '../interfaces/Policy';
import { Store, createSelector } from '@ngrx/store';
import AppState from '../interfaces/AppState';
import { UpdateSuccess } from '../actions/deficiency.actions';
import { WebsocketService } from './websocket.service';
import { LoadStore } from '../actions/meta.actions';

@Injectable({
  providedIn: 'root'
})
export class PolicyFamilyService {

  private $policyFamilies: BehaviorSubject<PolicyFamily[]> = new BehaviorSubject([]);

  constructor(private api: ApiService, private store: Store<AppState>, private webSocketService: WebsocketService) {
    /* this.api.getPolicyFamilies()
    .subscribe((response) => {
      this.$policyFamilies.next(response);
    }); */
    this.store.dispatch( new LoadStore() );
    this.webSocketService.updateEvent().pipe(
      filter(event => event.type === 'RevisionDeficiency')
    )
    .subscribe((message) => {
      this.store.dispatch( new UpdateSuccess(message.data) );
    })
  }

  getPolicyFamilies(): Observable<PolicyFamily[]> {
    // return this.$policyFamilies.asObservable();
    return this.store.select(createSelector((state: AppState) => state.policyFamilies, policyFamilies => policyFamilies));
  }

  getPolicyFamilyById(id: number|string): Observable<PolicyFamily> {
    return this.getPolicyFamilies()
    .pipe(
      concatMap((policyFamily) => policyFamily),
      filter((policyFamily) => policyFamily.id == id)
    );
  }

  getPolicyById(id: number|string): Observable<Policy> {
    return this.getPolicyFamilies()
    .pipe(
      concatMap((policyFamily) => policyFamily),
      concatMap((policyFamily) => policyFamily.policies),
      filter((policy) => policy.id == id)
    );
  }

  getPolicyByIndex(id: number|string): Observable<Policy> {
    return this.getPolicyFamilies()
    .pipe(
      flatMap((policyFamily) => policyFamily),
      flatMap((policyFamily) => policyFamily.policies),
      filter((_, index) => index == id)
    );
  }
}
