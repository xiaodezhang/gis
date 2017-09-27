﻿dojo.require("dojo.parser");
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.layout.AccordionContainer");
dojo.require("dijit.layout.AccordionPane");
dojo.require("esri.layers.FeatureLayer");
dojo.require("esri.layers.WMSLayer");
dojo.require("esri.toolbars.navigation");
dojo.require("dojo.fx.easing");
dojo.require("esri.dijit.TimeSlider");
dojo.require("esri.dijit.Measurement");
dojo.require("esri.tasks.GeometryService");
dojo.require("esri.dijit.OverviewMap");
dojo.require("esri.dijit.Legend");
dojo.require("esri.units");
var xmin = 109.729;
var xmax = 110.068;
var ymin = 40.528;
var ymax = 40.705;
var map_url = "http://114.80.168.38:64813/ArcGIS/rest/services/baotou_ditu/MapServer";
var service_url = "http://114.80.168.38:64813/ArcGIS/rest/services/baotou_yewu/MapServer";


//绑定载入事件为init()，程序载入时首先执行init()
$(document).ready(function(){
        dojo.addOnLoad(map_load);
});

function map_load(){
        var extent = new esri.geometry.Extent({"xmin":xmin,"xmax":xmax,"ymin":40.528,"ymax":ymax});
        var map = new esri.Map("mapDiv",{extent:extent,logo:false});
        var map_layer = new esri.layers.ArcGISDynamicMapServiceLayer(map_url);
        var service_layer = new esri.layers.ArcGISDynamicMapServiceLayer(service_url);

        map.addLayer(map_layer,1);
        map.addLayer(service_layer,2);
}


