// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import PolicyFamily from '../interfaces/PolicyFamily'
import RevisionDeficiency from '../interfaces/RevisionDeficiency'
import AppState from '../interfaces/AppState'



export enum PolicyActionTypes {
    Load                    = '[POLICY] Load Policy Families',
    LoadSuccess             = '[POLICY] Load Policy Families Success',
    LoadError               = '[POLICY] Load Policy Families Error',
    Add                     = '[POLICY] Add Policy Family',
    Remove                  = '[POLICY] Remove Policy Family',
    UpdateDeficiency        = '[POLICY] Update Revision Deficiency',
    UpdateDeficiencySuccess = '[POLICY] Update Revision Deficiency Success',
    CreateDeficiency        = '[POLICY] Create Revision Deficiency',
    GetDeficiency           = '[POLICY] Get Revision Deficiency',
    GetDeficiencySuccess    = '[POLICY] Get Revision Deficiency Success',
} 

export class LoadPolicyFamilies implements Action {
    readonly type = PolicyActionTypes.Load
    constructor() {}
}

export class LoadPolicyFamiliesSuccess implements Action {
    readonly type = PolicyActionTypes.LoadSuccess
    constructor(public payload: AppState) {}
}

export class LoadPolicyFamiliesError implements Action {
    readonly type = PolicyActionTypes.LoadError
    constructor(public error: Error) {}
}

export class AddPolicyFamily implements Action {
    readonly type = PolicyActionTypes.Add
    constructor(public payload: PolicyFamily) {}
}

export class RemovePolicyFamily implements Action {
    readonly type = PolicyActionTypes.Remove
    constructor(public payload: number) {}
}

export class CreateDeficiency implements Action {
    readonly type = PolicyActionTypes.CreateDeficiency;
    constructor(public payload: Partial<RevisionDeficiency>) {}
}

export class UpdateDeficiency implements Action {
    readonly type = PolicyActionTypes.UpdateDeficiency;
    constructor(public id: number, public payload: Partial<RevisionDeficiency>) {}
}

export class UpdateDeficiencySuccess implements Action {
    readonly type = PolicyActionTypes.UpdateDeficiencySuccess;
    constructor(public payload: RevisionDeficiency) {}
}

export class GetDeficiency implements Action {
    readonly type = PolicyActionTypes.GetDeficiency;
    constructor(public id: number) {}
}

export class GetDeficiencySuccess implements Action {
    readonly type = PolicyActionTypes.GetDeficiencySuccess;
    constructor(public payload: RevisionDeficiency) {}
}

export type PolicyActions = LoadPolicyFamilies | LoadPolicyFamiliesSuccess | LoadPolicyFamiliesError | AddPolicyFamily | RemovePolicyFamily | UpdateDeficiency | UpdateDeficiencySuccess
| GetDeficiency | GetDeficiencySuccess | CreateDeficiency;