# Copyright 2011 Omniscale (http://omniscale.com)
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
#     http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from imposm.mapping import (
    Options,
    Points, LineStrings, Polygons,
    String, Bool, Integer, OneOfInt,
    set_default_name_type, LocalizedName,
    WayZOrder, ZOrder, Direction,
    GeneralizedTable, UnionView,
    PseudoArea, meter_to_mapunit, sqr_meter_to_mapunit,
)

# # internal configuration options
# # uncomment to make changes to the default values
import imposm.config
 
# # import relations with missing rings
imposm.config.import_partial_relations = False
 
# # select relation builder: union or contains
# imposm.config.relation_builder = 'contains'

# # log relation that take longer than x seconds
# imposm.config.imposm_multipolygon_report = 60
# 
# # skip relations with more rings (0 skip nothing)
# imposm.config.imposm_multipolygon_max_ring = 0
# 
# # split ways that are longer than x nodes (0 to split nothing)
# imposm.config.imposm_linestring_max_length = 50
# 
# # cache coords in a compact storage (with delta encoding)
# # use this when memory is limited (default)
# imposm.config.imposm_compact_coords_cache = True

# set_default_name_type(LocalizedName(['name:en', 'int_name', 'name']))

db_conf = Options(
#    db='osm-adav',
    host='localhost',
    port=5432,
#    user='osm',
#    password='osm',
    sslmode='allow',
    prefix='osm_new_',
    proj='epsg:900913',
)

amenities = Points(
    name='amenities',
    mapping = {
        'amenity': (
	    "bicycle_parking",
	    "bicycle_rental",
        ),
	'bicycle_parking': ( 'shed', 'building', ),
	},
	fields = (
		('access', String()),
		('bicycle_parking', String()),
		('operator', String()),
	),
)

amenitiesbuilding = Polygons(
    name='amenitiesbuilding',
    mapping = {
        'amenity': (
	    "bicycle_parking",
	    "bicycle_rental",
        ),
	'bicycle_parking': ( 'shed', 
    'building', ),
	},
	fields = (
		('access', String()),
		('bicycle_parking', String()),
		('operator', String()),
	),
)

sensuniques = LineStrings(
	name = 'sensuniques',
	mapping = { 
		'oneway' : ('yes','1','-1'),
	},
	fields = (
		('highway', String()),
		('cycleway', String()),
		('cycleway:left', String()),
		('cycleway:right', String()),
		('maxspeed', Integer()),
	),
)

equipements = LineStrings(
    name = 'cyclelanes',
    mapping = { 'cycleway': (
		    'lane',    
		    'track',    
		    'opposite_lane',   
		    'opposite_track',  
		    'opposite',
		    'shared',
		    'share_busway',
		    'shared_lane',
		    'sharrow',
		    ),
	    'cycleway:left': (
		    'lane',    
		    'track',    
		    'opposite_lane',   
		    'opposite_track',  
		    'opposite',
		    'shared',
		    'share_busway',
		    'shared_lane',
		    'sharrow',
		    ),
	    'cycleway:right': (
			    'lane',    
			    'track',    
			    'opposite_lane',   
			    'opposite_track',  
			    'opposite',
			    'shared',
			    'share_busway',
			    'shared_lane',
			    'sharrow',
			    ),
		'bicycle': ('yes','designated',),
		'highway': ('pedestrian','cycleway','footway','living_street','track'),
		'oneway:bicycle' : ('no','yes','-1','1',),
		'route' : ('bicycle'),
		'network' : ('lcn','rcn','ncn',),
		'maxspeed': ('20','30'),
        },
    fields = (
			('cycleway', String()),
			('cycleway:left', String()),
			('cycleway:right', String()),
			('tracktype', String()),
			('foot', String()),
			('bicycle', String()),
			('oneway', Direction()),
			('oneway:bicycle', Direction()),
			('access', String()),
			('highway', String()),
			('surface', String()),
			('name', String()),
			('maxspeed', Integer()),
			('route', String()),
			('network', String()),
			('area', String()),
			('railway', String())
        ),
)

networks = Polygons(
    name = 'networks',
    mapping = { 'network' : ('lcn','rcn','ncn',), 'route' : ('bicycle',),},
    fields = ( ('route', String()),('name', String()),('ref', String()),('network',String()),),
)
