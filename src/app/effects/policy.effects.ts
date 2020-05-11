import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, delay, map, switchMap, exhaustMap} from 'rxjs/operators';
import {Observable, of, pipe} from 'rxjs';
import { ApiService } from '../api.service';
import { PolicyActionTypes, LoadPolicyFamiliesSuccess, LoadPolicyFamiliesError, UpdateDeficiency, UpdateDeficiencySuccess, GetDeficiency, GetDeficiencySuccess, CreateDeficiency } from '../actions/policy.actions'
import PolicyFamily from '../interfaces/PolicyFamily';
import RevisionDeficiency from '../interfaces/RevisionDeficiency';
import AppState from '../interfaces/AppState';
import { MetaActionTypes, LoadStoreSuccess, LoadStoreError } from '../actions/meta.actions';


@Injectable()
export class PolicyEffects {

  constructor(private actions$: Actions, private api: ApiService) {
  }

  @Effect()
  loadStore = this.actions$.pipe(
    ofType(MetaActionTypes.Load),
    switchMap(action => {
      return this.api.getStore().pipe(
          map((response: AppState) => new LoadStoreSuccess(response)),
          catchError( error => of(new LoadStoreError(error)))
      );
    }),
  );

  @Effect()
  loadPolicy = this.actions$.pipe(
    ofType(PolicyActionTypes.Load),
    switchMap(action => {
      return this.api.getStore().pipe(
          map((response: AppState) => new LoadPolicyFamiliesSuccess(response)),
          catchError( error => of(new LoadPolicyFamiliesError(error)))
      );
    }),
  );

  @Effect()
  updateDeficiency = this.actions$.pipe(
    ofType<UpdateDeficiency>(PolicyActionTypes.UpdateDeficiency),
    switchMap(action => {
      return this.api.updateDeficiency(action.id, action.payload).pipe(
        map((response: RevisionDeficiency) => new UpdateDeficiencySuccess(response))
      );
    })
  )

  @Effect()
  getDeficiency = this.actions$.pipe(
    ofType<GetDeficiency>(PolicyActionTypes.GetDeficiency),
    switchMap(action => {
      return this.api.getDeficiencyById(action.id).pipe(
        map((response: RevisionDeficiency) => new UpdateDeficiencySuccess(response))
      );
    })
  )

  @Effect()
  createDeficiency = this.actions$.pipe(
    ofType<CreateDeficiency>(PolicyActionTypes.CreateDeficiency),
    switchMap(action => {
      return this.api.createDeficiency(action.payload).pipe(
        map((response: RevisionDeficiency) => new UpdateDeficiencySuccess(response))
      );
    })
  )
}
