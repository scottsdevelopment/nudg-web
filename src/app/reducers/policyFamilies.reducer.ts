import { MetaActionTypes, MetaActions } from '../actions/meta.actions';
import PolicyFamily from './../interfaces/PolicyFamily';

export const keyName = 'policyFamilies'
const initialState: PolicyFamily[] = [];

export function reducer(state: PolicyFamily[] = initialState, action: MetaActions) {
    switch (action.type) {
        case MetaActionTypes.LoadSuccess:
            return action.payload[keyName];
        default:
            return state;
    }
}