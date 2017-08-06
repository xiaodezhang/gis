dojo.require("dojo.parser");
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

/*map settting info*/

var xmin = 109.729;
var xmax = 110.068;
var ymin = 40.528;
var ymax = 40.705;
var map_url = "http://114.80.168.38:64813/ArcGIS/rest/services/baotou_ditu/MapServer";
var service_url = "http://114.80.168.38:64813/ArcGIS/rest/services/baotou_yewu/MapServer";
var identify_params;
var identify_task;
var map;
var service_layer;
var map_layer;

var pointSymbol;
var pointSymbol1;
var lineSymbol;
var polygonSymbol;
var click_handle;
var nav_tool_bar;
var map_tool_bar;


$(document).ready(function(){
        dojo.addOnLoad(map_load);
});

function map_load(){
        var extent = new esri.geometry.Extent({"xmin":xmin,"xmax":xmax,"ymin":40.528,"ymax":ymax});
        map = new esri.Map("right_bar",{extent:extent,logo:false});
        map_layer = new esri.layers.ArcGISDynamicMapServiceLayer(map_url);
        service_layer = new esri.layers.ArcGISDynamicMapServiceLayer(service_url);

        identify_params = new esri.tasks.IdentifyParameters();
        identify_params.tolerance = 3;
        identify_params.returnGeometry = true;
        identify_params.layerOption = esri.tasks.IdentifyParameters.LAYER_OPTION_ALL;
        
        map.addLayer(map_layer,1);
        map.addLayer(service_layer,2);

        identify_task = new esri.tasks.IdentifyTask(service_url);

        pointSymbol1 = new esri.symbol.PictureMarkerSymbol("../../static/baotou/image/gis/point.png", 25, 25);
        pointSymbol = new esri.symbol.PictureMarkerSymbol("../../static/baotou/image/gis/shan.gif", 32, 32);
        lineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 255, 0]), 2);
        polygonSymbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 0, 0]), 2), new dojo.Color([255, 255, 0, 0.25]));
     
        click_handle = dojo.connect(map,"onClick",mouse_click);
        map_tool_bar = new esri.toolbars.Draw(map);
        dojo.connect(map_tool_bar, "onDrawEnd",draw_end); //监听制图事件
        dojo.connect(service_layer, "onLoad",service_onload);

}

//监听制图事件：点、线、框、多边形绘制完毕
function draw_end(geometry) {

        if (map.graphics.graphics.length > 0) {
            map.graphics.clear();
        }
        identify_layers();
        identify_params.geometry = geometry;
        identify_params.mapExtent = map.extent;
        identify_task.execute(identify_params,task_complete);
}

function task_complete(results){

        if(results.length < 0)
                return;
        alert(results.length);
}

function identify_layers() {

        var layer_input = document.getElementsByClassName("spatial_search_item");
        var layerIds = [];

        for(var i = 0;i < layer_input.length;i++){
                if(layer_input[i].checked)
                    layerIds.push(layer_input[i].value);
        }
        identify_params.layerIds = layerIds;
}



function mouse_click(evt){

        identify_params.layerIds = service_layer.visibleLayers;
        identify_params.geometry = evt.mapPoint;
        identify_params.mapExtent =  map.extent;
        identify_task.execute(identify_params,attribute_show);
}

function attribute_show(results){

        if(results.length <= 0){
                return;
        }

        if(map.graphics.graphics.length > 0){
                map.graphics.clear();
        }

        var symbol = {"point":pointSymbol,"polyline":lineSymbol,"polygon":polygonSymbol};
        var geo_type = results[0].feature.geometry.type;

        results[0].feature.setSymbol(symbol[geo_type]);
        map.graphics.add(results[0].feature);
        console.log("attribute_show");

}



function service_onload(){

        layers_control_create();
        spatial_search_create();
        attribute_search_create();
        nav_bar_setup();
//    setupNavBar(); //初始化工具条 
}

function layers_control_create(){

        var laycontrol_ul = document.getElementById("laycontrol_ul");
        for(var i = 0;i < service_layer.layerInfos.length;i++){
                var node_li = document.createElement("LI");
                var node_input = document.createElement("INPUT");

//                requestLayerFields(layers.layerInfos[i].id, 6);
                node_input.type = "checkbox";
                node_input.checked = "chekced";
                node_input.value =service_layer.layerInfos[i].id;
                node_input.className = "layers_input";
                node_input.onclick = function(){
                        var visible = [];
                        var inputs = document.getElementsByClassName("layers_input");
                        for(var i = 1;i < inputs.length;i++){
                                if(inputs[i].checked)
                                        visible.push(inputs[i].value);
                        }
                        service_layer.setVisibility(true);
                        service_layer.setVisibleLayers(visible);
                };
                node_li.className = "list-group-item";
                var textnode =document.createTextNode(service_layer.layerInfos[i].name);
                node_li.appendChild(node_input);
                node_li.appendChild(textnode);
                laycontrol_ul.appendChild(node_li);
        }
}

