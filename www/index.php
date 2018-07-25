<!DOCTYPE html>
<html>
<head>
	<title>Représentation carto vélo du Nord-Pas de Calais</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="src/img/favicon.ico" />
	<!-- css files -->
	<link rel="stylesheet" href="src/css/leaflet.css" />
	<link rel="stylesheet" href="src/css/bootstrap.min.css" />
	<link rel="stylesheet" href="leaflet-search/css/leaflet-search.css" />
	<link rel="stylesheet" href="src/css/leaflet-routing-machine.css" />
	<link rel="stylesheet" href="src/css/font-awesome.css">
	<link rel="stylesheet" href="src/css/leaflet-sidebar.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="src/css/MarkerCluster.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="src/css/style.css" />
</head>
<body>
	<!-- Carto Map -->
	<div id="map" class="sidebar-map"></div>
	<!-- Légendes -->
	<div id="myModal" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog" style="overflow-y: scroll;margin-top: 20px; margin-bottom:50px;">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h3 class="modal-title text-center">Légendes</h3>
				</div>
				<div class="modal-body">
					<a class="btn" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
						Aménagements cyclables
					</a>
					<div class="collapse" id="collapseExample">
						<div class="card card-block">
							<div class="my-legend">
								<div class='legend-scale'>
									<ul class='legend-labels'>
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/piste.png'>
											</span>
											<span class="texte">Piste cyclable</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/bande.png'>
											</span>
											<span class="texte">Bande cyclable et chaucidou</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/couloir_bus_partage_99cc33.png'>
											</span>
											<span class="texte">Couloir de bus partagé</span>
										</li>
										<!--<li><span class="image"><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAFAQMAAACKM9XAAAAAA1BMVEUPYbL1r/KhAAAACklEQVQI12PABQAAGQAB5TSyfwAAAABJRU5ErkJggg=='></span><span class="texte">Double sens cyclable sans bande</span></li>-->
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/aire_pietonne_66ccff.png'>
											</span>
											<span class="texte">Aire piétonne</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/zone_rencontre_66ccff.png'>
											</span>
											<span class="texte">Zone de rencontre ou zone 30</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/voieverte-stabilisee.png'>
											</span>
											<span class="texte">Voie verte et assimilée revêtue</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/voieverte-nonstabilisee.png'>
											</span>
											<span class="texte">Voie verte et assimilée non-revêtue</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/chevrons_bleus.png' />
											</span>
											<span>Double sens cyclable</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/fleche_rouge.svg' />
											</span>
											<span>Sens unique voiture sans équipement</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/parking_velo.png' />
											</span>
											<span class="texte">Parking vélo</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/premiere-legende/station_velo_v.png' />
											</span>
											<span class="texte">Station vélo libre service</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<br>
					<br>
					<a class="btn" data-toggle="collapse" href="#collapsedExample" aria-expanded="false" aria-controls="collapsedExample">
						Véloroutes voies vertes
					</a>
					<div class="collapse" id="collapsedExample">
						<div class="card card-block">
							<div class="my-legend">
								<div class='legend-scale'>
									<ul class='legend-labels'>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_VVV_veloroute.png'>
											</span>
											<span class="texte">Section de Véloroute</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_VVV_voiverte.png'>
											</span>
											<span class="texte">Voie verte avec revétement lisse</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_VVV_voiverte_avec_revetement_rugueux.png'>
											</span>
											<span class="texte">Voie verte avec revétement rugueux</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_VVV_conseille_par_adav.png'>
											</span>
											<span class="texte">Itinéraire conseillé par l'ADAV</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_VVV_shema.png'>
											</span>
											<span class="texte">Véloroute et voie verte en projet</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_Droitauvelo.png'>
											</span>
											<span class="texte">Antenne de Droit au Vélo</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_SOSvelo.png'>
											</span>
											<span class="texte">Points SOS vélo
												<br>(Kit de réparation en cas de crevaison)</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_Gare_SNCF_petit_49.png'>
											</span>
											<span class="texte">Gares et haltes ferroviaires</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_parking_securise_49.png'>
											</span>
											<span class="texte">Abris à vélos, sécurisés</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_bicycle_rental_VLS_bleu_41.png'>
											</span>
											<span class="texte">Loueurs de vélos</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_magasin_reparation_logo_46.png'>
											</span>
											<span class="texte">Vélocistes et ateliers d'aide à la réparation</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/legende_magasin_sport.png'>
											</span>
											<span class="texte">Magasins d'articles de sport</span>
										</li>
										<li>
											<span class="image">
												<img src='src/img/deuxieme-legende/images-layer/travaux.png'>
											</span>
											<span class="texte">Passage inaccessible pour cause de travaux</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<br>
					<br>
				</div>
				<div class="modal-footer text-center">
					<div class="my-legend">
						<div class='legend-scale'>
							<ul class='legend-labels'>
								<div class="partenaires">
									<li>
										<a href="http://www.smirt-npdc.fr/">
											<img class="img-responsive" src="src/img/SMIRTdetail.jpg" alt="SMIRT" />
										</a>
										<a href="http://www.lenord.fr/">
											<img class="img-responsive" src="src/img/cg59.png" alt="CG 59" />
										</a>
										<a href="http://www.lillemetropole.fr/">
											<img class="img-responsive" src="src/img/Logo_MEL.png" alt="LMCU" />
										</a>
										<a href="http://www.communaute-urbaine-dunkerque.fr/">
											<img class="img-responsive" src="src/img/CUD-RVB.jpg" alt="CUD" />
										</a>
										<a href="http://www.ca-stomer.fr/">
											<img class="img-responsive" src="src/img/caso.jpg" alt="CASO" />
										</a>
										<a href="http://www.pasdecalais.fr/">
											<img class="img-responsive" src="src/img/CG62Pasdecalais.png" alt="CG62" />
										</a>
									</li>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Navigation -->
	<div id="sidebar" class="sidebar collapsed">
		<div class="sidebar-tabs">
			<ul role="tablist">
				<li>
					<a href="#home" role="tab" alt="ADAV" title="ADAV">
						<img src="src/img/adav.jpg" style="width: 20px;">
					</a>
				</li>
				<li>
					<a href="#profile" role="tab" alt="Couche de carte" title="Couche de carte">
						<i class="fa fa-file"></i>
					</a>
				</li>
				<!-- <li><a href="#itineraire" role="tab" alt="Calculateur d'itinéraire" title="Calculateur d'itinéraire"><i class="fa fa-road"></i></a></li> -->
				<li>
					<a href="#recherche" role="tab" alt="Recherche" title="Recherche">
						<i class="fa fa-search"></i>
					</a>
				</li>
				<li>
					<a href="#partenaires" role="tab" alt="Nos partenaires" title="Nos partenaires">
						<i class="fa fa-users"></i>
					</a>
				</li>
				<li>
					<a data-toggle="modal" data-target="#myModal" alt="Légendes" title="Légendes">
						<i class="fa fa-info"></i>
					</a>
				</li>
			</ul>
			<ul role="tablist">
			</ul>
		</div>
		<div class="sidebar-content">
			<div class="sidebar-pane" id="home">
				<h1 class="sidebar-header">
					<a href="http://droitauvelo.org" target="_blank" style="color: white;">ADAV</a> - Droit au vélo
					<span class="sidebar-close">
						<i class="fa fa-close"></i>
					</span>
				</h1>
				<p class="lorem">
					<h2>
						<center>La carte vélo-touristique de l'ADAV</center>
					</h2>
					<br>
					<br> Bienvenue sur cette carte vélo-touristique du Nord et du Pas-de-Calais, élaborée par ADAV – Droit au Vélo.
					<br>
					<br> L’association Droit au vélo (ADAV) forte de plus de 2000 adhérents promeut l’usage du vélo au quotidien, améliore la
					sécurité des cyclistes et les représente dans le Nord et le Pas-de-Calais.
					<br>
					<br>
					<a href="http://droitauvelo.org">
						<P align="center">
							<img class="img-responsive" src="src/img/adav.jpg" alt="ADAV" />
					</a>
					</P>
					<br>
					<br>
					<b>
						<center>Cette carte permet de représenter l’ensemble des informations utiles aux déplacements des cyclistes quotidiens mais
							aussi aux cyclotouristes de passage dans la région.</center>
					</b>
					<br>
					<br>
					<ul>
						<li>
							<b>L’ensemble du réseau de Véloroute et Voies Vertes du Nord Pas-de-Calais, en fonction du revêtement. </b>
						</li>
						<br>
						<li>
							<b>Le réseau d’aménagement cyclable de la région.</b>
						</li>
						<br>
						<li>
							<b>L'ensemble des stationnements vélo sécurisés.</b>
						</li>
						<br>
						<li>
							<b>Où acheter, réparer et louer un vélo dans la région.</b>
						</li>
						<br>
						<li>
							<b>Les points SOS vélo</b> : des commerçants mettant à disposition des cyclistes, un kit de réparation en cas de crevaison.
							<a href="https://droitauvelo.org/Points-SOS-Velo" target="_blank">Plus d'information sur notre site internet</a>
						</li>
						<br>
						<li>
							<b>Le réseau des antennes de l’ADAV.</b>
						</li>
					</ul>
					<br>
					<h2>
						<center>Contribuez à Openstreetmap</center>
					</h2>
					<br> Les données sont issus du projet issues de la base de données libres et mondiales
					<a href="https://www.openstreetmap.org/#map=7/49.983/2.813" target="_blank">d'Openstreetmap.org</a> auquel vous pouvez contribuez afin d’enrichir cette carte.
					<br>
					<br>
					<a href="https://openstreetmap.fr/">
						<img class="img-responsive" src="src/img/openstreetmap.jpg" alt="OSM" />
					</a>
					<br>
					<br>
					<a href="https://droitauvelo.org/Carte-des-amenagements-cyclables" target="_blank">Plus d'information sur cette carte et sur les contributions Openstreetmap </a>
					<br>
					<br> Le linéraire de véloroute voie verte est issus des données de la région Haut-de-France, modifié par l’ADAV – Droit
					au vélo, comme le permet la licence ODbL.
					<a href="https://www.data.gouv.fr/fr/datasets/les-veloroutes-et-voies-vertes-en-nord-pas-de-calais-npc/" target="_blank">Télécharger les données</a>
					<br>
					<br>
					<b>
						<center>Si vous remarquez une mauvaise information, ou si vous avez des questions, remarques et suggestions, n’hésitez pas
							à nous en faire part !</center>
					</b>
					<a href="mailto:?to=mathias.vadot@droitauvelo.org"> Contactez nous ! </a>
					<br>
					<br> Bonne visite sur notre carte et sur les routes de la région !
				</p>
			</div>
			<div class="sidebar-pane" id="profile">
				<h1 class="sidebar-header">Cartes
					<span class="sidebar-close">
						<i class="fa fa-close"></i>
					</span>
				</h1>
				<br>
				<p>
					<b>
						<center>Cochez et décochez les différentes couches pour les faire apparaitre sur la carte puis cliquez sur les emplacements
							ou les routes pour obtenir plus d'informations</b>
					</center>
				</p>
				<br>
				<div id="fond"></div>
			</div>
			<div class="sidebar-pane" id="itineraire">
				<h1 class="sidebar-header">Calculateur d'itinéraire (Bêta version)
					<span class="sidebar-close">
						<i class="fa fa-close"></i>
					</span>
				</h1>
				<br>
				<div id="controls"></div>
			</div>
			<div class="sidebar-pane" id="recherche">
				<h1 class="sidebar-header">Rechercher une localité
					<span class="sidebar-close">
						<i class="fa fa-close"></i>
					</span>
				</h1>
				<br>
				<br>
				<p>
					<b>
						<center>Recherchez et zoomez sur une localité de votre choix :</b>
					</center>
				</p>
				<div id="findbox"></div>
			</div>
			<div class="sidebar-pane" id="partenaires">
				<h1 class="sidebar-header">Nos partenaires
					<span class="sidebar-close">
						<i class="fa fa-close"></i>
					</span>
				</h1>
				<br>
				<!-- Sponsors -->
				<div class="logo">
					<div class="smirt">
						<a href="http://www.smirt-npdc.fr/" target="_blank">
							<img class="smirt-pic img-responsive" src="src/img/SMIRTdetail.jpg" alt="SMIRT" />
						</a>
					</div>
					<div class="col-sm-4 parts thumbnail nord">
						<a href="http://www.lenord.fr/" target="_blank">
							<img class="img-responsive" style="width: 60px" src="src/img/cg59.png" alt="CG 59" />
						</a>
					</div>
					<div class="col-sm-4 parts thumbnail">
						<a href="http://www.lillemetropole.fr/" target="_blank">
							<img class="img-responsive" style="height: 58px" src="src/img/Logo_MEL.png" alt="LMCU" />
						</a>
					</div>
					<div class="col-sm-4 parts thumbnail">
						<a href="http://www.communaute-urbaine-dunkerque.fr/" target="_blank">
							<img class="img-responsive" style="height: 58px" src="src/img/CUD-RVB.jpg" alt="CUD" />
						</a>
					</div>
					<div class="col-sm-4 parts thumbnail">
						<a href="http://www.ca-stomer.fr/" target="_blank">
							<img class="img-responsive" style="height: 58px" src="src/img/caso.jpg" alt="CASO" />
						</a>
					</div>
					<div class="col-sm-4 parts thumbnail">
						<a href="http://www.pasdecalais.fr/" target="_blank">
							<img class="img-responsive" style="height: 38px;" src="src/img/CG62Pasdecalais.png" alt="CG62" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- js files -->
		<?php include('src/php/jsFiles.php'); ?>
		<script type="text/javascript">
			$('.modal-dialog').draggable();
			$('.modal').resizable({
				//alsoResize: ".modal-dialog",
				minHeight: 300,
				minWidth: 300
			});
			$('#myModal').on('show.bs.modal', function () {
				$(this).find('.modal-body').css({
					'max-height': '100%'
				});
			});
			$(function () {
				$("#accordion").accordion().hide();
				$('#clicker').button().click(function () {
					var overlayDialogObj = {
						autoOpen: true,
						height: 400,
						width: 310,
						modal: false,
						open: function () {
							$('#accordion').accordion(
								{ heightStyle: "fill", collapsible: true }).show();
						},
						buttons: {
							'Done': function () {
								$(this).dialog('close');
							}
						}
					};
					$('#dialog').dialog(overlayDialogObj).show();
				});
			});
		</script>
</body>
</html>