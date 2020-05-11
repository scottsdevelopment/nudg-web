import { MetaActionTypes, MetaActions } from '../actions/meta.actions';
import RevisionProcess from '../interfaces/RevisionProcess';

export const keyName = 'proccesses';
const initialState: RevisionProcess[] = [];

export function reducer(state: RevisionProcess[] = initialState, action: MetaActions) {
    switch (action.type) {
        case MetaActionTypes.LoadSuccess:
            return action.payload[keyName];
        default:
            return state;        
    }
}