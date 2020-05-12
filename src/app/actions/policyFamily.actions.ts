
import { Action } from '@ngrx/store'
import PolicyFamily from '../interfaces/PolicyFamily'
import AppState from '../interfaces/AppState'

export enum PolicyActionTypes {
    Load                    = '[POLICY] Load Policy Families',
    LoadSuccess             = '[POLICY] Load Policy Families Success',
    LoadError               = '[POLICY] Load Policy Families Error',
    Add                     = '[POLICY] Add Policy Family',
    Remove                  = '[POLICY] Remove Policy Family'
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


export type PolicyActions = LoadPolicyFamilies | LoadPolicyFamiliesSuccess | LoadPolicyFamiliesError | AddPolicyFamily | RemovePolicyFamily;