var fault_type_flag = "terminal"
var fault_show_type = "chart"
var draw_mode = false;
var standing_book_type;
var query_results;
var spatial_or_attribute_flag;
var locate_bool;



//鼠标移动操作
var _move = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
$(document).ready(function () {
    $(".div_title").mouseover(function () {
        var div_container = $(this).parent().first().attr("id");
        var div_title = this.id;
        $("#" + div_title).mousedown(function (e) {
            _move = true;
            _x = e.pageX - parseInt($("#" + div_container).css("left"));
            _y = e.pageY - parseInt($("#" + div_container).css("top"));
        });
        $("#" + div_container).mousemove(function (e) {
            if (_move) {
                var x = e.pageX - _x; //移动时根据鼠标位置计算控件左上角的绝对位置
                var y = e.pageY - _y;
                var m = parseInt($("#" + div_container).css("right"));
                var n = parseInt($("#" + div_container).css("bottom"));
                if (x >= 0 && y >= 0) {
                    if (m >= 0 && n >= 0 && x >230 && y>80) {
                        $("#" + div_container).css({ top: y, left: x }); //控件新位置
                    }
                    else if (m < 0 && n >= 0 && x+m > 230 && y > 80) {
                        $("#" + div_container).css({ top: y, left: (x + m) }); //控件新位置
                    }
                    else if (n < 0 && m >= 0 && x > 230 && y+n > 80) {
                        $("#" + div_container).css({ top: (y + n), left: x }); //控件新位置
                    }
                    else if (n < 0 && m < 0 && x+m > 230 && y + n > 80) {
                        $("#" + div_container).css({ top: (y + n), left: (x + m) }); //控件新位置
                    }
                }

            }
        });
        $("#" + div_title).mouseup(function () {
            _move = false;
        });
    });
});

function fault_chart(data){

    var chart_bar = echarts.init(document.getElementById('detail_chart_bar'));
    var xaxis = new Array();
    var yaxis = new Array();

    for(var i = 0;i < data.length;i++){
            var keyname = Object.keys(data[0]);
            var obname = data[i][keyname[0]];
            xaxis[i] =  obname;
            yaxis[i] = data[i].number;
    }

    var option_bar = ({
            grid:{x:30,x2:25,y:40,y2:30},
            calculable:true,
            xAxis:[{
                    type:'category',
                    data:xaxis
            }],
            yAxis:[{
                    type:'value',
                    name:'数量'
            }],
            series:[{
                    name:'数量',
                    type:'bar',
                    data:yaxis
            }]
    });
    chart_bar.setOption(option_bar);

    var chart_pie = echarts.init(document.getElementById('detail_chart_pie'));
    var data_pie = [];
    var obname;
    for(i = 0;i < data.length;i++){
            var keyname = Object.keys(data[0]);
            var obname = data[i][keyname[0]];
            data_pie.push({"value":data[i].number,"name":obname});
    }
    option_pie = {
            calculable : true,
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['55%', '60%'],
                    data: data_pie,
                }
            ]
    };
                    
    chart_pie.setOption(option_pie);


}

function fault_table(data){

        if(fault_type_flag == "factory"){
            $("#detail_all").html('<table class="table table-striped" id="fault_table"> \
                     <thead id="fault_head"><tr><th>ID</th><th>厂家名称</th><th>是否LED</th> \
                     <th>安装时间</th><th>更换时间</th><th>生命</th></tr></thead><tbody></tbody></table>');
            var property = facility_property['fault_factory'];
        }else{
            $("#detail_all").html('<table class="table table-striped" id="fault_table"> \
                     <thead id="fault_head"><tr><th width="30px">ID</th><th width="60px"> \
                     故障名称</th><th width="50px">设备ID</th><th style="width:70px;">设备名称</th> \
                     <th width="60px">消除时间</th><th width="60px">物理地址</th><th width="90px"> \
                     重复报警次数</th></tr></thead><tbody></tbody></table>');
            var property = facility_property['fault_table'];
        }
        var table = document.getElementById("fault_table");
        var tbody = table.getElementsByTagName("tbody")[0];

        

        for(var i = 0;i < data.length;i++){
                var tbody_tr = document.createElement("tr");
                var tbody_td = new Array();
                var tbody_td_data = new Array();
                for(var j = 0;j < property.length;j++){
                        var tbody_td = document.createElement("td");
                        tbody_td.value = data[i][property[j]['item']];
                        tbody_td.appendChild(document.createTextNode(data[i][property[j]['item']]));
                        tbody_tr.appendChild(tbody_td);
                }
                tbody.appendChild(tbody_tr);
        }
}

