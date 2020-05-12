import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ApiService } from '../services/api.service';

@Injectable()
export class PolicyFamilyEffects {
  constructor(private actions$: Actions, private api: ApiService) {
  }
}
