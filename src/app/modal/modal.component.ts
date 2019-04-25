// modal.component.ts

import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FileTreeNode } from "../filestree/file-tree.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

  public selectedNode: FileTreeNode;
  public onCancel(): void {
    this.dialogRef.close();
  }
  public onOkClick() {
    this.dialogRef.close(this.selectedNode);
  }
  ngOnInit() {}

  public onSelection(node: FileTreeNode) {
    this.selectedNode = node;
  }
}