function get_fault_data(fault_data_type,type){

    $.ajax({
        type: "GET",
        url: fault_data_type,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (json) {

                var data = eval(json);
                if(type == "chart")
                    fault_chart(data);
                else
                    fault_table(data);
        },
        error:function(){
                alert("fault error");
        }
    });
}

function fault_terminal(){
        if(fault_show_type == "chart")
            show_chart("fault_terminal_chart");
        else
            show_table("fault_terminal_table");
        show_fault("terminal");
        fault_type_flag = "terminal";
}

function fault_lamp(){

        if(fault_show_type == "chart")
            show_chart("fault_lamp_chart");
        else
            show_table("fault_lamp_table");
        show_fault("lamp");
        fault_type_flag = "lamp";
}

function fault_factory(){

        if(fault_show_type == "chart")
            show_chart("fault_factory_chart");
        else
            show_table("fault_factory_table");
        show_fault("factory");
        fault_type_flag = "factory";
}

function close_fault(){

    $("#fault_statistics").css("display","none");
}


function fault_chart_show(){

        var fault_data_type = {"terminal" : "fault_terminal_chart",
                                "lamp"    : "fault_lamp_chart",
                                "factory" : "fault_factory_chart"};
        show_chart(fault_data_type[fault_type_flag]);
}

function fault_table_show(){

         var fault_data_type = {"terminal" : "fault_terminal_table",
                                "lamp"    : "fault_lamp_table",
                                "factory" : "fault_factory_table"};
        show_table(fault_data_type[fault_type_flag]);
}

function show_chart(fault_data_type){
        $("#detail_all").css("overflow","visible");
        $("#detail_all").html('<div id="detail_chart_title_pie"> <div id="detail_chart_pie"> \
                </div><div id="pie_title">故<br>障<br>类<br>型<br>饼<br>状<br>图</div> \
                <div id="detail_chart_bar"></div><div id="bar_title">故<br>障<br>类<br>型 \
                <br>直<br>方<br>图</div> </div>');
        fault_show_type = "chart";
        get_fault_data(fault_data_type,"chart");
}
function show_table(fault_data_type){
        $("#detail_all").html("");
        $("#detail_all").css("overflow","auto");
        fault_show_type = "table";
        get_fault_data(fault_data_type,"table");
}

function show_fault(fault_type){

    if(fault_type == fault_type_flag){
            if ($("#fault_statistics").is(":hidden")) {
                $(".div_menu").css("display", "none");
                $("#fault_statistics").css("display", "block");
            }
            else {
                $("#fault_statistics").css("display", "none");
            }

    }else{
                $(".div_menu").css("display", "none");
                $("#fault_statistics").css("display", "block");
    }
}


function mobile_control_close(){
        $("#mobile_control").css("display","none");
}


function mobile_control_show(){
        if($("#mobile_control").is(":hidden")){
                $(".div_menu").css("display","none");
                $("#mobile_control").css("display","block");
                terminal_table_show();
        }else{
                $("#mobile_control").css("display","none");
        }
}

function terminal_table_show(){

    $.ajax({
        type: "GET",
        url: "terminal_data",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (json) {

                var data = eval(json);
                terminal_table_create(data);
        },
        error:function(){
                alert("fault error");
        }
    });
}

function lamp_table_show(){

    $.ajax({
        type: "GET",
        url: "lamp_data",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (json) {

                var data = eval(json);
                terminal_table_create(data);
        },
        error:function(){
                alert("fault error");
        }
    });
}

