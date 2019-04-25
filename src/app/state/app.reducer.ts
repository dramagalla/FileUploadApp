import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { AppActions, AppActionTypes } from './app.actions';
import { IApplicationStore } from '../store';

export interface IFileState {
    files: string[];
}

const INITIAL_STATE: IFileState = {
    files: [],
}
export function appReducer(state: IFileState = INITIAL_STATE, action: AppActions): IFileState {
    switch (action.type) {
        case AppActionTypes.STORE_UPLOADED_FILE:
            return {
                ...state,
                files: [...state.files, action.payload],                
            };
        case AppActionTypes.RESET:
            return {
                ...state,
                files: [],
            };
        default:
            return state;
    }
}

export namespace ApplicationQuery {

    export const getUploadedFiles = createSelector(
        (store: IApplicationStore) => store.appState,
        (state: IFileState) => {
            return state.files;
        },
    );
}
