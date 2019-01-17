export class TreePromise {
  getTrees() {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://opendata.arcgis.com/datasets/fd1d618ac3174ad5be730524a4dd778e_26.geojson`
      request.onload = function(){
        if(this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
