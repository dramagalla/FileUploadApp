import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ModalComponent } from "../modal/modal.component";
import { AppFacade } from "../state/app.facade";

@Component({
  selector: "app-fileupload",
  templateUrl: "./fileupload.component.html",
  styleUrls: ["./fileupload.component.css"]
})
export class FileUploadComponent implements OnInit {
  ngOnInit() {}

  fileName: string;
  uploadComplete: boolean;
  showProgressBar: boolean;
  progressValue: number;

  constructor(public dialog: MatDialog, private facade: AppFacade) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(file => {
      this.fileName = file ? file.name : "";
      this.uploadComplete = false;
      this.showProgressBar = false;
    });
  }

  public upload() {
    this.progressValue = 0;
    this.showProgressBar = true;
    this.uploadComplete = false;
    const interval = setInterval(() => {
      if (this.progressValue < 100)
        this.progressValue = this.progressValue + 25;
    }, 1000);
    setTimeout(() => {
      this.uploadComplete = true;
      clearInterval(interval);
      this.updateFileState(this.fileName);
    }, 5000);
  }

  private updateFileState(file: string) {
    this.facade.storeUploadedFile(file);
  }

  public clearSelection() {
    this.fileName = "";
    this.showProgressBar = false;
    this.uploadComplete = false;
  }
}
