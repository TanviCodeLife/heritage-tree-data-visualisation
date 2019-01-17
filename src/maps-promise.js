// export class MapsPromise {
//   getMap(){
//     return new Promise(function(resolve, reject){
//       let request = new XMLHttpRequest();
//       let url = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=initMap`
//       request.onload = function(){
//         if(this.status === 200){
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }
