import { Tree } from './../src/tree.js';

export class TreeData{
  constructor() {
    this.treeData = [];
    this.currentTree = null;
    this.nextTreeId = 0;
    //this.feature = feature;
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

  createTreeArray(feature){
    for(let i = 0; i < feature.length; i++){
      let treesLat = feature[i].geometry.coordinates[1];
      let treesLong = feature[i].geometry.coordinates[0];
      let treesCommon = feature[i].properties.COMMON;
      let treesHeight = feature[i].properties.HEIGHT;
      let treesCircumf = feature[i].properties.CIRCUMF;
      let treesNotes = feature[i].properties.NOTES;
      let treesSci = feature[i].properties.SCIENTIFIC;
      let treesAddress = feature[i].properties.SITE_ADDRESS;
      let treesStatus = feature[i].properties.STATUS;
      let treesOwn = feature[i].properties.Ownership;
      let treesYear = feature[i].properties.YEAR_Designated;
      this.addTreeToTreeData(treesLat, treesLong, treesCommon, treesHeight, treesCircumf, treesNotes, treesSci, treesAddress, treesStatus, treesOwn, treesYear);
    }
  }
}
