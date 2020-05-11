import { MetaActionTypes, MetaActions } from '../actions/meta.actions';
import PolicyProcedure from '../interfaces/PolicyProcedure';

export const keyName = 'procedures';
const initialState: PolicyProcedure[] = [];

export function reducer(state: PolicyProcedure[] = initialState, action: MetaActions) {
    switch (action.type) {
        case MetaActionTypes.LoadSuccess:
            return action.payload[keyName];
        default:
            return state;        
    }
}