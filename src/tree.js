export class Tree {
  constructor(id, lat, long, common, height, circumf, notes, sci, address, status, own, year){
    this.id = id;
    this.lat = lat;
    this.long = long;
    this.commonName = common;
    this.height = height;
    this.circumf = circumf;
    this.notes = notes;
    this.scientificName = sci;
    this.address = address;
    this.status = status;
    this.ownership = own;
    this.yearDesignated = year;
  }

}
