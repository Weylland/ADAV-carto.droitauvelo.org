var map
var hillShade = new L.TileLayer("https://c.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution: 'Tuiles de fond <a href="https://www.openstreetmap.org/" target="_blank">OSM.org</a>',
  opacity: 0.7
});
var OSMBlackWhite = new L.TileLayer("https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png", {
  attribution: 'Tuiles de fond <a href="https://www.openstreetmap.se" target="_blank">OpenStreetMap Sweden</a>',
});
var OSMHumanity = new L.TileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution: 'Tuiles de fond <a href="https://www.openstreetmap.org/" target="_blank">OSM.org</a>',
});
var OSMCycleMap = new L.TileLayer("https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png", {
  attribution: 'Tuiles de fond <a href="https://www.opencyclemap.org" target="_blanck">OpenCycleMap.org</a> (⚠ logiciel propriétaire)',
});
var elevation = new L.tileLayer("https://{s}.tile.cartosm.eu/tile/isohypse/{z}/{x}/{y}.png", {
  subdomains: ["a", "b", "c"],
  attribution: 'Elevation : <a href="https://blog.rodolphe.quiedeville.org/" target="_blank">Rodolphe Quiédeville</a>',
  opacity: 0.7
});
var EsriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
var mbTiles = new L.tileLayer('https://carto.droitauvelo.org/mbtiles-server/mbtiles.php?db=db/adav.mbtiles&z={z}&x={x}&y={y}', {
  tms: true,
  attribution: 'Équipement vélo <a href="https://www.droitauvelo.org" target="_blank">ADAV</a>',
  opacity: 0.7
});

var route = new L.LayerGroup();
var gares = new L.LayerGroup();
var magasinsport = new L.LayerGroup();
var magasinvelo = new L.LayerGroup();
var abrivelo = new L.LayerGroup();
var antennesadav = new L.LayerGroup();
var locationvelo = new L.LayerGroup();
var sos = new L.LayerGroup();
var points_durs = new L.LayerGroup();
var travaux = new L.LayerGroup();
// var itineraireadav = new L.LayerGroup();

var baseLayers = {
  "Fond de carte grisé": OSMBlackWhite,
  "Fond de carte en couleur": OSMHumanity,
  "Fond de carte cyclable": OSMCycleMap,
  "Fond de carte imagerie aérienne": EsriWorldImagery
};
var overlays = {
  "Aménagements cyclables de la région": mbTiles,
  // "Ombrage du relief": hillShade,
  // "Courbes de niveau": elevation,
  "Véloroutes et voies vertes de la région": route,
  "Gares et haltes ferroviaires": gares,
  "Abris à vélo, sécurisés": abrivelo,
  "Antennes de l'ADAV - Droit au vélo": antennesadav,
  "Points SOS vélo ( Kit de réparation en libre service )": sos,
  "Vélocistes et ateliers d'aide à la réparation": magasinvelo,
  "Loueurs de vélos": locationvelo,
  "Magasins d'articles de sport": magasinsport,
  "Passage inaccessible pour cause de travaux": travaux,
  "Points durs référencés avec les collectivités partenaires": points_durs,
  // "ADAV itineraire": itineraireadav
};
var southWest = L.latLng(49.2391208, 0.0878906);
var northEast = L.latLng(51.8900539, 6.3500977);
var mapBox = L.latLngBounds(southWest, northEast);

var map;

var loadMap = function () {
  layersCard();
  // FullHash
  var allMapLayers = {
    'grise': OSMBlackWhite,
    'couleur': OSMHumanity,
    'cyclable': OSMCycleMap,
    'aerienne': EsriWorldImagery,
    'veloroute': route,
    'gares': gares,
    'magasins_sport': magasinsport,
    'velocistes': magasinvelo,
    'abris_velo': abrivelo,
    'antennes_adav': antennesadav,
    'location_velo': locationvelo,
    'sos_velo': sos,
    'points_durs': points_durs,
    'amenagements_cyclables': mbTiles
  };
  var hash = new L.Hash(map, allMapLayers);
  // console.log(hash)
  // if (hash.map._loaded !== true) {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //      generateMapSucess,
  //      generateMapFailure)
  //   }
  // }
  // Sidebar
  var sidebar = L.control.sidebar('sidebar').addTo(map);
  // Search 
  map.addControl(new L.Control.Search({
    url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
    jsonpParam: 'json_callback',
    propertyName: 'display_name',
    propertyLoc: ['lat', 'lon'],
    marker: L.circleMarker([0, 0], { radius: 0 }),
    autoType: false,
    zoom: 12,
    collapsed: false,
    container: 'findbox',
    minLength: 2
  }));
  // Print
  /*var mapTiles = {
    'OSMBlackWhite': OSMBlackWhite,
    'OSMHumanity': OSMHumanity,
    'OSMCycleMap': OSMCycleMap,
    'EsriWorldImagery': EsriWorldImagery,
  }
  var mapLayers = {
    'EsriWorldImagery': EsriWorldImagery,
    'route': route,
    'gares': gares,
    'magasinsport': magasinsport,
    'magasinvelo': magasinvelo,
    'abrivelo': abrivelo,
    'antennesadav': antennesadav,
    'locationvelo': locationvelo,
    'sos': sos,
    'points_durs': points_durs,
    'mbTiles': mbTiles
  }
  L.control.browserPrint(mapLayers, mapTiles).addTo(map)*/
  // Marker cluster
  /*var mcg = L.markerClusterGroup.layerSupport().addTo(map);
  mcg.checkIn([
    gares,
  ]);*/
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

  // Layers controls //
  var panelLayers = L.control.layers(baseLayers, overlays);
  panelLayers.addTo(map);
  document.getElementById('fond').appendChild(panelLayers.onAdd(map));
  $("#fond").addClass("leaflet-control-layers-expanded")

  // Echelle //
  L.control.scale({
    metric: true,
    imperial: false,
    position: 'bottomright'
  }).addTo(map);
}
var generateMapSucess  = function(position) {
  map = new L.Map("map", {
    zoom: 9,
    center: [50.6146, 3.0652],
    layers: [hillShade, OSMBlackWhite, route],
    maxBounds: mapBox,
    minZoom: 9
  });
  loadMap(); 
}

var generateMapFailure = function(error) {
  map = new L.Map("map", {
    zoom: 9,
    center: [50.6146, 3.0652],
    layers: [hillShade, OSMBlackWhite, route],
    maxBounds: mapBox,
    minZoom: 9
  });
  loadMap(); 
}

if (localhost) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
     generateMapSucess,
     generateMapFailure)
  }
  else {
    map = new L.Map("map", {
      zoom: 9,
      center: [50.6146, 3.0652],
      layers: [hillShade, OSMBlackWhite, route],
      maxBounds: mapBox,
      minZoom: 9
    });
    loadMap();
  }
} else {
  map = new L.Map("map");
  loadMap();
}
