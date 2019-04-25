import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApplicationQuery, IFileState } from './app.reducer';
import { StoreUploadedFileAction, ResetStateAction } from './app.actions';
import { Observable } from 'rxjs';
import { IApplicationStore } from '../store';

@Injectable()
export class AppFacade {
    public get uploadedFiles(): Observable<string[]> {
        return this.store.select(ApplicationQuery.getUploadedFiles);
    }

    constructor(private store: Store<IApplicationStore>) { }

    public storeUploadedFile(fileName: string) {
        this.store.dispatch(new StoreUploadedFileAction(fileName));
    }

    public resetState() {
        this.store.dispatch(new ResetStateAction());
    }
}
