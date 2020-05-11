import { Action } from '@ngrx/store'
import AppState from '../interfaces/AppState'

export enum MetaActionTypes {
    Load           = '[META] Load Store',
    LoadSuccess    = '[META] Load Store Success',
    LoadError      = '[META] Load Store Error',
} 

export class LoadStore implements Action {
    readonly type = MetaActionTypes.Load
    constructor() {}
}

export class LoadStoreSuccess implements Action {
    readonly type = MetaActionTypes.LoadSuccess
    constructor(public payload: AppState) {}
}

export class LoadStoreError implements Action {
    readonly type = MetaActionTypes.LoadError
    constructor(public error: Error) {}
}

export type MetaActions = LoadStore | LoadStoreSuccess | LoadStoreError;