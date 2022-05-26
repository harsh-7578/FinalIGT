ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([6111774.195766, 441343.931813, 13359235.803155, 4735544.752051]);
var wms_layers = [];

var format_India_State_Boundary_0 = new ol.format.GeoJSON();
var features_India_State_Boundary_0 = format_India_State_Boundary_0.readFeatures(json_India_State_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_State_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_State_Boundary_0.addFeatures(features_India_State_Boundary_0);
var lyr_India_State_Boundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_India_State_Boundary_0, 
                style: style_India_State_Boundary_0,
                interactive: true,
                title: '<img src="styles/legend/India_State_Boundary_0.png" /> India_State_Boundary'
            });
var lyr_hydroMap_georeferenced_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "hydroMap_georeferenced",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/hydroMap_georeferenced_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [6925052.565103, 241682.656830, 11024362.267511, 4457284.833066]
                            })
                        });
var lyr_SolarPotential_georeferenced_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "SolarPotential_georeferenced",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SolarPotential_georeferenced_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [6870329.349844, 670320.784624, 11449780.271527, 4358827.947225]
                            })
                        });
var lyr_windMapgeoreferenced_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "windMapgeoreferenced",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/windMapgeoreferenced_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [6630164.772308, 466920.554021, 11641215.483372, 4597282.516137]
                            })
                        });
var format_hydropotentialr_4 = new ol.format.GeoJSON();
var features_hydropotentialr_4 = format_hydropotentialr_4.readFeatures(json_hydropotentialr_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hydropotentialr_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hydropotentialr_4.addFeatures(features_hydropotentialr_4);
var lyr_hydropotentialr_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hydropotentialr_4, 
                style: style_hydropotentialr_4,
                interactive: true,
                title: '<img src="styles/legend/hydropotentialr_4.png" /> hydropotentialr'
            });
var format_windpotentialr_5 = new ol.format.GeoJSON();
var features_windpotentialr_5 = format_windpotentialr_5.readFeatures(json_windpotentialr_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_windpotentialr_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_windpotentialr_5.addFeatures(features_windpotentialr_5);
var lyr_windpotentialr_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_windpotentialr_5, 
                style: style_windpotentialr_5,
                interactive: true,
                title: '<img src="styles/legend/windpotentialr_5.png" /> windpotentialr'
            });
var format_solarpotentialr_6 = new ol.format.GeoJSON();
var features_solarpotentialr_6 = format_solarpotentialr_6.readFeatures(json_solarpotentialr_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_solarpotentialr_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_solarpotentialr_6.addFeatures(features_solarpotentialr_6);
var lyr_solarpotentialr_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_solarpotentialr_6, 
                style: style_solarpotentialr_6,
                interactive: true,
                title: '<img src="styles/legend/solarpotentialr_6.png" /> solarpotentialr'
            });

lyr_India_State_Boundary_0.setVisible(true);lyr_hydroMap_georeferenced_1.setVisible(false);lyr_SolarPotential_georeferenced_2.setVisible(false);lyr_windMapgeoreferenced_3.setVisible(false);lyr_hydropotentialr_4.setVisible(true);lyr_windpotentialr_5.setVisible(true);lyr_solarpotentialr_6.setVisible(true);
var layersList = [lyr_India_State_Boundary_0,lyr_hydroMap_georeferenced_1,lyr_SolarPotential_georeferenced_2,lyr_windMapgeoreferenced_3,lyr_hydropotentialr_4,lyr_windpotentialr_5,lyr_solarpotentialr_6];
lyr_India_State_Boundary_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_hydropotentialr_4.set('fieldAliases', {'id': 'id', 'Plant Name': 'Plant Name', 'District': 'District', 'State': 'State', 'InstallCap': 'InstallCap', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_windpotentialr_5.set('fieldAliases', {'id': 'id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'WindSpeed': 'WindSpeed', 'WindPowerDensity': 'WindPowerDensity', 'City': 'City', });
lyr_solarpotentialr_6.set('fieldAliases', {'id': 'id', 'State': 'State', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GHI': 'GHI', 'City': 'City', });
lyr_India_State_Boundary_0.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr_hydropotentialr_4.set('fieldImages', {'id': 'Hidden', 'Plant Name': 'TextEdit', 'District': 'TextEdit', 'State': 'TextEdit', 'InstallCap': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_windpotentialr_5.set('fieldImages', {'id': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'WindSpeed': 'TextEdit', 'WindPowerDensity': 'TextEdit', 'City': 'TextEdit', });
lyr_solarpotentialr_6.set('fieldImages', {'id': 'Hidden', 'State': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'GHI': 'TextEdit', 'City': 'TextEdit', });
lyr_India_State_Boundary_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_hydropotentialr_4.set('fieldLabels', {'Plant Name': 'inline label', 'District': 'inline label', 'State': 'inline label', 'InstallCap': 'inline label', });
lyr_windpotentialr_5.set('fieldLabels', {'WindSpeed': 'inline label', 'WindPowerDensity': 'inline label', 'City': 'inline label', });
lyr_solarpotentialr_6.set('fieldLabels', {'GHI': 'inline label', 'City': 'inline label', });
lyr_solarpotentialr_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});