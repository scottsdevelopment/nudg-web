import { MetaActionTypes, MetaActions } from '../actions/meta.actions';
import PolicyObjective from '../interfaces/PolicyObjective';

export const keyName = 'objectives';
const initialState: PolicyObjective[] = [];

export function reducer(state: PolicyObjective[] = initialState, action: MetaActions) {
    switch (action.type) {
        case MetaActionTypes.LoadSuccess:
            return action.payload[keyName];
        default:
            return state;
    }
}