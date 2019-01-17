const loadGoogleMapsApi = require('load-google-maps-api')
import { TreePromise } from './../src/tree-promise';
import { MapsPromise } from './../src/tree-promise';
import { Tree } from './../src/tree';
import { TreeData } from './../src/data';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



function addMarker(latitute, longitude, contentLoc, map){
  const latLng = new google.maps.LatLng(latitute, longitude);
  const marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false
  });
   let infoWindow = new google.maps.InfoWindow({
     content: contentLoc
   });
   google.maps.event.addListener(marker, "click", function(){
     infoWindow.open(map, marker);
   });
}


$(document).ready(function(){
  let options = { key: process.env.API_KEY };
  let map;
  loadGoogleMapsApi(options).then(function (googleMaps) {
  map = new googleMaps.Map(document.querySelector('#map'), {
    center: {
      lat: 45.520840,
      lng: -122.677366
    },
    zoom: 12
  })
  const epicodus = { lat: 45.520840, lng: -122.677366 };
  const marker1 = new googleMaps.Marker({ position: epicodus, map: map });
    var markers = [{
      "locName": "IRCO",
      "street": "10301 N.E. Glisan Street",
      "city": "Portland",
      contentString: "<p>IRCO</p>" + "<p>10301 N.E. Glisan Street</p>" + "<a class='btn btn-primary' href='https://s3-us-west-2.amazonaws.com/wecode-file-storage-development-objectstoreaf1a2ace/pdfs/kindergarten-signup.pdf'>Details!</a>",
      "state": "OR",
      "zip": 97220,
      lat: 45.52687,
      lon: -122.556986
    },
    {
      "locName": "Earl Boyles Elementary School",
      "street": "10822 S.E. Bush Street",
      "city": "Portland",
      contentString: "<p>Earl Boyles Elementary School</p>" + "<p>10822 S.E. Bush Street</p>" + "<a class='btn btn-primary' href='https://s3-us-west-2.amazonaws.com/wecode-file-storage-development-objectstoreaf1a2ace/pdfs/kindergarten-signup.pdf'>Details!</a>",
      "state": "OR",
      "zip": 97266,
      lat: 45.494709,
      lon: -122.551952
    }];

    markers.forEach(marker => {
      addMarker(marker.lat, marker.lon, marker.contentString, map);
    });
}).catch(function (error) {
  console.error(error)
})


  let treePromiseObject = new TreePromise();
  let treePromise = treePromiseObject.getTrees();

  treePromise.then(function(response){
    let body = JSON.parse(response);
    let data = new TreeData();

    for(let i = 0; i < body.features.length; i++){
      let treesLat = body.features[i].geometry.coordinates[0];
      let treesLong = body.features[i].geometry.coordinates[1];
      
      data.addTreeToTreeData(treesLat, treesLong);

    }
    // let tree = new Tree(treesLat, treesLong)


    console.log(data)

    // console.log(trees);

  })

})
