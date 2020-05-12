import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import RevisionDeficiency from '../interfaces/RevisionDeficiency';
import { DeficiencyActionTypes, Update, UpdateSuccess, Get, Create } from '../actions/deficiency.actions';

@Injectable()
export class DeficiencyEffects {

  constructor(private actions$: Actions, private api: ApiService) {
  }

  @Effect()
  update = this.actions$.pipe(
    ofType<Update>(DeficiencyActionTypes.Update),
    switchMap(action => {
      return this.api.updateDeficiency(action.id, action.payload).pipe(
        map((response: RevisionDeficiency) => new UpdateSuccess(response))
      );
    })
  );

  @Effect()
  get = this.actions$.pipe(
    ofType<Get>(DeficiencyActionTypes.Get),
    switchMap(action => {
      return this.api.getDeficiencyById(action.id).pipe(
        map((response: RevisionDeficiency) => new UpdateSuccess(response))
      );
    })
  )

  @Effect()
  create = this.actions$.pipe(
    ofType<Create>(DeficiencyActionTypes.Create),
    switchMap(action => {
      return this.api.createDeficiency(action.payload).pipe(
        map((response: RevisionDeficiency) => new UpdateSuccess(response))
      );
    })
  )
}
