// Print
// var mapTiles = {
//   'OSMBlackWhite': OSMBlackWhite,
//   'OSMHumanity': OSMHumanity,
//   'OSMCycleMap': OSMCycleMap,
//   'EsriWorldImagery': EsriWorldImagery,
// }
// var mapLayers = {
//   'route': route,
//   'gares': gares,
//   'magasinsport': magasinsport,
//   'magasinvelo': magasinvelo,
//   'abrivelo': abrivelo,
//   'antennesadav': antennesadav,
//   'locationvelo': locationvelo,
//   'sos': sos,
//   'points_durs': points_durs,
//   'mbTiles': mbTiles
// }
// L.control.browserPrint({
//   mapLayers, 
//   mapTiles,
//   printModes: ["Portrait", "Landscape", "Custom"]
// }).addTo(map);
// var printPortrait = function() {
//   L.control.browserPrint.mode.landscape(mapLayers, mapTiles);
// }

// Marker cluster
// var mcg = L.markerClusterGroup.layerSupport().addTo(map);
// mcg.checkIn([
//   gares,
// ]);

// Calculateur d'itinéraires //
// var control = L.Routing.control({
//  waypoints: [
//    L.latLng(50.6146,3.0652),
//    L.latLng(50.6146,4.0652)
//  ],
//  router: L.Routing.graphHopper('f4b9217d-8a01-4e8c-8525-86abf96b2b55' , {
//    urlParameters: {
//      vehicle: 'bike',
//      locale: 'fr',
//    }
//  }),
//  routeWhileDragging: true
// }).addTo(map);

// var routeBlock = control.onAdd(map);
// document.getElementById('controls').appendChild(routeBlock);

// code philippe

// console.log(hash)
// if (hash.map._loaded !== true) {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//      generateMapSucess,
//      generateMapFailure)
//   }
// }