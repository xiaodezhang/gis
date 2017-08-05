from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import pymssql
import json


serverip = "192.168.50.108"
user = "sa"
password = "CeTc50"
db_name = "sde"

# Create your views here.
def sql_server_connect():
    try:
        conn = pymssql.connect(serverip,user,password,db_name)
        cursor = conn.cursor(as_dict=True)
        return cursor
    except:
        print "db connect failed"

def index(request):

    context = {}
    return render(request,'baotou/index.html',context)
#    return HttpResponse("hello django");

def terminal_data(request):

    cursor = sql_server_connect()
    cursor.execute("SELECT DISTINCT tmlid,tmlname,phyid FROM sde.dbo.DataRtu")
    data_json = json.dumps(cursor.fetchall())
    return JsonResponse(data_json,safe=False);
