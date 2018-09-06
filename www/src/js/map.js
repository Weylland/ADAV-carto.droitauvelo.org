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
  "Véloroutes et voies vertes de la région": route,
  // "Ombrage du relief": hillShade,
  // "Courbes de niveau": elevation,
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
  // Layers controls 
  var panelLayers = L.control.layers(baseLayers, overlays);
  panelLayers.addTo(map);
  document.getElementById('fond').appendChild(panelLayers.onAdd(map));
  $("#fond").addClass("leaflet-control-layers-expanded")

  // Print
  L.control.browserPrint({
    printModes: [
      L.control.browserPrint.mode.landscape("Paysage"),
      L.control.browserPrint.mode.portrait("Portrait"),
      L.control.browserPrint.mode.custom("Personnalisé"),
    ]
  }).addTo(map);

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
    'amenagements_cyclables': mbTiles,
    'zones_travaux': travaux
  };
  var hash = new L.Hash(map, allMapLayers);

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

  // Echelle //
  L.control.scale({
    metric: true,
    imperial: false,
    position: 'bottomright'
  }).addTo(map);  
}

var routing = function () {
  var control = L.Routing.control({
    waypoints: [],
    routeWhileDragging: true,
    reverseWaypoints: true,
    router: L.Routing.graphHopper('1d460f42-2220-4fcf-8eff-454cac1ae99f', {
        urlParameters: {
            vehicle: 'bike',
            locale: 'fr',
        }
    }),
    geocoder: L.Control.Geocoder.bing('AtwDxrwRVqkTV73gq13SdD0qo7DQFYGRQT-WR0pPb0JS_eVLkKq2okV_MR2qLRlz'),
    suggest: L.Control.Geocoder.bing('AtwDxrwRVqkTV73gq13SdD0qo7DQFYGRQT-WR0pPb0JS_eVLkKq2okV_MR2qLRlz')
  });
  
  function createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
  }

  var removeRoute = document.getElementById("removeRoute");
  var addRoute = document.getElementById("addRoute");

  var addRouteF = function () {
    control.addTo(map);
    addRoute.style.display = "none";
    removeRoute.style.display = "block";
    var popupRoute = map.on('click', function(e) {
      var container = L.DomUtil.create('div'),
          startBtn = createButton('Départ', container),
          destBtn = createButton('Arrivée', container);
    
      L.DomEvent.on(startBtn, 'click', function() {
          control.spliceWaypoints(0, 1, e.latlng);
          map.closePopup();
      });
      
      L.DomEvent.on(destBtn, 'click', function() {
          control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
          map.closePopup();
      });
    
      L.popup()
          .setContent(container)
          .setLatLng(e.latlng)
          .openOn(map);
    });
  }
  
  var removeRouteF = function () {
    control.remove(map);
    removeRoute.style.display = "none";
    addRoute.style.display = "block";
    map.off('click');
  }

  addRoute.addEventListener("click", addRouteF);
  removeRoute.addEventListener("click", removeRouteF);
}

var generateMapSucess  = function(position) {
  map = new L.Map("map", {
    zoom: 14,
    center: [position.coords.latitude, position.coords.longitude],
    layers: [hillShade, OSMBlackWhite, route],
    maxBounds: mapBox,
    minZoom: 9
  });
  loadMap();
  routing();
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
  routing();
}

if (localhostUrl) {
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
    routing();
  }
} else {
  map = new L.Map("map", {
    minZoom: 9,
    maxBounds: mapBox,
  });
  loadMap();
  routing();
}