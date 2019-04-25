import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModalComponent } from "./modal/modal.component";
import { FileUploadComponent } from "./fileupload/fileupload.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { HistoryComponent } from "./history/history.component";
import { FilesTreeComponent } from "./filestree/filestree.component";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AppFacade } from "./state/app.facade";
import { ROOT_REDUCER, META_REDUCERS } from "./reducers";

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    FileUploadComponent,
    HeaderComponent,
    SidenavListComponent,
    HistoryComponent,
    FilesTreeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(ROOT_REDUCER, { metaReducers: META_REDUCERS })
  ],
  providers: [AppFacade],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {}
