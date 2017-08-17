from django.conf.urls import url
from . import views

urlpatterns = [
        url(r'^$',views.index,name='index'),
        url(r'^locate',views.locate,name='locate'),
        url(r'^facility_property',views.facility_property),
        url(r'^maintain_record',views.maintain_record),
        url(r'^terminal_data',views.terminal_data),
        url(r'^lamp_data',views.lamp_data),
        url(r'^standing_book_chart',views.standing_book_chart),
        url(r'^standing_book_table',views.standing_book_table),
        url(r'^fault_terminal_chart',views.fault_terminal_chart),
        url(r'^fault_lamp_chart',views.fault_lamp_chart),
        url(r'^fault_factory_chart',views.fault_factory_chart),
        url(r'^fault_terminal_table',views.fault_terminal_table),
        url(r'^fault_lamp_table',views.fault_lamp_table),
        url(r'^fault_factory_table',views.fault_factory_table),
        url(r'^terminal_loop_info',views.terminal_loop_info),
        ]
