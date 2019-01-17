const loadGoogleMapsApi = require('load-google-maps-api')
import { TreePromise } from './../src/tree-promise';
import { MapsPromise } from './../src/tree-promise';
import { Tree } from './../src/tree';
import { TreeData } from './../src/data';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// function treeData() {
//  let treePromiseObject = new TreePromise();
//  let treePromise = treePromiseObject.getTrees();
//
//  treePromise.then(function(response){
//    let body = JSON.parse(response);
//    let data = new TreeData();
//    for(let i = 0; i < body.features.length; i++){
//      let treesLat = body.features[i].geometry.coordinates[0];
//      let treesLong = body.features[i].geometry.coordinates[1];
//
//      data.addTreeToTreeData(treesLat, treesLong);
//    }
//
//  })
// }

// function addMarker(latitute, longitude, contentLoc, map){
//   const latLng = new google.maps.LatLng(latitute, longitude);
//   const marker = new google.maps.Marker({
//     position: latLng,
//     map: map,
//     draggable: false
//   });
//    let infoWindow = new google.maps.InfoWindow({
//      content: contentLoc
//    });
//    google.maps.event.addListener(marker, "click", function(){
//      infoWindow.open(map, marker);
//    });
// }


$(document).ready(function(){
  // let coords = treeData()
  let treePromiseObject = new TreePromise();
  let treePromise = treePromiseObject.getTrees();
  let map;
  treePromise.then(function(response){
    let body = JSON.parse(response);
    let data = new TreeData();
    for(let i = 0; i < body.features.length; i++){
      let treesLat = body.features[i].geometry.coordinates[0];
      let treesLong = body.features[i].geometry.coordinates[1];
      let treesCommon = body.features[i].properties.COMMON;
      let treesHeight = body.features[i].properties.HEIGHT;
      let treesCircumf = body.features[i].properties.CIRCUMF;
      let treesNotes = body.features[i].properties.NOTES;
      let treesSci = body.features[i].properties.SCIENTIFIC;
      let treesAddress = body.features[i].properties.SITE_ADDRESS;
      let treesStatus = body.features[i].properties.STATUS;
      let treesOwn = body.features[i].properties.Ownership;
      let treesYear = body.features[i].properties.YEAR_Designated;
      data.addTreeToTreeData(treesLat, treesLong, treesCommon, treesHeight, treesCircumf, treesNotes, treesSci, treesAddress, treesStatus, treesOwn, treesYear);
    }
    let options = { key: process.env.API_KEY };
    console.log(data)
    return loadGoogleMapsApi(options)
  })

  .then(function (googleMaps) {
  map = new googleMaps.Map(document.querySelector('#map'), {
    center: {
      lat: 45.520840,
      lng: -122.677366
    },
    zoom: 12
  })
    map.data.loadGeoJson(
      'https://opendata.arcgis.com/datasets/fd1d618ac3174ad5be730524a4dd778e_26.geojson');

}).catch(function (error) {
  console.error(error)
})



})
