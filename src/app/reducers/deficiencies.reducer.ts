import { MetaActionTypes, MetaActions, LoadStoreSuccess } from '../actions/meta.actions';
import RevisionDeficiency from '../interfaces/RevisionDeficiency';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

export const keyName = 'deficiencies'
// const initialState: RevisionDeficiency[] = [];

export interface State extends EntityState<RevisionDeficiency> {
}

export function selectById(a: RevisionDeficiency): number {
    //In this case this would be optional since primary key is id
    return a.id;
}

/* export function sortByName(a: RevisionDeficiency, b: RevisionDeficiency): number {
    return a.name.localeCompare(b.sort);
} */

export const adapter: EntityAdapter<RevisionDeficiency> = createEntityAdapter<RevisionDeficiency>({
    selectId: selectById,
    // sortComparer: sortByName,
});

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
    // selectedUserId: null,
});

/* const userReducer = createReducer(initialState,
    on(LoadStoreSuccess, (state, { deficiencies }) => {
        
    }));

export function reducer(state: State | undefined, action: Action) {

    return userReducer(state, action);
} */

export function reducer(state = initialState, action: MetaActions) {
    switch (action.type) {
        case MetaActionTypes.LoadSuccess:
            return adapter.setAll(action.payload[keyName], state);
        default:
            return state;
    }
}

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();


export const selectState = createFeatureSelector<State>(keyName);
export const selectAllSelector = createSelector(selectState, selectAll);
export const selectByRevision = (revisionId: number) => createSelector(selectAllSelector, (deficiencies) => deficiencies.filter(deficiency => deficiency.revisionId === revisionId))