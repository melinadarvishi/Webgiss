ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([44.009549, 23.924009, 65.147489, 40.409274]);
var wms_layers = [];

var format_sea_0 = new ol.format.GeoJSON();
var features_sea_0 = format_sea_0.readFeatures(json_sea_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sea_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sea_0.addFeatures(features_sea_0);
var lyr_sea_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sea_0, 
                style: style_sea_0,
                popuplayertitle: 'sea',
                interactive: true,
                title: '<img src="styles/legend/sea_0.png" /> sea'
            });
var format_iran_ostan_1 = new ol.format.GeoJSON();
var features_iran_ostan_1 = format_iran_ostan_1.readFeatures(json_iran_ostan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_iran_ostan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iran_ostan_1.addFeatures(features_iran_ostan_1);
var lyr_iran_ostan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_iran_ostan_1, 
                style: style_iran_ostan_1,
                popuplayertitle: 'iran_ostan',
                interactive: true,
                title: '<img src="styles/legend/iran_ostan_1.png" /> iran_ostan'
            });
var format_IranCities_2 = new ol.format.GeoJSON();
var features_IranCities_2 = format_IranCities_2.readFeatures(json_IranCities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IranCities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IranCities_2.addFeatures(features_IranCities_2);
var lyr_IranCities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IranCities_2, 
                style: style_IranCities_2,
                popuplayertitle: 'IranCities',
                interactive: true,
                title: '<img src="styles/legend/IranCities_2.png" /> IranCities'
            });

lyr_sea_0.setVisible(true);lyr_iran_ostan_1.setVisible(true);lyr_IranCities_2.setVisible(true);
var layersList = [lyr_sea_0,lyr_iran_ostan_1,lyr_IranCities_2];
lyr_sea_0.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', });
lyr_iran_ostan_1.set('fieldAliases', {'OSTAN': 'OSTAN', 'Area': 'Area', 'Perimeter': 'Perimeter', });
lyr_IranCities_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'area': 'area', });
lyr_sea_0.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_iran_ostan_1.set('fieldImages', {'OSTAN': 'TextEdit', 'Area': 'TextEdit', 'Perimeter': 'TextEdit', });
lyr_IranCities_2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'area': 'TextEdit', });
lyr_sea_0.set('fieldLabels', {'ID': 'no label', 'AREA': 'inline label - visible with data', 'PERIMETER': 'no label', 'ACRES': 'no label', 'HECTARES': 'no label', });
lyr_iran_ostan_1.set('fieldLabels', {'OSTAN': 'inline label - always visible', 'Area': 'inline label - visible with data', 'Perimeter': 'no label', });
lyr_IranCities_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'inline label - visible with data', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'area': 'header label - always visible', });
lyr_IranCities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});