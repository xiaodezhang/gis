var fault_type_flag = "terminal"
var fault_show_type = "chart"



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
            /*
            title:{
                    text:'故障类型直方图',
                    textStyle:{fontSize:15},
                    x: 'center',
                    y:10
            },
            tooltip:{trigger:'axis'},
            toolbox:{
                    show:true,
                    feature:{
                            magicType:{show:true,type:['line','bar']},
                            saveAsImage:{show:true}
                    }
            },
            */
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

            /*
    title : {
        text: '故障类型饼状图',
        x:'right'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
            */
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

        }else{
            $("#detail_all").html('<table class="table table-striped" id="fault_table"> \
                     <thead id="fault_head"><tr><th width="30px">ID</th><th width="60px"> \
                     故障名称</th><th width="50px">设备ID</th><th width="70px">设备名称</th> \
                     <th width="60px">消除时间</th><th width="60px">物理地址</th><th width="90px"> \
                     重复报警次数</th></tr></thead><tbody></tbody></table>');

        }
        var table = document.getElementById("fault_table");
        var tbody = table.getElementsByTagName("tbody")[0];
        for(var i = 0;i < data.length;i++){
                var tbody_tr = document.createElement("tr");
                var tbody_td = new Array();
                var tbody_td_data = new Array();
                for(var item in data[i]){
                        var tbody_td = document.createElement("td");
                        tbody_td.value = data[i][item];
                        tbody_td.appendChild(document.createTextNode(data[i][item]));
                        tbody_tr.appendChild(tbody_td);
                }
                tbody.appendChild(tbody_tr);
        }
}
/*
function fault_table(data){
        var row_width= parseInt($("#detail_all").css("width"));
        var table_id = $("#detail_all").html("<table id='dgrid'></table>");
        var rows = [];
        if(fault_type_flag == "factory"){
                for(var i = 0;i < data.length;i++){
                        rows.push({
                                facid:data[i].facid,
                                facname:data[i].facname,
                                ledbool:data[i].ledbool,
                                installtime:data[i].installtime,
                                changetime:data[i].changetime,
                                lifetime:data[i].lifetime,
                        });
                }
                var columns= [[
                         {field:'facid',title:'facid',width:row_width*0.12,align:'center'},
                         {field:'facname',title:'facname',width:row_width*0.12,align:'center'},
                         {field:'ledbool',title:'ledbool',width:row_width*0.12,align:'center'},
                         {field:'installtime',title:'installtime',width:row_width*0.20,align:'center'},
                         {field:'changetime',title:'changetime',width:row_width*0.12,align:'center'},
                         {field:'lifetime',title:'lifetime',width:row_width*0.12,align:'center'},
                ]];

                
        }else{
                for(var i = 0;i < data.length;i++){
                        rows.push({
                                errid:data[i].errid,
                                errname:data[i].errname,
                                tmlid:data[i].tmlid,
                                tmlname:data[i].tmlname,
                                dtcreate:data[i].dtcreate,
                                dtremove:data[i].dtremove,
                                phyid:data[i].phyid,
                                tml_sub_id1:data[i].tml_sub_id1,
                                tml_sub_id2:data[i].tml_sub_id2,
                                errcount:data[i].errcount,
                                type:data[i].type,
                        });
                }
                var columns= [[
                         {field:'errid',title:'errid',width:row_width*0.12,align:'center'},
                         {field:'errname',title:'errname',width:row_width*0.12,align:'center'},
                         {field:'tmlid',title:'tmlid',width:row_width*0.12,align:'center'},
                         {field:'tmlname',title:'tmlname',width:row_width*0.20,align:'center'},
                         {field:'dtcreate',title:'dtcreate',width:row_width*0.12,align:'center'},
                         {field:'dtremove',title:'dtremove',width:row_width*0.12,align:'center'},
                         {field:'phyid',title:'phyid',width:row_width*0.12,align:'center'},
//                         {field:'tml_sub_id1',title:'tml_sub_id1',width:row_width*0.12,align:'center'},
//                         {field:'tml_sub_id2',title:'tml_sub_id2',width:row_width*0.12,align:'center'},
                         {field:'errcount',title:'errcount',width:row_width*0.12,align:'center'},
                         {field:'type',title:'type',width:row_width*0.12,align:'center'},
                ]];
        }


        $("#dgrid").datagrid({
                iconCls:'icon-save',
                width: row_width,
                idField:'errid',
                pagination:true,
                data:rows.slice(0,13),
                frozenColumns: columns,
        });

        var pager = $("#dgrid").datagrid("getPager");  
        pager.pagination({  
                total:rows.length,  
                pageSize:13,
                showPageList:false,
                onSelectPage:function (pageNo, pageSize) {  
                    var start = (pageNo - 1) * pageSize;  
                    var end = start + pageSize;  
                    $("#dgrid").datagrid("loadData", data.slice(start, end));  
                    pager.pagination('refresh', {  
                        total:rows.length,  
                        pageNumber:pageNo  
                    });  
                }  
            });  
}
*/

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

