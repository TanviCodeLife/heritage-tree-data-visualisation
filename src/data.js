import { Tree } from './../src/tree.js';

export class TreeData{
  constructor() {
    this.treeData = [];
    this.currentTree = null;
    this.nextTreeId = 0;
  }

  assignTreeId() {
    let newId = this.nextTreeId;
    this.nextTreeId++;
    return newId;
  }

  addTreeToTreeData(lat, long){
    let treeId = this.assignTreeId();
    let newTree = new Tree(treeId, lat, long);
    this.currentTree = newTree;
    this.treeData.push(newTree);
  }
}
