import { MetaActionTypes, MetaActions } from '../actions/meta.actions';
import Policy from '../interfaces/Policy';

export const keyName = 'policies';
const initialState: Policy[] = [];

export function reducer(state: Policy[] = initialState, action: MetaActions) {
    switch (action.type) {
        case MetaActionTypes.LoadSuccess:
            return action.payload[keyName];
        default:
            return state;
    }
}