const loadGoogleMapsApi = require('load-google-maps-api')
import { TreePromise } from './../src/tree-promise';
import { MapsPromise } from './../src/tree-promise';
import { Tree } from './../src/tree';
import { TreeData } from './../src/data';
import { drawChart, drawDoughnutChart, doughnutData } from './../src/chartDraw';
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

function addMarker(latitute, longitude, contentLoc, map){
  const latLng = new google.maps.LatLng(latitute, longitude);
  const marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false
  });
   let infoWindow = new google.maps.InfoWindow({
     content: "<p><strong>Common Name:</strong> " + contentLoc + "</p>"
   });
   google.maps.event.addListener(marker, "click", function(){
     infoWindow.open(map, marker);
   });
}


$(document).ready(function(){

  let treePromiseObject = new TreePromise();
  let treePromise = treePromiseObject.getTrees();
  let data = null;
  let options = { key: process.env.API_KEY };
  let map = null;

  treePromise.then(function(response){
    let body = JSON.parse(response);
    data = new TreeData();
    data.createTreeArray(body.features);
    drawChart(data.treeData);
    drawDoughnutChart(doughnutData(data.treeData));
    // let chart = new TreeChart();
    // chart.drawChart(data.treeData);

    return loadGoogleMapsApi(options);
  }).then(function(googleMaps) {
    map = new googleMaps.Map(document.querySelector('#map'), {
      center: {
        lat: 45.520840,
        lng: -122.677366
      },
      zoom: 12
    })
    // console.log(data);
    data.treeData.forEach(function(tree){
      addMarker(tree.lat, tree.long, tree.commonName, map)
    });
    }).catch(function (error) {
      console.error(error)
    })

  })