function terminal_table_create(data){

        var terminal_table = document.getElementById("terminal_and_lamp_table");
        var tbody = terminal_table.getElementsByTagName("tbody")[0];
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

        tbody.innerHTML="";
        for(var i = 0;i < data.length;i++){
                var tbody_tr = document.createElement("tr");
                var tbody_td = new Array();
                var tbody_td_data = new Array();

                for(var item in data[i]){
                        var tbody_td = document.createElement("td");
                        tbody_td.value = data[i][item];
                        tbody_td.appendChild(document.createTextNode(data[i][item]));
                        tbody_tr.appendChild(tbody_td);
                }
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
 
function standing_book_chart(db_table_name,value){

    $.ajax({
        type: "GET",
        url: "standing_book_chart",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (json) {
            var c = eval(json);

            if (c == null || c.length <= 0) {
                return;
            }
            var i;
            var label_info = [];
            var value_info = [];
            for (i = 0; i < c.length; i++) {
                if (c[i][value] == "" || c[i][value] == " " || c[i][value] == null) {
                    c[i][value] = "未定义";
                }
                label_info[i] = c[i][value];
                value_info[i] = c[i]["数量"];
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
                    text: '计控箱根据'+value + '统计数据',
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

function standing_book_table(db_table_name){

    $.ajax({
            type: "GET",
            url: "standing_book_table",
            dataType: "json",
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

function meter_standing_book_show(){

    var value = "维护所";
    var table_name = "jkx_taizhang";
    standing_book_chart(table_name,value);
    standing_book_table(table_name);
    $(".div_menu").css("diplay","none");
    $("#standing_book").css("display","block");
}

function lamp_standing_book_show(){

    var value = "维护所";
    var table_name = "jkx_taizhang";
    standing_book_chart(table_name,value);
    standing_book_table(table_name);
    $(".div_menu").css("diplay","none");
    $("#standing_book").css("display","block");
}        

function voltage_transformer_standing_book_show(){

    var value = "维护所";
    var table_name = "jkx_taizhang";
    standing_book_chart(table_name,value);
    standing_book_table(table_name);
    $(".div_menu").css("diplay","none");
    $("#standing_book").css("display","block");
}

function cable_pit_standing_book_show(){

    var value = "维护所";
    var table_name = "jkx_taizhang";
    standing_book_chart(table_name,value);
    standing_book_table(table_name);
    $(".div_menu").css("diplay","none");
    $("#standing_book").css("display","block");
}        

function cable_conductor_standing_book_show(){

    var value = "维护所";
    var table_name = "jkx_taizhang";
    standing_book_chart(table_name,value);
    standing_book_table(table_name);
    $(".div_menu").css("diplay","none");
    $("#standing_book").css("display","block");
}        

function standing_book_team_show(){
        meter_standing_book_show();
}
function standing_book_road_show(){
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
        $(".div_menu").css("display","none");
        $("#layers_control").css("display","block");
}

function layers_control_close(){
        $("#layers_control").css("display","none");
}

function attribute_search_close(){
        $("#attribute_search").css("display","none");
}

function attribute_search_show(){

        if($("#attribute_search").css("display") != "none"){
            $("#attribute_search").css("display","none");
                return;
        }
        $(".div_menu").css("display","none");
        $("#attribute_search").css("display","block");
}

function detail_info_show(){

}

function layers_control_select_all() {
     
    var inputs = document.getElementsByClassName("layers_input");
    var inputs_flag = inputs[0].checked ? "true":"";
    var layers_flag = inputs[0].checked ? true:false;

    if(service_layer == null)
                return;

    for(var i = 1;i < inputs.length;i++){
            inputs[i].checked = inputs_flag
    }
    service_layer.setVisibility(layers_flag);
}

function facility_statistics_close(){

        $("#facility_statistics").css("display","none");
}

function facility_statistics_show(){

        if($("#facility_statistics").css("display") != "none"){
                $("#facility_statistics").css("display","none");
                return;
        }
        var query = new esri.tasks.Query();
        var service_feature_set = [];

        select_clear();
        identify_params.layerIds = service_layer.visibleLayers;

        for(var i = 0;i < service_layer.layerInfos.length;i++){
                var query_task = new esri.tasks.QueryTask(service_url+ "/" + service_layer.layerInfos[i].id);

                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = "1=1";
                query_task.execute(query,function(feature_set){
                    service_feature_set.push(feature_set);
                    if(service_feature_set.length == service_layer.layerInfos.length)
                        facility_statistics_table_create(service_feature_set);
                });
        }
}

function facility_statistics_table_create(feature_set){

        var table = document.getElementById("table_facility_statistics");
        var tbody = table.getElementsByTagName("tbody")[0];
        var name = ["变压器","计控箱","电缆线","路灯"]

        tbody.innerHTML = "";
        for(var i = 0;i < feature_set.length;i++){
                var tbody_tr = document.createElement("tr");
                var tbody_td_name = document.createElement("td");
                var tbody_td_num = document.createElement("td");

//                tbody_td_name.appendChild(document.createTextNode(feature_set[i].fieldAliases.name))
                tbody_td_name.appendChild(document.createTextNode(name[i]))
                tbody_td_num.appendChild(document.createTextNode(feature_set[i].features.length));
                tbody_tr.appendChild(tbody_td_name);
                tbody_tr.appendChild(tbody_td_num);
                tbody.appendChild(tbody_tr);
        }
        $(".div_menu").css("display","none");
        $("#facility_statistics").css("display","block");
}


function facility_statistics_poly_show(){

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

function attribute_search_layer(){

        var select = document.getElementById("attribute_search_layers_select");
        var layer_id = select.options[select.selectedIndex].value;

        var requestHandle = esri.request({
             "url":service_url+"/"+layer_id,
             "content": {
                 "f": "json"
             },
            "callbackParamName": "callback"
         });

        requestHandle.then(rq_succeeded,rq_failed);
}       

function rq_succeeded(response){

}

function rq_failed(response){
}
