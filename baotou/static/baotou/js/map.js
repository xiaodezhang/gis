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
var statistics_flag;
var service_feature = [];


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
        statistics_flag = false;

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

        var feature;

        if(results.length < 0)
                return;
        for(var i = 0;i < results.length;i++){
                var symbol = {"point":pointSymbol,"polyline":lineSymbol,"polygon":polygonSymbol};

                feature = results[i].feature;
                feature.setSymbol(symbol[feature.geometry.type]);
        }
        if(statistics_flag){
                facility_statistics_poly_table_create(results);
        }else{
            add_feature_to_list(results);
        }
}

function facility_statistics_poly_table_create(results){

        var layer_name = new Array(service_layer.layerInfos.length);
        var layer_num = new Array(service_layer.layerInfos.length);

        for(var i = 0;i < service_layer.layerInfos.length;i++){
                layer_name[i] = service_layer.layerInfos[i].name;
                layer_num[i] = 0;
        }

        for(i = 0;i < results.length;i++){
                if(layer_name.indexOf(results[i].layerName) >= 0){
                        layer_num[results[i].layerId] += 1;
                        layer_name[results[i].layerId] = results[i].layerName;
                }
        }

        var table = document.getElementById("table_facility_statistics");
        var tbody = table.getElementsByTagName("tbody")[0];

        tbody.innerHTML = "";
        for(i = 0;i < layer_name.length;i++){
                var tbody_tr = document.createElement("tr");
                var tbody_td_name = document.createElement("td");
                var tbody_td_num = document.createElement("td");

                tbody_td_name.appendChild(document.createTextNode(layer_name[i]))
                tbody_td_num.appendChild(document.createTextNode(layer_num[i]));
                tbody_tr.appendChild(tbody_td_name);
                tbody_tr.appendChild(tbody_td_num);
                tbody.appendChild(tbody_tr);
        }
        $(".div_menu").css("display","none");
        $("#facility_statistics").css("display","block");
}

function add_feature_to_list(results){

        var select = document.getElementById("search_result_select");
        var table = document.getElementById("table_result");
        var tbody = table.getElementsByTagName("tbody")[0];
        
        var layers_name = new Array();
        var layers_id= new Array();

        if(results.length <= 0){
                return;
        }
        select.innerHTML = "";
        layers_name.push(results[0].layerName);
        layers_id.push(results[0].layerId);
        for(var i = 0;i < results.length;i++){
                var tbody_tr = document.createElement("tr");
                var tbody_td_name = document.createElement("td");
                var tbody_td_id = document.createElement("td");
                var tbody_td_operation = document.createElement("td");
                var img_op_locate = document.createElement("img");
                var img_op_info = document.createElement("img");
                
                img_op_locate.src = "../../static/baotou/image/gis/pictures/locate.png";
                img_op_locate.id = "op_locate_img";
                img_op_info.src = "../../static/baotou/image/gis/pictures/AttributesWindow.png";
                tbody_td_operation.appendChild(img_op_locate);
                tbody_td_operation.appendChild(img_op_info);
                tbody_td_operation.appendChild(img_op_info);
                tbody_td_name.appendChild(document.createTextNode(results[i].layerName));
                tbody_td_id.appendChild(document.createTextNode(results[i].layerId));
                tbody_tr.appendChild(tbody_td_name);
                tbody_tr.appendChild(tbody_td_id);
                tbody_tr.appendChild(tbody_td_operation);
                tbody.appendChild(tbody_tr);
                if(layers_name.indexOf(results[i].layerName) < 0){
                        layers_name.push(results[i].layerName);
                        layers_id.push(results[i].layerId);
                }
                
        }
        for(i = 0;i < layers_name.length;i++){
                var option = document.createElement("option");
                var option_text = document.createTextNode(layers_name[i]);
                option.appendChild(option_text);
                select.appendChild(option);
        }

        $(".div_menu").css("display","none");
        $("#search_result").css("display","block");
}
function identify_layers() {

        var layer_input = document.getElementsByClassName("spatial_search_item");
        var layerIds = [];
        if(statistics_flag){
                identify_params.layerIds = service_layer.visibleLayers;
                return;
        }

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
        query_task_operation();
}

function query_task_operation(){

        var query = new esri.tasks.Query();

        for(var i = 0;i < service_layer.layerInfos.length;i++){
                var query_task = new esri.tasks.QueryTask(service_url+ "/" + service_layer.layerInfos[i].id);

                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = "1=1";
                query_task.execute(query,function(feature_set){
                    service_feature.push(feature_set);
                });
        }
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
            layer_select();
            break;
        case 'clearselect':
            select_clear();
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
                dojo.disconnect(click_handle);
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

function select_clear(){

        map.setMapCursor("default"); //wy
        map.infoWindow.hide();
        nav_tool_bar.deactivate();
        map_tool_bar.deactivate();
        map.graphics.clear();
}

function layer_select(){

        map.setMapCursor("url(../../static/baotou/image/gis/cursor/select.cur),auto"); //wy
        statistics_flag = false;
        nav_tool_bar.deactivate();
        map_tool_bar.activate(esri.toolbars.Draw.EXTENT);
}

