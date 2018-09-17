var layersCard = function () {
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
                case '0': return { color: "#9B9995", dashArray: "1, 5"};
                case '1': return { color: "#853894" };  // A527A9
                case '2': return { color: "#036635" }; // 006428
                case '3': return { color: "#8BC21A" }; // 8BC21A
                case '4': return { color: "#853894", dashArray: "1, 5" };
            }
            return features.properties;
        },
        onEachFeature: onEachFeature,
    }).addTo(route);

    //Travaux 
    function travauxx(features, layers) {
        var strVar = "";
        strVar += "<div class=\"container\">";
        strVar += "	<div class=\"row\">";
        strVar += "    	<div class=\"col-sm-3\">";
        strVar += "            <div class=\"card\">";
        strVar += "                <div class=\"card-block\">";
        strVar += "                    <h4 class=\"card-title\">" + features.properties.nom + "<\/h4>";
        strVar += "                    <p>Commentaire :<b>" + features.properties.Commentair + "</b></p>";
        strVar += "                    <img class=\"img-responsive img-troncon center-block\" src=\" " + features.properties.image + " \" alt=\"Card image cap\">";
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
        onEachFeature: travauxx,
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
}