function terminal_table_create(data){

        var terminal_table = document.getElementById("terminal_and_lamp_table");
        var tbody = terminal_table.getElementsByTagName("tbody")[0];

        tbody.innerHTML = "";
        for(var i = 0;i < data.length;i++){
                var tbody_tr = document.createElement("tr");
                var input = document.createElement("INPUT");
                var tbody_td_input = document.createElement("td");

                input.type= "checkbox";
                input.id = i;
                tbody_td_input.appendChild(input);
                tbody_tr.appendChild(tbody_td_input);

                for(var item in data[i]){
                        var tbody_td = document.createElement("td");
                        tbody_td.value = data[i].tmlid;
                        tbody_td.onclick = function(ev){
                                show_loop_info(ev.currentTarget);
                        }
                        tbody_td.appendChild(document.createTextNode(data[i][item]));
                        tbody_tr.appendChild(tbody_td);
                }
                tbody.appendChild(tbody_tr);
        }
}

function show_loop_info(td){

    $.ajax({
        type: "GET",
        url: "terminal_loop_info",
        dataType: "json",
        data: {"tmlid":td.value},
        contentType: "application/json; charset=utf-8",
        success: function (json) {

                var data = eval(json);
                terminal_loop_table_create(data);
        },
        error:function(){
                alert("fault error");
        }
    });

    $("#mobile_control_loop_list").css("display","block");
}

function loop_list_close(){
         $("#mobile_control_loop_list").css("display","none");
}

function terminal_loop_table_create(data){

        var loop_table = document.getElementById("loop_list_table");
        var tbody = loop_table.getElementsByTagName("tbody")[0];
        var property = facility_property['loop_list'];

        tbody.innerHTML="";
        for(var i = 0;i < data.length;i++){
                var tbody_tr = document.createElement("tr");
                var tbody_td = new Array();
                var tbody_td_data = new Array();

                for(var j = 0;j < property.length;j++){
                        var tbody_td = document.createElement("td");
                        tbody_td.value = data[i][property[j]['item']];
                        tbody_td.appendChild(document.createTextNode(data[i][property[j]['item']]));
                        tbody_tr.appendChild(tbody_td);
                }

                /*
                for(var item in data[i]){
                        var tbody_td = document.createElement("td");
                        tbody_td.value = data[i][item];
                        tbody_td.appendChild(document.createTextNode(data[i][item]));
                        tbody_tr.appendChild(tbody_td);
                }
                */
                tbody.appendChild(tbody_tr);
        }
}

function terminal_and_lamp_selectall(input){

        var terminal_table = document.getElementById("terminal_and_lamp_table");
        var input_items = terminal_table.getElementsByTagName("INPUT");

        for(var i = 1;i < input_items.length;i++){
                input_items[i].checked = input.checked ? "true" : "";
        }
}

function loop_selectall(){
        var loop_input = document.getElementById("select_loop_input");
        var input_items = loop_input.getElementsByTagName("INPUT");

        for(var i = 1;i < input_items.length;i++){
                input_items[i].checked = input_items[0].checked ? "true" : "";
        }
}

function loop_move(){
        var loop_input = document.getElementById("select_loop_input");
        var input_items = loop_input.getElementsByTagName("INPUT");

        for(var i = 0;i < input_items.length;i++){
                input_items[i].checked = "";
        }
}

function spatial_search_show(){

        spatial_or_attribute_flag = "spatial";
        if($("#spatial_search").css("display") != "none"){
                $("#spatial_search").css("display","none");
                return
        }
        $(".div_menu").css("display","none")
        $("#spatial_search").css("display","block");
}


function standing_book_close(){
        $("#standing_book").css("display","none");

}
 
