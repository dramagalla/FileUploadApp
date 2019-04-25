import { Action } from "@ngrx/store";

export enum AppActionTypes {
  STORE_UPLOADED_FILE = "Store File",
  RESET = "RESET File state"
}

export class StoreUploadedFileAction implements Action {
  public readonly type = AppActionTypes.STORE_UPLOADED_FILE;
  constructor(public payload: string) {}
}

export class ResetStateAction implements Action {
  public readonly type = AppActionTypes.RESET;
}
export type AppActions = StoreUploadedFileAction | ResetStateAction;
