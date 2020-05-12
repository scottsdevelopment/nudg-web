import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { MetaActionTypes, LoadStoreSuccess, LoadStoreError } from '../actions/meta.actions';
import AppState from '../interfaces/AppState';

@Injectable()
export class MetaEffects {

  constructor(private actions$: Actions, private api: ApiService) {
  }

  @Effect()
  loadStore = this.actions$.pipe(
    ofType(MetaActionTypes.Load),
    switchMap(_ => {
      return this.api.getStore().pipe(
        map((response: AppState) => new LoadStoreSuccess(response)),
        catchError(error => of(new LoadStoreError(error)))
      );
    }),
  );
}