function standing_book_chart(standing_type,group_type){

    $.ajax({
        type: "GET",
        url: "standing_book_chart",
        data:{"standing_type":standing_type,"group_type":group_type},
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (json) {

                var data = eval(json)
                var label_info = [];
                var value_info = [];
                var text_name = {"team":"所属维修队","admin_region":"所属行政区"};

                if(data.length <= 0){
                        console.log("standing book get null!");
                        return;
                }

                for(var i = 0;i < data.length;i++){
                        label_info.push(data[i][text_name[group_type]]);
                        value_info.push(data[i]['数量']);
                }

            var Chart = echarts.init(document.getElementById('standing_book_chart'));
            var myOption = ({
                grid: {
                    x: 30,
                    x2: 25,
                    y: 40,
                    y2: 30
                },
                title: {
                    text: text_name[group_type]+ '统计数据',
                    textStyle: {
                        fontSize: 15
                    },
                    x: 'center',
                    y: 10
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        magicType: { show: true, type: ['line', 'bar'] },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                xAxis: [
                   {
                       type: 'category',
                       data: label_info
                   }
                ],
                yAxis: [
                   {
                       type: 'value',
                       name: '数量'
                   }
                ],
                series: [
                   {
                       name: '数量',
                       type: 'bar',
                       data: value_info
                   }
                ]
            });
            Chart.setOption(myOption);
        },
        error: function (error) {
            alert("调用出错" + error.responseText);
        }
    });
}

function standing_book_table(standing_type){

    $.ajax({
            type: "GET",
            url: "standing_book_table",
            dataType: "json",
            data:{"standing_type":standing_type},
            contentType: "application/json; charset=utf-8",
            success: function (json) {

                var data = eval(json);
                if (data == null || data.length <= 0) {
                    return;
                }
                var table = document.getElementById("table_standing");
                var thead = table.getElementsByTagName("thead")[0];
                var tbody = table.getElementsByTagName("tbody")[0];
                var thead_tr = document.createElement("tr");

                thead.innerHTML = "";
                tbody.innerHTML = "";
                for(item in data[0]){
                        var thead_th = document.createElement("th");
                        var thead_th_text = document.createTextNode(item);
                        thead_th.appendChild(thead_th_text);
                        thead_tr.appendChild(thead_th);
                }
                thead.appendChild(thead_tr);

                for(var i = 0;i < data.length;i++){
                        var tbody_tr = document.createElement("tr");
                        for(item in data[i]){
                            var tbody_td_text = document.createTextNode(data[i][item]);
                            var tbody_td = document.createElement("td");
                            tbody_td.appendChild(tbody_td_text);
                            tbody_tr.appendChild(tbody_td);
                        }
                        tbody.appendChild(tbody_tr);
                }

            },
            error: function (error) {
                alert("调用出错" + error.responseText);
            }

        });
}

function standing_book_show(standing_type,group_type){

    var title = {"meter":"计控箱台账","lamp":"路灯台账",
            "voltage_transformer":"变压器台账","cable_conductor":"电缆线台账"};
    standing_book_chart(standing_type,group_type);
    standing_book_table(standing_type);
    $("#standing_book_title_span").html(title[standing_type]);
    $(".div_menu").css("display","none");
    $("#standing_book").css("display","block");

}

function meter_standing_book_show(){

    standing_book_type = "meter";    
    standing_book_show("meter","admin_region");
}

function lamp_standing_book_show(){

    standing_book_type = "lamp";    
    standing_book_show("lamp","admin_region");
}        

function voltage_transformer_standing_book_show(){

    standing_book_type = "voltage_transformer";    
    standing_book_show("voltage_transformer","admin_region");
}


function cable_conductor_standing_book_show(){

    standing_book_type = "cable_conductor";    
    standing_book_show("cable_conductor","admin_region");
}        

function standing_book_administrative_region_show(){

        standing_book_show(standing_book_type,"admin_region");
}
function standing_book_team_show(){

        standing_book_show(standing_book_type,"team");
}

function spatial_search_close(){
        $("#spatial_search").css("display","none");
}

function layers_select_all(){
        
        var select_all_input = document.getElementById("spatial_search_all");
        var select_item_inputs = document.getElementsByClassName("spatial_search_item");

        /*
        for(var inputs in select_item_inputs){
                inputs.checked = select_all_input.checked ? "checked" : "";
        }
        */
        for(var i = 0;i < select_item_inputs.length;i++){
                select_item_inputs[i].checked = select_all_input.checked ? "checked":"";
        }
}

function search_result_close(){
        $("#search_result").css("display","none");
}

function layers_control_show(){

        if($("#layers_control").css("display") != "none"){
        $("#layers_control").css("display","none");
        return
        }

        $(".div_menu").css("display","none");
        $("#layers_control").css("display","block");
}

function layers_control_close(){
        $("#layers_control").css("display","none");
}

function attribute_search_close(){
        $("#attribute_search").css("display","none");
}

function layers_control_select_all() {
     
    var inputs = document.getElementsByClassName("layers_input");
    var inputs_flag = inputs[0].checked ? "true":"";
    var layers_flag = inputs[0].checked ? true:false;
    var visible = [];

    if(service_layer == null)
                return;

    for(var i = 1;i < inputs.length;i++){
            inputs[i].checked = inputs_flag
    }
    for(i = 0;i < service_layer.layerInfos.length;i++){
            visible.push(i);
    }
    if(layers_flag){
        service_layer.setVisibility(true);
        service_layer.setVisibleLayers(visible);
    }else{
        service_layer.setVisibility(false);
    }
}

function facility_statistics_close(){

        $("#facility_statistics").css("display","none");
}

function facility_statistics_show(){

        if($("#facility_statistics").css("display") != "none"){
                $("#facility_statistics").css("display","none");
                return;
        }
        if(service_feature.length != service_layer.layerInfos.length){
                console.log("service feature number error");
                return;
        }

        var table = document.getElementById("table_facility_statistics");
        var tbody = table.getElementsByTagName("tbody")[0];

        tbody.innerHTML = "";
        for(var i = 0;i < service_feature.length;i++){
                var tbody_tr = document.createElement("tr");
                var tbody_td_name = document.createElement("td");
                var tbody_td_num = document.createElement("td");

//                tbody_td_name.appendChild(document.createTextNode(feature_set[i].fieldAliases.name))
                tbody_td_name.appendChild(document.createTextNode(service_feature[i].features[0].attributes.layer_name));
                tbody_td_num.appendChild(document.createTextNode(service_feature[i].features.length));
                tbody_tr.appendChild(tbody_td_name);
                tbody_tr.appendChild(tbody_td_num);
                tbody.appendChild(tbody_tr);
        }
        $(".div_menu").css("display","none");
        $("#facility_statistics").css("display","block");

}

function facility_statistics_poly_show(){

        if(draw_mode){
                select_clear();
                return;
        }
        draw_mode = true;
        statistics_flag = true;
        select_clear();
        identify_params.layerIds = service_layer.visibleLayers;
        $(".div_menu").css("display","none");
        map.setMapCursor("url(../../static/baotou/image/gis/cursor/select.cur),auto"); //wy
        nav_tool_bar.deactivate();
        map_tool_bar.activate(esri.toolbars.Draw.POLYGON); //激活maptoolbar的制图类型-多边形
}       

function layer_select_poly(){

        statistics_flag = false;
        map.setMapCursor("url(../../static/baotou/image/gis/cursor/select.cur),auto"); //wy
        nav_tool_bar.deactivate();
        map_tool_bar.activate(esri.toolbars.Draw.POLYGON); //激活maptoolbar的制图类型-多边形

}

function attribute_search_show(){

        spatial_or_attribute_flag = "attribute";
        if($("#attribute_search").css("display") != "none"){
            $("#attribute_search").css("display","none");
                return;
        }
        attribute_check2_onchange();
        attribute_check3_onchange();
        $(".div_menu").css("display","none");
        $("#attribute_search").css("display","block");
}

function check_onchange(check_s,select_s,select2_s){

        var check = document.getElementById(check_s);
        var select = document.getElementById(select_s);
        var select2 = document.getElementById(select2_s);

        if(check.checked){
                select.disabled = false;
                select2.disabled = false;
                select.style.background = "white";
                select2.style.background = "white";
        }else{
                select.disabled = true;
                select2.disabled = true;
                select.style.background = "grey";
                select2.style.background = "grey";
        }
}

function attribute_check2_onchange(){

        check_onchange("select_check2","attribute_select2","attribute_value_select2");
}

function attribute_check3_onchange(){

        check_onchange("select_check3","attribute_select3","attribute_value_select3");
}

function attribute_layer_onchange(){

        attribute_select_fill("attribute_select1","attribute_value_select1");
        attribute_select_fill("attribute_select2","attribute_value_select2");
        attribute_select_fill("attribute_select3","attribute_value_select3");
}       

function attribute_select_fill(select_aliase,select_value){

        var select = document.getElementById("attribute_search_layers_select");
        var layer_text = select.options[select.selectedIndex].text;
        var layer_feature_id;

        if(service_feature.length != service_layer.layerInfos.length){
                console.log("service feature number error");
                return;
        }

        layer_feature_id = attribute_search_layer_id(layer_text);

        var attribute_select = document.getElementById(select_aliase);
        var attribute_value_select = document.getElementById(select_value);
        var features = service_feature[layer_feature_id].features;
        var layer_name = features[0].attributes.layer_name;
        
        attribute_select.innerHTML = "";
        attribute_value_select.innerHTML = "";
        var flag = true;
        var attribute_item;
        var property;

        for(var item in facility_property){
                if(facility_property[item][0]['name'] == layer_name){
                        property = facility_property[item];
                        break;
                }
        }
        if(property == null){
                console.log("facility property searhing failed")
                return;
        }

        for(var i = 1;i < property.length;i++){
                for(item in property[i]){
                        var option = document.createElement("option");

                        if(flag)
                                attribute_item = item;
                        flag = false;
                        option.appendChild(document.createTextNode(property[i][item]));
                        option.value = item;
                        attribute_select.appendChild(option);
                }
        }
        for(i = 0;i < features.length;i++){
                if(features[i].attributes[attribute_item] == " " || 
                        features[i].attributes[attribute_item] == null){
                        continue;
                }

                var option_value = document.createElement("option");
                option_value.appendChild(document.createTextNode(features[i].attributes[attribute_item]));
                attribute_value_select.appendChild(option_value);
        }
}

function attribute_aliase_onchange() {

        attribute_search_attribute("attribute_select1","attribute_value_select1");
}       


function attribute2_aliase_onchange() {

        attribute_search_attribute("attribute_select2","attribute_value_select2");
}       

function attribute3_aliase_onchange() {

        attribute_search_attribute("attribute_select3","attribute_value_select3");
}       


function attribute_search_attribute(attribute_text,attribute_value){

        if(service_feature.length != service_layer.layerInfos.length){
                console.log("service feature number error");
                return;
        }

        var select = document.getElementById("attribute_search_layers_select");
        var layer_text = select.options[select.selectedIndex].text;
        var attribute_select = document.getElementById(attribute_text);
        var attribute_select_text = attribute_select.options[attribute_select.selectedIndex].text;
        var attribute_item;
        var attribute_value_select = document.getElementById(attribute_value);
        var layer_feature_id;
        
        layer_feature_id = attribute_search_layer_id(layer_text);
        attribute_value_select.innerHTML = "";
        var features = service_feature[layer_feature_id].features;
        var property;

        for(var item in facility_property){
                if(facility_property[item][0]['name'] == layer_text){
                        property = facility_property[item];
                        break;
                }
        }
        if(property == null){
                console.log("facility property searhing failed")
                return;
        }
        for(var i = 0;i < property.length;i++){
                for(var item in property[i]){
                        if(property[i][item] == attribute_select_text){
                                attribute_item = item;
                        }
                }
        }
        for(i = 0;i < features.length;i++){
                if(features[i].attributes[attribute_item] == " " || 
                        features[i].attributes[attribute_item] == null){
                        continue;
                }
                var option_value = document.createElement("option");

                option_value.appendChild(document.createTextNode(features[i].attributes[attribute_item]));
                attribute_value_select.appendChild(option_value);
        }
}

function attribute_search_layer_id(layer_text){

        for(var i = 0;i < service_feature.length;i++){
                if(service_feature[i].features[0].attributes.layer_name == layer_text){
                        return i;
                }
        }
}

function locate_layer_id(layer_text){

        for(var i = 0;i < service_layer.layerInfos.length;i++){
                if(service_layer.layerInfos[i].name == layer_text){
                        return i;
                }
        }
}

function locate(){

        var select = document.getElementById("attribute_search_layers_select");
        var layer_text = select.options[select.selectedIndex].text;
        var layer_feature_id = locate_layer_id(layer_text);

        if(layer_feature_id == 'undefined'){
                console.log("attribute search layer id error");
                return;
        }
        var locate_query_task = new esri.tasks.QueryTask(service_url+"/"+layer_feature_id);
        var query = new esri.tasks.Query();
        var where_field1 = query_make("attribute_select1","attribute_value_select1"); 
        var where_field2 = query_make("attribute_select2","attribute_value_select2"); 
        var where_field3 = query_make("attribute_select3","attribute_value_select3"); 

        if($("#select_check2").checked){
                where_field1 += "and " + where_field2;
        }
        if($("#select_check3").checked){
                where_field1 += "and " + where_field3;
        }
        query.returnGeometry = true;
        query.outFields = ["*"];
        query.where = where_field1;
        locate_query_task.execute(query,locate_query_succeeded,locate_query_failed);
}

function blingbling(features,geometrys){

        var extent = new esri.geometry.Extent();
        var xmin = 9999999999999;
        var xmax = 0;
        var ymin = 9999999999999;
        var ymax = 0;
        if (geometrys[0].type == "point") {//点要素
            if (features.length == 1) {
                features[0].setSymbol(pointSymbol); //选中单个要素闪烁显示
                map.centerAt(geometrys[0]);
                map.graphics.add(features[0]);
            }
            else {
                for (var i = 0; i < features.length; i++) {
                    features[i].setSymbol(pointSymbol1); //选中多个要素不闪烁
                    map.graphics.add(features[i]);
                    //设置地图显示范围以包括所有选中要素
                    var coor_x = geometrys[i].x;
                    var coor_y = geometrys[i].y;
                    xmin = xmin > coor_x ? coor_x : xmin;
                    xmax = xmax > coor_x ? xmax : coor_x;
                    ymin = ymin > coor_y ? coor_y : ymin;
                    ymax = ymax > coor_y ? ymax : coor_y;
                }
                extent = extent.update(xmin, ymin, xmax, ymax,features.spatialReference);
                map.setExtent(extent.expand(1.1));
            }
        }
        else {
            var lastxmin = xmin;
            var lastymin = ymin;
            var lastxmax = xmax;
            var lastymax = ymax;
            for (var i = 0; i < features.length; i++) {
                if (geometrys[i].type == "polyline") {//线要素
                    features[i].setSymbol(lineSymbol);
                }
                else if (geometrys[i].type == "polygon") {//面要素
                    features[i].setSymbol(polygonSymbol);
                }
                if (geometrys[i].getExtent() != null) {
                    var ext = geometrys[i].getExtent();
                    map.graphics.add(features[i]);
                    xmin = xmin > ext.xmin ? ext.xmin : xmin;
                    ymin = ymin > ext.ymin ? ext.ymin : ymin;
                    xmax = xmax > ext.xmax ? xmax : ext.xmax;
                    ymax = ymax > ext.ymax ? ymax : ext.ymax;
                }
            }
            if (lastxmin == xmin && lastymin == ymin && lastxmax == xmax && lastymax == ymax)
                alert("查询到的结果没有空间图形");
            else {
                extent = extent.update(xmin, ymin, xmax, ymax,features.spatialReference);
                map.setExtent(extent.expand(1.1));
            }
        }
}

function locate_query_succeeded(feature_set){

        if(feature_set.features.length <= 0){
                console.log("locating query features is null!");
                alert("没有查到相关记录,请检查输入是否正确!");
                return;
        }
        locate_bool = true;
        query_results = feature_set;
        if(map.graphics.graphics.length > 0){
                map.graphics.clear();
        }
        var resultsfeature = feature_set.features;
        var geometrys = [];
        var features = [];
        for(var i = 0;i < feature_set.features.length;i++){
                features.push(feature_set.features[i]);
                geometrys.push(feature_set.features[i].geometry);
        }
        blingbling(features,geometrys);
        query_results_show(feature_set);
}


function query_results_show(feature_set){

        var layer_name = [];
        var layer_id = [];

        for(var i = 0;i < feature_set.features.length;i++){
                layer_name.push(feature_set.features[i].attributes.layer_name);
                if(feature_set.features[i].attributes.bh == undefined){
                        var id = '--';
                }else{
                        var id = feature_set.features[i].attributes.bh
                }
                layer_id.push(id);
        }
        add_feature_to_list(layer_name,layer_id,false);
}

function locate_query_failed(){

        console.log("locating query failed!");
}

function query_make(select_s,select_value_s){

        var select = document.getElementById(select_s);
        var query_field = select.value;
        var options = select.options[select.selectedIndex];
        var select_value = document.getElementById(select_value_s)
        var query_value = select_value.value;
        var where;

        where =  query_field + "='" + query_value + "'";
        return where
}

function emulation_meter_show(){

        window.location.href = "http://58.211.255.58:5098/pubdisplay/jkx/jkx.htm";

        /*
        var iframe = document.getElementById("emulation_iframe");
        iframe.src = "http://58.211.255.58:5098/pubdisplay/jkx/jkx.htm";
        */
}

function emulation_box_show(){

        window.location.href = "http://58.211.255.58:5098/pubdisplay/jkx/jkx.htm";
        /*
        var iframe = document.getElementById("emulation_iframe");
        iframe.src = "http://58.211.255.58:5098/pubdisplay/xiangbian/xiangbian.htm";
        */
}

function emulation_close(){

        $("#emulation").css("display","none");
}

function map_attribute_close(){
        $("#map_attribute_show").css("display","none");
}

function maintain_record_show(){

        /*
    var table = document.getElementById("map_attribute_table");
    var tbody = table.getElementsByTagName("tbody")[0];
    var tds = tbody.getElementsByTagName("td");
    var facility_name;

    for(var i = 0;i < tds.length;i++){
            if(tds[i].innerText == "标签编号"){
                    facility_name = tds[i+1].innerText;
                    break;
            }
    }

    $.ajax({
        type: "GET",
        url:"maintain_record",
        data:{"facility_name":facility_name},
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (json) {

                var data = eval(json);
        },
        error:function(){
                alert("fault error");
        }
    });

        */
}

function search_result_layer_select(){

        var select = document.getElementById("search_result_select");
        var layer_text = select.options[select.selectedIndex].text;
        var layer_name = [];
        var layer_id = [];
        var results_layer_name = [];
        var results_layer_id = [];

        if(spatial_or_attribute_flag == "spatial"){
                for(var i = 0;i < task_results.length;i++){
                        results_layer_name.push(task_results[i].layerName)
                        if(task_results[i].feature.attributes.bh == undefined){
                                var id = '--';
                        }else{
                                var id = task_results[i].feature.attributes.bh;
                        }
                        results_layer_id.push(id);
                }
        }else{
                for(var i = 0;i < query_results.features.length;i++){
                        results_layer_name.push(query_results.features[i].attributes.layer_name);
                        if(query_results.features[i].attributes.bh == undefined){
                                var id = '--';
                        }else{
                                var id = query_results.features[i].attributes.bh
                        }

                        results_layer_id.push(id);
                }
        }

        for(var i = 0;i < results_layer_name.length;i++){
                if(results_layer_name[i] == layer_text || 
                        layer_text == 'All'){
                        layer_name.push(results_layer_name[i]);
                        layer_id.push(results_layer_id[i]);
                }
        }
        add_feature_to_list(layer_name,layer_id,true);
}

function live_road_show(){

    var x = 0;  var y = 0;

    if (current_geometry.type == "point") {
        x = current_geometry.x;
        y = current_geometry.y;
    }
    else if (current_geometry.type == "polygon") {
        x = (current_geometry._extent.xmin + current_geometry._extent.xmax) / 2;
        y = (current_geometry._extent.ymin + current_geometry._extent.ymax) / 2;
    }
    else if (current_geometry.type == "polyline") {
        x = current_geometry.paths[0][current_geometry.paths[0].length - 1][0];
        y = current_geometry.paths[0][current_geometry.paths[0].length - 1][1]; ;
    }
    var ggPoint = new BMap.Point(x, y);
    var convertor = new BMap.Convertor();
    var pointArr = [];
    pointArr.push(ggPoint);
    convertor.translate(pointArr, 1, 5, translateCallback);
}

function translateCallback(data) {

    var x = data.points[0].lng;
    var y = data.points[0].lat;
    $("#jiejing_pic").html("");
    $("#map_attribute_content").css("display", "none");
    $("#live_road_content").css("display", "block");
    var panoramaService = new BMap.PanoramaService();
    panoramaService.getPanoramaByLocation(new BMap.Point(x, y), function (data) {
        var panoramaInfo = "";

        if (data == null) {
            alert('此处没有全景地图！');
            return;
        }
        panorama = new BMap.Panorama('jiejing_pic');
        panorama.setPosition(new BMap.Point(data.position.lng, data.position.lat));
    });
} 

function base_info_show(){

        $("#map_attribute_content").css("display","block");
        $("#live_road_content").css("display","none");
}
