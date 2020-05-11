import { MetaActionTypes, MetaActions } from '../actions/meta.actions';
import PolicyRevision from '../interfaces/PolicyRevision';

export const keyName = 'revisions';
const initialState: PolicyRevision[] = [];

export function reducer(state: PolicyRevision[] = initialState, action: MetaActions) {
    switch (action.type) {
        case MetaActionTypes.LoadSuccess:
            return action.payload[keyName];
        default:
            return state;        
    }
}