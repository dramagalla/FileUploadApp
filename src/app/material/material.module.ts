// material.module.ts
import { NgModule } from "@angular/core";

import {
  MatDialogModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTreeModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";

@NgModule({
  exports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTreeModule
  ]
})
export class MaterialModule {}
