import { ActionReducerMap } from '@ngrx/store';
import { IApplicationStore } from './store';
import { appReducer } from './state/app.reducer';

export const ROOT_REDUCER: ActionReducerMap<IApplicationStore> = {
    appState: appReducer,
};

export const META_REDUCERS = [];
