# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import pymssql
import json


serverip = "192.168.50.108"
user = "sa"
password = "CeTc50"
db_name = "sde"
db_hf_name = "sde_hf"

# Create your views here.
def sql_server_connect(flag):
    try:
        db = db_name if flag else db_hf_name
        conn = pymssql.connect(serverip,user,password,db)
        cursor = conn.cursor(as_dict=True)
        return cursor
    except:
        print "db connect failed"

def index(request):

    context = {}
    return render(request,'baotou/index.html',context)
#    return HttpResponse("hello django");

def terminal_data(request):

    cursor = sql_server_connect(True)
    cursor.execute("SELECT DISTINCT tmlid,tmlname,phyid FROM sde.dbo.DataRtu")
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)

def standing_book_chart(request):

    cursor = sql_server_connect(False)
    cursor.execute("SELECT 维护所,COUNT(*) AS 数量 FROM sde_hf.dbo.jkx_taizhang GROUP BY 维护所") 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)

def standing_book_table(request):

    cursor = sql_server_connect(False)
    cursor.execute("SELECT * FROM sde_hf.dbo.jkx_taizhang") 
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
    cursor.execute("SELECT DISTINCT errname,COUNT(errname) as number FROM DataErr GROUP BY errname") 
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False)






