import { Injectable } from "@angular/core";

export class FileTreeNode {
  name: string;
  children?: FileTreeNode[];

  constructor(name: string) {
    this.name = name;
  }
}

@Injectable()
export class FileTreeService {
  public nodeTreeList = [];
  public filePaths = [
    "root/dir1/dirx/file.ext",
    "root/dir1/dirx/file1.ext",
    "root/dir1/file2.ext",
    "root/dir2/diry/file3.ext",
    "root/dir3/dirz/file4.ext",
    "root/dir4/dira/file5.ext",
    "root/dir5/dirb/file6.ext",
    "root/dir6/dir0/file7.ext",
    "root/dir6/dir0/file8.ext",
    "root/dir6/dir0/file9.ext",
    "root/file10.ext",
    "root/dir7/dirc/dirv/file11.ext",
    "root/dir7/dirc/dire/",
    "root/dir7/dirc/file12.ext"
  ];

  public generateTree(): FileTreeNode[] {
    let tree = [];
    this.filePaths.forEach(path => {
      let folders = path.split("/");
      this.buildTreeElements(folders, tree);
    });
    return tree;
  }

  private buildTreeElements(folders: string[], currentNode: FileTreeNode[]) {
    // Check to see if the path already exists.
    let existingPath = currentNode.find(x => x.name == folders[0]);

    if (existingPath) {
      // The path to this item was already in the tree, so don't add it again.
      // Set the current level to this path's children
      currentNode = existingPath.children;
    } else {
      let node = new FileTreeNode(folders[0]);
      node.children = [];
      currentNode.push(node);
      currentNode = node.children;
    }
    folders.shift(); // Remove first element from the folders array.
    if (folders[0]) {
      this.buildTreeElements(folders, currentNode);
    }
  }
}
