import { Action } from '@ngrx/store'
import RevisionDeficiency from '../interfaces/RevisionDeficiency'

export enum DeficiencyActionTypes {
    Add              = '[DEFICIENCY] Add',
    Remove           = '[DEFICIENCY] Remove',
    Update           = '[DEFICIENCY] Update',
    UpdateSuccess    = '[DEFICIENCY] Update Success',
    Create           = '[DEFICIENCY] Create',
    Get              = '[DEFICIENCY] Get',
    GetSuccess       = '[DEFICIENCY] Get Success',
} 

export class Add implements Action {
    readonly type = DeficiencyActionTypes.Add
    constructor(public payload: RevisionDeficiency) {}
}

export class Remove implements Action {
    readonly type = DeficiencyActionTypes.Remove
    constructor(public payload: number) {}
}

export class Create implements Action {
    readonly type = DeficiencyActionTypes.Create;
    constructor(public payload: Partial<RevisionDeficiency>) {}
}

export class Update implements Action {
    readonly type = DeficiencyActionTypes.Update;
    constructor(public id: number, public payload: Partial<RevisionDeficiency>) {}
}

export class UpdateSuccess implements Action {
    readonly type = DeficiencyActionTypes.UpdateSuccess;
    constructor(public payload: RevisionDeficiency) {}
}

export class Get implements Action {
    readonly type = DeficiencyActionTypes.Get;
    constructor(public id: number) {}
}

export class GetSuccess implements Action {
    readonly type = DeficiencyActionTypes.GetSuccess;
    constructor(public payload: RevisionDeficiency) {}
}

export type DeficiencyActions = Add | Remove | Create | Update | UpdateSuccess | Get | GetSuccess