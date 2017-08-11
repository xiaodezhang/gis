# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.clickjacking import xframe_options_exempt
import pymssql
import json


serverip = "192.168.50.108"
user = "sa"
password = "CeTc50"
db_name = "sde"
db_bt_name = "sde_bt"

# Create your views here.
def sql_server_connect(flag):
    try:
        db = db_name if flag else db_bt_name
        conn = pymssql.connect(serverip,user,password,db)
        cursor = conn.cursor(as_dict=True)
        return cursor
    except:
        print "db connect failed"

def index(request):

    context = {}
    return render(request,'baotou/index.html',context)
#    return HttpResponse("hello django");


@xframe_options_exempt
def locate(request):
    context = {}
    return render(request,'baotou/gis_locate.html',context)

def terminal_data(request):

    cursor = sql_server_connect(True)
    cursor.execute("SELECT DISTINCT tmlid,tmlname,phyid FROM sde.dbo.DataRtu")
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)

def standing_book_chart(request):

    cursor = sql_server_connect(False)
    standing_type = request.GET.get('standing_type')
    group_type = request.GET.get('group_type')
    group_type_c = {"admin_region":"所属行政区","team":"所属维修队"}
    table_name = {"meter":"jkx_taizhang","lamp":"lamp_taizhang",
            "voltage_transformer":"byq_taizhang","cable_conductor":"line_taizhang"}
    cursor.execute("SELECT " +group_type_c[group_type]+",COUNT(*) AS 数量 FROM dbo."+table_name[standing_type]+ " GROUP BY "+group_type_c[group_type]) 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)

def standing_book_table(request):

    cursor = sql_server_connect(False)
    standing_type = request.GET.get('standing_type') 
    table_name = {"meter":"jkx_taizhang","lamp":"lamp_taizhang",
            "voltage_transformer":"byq_taizhang","cable_conductor":"line_taizhang"}
    cursor.execute("SELECT * FROM dbo." + table_name[standing_type]) 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)

def fault_terminal_chart(request):

    cursor = sql_server_connect(True)
    cursor.execute("SELECT DISTINCT errname,COUNT(errname) as number FROM DataErr GROUP BY errname") 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)

def fault_lamp_chart(request):

    cursor = sql_server_connect(True)
    cursor.execute("SELECT DISTINCT errname,COUNT(errname) as number FROM DataErr GROUP BY errname") 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)

def fault_factory_chart(request):

    cursor = sql_server_connect(True)
    cursor.execute("SELECT DISTINCT facname,COUNT(facname) as number FROM DataFactory GROUP BY facname") 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)


def fault_terminal_table(request):

    cursor = sql_server_connect(True)
    cursor.execute("SELECT errid,errname,tmlid,tmlname,dtremove,phyid,errcount FROM DataErr") 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)

def fault_lamp_table(request):

    cursor = sql_server_connect(True)
    cursor.execute("SELECT errid,errname,tmlid,tmlname,dtremove,phyid,errcount FROM DataErr") 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)

def fault_factory_table(request):

    cursor = sql_server_connect(True)
    cursor.execute("SELECT * FROM DataFactory") 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)

def terminal_loop_info(request):

    cursor = sql_server_connect(True)
    tmlid = request.GET.get('tmlid') 
    cursor.execute("SELECT loopname,switch_in_st,voltage,current_rtu,power,factor FROM sde.dbo.DataRtu where tmlid=%s" % tmlid) 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)


def facility_property(request):

    file_json = open("baotou/static/baotou/json/facility_property.json")
    data_json = json.load(file_json)
    return JsonResponse(data_json,safe=False)

def maintain_record(request):
    try:
        conn = pymssql.connect("192.168.50.80","sa","sa","flow_common")
        cursor = conn.cursor(as_dict=True)
    except:
        print "db connect failed"
    facility_name = request.GET.get('facility_name') 

    cursor.execute("SELECT sys_id,FacilityType,FacilityName,MaterialName,SizeType,manufacturer FROM flow_common.dbo.WorkOrderManagementAttachProcess where FacilityName=%s" % facility_name)
#    cursor.execute("SELECT * FROM flow_common.dbo.WorkOrderManagementAttachProcess where FacilityName='青年大道001'")

#    print cursor.fetchall()
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)