function spatial_search_create(){

        var ul = document.getElementById("spatial_select_ul");

        for(var i = 0;i < service_layer.layerInfos.length;i++){
                var li = document.createElement("LI");
                var input = document.createElement("input");
                var li_text = document.createTextNode(service_layer.layerInfos[i].name);

                li.className = "list-group-item";
                input.type = "checkbox";
                input.className = "spatial_search_item";
                input.checked = "checked";
                input.value = service_layer.layerInfos[i].id;
                li.appendChild(input);
                li.appendChild(li_text);
                ul.appendChild(li);
        }
}

function attribute_search_create(){

        var select = document.getElementById("attribute_search_layers_select");
        
        for(var i = 0;i < service_layer.layerInfos.length;i++){
                var option = document.createElement("option");
                option.appendChild(document.createTextNode(service_layer.layerInfos[i].name));
                option.value = service_layer.layerInfos[i].id;
                select.appendChild(option);
        }
}

function nav_bar_setup(){

        nav_tool_bar = new esri.toolbars.Navigation(map);
        dojo.query(".navItem img").onmouseover(function (evt) {
            dojo.anim(evt.target.parentNode, {
                backgroundColor: '#567AB0'
            });
        }).onmouseout(function (evt) {
            dojo.anim(evt.target.parentNode, {
                backgroundColor: '#336ec4'
            });
        }).onclick(function (evt) {
            dojo.anim(evt.target.parentNode, {
                backgroundColor: '#336ec4'
            });
            navEvent(evt.target.parentNode.id);
        });
        // 将漫游设置为默认操作
        navEvent('deactivate');
}

var map_measure = false;
var map_Hawkeye = true;
function navEvent(id) {
    switch (id) {
        case 'pan':
            map_tool_bar.deactivate();
            map.enablePan();
            map.setMapCursor("url(../../static/baotou/image/gis/cursor/default.cur),auto"); //设置鼠标漫游样式wy
            nav_tool_bar.activate(esri.toolbars.Navigation.PAN);
            break;
        case 'zoomprev':
            nav_tool_bar.zoomToPrevExtent();
            break;
        case 'zoomnext':
            nav_tool_bar.zoomToNextExtent();
            break;
        case 'extent':
            map.setMapCursor("default");
            nav_tool_bar.deactivate();
            map_tool_bar.deactivate();
            var extent = new esri.geometry.Extent(119.782, 32.973, 120.877, 33.726);
            map.setExtent(extent);
            break;
        case 'zoomin':
            map.setMapCursor("url(../../static/baotou/image/gis/cursor/zoom-in.cur),auto"); //设置鼠标放大样式wy
            nav_tool_bar.activate(esri.toolbars.Navigation.ZOOM_IN);
            break;
        case 'select':
            map.setMapCursor("url(../../static/baotou/image/gis/cursor/select.cur),auto"); //wy
            nav_tool_bar.deactivate();
            map_tool_bar.activate(esri.toolbars.Draw.EXTENT);
            break;
        case 'clearselect':
            map.setMapCursor("default"); //wy
            map.infoWindow.hide();
            nav_tool_bar.deactivate();
            map_tool_bar.deactivate();
            map.graphics.clear();
            select_type = 0;
            $("#Div_results_show").html("");
            $("#Div_results").css("display", "none");
            $("#select_attribute_detail_layer").html("<option></option>");
            break;
        //设置地图范围                                                                             
        case 'map_extent':
            updateExtentXML(map.extent.xmin, map.extent.ymin, map.extent.xmax, map.extent.ymax);
            break;
        case 'map_config':
            window.open("XMLOperhtm.htm");
            break;
        case 'zoomout':
            map.setMapCursor("url(../../static/baotou/image/gis/cursor/zoom-out.cur),auto"); //设置鼠标缩小样式wy
            nav_tool_bar.activate(esri.toolbars.Navigation.ZOOM_OUT);
            break;
        case 'deactivate':
            nav_tool_bar.deactivate();
            map_tool_bar.deactivate();
            map.setMapCursor("default"); //wy
            break;
        case 'map_Measurement':
            nav_tool_bar.deactivate();
            if (!map_measure) {
                $("#MeasurementToolDiv").css("display", "block");
                dojo.disconnect(mouseclickhandle);
                map_measure = true;
                map.setMapCursor("url(../../static/baotou/image/gis/cursor/select.cur),auto"); //wy
                map_tool_bar.activate(esri.toolbars.Draw.POLYLINE); //激活maptoolbar的制图类型-多边形
            }
            else {
                $("#MeasurementToolDiv").css("display", "none");
                measurement.clearResult();
                measurement.setTool("area", false);
                measurement.setTool("distance", false);
                measurement.setTool("location", false);
                mouseclickhandle = dojo.connect(map, "onClick", mouseClick);
                map_measure = false;
                map_tool_bar.deactivate();
                map.setMapCursor("default"); //wy
            }
            break;
        case 'map_Hawkeye':
            if (map_Hawkeye) {
                $("#overviewMapDiv").css("display", "block");
                map_Hawkeye = false;
            }
            else {
                $("#overviewMapDiv").css("display", "none");
                map_Hawkeye = true;
            }
            break;
        case 'map_Legend':
            if ($("#Div_LegendControl").is(":hidden")) {//如果隐藏时的处理方法
                $("#Div_LegendControl").css("display", "block");
            }
            else {
                $("#Div_LegendControl").css("display", "none");
            }
            break;
    }
}

