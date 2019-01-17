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

  addTreeToTreeData(lat, long, common, height, circumf, notes, sci, address, status, own, year){
    let treeId = this.assignTreeId();
    let newTree = new Tree(treeId, lat, long, common, height, circumf, notes, sci, address, status, own, year);
    this.currentTree = newTree;
    this.treeData.push(newTree);
  }

  displayTreeData(){
    return this.treeData;
  }
}
