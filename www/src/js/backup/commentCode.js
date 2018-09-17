// Print
// L.control.browserPrint({
//   mapLayers,
//   mapTiles,
//   printModes: ["Portrait", "Landscape", "Custom"]
// }).addTo(map);

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

// $(".modal-dialog").draggable();
// $(".modal").resizable({
//   //alsoResize: ".modal-dialog",
//   minHeight: 300,
//   minWidth: 300
// });
// $("#myModal").on("show.bs.modal", function() {
//   $(this)
//     .find(".modal-body")
//     .css({
//       "max-height": "100%"
//     });
// });
// $(function() {
//   $("#accordion")
//     .accordion()
//     .hide();
//   $("#clicker")
//     .button()
//     .click(function() {
//       var overlayDialogObj = {
//         autoOpen: true,
//         height: 400,
//         width: 310,
//         modal: false,
//         open: function() {
//           $("#accordion")
//             .accordion({ heightStyle: "fill", collapsible: true })
//             .show();
//         },
//         buttons: {
//           Done: function() {
//             $(this).dialog("close");
//           }
//         }
//       };
//       $("#dialog")
//         .dialog(overlayDialogObj)
//         .show();
//     });
// });
// veloroute highlighting tests
// var voieVerte;
// for (var i = 0; i < geojson_Veloroutes_regionales_decoupe_troncon_typevoie_itiAF3V_JS.features.length; i++) {
//     voieVerte = geojson_Veloroutes_regionales_decoupe_troncon_typevoie_itiAF3V_JS.features[i].properties.nom_tit_af;
//     console.log(voieVerte)
// }
// function surbrillance(e) {
//     var objet = e.target;
//     objet.setStyle({
//         weight: 8
//     })
// }
// function resetsurbrillance(e){
//     var objet = e.target;
//     objet.setStyle({
//         weight: 3
//     })
// }
// veloRoute.on({
//     mouseover: surbrillance,
//     mouseout: resetsurbrillance
// })