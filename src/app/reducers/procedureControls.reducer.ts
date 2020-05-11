import { MetaActionTypes, MetaActions } from '../actions/meta.actions';
import ProcedureControl from '../interfaces/ProcedureControl';

export const keyName = 'procedureControls';
const initialState: ProcedureControl[] = [];

export function reducer(state: ProcedureControl[] = initialState, action: MetaActions) {
    switch (action.type) {
        case MetaActionTypes.LoadSuccess:
            return action.payload[keyName];
        default:
            return state;        
    }
}