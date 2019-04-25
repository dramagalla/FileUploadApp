import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FileUploadComponent } from "./fileupload/fileupload.component";
import { HistoryComponent } from "./history/history.component";

const routes: Routes = [
  { path: "fileUpload", component: FileUploadComponent },
  { path: "history", component: HistoryComponent },
  { path: "", redirectTo: "/fileUpload", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
