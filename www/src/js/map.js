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
  // Gares //
  function Gares(features, layers) {
    var strVar = "";
    strVar += "<div class=\"container\">";
    strVar += "     <div class=\"row\">";
    strVar += "     <div class=\"col-sm-3\">";
    strVar += "            <div class=\"card\">";
    strVar += "                <div class=\"card-block\">";
    strVar += "                    <h4 class=\"card-title\">" + features.properties.NOMGARE + "<\/h4>";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "        <\/div>";
    strVar += "<\/div>";
    layers.bindPopup(strVar);
  }

  L.geoJSON(geojson_GARES_RESEAU_TER, {
    style: function (features) {
      return features.properties;
    },
    onEachFeature: Gares,
    pointToLayer: function (features, latlng) {
      var smallIcon = new L.Icon({
        iconUrl: 'src/img/deuxieme-legende/legende_Gare_SNCF_petit_49.png',
        iconSize: [32, 20]
      });
      return L.marker(latlng, {
        icon: smallIcon
      });
    }
  }).addTo(gares);

  // Magasin sport //
  function MagasinSport(features, layers) {
    var strVar = "";
    strVar += "<div class=\"container\">";
    strVar += "     <div class=\"row\">";
    strVar += "     <div class=\"col-sm-3\">";
    strVar += "            <div class=\"card\">";
    strVar += "                <div class=\"card-block\">";
    strVar += "                    <h4 class=\"card-title\">" + features.properties.name + "<\/h4>";
    strVar += "                    <a href=" + features.properties.website + " target=\"_blank\">Site internet</a>";
    strVar += "                    <img class=\"img-responsive img-troncon center-block\" src=\" " + features.properties.image + " \" alt=\"Card image cap\">";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "        <\/div>";
    strVar += "<\/div>";
    layers.bindPopup(strVar);
  }

  L.geoJSON(geojson_171221_Magasin_sport, {
    style: function (features) {
      return features.properties;
    },
    onEachFeature: MagasinSport,
    pointToLayer: function (features, latlng) {
      var smallIcon = new L.Icon({
        iconUrl: 'src/img/deuxieme-legende/images-layer/legende_magasin_sport_blanc.png',
        iconSize: [28, 28]
      });
      return L.marker(latlng, {
        icon: smallIcon
      });
    }
  }).addTo(magasinsport);

  // Magasin vélo //
  function MagasinVelo(features, layers) {
    var strVar = "";
    strVar += "<div class=\"container\">";
    strVar += "     <div class=\"row\">";
    strVar += "     <div class=\"col-sm-3\">";
    strVar += "            <div class=\"card\">";
    strVar += "                <div class=\"card-block\">";
    strVar += "                    <h4 class=\"card-title\">" + features.properties.name + "<\/h4>";
    strVar += "                    <a href=" + features.properties.website + " target=\"_blank\">Site internet</a>";
    strVar += "                    <p>Contact : <b>" + features.properties.contact + "</b></p>";
    strVar += "                    <p>Réduction pour les membres de l'ADAV : <b>" + features.properties.reduc + "</b></p>";
    strVar += "                    <p><b>" + features.properties.infos + "</b></p>";
    strVar += "                    <img class=\"img-responsive img-troncon center-block\" src=\" " + features.properties.image + " \" alt=\"Card image cap\">";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "      <\/div>";
    strVar += "<\/div>";
    layers.bindPopup(strVar);
  }

  L.geoJSON(geojson_170119_Magasin_velo_JS, {
    style: function (features) {
      return features.properties;
    },
    onEachFeature: MagasinVelo,
    pointToLayer: function (features, latlng) {
      var smallIcon = new L.Icon({
        iconUrl: 'src/img/deuxieme-legende/images-layer/legende_magasin_reparation_logo_rouge_blanc.png',
        iconSize: [28, 28]
      });
      return L.marker(latlng, {
        icon: smallIcon
      });
    }
  }).addTo(magasinvelo);

  // Abri vélo //
  function AbriVelo(features, layers) {
    var strVar = "";
    strVar += "<div class=\"container\">";
    strVar += "     <div class=\"row\">";
    strVar += "     <div class=\"col-sm-3\">";
    strVar += "            <div class=\"card\">";
    strVar += "                <div class=\"card-block\">";
    strVar += "                    <h4 class=\"card-title\">" + features.properties.name + "<\/h4>";
    strVar += "                    <p>Capacité : <b>" + features.properties.capacity + " places</b></p>";
    strVar += "                    <a href=" + features.properties.website + " target=\"_blank\">Site internet</a>";
    strVar += "                <img class=\"img-responsive img-troncon center-block\" src=\" " + features.properties.image + " \" alt=\"Card image cap\">";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";
    layers.bindPopup(strVar);
  }

  L.geoJSON(geojson_170119_Abris_velo_NPDC, {
    style: function (features) {
      return features.properties;
    },
    onEachFeature: AbriVelo,
    pointToLayer: function (features, latlng) {
      var smallIcon = new L.Icon({
        iconUrl: 'src/img/deuxieme-legende/legende_parking_securise_49.png',
        iconSize: [28, 28]
      });
      return L.marker(latlng, {
        icon: smallIcon
      });
    }
  }).addTo(abrivelo);

  // Antennes ADAV //
  function Antennes(features, layers) {
    var strVar = "";
    strVar += "<div class=\"container\">";
    strVar += "     <div class=\"row\">";
    strVar += "     <div class=\"col-sm-3\">";
    strVar += "            <div class=\"card\">";
    strVar += "                <div class=\"card-block\">";
    strVar += "                    <h4 class=\"card-title\">" + features.properties.name + "<\/h4>";
    strVar += "                    <a href=" + features.properties.website + " target=\"_blank\">Plus d'informations</a>";
    strVar += "                    <p><b>" + features.properties.Info + "</b></p>";
    strVar += "                    <img class=\"img-responsive img-troncon center-block\" src=\" " + features.properties.image + " \" alt=\"Card image cap\">";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "     <\/div>";
    strVar += "<\/div>";
    layers.bindPopup(strVar);
  }

  L.geoJSON(geojson_161222_Antennes_ADAV, {
    style: function (features) {
      return features.properties;
    },
    onEachFeature: Antennes,
    pointToLayer: function (features, latlng) {
      var smallIcon = new L.Icon({
        iconUrl: 'src/img/deuxieme-legende/images-layer/Droitauvelo_grand_blanc.jpg',
        iconSize: [22, 32]
      });
      return L.marker(latlng, {
        icon: smallIcon
      });
    }
  }).addTo(antennesadav);

  // Location vélo //
  function LocationVelo(features, layers) {
    var strVar = "";
    strVar += "<div class=\"container\">";
    strVar += "     <div class=\"row\">";
    strVar += "     <div class=\"col-sm-3\">";
    strVar += "            <div class=\"card\">";
    strVar += "                <div class=\"card-block\">";
    strVar += "                    <h4 class=\"card-title\">" + features.properties.name + "<\/h4>";
    strVar += "                    <a href=" + features.properties.website + " target=\"_blank\">Site internet</a>";
    strVar += "                    <p>Contact : <b>" + features.properties.contact + "</b></p>";
    strVar += "                    <p><b>" + features.properties.info + "</b></p>";
    strVar += "                    <img class=\"img-responsive img-troncon center-block\" src=\" " + features.properties.image + " \" alt=\"Card image cap\">";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "     <\/div>";
    strVar += "<\/div>";
    layers.bindPopup(strVar);
  }

  L.geoJSON(geojson_161221_location_velo_JS, {
    style: function (features) {
      return features.properties;
    },
    onEachFeature: LocationVelo,
    pointToLayer: function (features, latlng) {
      var smallIcon = new L.Icon({
        iconUrl: 'src/img/deuxieme-legende/images-layer/coche_bicycle_rental_VLS2_blanc.png',
        iconSize: [28, 28]
      });
      return L.marker(latlng, {
        icon: smallIcon
      });
    }
  }).addTo(locationvelo);

  // Points SOS Vélo //
  function pointsos(features, layers) {
    var strVar = "";
    strVar += "<div class=\"container\">";
    strVar += "	<div class=\"row\">";
    strVar += "    	<div class=\"col-sm-3\">";
    strVar += "            <div class=\"card\">";
    strVar += "                <div class=\"card-block\">";
    strVar += "                    <h4 class=\"card-title\">" + features.properties.name + "<\/h4>";
    strVar += "                    <p>Adresse :<b>" + features.properties.adresse + "</b></p>";
    strVar += "                    <p>Ouverture :<b>" + features.properties.ouverture + "</b></p>";
    strVar += "                    <p>Numéro de tel. :<b>" + features.properties.phone + "</b></p>";
    strVar += "                    <img class=\"img-responsive img-troncon center-block\" src=\" " + features.properties.image + " \" alt=\"Card image cap\">";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "	<\/div> <!-- row -->";
    strVar += "<\/div> <!-- c";
    layers.bindPopup(strVar);
  }

  L.geoJSON(geojson_point_sos_velo_2017, {
    style: function (features) {
      return features.properties;
    },
    onEachFeature: pointsos,
    pointToLayer: function (features, latlng) {
      var smallIcon = new L.Icon({
        iconUrl: 'src/img/deuxieme-legende/legende_SOSvelo.png',
        iconSize: [28, 26]
      });
      return L.marker(latlng, {
        icon: smallIcon
      });
    }
  }).addTo(sos);

  // Véloroutes //
  function onEachFeature(features, layers) {
    var route = "";
    route += "<div class=\"container popup\">";
    route += "	<div class=\"row\">";
    route += "       ";
    route += "    	<div class=\"col-sm-3\">";
    route += "            <div class=\"card\">";
    route += "                <div class=\"card-block\">";
    route += "                <img class=\"img-responsive img-troncon center-block\" src=\" " + features.properties.image + " \" alt=\"Card image cap\">";
    route += "                    <hr>"
    route += "                    <p>Itinéraire : <b>" + features.properties.nom_tit_af + "</b></p>";
    route += "                    <p>Distance : <b>" + features.properties.Longueur + "</b></p>";
    route += "                    <p>Véloroute numéro <b>" + features.properties.NUMERO_VEL + "</b></p>";
    route += "                    <a href=" + features.properties.lien + " target=\"_blank\">Consultez la fiche descriptive</a>";
    route += "                <\/div>";
    route += "            <\/div>";
    route += "        <\/div>";
    route += "        ";
    route += "	<\/div> <!-- row -->";
    route += "<\/div> <!-- c";
    layers.bindPopup(route);
  }

  L.geoJSON(geojson_Veloroutes_regionales_decoupe_troncon_typevoie_itiAF3V_JS, {
    style: function (features) {
      switch (features.properties.Type_voie) {
        case '0': return { color: "#9B9995", dashArray: "1, 5" };
        case '1': return { color: "#FA0069" };
        case '2': return { color: "#006428" };
        case '3': return { color: "#8BC21A" };
        case '4': return { color: "#FFD700" };
      }
      return features.properties;
    },
    onEachFeature: onEachFeature,
  }).addTo(route);

  //Travaux 
  function travauxx(features, layers) {
    var strVar="";
    strVar += "<div class=\"container\">";
    strVar += "	<div class=\"row\">";
    strVar += "    	<div class=\"col-sm-3\">";
    strVar += "            <div class=\"card\">";
    strVar += "                <div class=\"card-block\">";
    strVar += "                    <h4 class=\"card-title\">" + features.properties.nom + "<\/h4>";
    strVar += "                    <p>Commentaire :<b>" + features.properties.Commentair + "</b></p>";
    strVar += "                    <img class=\"img-responsive img-troncon center-block\" src=\" "+ features.properties.image + " \" alt=\"Card image cap\">";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "	<\/div> <!-- row -->";
    strVar += "<\/div> <!-- c";
    layers.bindPopup(strVar);
  }

  L.geoJSON(travaux_0, {
    style: function (features) {
    return features.properties;
  },
  onEachFeature : travauxx,
  pointToLayer: function (features, latlng) {
      var smallIcon = new L.Icon({
        iconUrl: 'src/img/deuxieme-legende/images-layer/travaux.png',
        iconSize: [28, 28]
      });
      return L.marker(latlng, {
        icon: smallIcon
      });
    }
  }).addTo(travaux);

  // Liaisons et Points durs //
  function points_durss(features, layers) {
    var route = "";
    route += "<div class=\"container popup\">";
    route += "	<div class=\"row\">";
    route += "       ";
    route += "    	<div class=\"col-sm-3\">";
    route += "            <div class=\"card\">";
    route += "                <div class=\"card-block\">";
    route += "                <img class=\"img-responsive img-troncon center-block\" src=\" " + features.properties.image + " \" alt=\"Card image cap\">";
    route += "                    <hr>"
    route += "                    <p>Commune :<b>" + features.properties.Communes + "</b></p>";
    route += "                    <p>Point dur n°<b>" + features.properties.Numero + "</b></p>";
    route += "                    <p><b>" + features.properties.name + "</b></p>";
    route += "                <\/div>";
    route += "            <\/div>";
    route += "        <\/div>";
    route += "        ";
    route += "	<\/div> <!-- row -->";
    route += "<\/div> <!-- c";
    layers.bindPopup(route);
  }

  L.geoJSON(geojson_Mel_liaisons_et_points_dures_2017, {
    style: function (features) {
      switch (features.properties.type_voie) {
        case '1': return { color: "#6E0400", weight: "10", opacity: "0,5" };
      }
      return features.properties;
    },
    onEachFeature: points_durss,
  }).addTo(points_durs);

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
// https://carto.droitauvelo.org/
// https://www.samier-developpement.fr/carto-adav/www/
// http://localhost:8000/

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

if (
  window.location == "https://carto.droitauvelo.org/" || 
  window.location == "https://carto.droitauvelo.org/#profile/" || 
  window.location == "https://carto.droitauvelo.org/#home/" || 
  window.location == "https://carto.droitauvelo.org/#recherche/" ||
  window.location == "https://carto.droitauvelo.org/#partenaires/" ||
  window.location == "https://carto.droitauvelo.org/#modal/"
  ) {
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
