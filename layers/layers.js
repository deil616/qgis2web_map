var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_3.png" /> building_house'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_building_house_3.setVisible(true);lyr_highway_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_lab1_2,lyr_building_house_3,lyr_highway_4];
lyr_lab1_2.set('fieldAliases', {'name': 'name', });
lyr_building_house_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'start_date': 'start_date', 'source:housenumber': 'source:housenumber', 'height': 'height', 'addr:city': 'addr:city', 'addr:place': 'addr:place', 'source:addr': 'source:addr', 'name': 'name', 'amenity': 'amenity', 'building:levels': 'building:levels', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'construction': 'construction', 'footway': 'footway', 'turn:lanes:backward': 'turn:lanes:backward', 'lanes:backward': 'lanes:backward', 'turn:lanes': 'turn:lanes', 'snowmobile': 'snowmobile', 'ski': 'ski', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'maxspeed:practical': 'maxspeed:practical', 'motor_vehicle': 'motor_vehicle', 'name:ru': 'name:ru', 'demarcation': 'demarcation', 'living_street': 'living_street', 'waterway': 'waterway', 'tunnel': 'tunnel', 'shelter': 'shelter', 'public_transport': 'public_transport', 'bus': 'bus', 'proposed': 'proposed', 'lanes:forward': 'lanes:forward', 'embankment': 'embankment', 'sidewalk': 'sidewalk', 'alt_name': 'alt_name', 'old_ref': 'old_ref', 'maxweightrating:hgv:conditional': 'maxweightrating:hgv:conditional', 'segregated': 'segregated', 'step_count': 'step_count', 'trail_visibility': 'trail_visibility', 'horse': 'horse', 'width': 'width', 'name:etymology:wikidata': 'name:etymology:wikidata', 'foot': 'foot', 'bicycle': 'bicycle', 'smoothness': 'smoothness', 'destination:ref': 'destination:ref', 'destination': 'destination', 'service': 'service', 'access': 'access', 'lit': 'lit', 'name:en': 'name:en', 'name:de': 'name:de', 'loc_name': 'loc_name', 'maxweightrating:hgv': 'maxweightrating:hgv', 'postal_code': 'postal_code', 'addr:postcode': 'addr:postcode', 'tracktype': 'tracktype', 'wheelchair': 'wheelchair', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'official_name': 'official_name', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'int_ref': 'int_ref', });
lyr_lab1_2.set('fieldImages', {'name': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'start_date': '', 'source:housenumber': '', 'height': '', 'addr:city': '', 'addr:place': '', 'source:addr': '', 'name': '', 'amenity': '', 'building:levels': '', 'addr:postcode': '', 'addr:street': '', 'addr:housenumber': '', 'address': '', });
lyr_highway_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'construction': 'TextEdit', 'footway': 'TextEdit', 'turn:lanes:backward': 'TextEdit', 'lanes:backward': 'TextEdit', 'turn:lanes': 'TextEdit', 'snowmobile': 'TextEdit', 'ski': 'TextEdit', 'motorcycle': 'TextEdit', 'motorcar': 'TextEdit', 'maxspeed:practical': 'TextEdit', 'motor_vehicle': 'TextEdit', 'name:ru': 'TextEdit', 'demarcation': 'TextEdit', 'living_street': 'TextEdit', 'waterway': 'TextEdit', 'tunnel': 'TextEdit', 'shelter': 'TextEdit', 'public_transport': 'TextEdit', 'bus': 'TextEdit', 'proposed': 'TextEdit', 'lanes:forward': 'TextEdit', 'embankment': 'TextEdit', 'sidewalk': 'TextEdit', 'alt_name': 'TextEdit', 'old_ref': 'TextEdit', 'maxweightrating:hgv:conditional': 'TextEdit', 'segregated': 'TextEdit', 'step_count': 'TextEdit', 'trail_visibility': 'TextEdit', 'horse': 'TextEdit', 'width': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'smoothness': 'TextEdit', 'destination:ref': 'TextEdit', 'destination': 'TextEdit', 'service': 'TextEdit', 'access': 'TextEdit', 'lit': 'TextEdit', 'name:en': 'TextEdit', 'name:de': 'TextEdit', 'loc_name': 'TextEdit', 'maxweightrating:hgv': 'TextEdit', 'postal_code': 'TextEdit', 'addr:postcode': 'TextEdit', 'tracktype': 'TextEdit', 'wheelchair': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'official_name': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'int_ref': 'TextEdit', });
lyr_lab1_2.set('fieldLabels', {'name': 'no label', });
lyr_building_house_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'start_date': 'no label', 'source:housenumber': 'no label', 'height': 'no label', 'addr:city': 'no label', 'addr:place': 'no label', 'source:addr': 'no label', 'name': 'no label', 'amenity': 'no label', 'building:levels': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'construction': 'no label', 'footway': 'no label', 'turn:lanes:backward': 'no label', 'lanes:backward': 'no label', 'turn:lanes': 'no label', 'snowmobile': 'no label', 'ski': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'maxspeed:practical': 'no label', 'motor_vehicle': 'no label', 'name:ru': 'no label', 'demarcation': 'no label', 'living_street': 'no label', 'waterway': 'no label', 'tunnel': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'proposed': 'no label', 'lanes:forward': 'no label', 'embankment': 'no label', 'sidewalk': 'no label', 'alt_name': 'no label', 'old_ref': 'no label', 'maxweightrating:hgv:conditional': 'no label', 'segregated': 'no label', 'step_count': 'no label', 'trail_visibility': 'no label', 'horse': 'no label', 'width': 'no label', 'name:etymology:wikidata': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'smoothness': 'no label', 'destination:ref': 'no label', 'destination': 'no label', 'service': 'no label', 'access': 'no label', 'lit': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'loc_name': 'no label', 'maxweightrating:hgv': 'no label', 'postal_code': 'no label', 'addr:postcode': 'no label', 'tracktype': 'no label', 'wheelchair': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'official_name': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'int_ref': 'no label', });
lyr_highway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});