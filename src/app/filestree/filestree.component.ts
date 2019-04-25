import { Component, Output, EventEmitter } from "@angular/core";
import { FileTreeService, FileTreeNode } from "./file-tree.service";
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";

@Component({
  selector: "app-filestree",
  templateUrl: "./filestree.component.html",
  styleUrls: ["./filestree.component.css"],
  providers: [FileTreeService]
})
export class FilesTreeComponent {
  @Output() selectedNodeChange = new EventEmitter<FileTreeNode>();
  treeControl = new NestedTreeControl<FileTreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FileTreeNode>();
  activeNode: FileTreeNode;

  constructor(private fileTreeService: FileTreeService) {
    this.dataSource.data = this.fileTreeService.generateTree();
    this.treeControl.expand(this.dataSource.data[0]);
  }

  hasChild = (_: number, node: FileTreeNode) =>
    !!node.children && node.children.length > 0;

  public setActiveNode(node: FileTreeNode) {
    if (this.selectableNode(node) && node != this.activeNode) {
      this.activeNode = node;
      this.selectedNodeChange.next(node);
    }
  }

  public selectableNode(node: FileTreeNode) {
    return node.name.indexOf(".ext") > -1;
  }
}
