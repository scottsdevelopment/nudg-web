import * as PolicyActions from '../actions/policy.actions';
import { MetaActionTypes, MetaActions } from '../actions/meta.actions';
import Policy from '../interfaces/Policy';

export const keyName = 'policies';
const initialState: Policy[] = [];

/* AppState = {
    deficiencies: [],
    objectives: [],
    policies: [],
    policyFamilies: [],
    procedureControls: [],
    procedures: [],
    proccesses: [],
    revisions: []    
} */

export function reducer(state: Policy[] = initialState, action: PolicyActions.PolicyActions | MetaActions) {
    switch (action.type) {
        case MetaActionTypes.LoadSuccess:
            return action.payload[keyName];
       /*
        case PolicyActions.PolicyActionTypes.UpdateDeficiencySuccess:
            const deficiencies = [...state.deficiencies];
            let index = deficiencies.findIndex(((deficiency) => deficiency.id === action.payload.id));
            if (index !== -1) {
                deficiencies[index] = action.payload;
            } else {
                deficiencies.push(action.payload)
            }
            return {
                ...state,
                deficiencies
            } */
        default:
            return state;
    }
}