import { Component, OnInit } from "@angular/core";
import { AppFacade } from "../state/app.facade";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html"
})
export class HistoryComponent implements OnInit {
  public uploadedFiles: string[];
  constructor(private facade: AppFacade) {}

  ngOnInit() {
    this.facade.uploadedFiles.subscribe(files => {
      this.uploadedFiles = files;
    });
  }

  public clearState() {
    this.facade.resetState();
  }
}
