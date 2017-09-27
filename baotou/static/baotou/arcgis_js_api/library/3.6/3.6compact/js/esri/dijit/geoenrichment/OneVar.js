/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/dijit/geoenrichment/OneVar",["../../declare","./BaseWidget","./dom","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","dojo/query","dojo/string","./lang","dojo/i18n!../../nls/jsapi","./utils"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b){_a=_a.geoenrichment.dijit.OneVar;var _c=_1("esri.dijit.geoenrichment.OneVar",[_2],{expands:true,_widthExpanded:460,_widthCollapsed:200,constructor:function(){this._state={sortBy:1,sortDesc:true};},_calculate:function(){this.primary.innerHTML="";this.secondary.innerHTML="";var _d;var _e;for(var i=0;i<this._data.getColCount();i++){var _f=this._data.getCol(i);if(_f.name=="NAME"){continue;}var str=_f.format(this._data.getValue(0,_f.name));if(!_d){this.primary.innerHTML=str+" ";_d=_f;}else{if(_f.name==_d.name+"_P"){this.secondary.innerHTML="("+str+")";_e=_f;break;}}}return {firstCol:_d,secondCol:_e};},updateUIExpanded:function(){this.inherited(arguments);var _10=this._calculate();var _11=_10.secondCol||_10.firstCol;var _12=null;if(_11){var _13=[];var _14=this._data.getRowCount();for(var i=0;i<_14;i++){var _15=[];if(!_12){_12=_15;}_15.push(this._data.getValue(i,"NAME"));_15.push(this._data.getValue(i,_11.name));_13.push(_15);}this.site.innerHTML=_a.subtitleSite2;this._sortRows(_13);var _16=this._data.getValue(0,_11.name);var _17=_9.isNumber(_16);if(_17){var _18=this._data.getValue(this._data.getRowCount()-1,_11.name);var _19=this._data.getValue(this._data.getRowCount()-1,"NAME");var dif=1-_18/_16;if(Math.abs(dif)<0.005){dif=0;}var _1a;if(dif<0){_1a=_a.lessThan;}else{if(dif>0){_1a=_a.moreThan;}else{_1a=_a.same;}}this.comp.innerHTML=_8.substitute(_1a,{site:_19});}else{this.comp.innerHTML="";}var _1b=this.table;var _1c=_13.length+1;while(_1b.rows.length>1){_1b.deleteRow(-1);}var row=_1b.rows[0];if(_17){while(row.cells.length<4){row.insertCell(-1);}}else{while(row.cells.length>2){_5.destroy(row.cells[row.cells.length-1]);}}for(var i=1;i<_1c;i++){var tr=_1b.insertRow(-1);if(i%2==0&&i>0){tr.className="AlternatingRow";}_6.set(tr.insertCell(-1),"class","OneVarMultiComparison_TextColumn");_6.set(tr.insertCell(-1),"class","OneVarMultiComparison_ValueColumn");if(_17){var _1d=_6.set(tr.insertCell(-1),"class","OneVarMultiComparison_ChartColumn");_6.set(_1d,"colspan","2");}}var _1e=Number.NEGATIVE_INFINITY;if(_17){for(var i=0;i<_13.length;i++){if(_13[i][1]>_1e){_1e=_13[i][1];}}_1e=_b.getCeiling(_1e);_1b.rows[0].cells[2].innerHTML=_11.format(0);_1b.rows[0].cells[3].innerHTML=_11.format(_1e);}for(var i=0;i<_13.length;i++){var row=_1b.rows[i+1];row.cells[0].innerHTML=_13[i][0];row.cells[1].innerHTML=_11.format(_13[i][1]);if(_17){var _1f;if(_13[i]===_12){_4.remove(row,"OneVarMultiComparison_Row");_4.add(row,"OneVarMultiComparison_CurrentRow");_1f="OneVarMultiComparison_Expanded_CurrentBar";}else{_4.remove(row,"OneVarMultiComparison_CurrentRow");_4.add(row,"OneVarMultiComparison_Row");_1f="OneVarMultiComparison_Expanded_Bar";}var _20=_3.pct(_13[i][1]/_1e);row.cells[2].innerHTML="<div class='"+_1f+"' style='width:"+_20+"' />";_6.set(row.cells[0],"style","width:50%");_6.set(row.cells[1],"style","width:20%");}else{_6.set(row.cells[0],"style","width:50%");_6.set(row.cells[1],"style","width:50%");}}}},updateUICollapsed:function(){this.inherited(arguments);var _21=this._calculate();var _22=_21.secondCol||_21.firstCol;var _23=null;if(_22){var _24=[];var _25=this._data.getRowCount();for(var i=0;i<_25;i++){var _26=[];if(!_23){_23=_26;}_26.push(this._data.getValue(i,"NAME"));_26.push(this._data.getValue(i,_22.name));_24.push(_26);}this._sortRows(_24);var _27=this._data.getValue(0,_22.name);var _28=this.table;var _29=_24.length+1;for(var i=_28.rows.length;i<_29;i++){var tr=_28.insertRow(-1);if(i%2==0){tr.className="AlternatingRow";}_6.set(tr.insertCell(-1),"class","OneVarMultiComparison_TextColumn");_6.set(tr.insertCell(-1),"class","OneVarMultiComparison_ValueColumn");}while(_28.rows.length>_29){_28.deleteRow(-1);}var _2a=_9.isNumber(_27);var _2b=_7("col",this.table);if(!_2a){_6.set(_2b[0],"style","width:50%");_6.set(_2b[1],"style","width:50%");}else{_6.set(_2b[0],"style","width:70%");_6.set(_2b[1],"style","width:30%");}for(var i=0;i<_24.length;i++){var row=_28.rows[i+1];row.cells[0].innerHTML=_24[i][0];row.cells[1].innerHTML=_22.format(_24[i][1]);if(_24[i]===_23){_4.remove(row,"OneVarMultiComparison_Row");_4.add(row,"OneVarMultiComparison_CurrentRow");}else{_4.remove(row,"OneVarMultiComparison_CurrentRow");_4.add(row,"OneVarMultiComparison_Row");}}}},createUIExpanded:function(_2c){this.inherited(arguments);var _2d=_2c.addHeader("div",{"class":"OneVarMultiComparison_Value"});var tbl=_5.create("table",{"cellpadding":"0","cellspacing":"0"},_2d);var tr=tbl.insertRow(0);var _2e=tr.insertCell(-1);this.site=_5.create("span",{"class":"OneVarMultiComparison_Expanded_Value_Site"},_2e);tr=tbl.insertRow(-1);_2e=tr.insertCell(-1);this.primary=_5.create("span",{"class":"OneVarMultiComparison_Expanded_Value_Primary"},_2e);this.secondary=_5.create("span",{"class":"OneVarMultiComparison_Expanded_Value_Secondary"},_2e);this.comp=_5.create("span",{"class":"OneVarMultiComparison_Comparison"},_2e);this.table=_2c.addContent("table",{"class":"OneVarMultiComparison_Table"});_3.createCols(this.table,[0.5,0.2,0.15,0.15]);var tr=this.table.insertRow(-1);this._appendSortHeader(tr,_a.areaCol,0,{"class":"OneVarMultiComparison_TextColumnHeader"});this._appendSortHeader(tr,_a.valueCol,1,{"class":"OneVarMultiComparison_ValueColumnHeader"});_6.set(tr.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Lower");_6.set(tr.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Upper");if(this.autoHeight){_2c.contentClass.push("OneVarMultiComparison_Expanded_ContentPane");}_2c.addFooter("div");},createUICollapsed:function(_2f){this.inherited(arguments);var _30=_2f.addHeader("div",{"class":"OneVarMultiComparison_Value"});var tbl=_5.create("table",{"cellpadding":"0","cellspacing":"0"},_30);var tr=tbl.insertRow(0);var _31=tr.insertCell(-1);this.site=_5.create("span",{"class":"OneVarMultiComparison_Expanded_Value_Site"},_31);tr=tbl.insertRow(-1);_31=tr.insertCell(-1);this.primary=_5.create("span",{"class":"OneVarMultiComparison_Expanded_Value_Primary"},_31);this.secondary=_5.create("span",{"class":"OneVarMultiComparison_Expanded_Value_Secondary"},_31);this.table=_2f.addContent("table",{"class":"OneVarMultiComparison_Table"});_3.createCols(this.table,[0.7,0.3]);var tr=this.table.insertRow(-1);this._appendSortHeader(tr,_a.areaCol,0,{"class":"OneVarMultiComparison_TextColumnHeader"});this._appendSortHeader(tr,_a.valueCol,1,{"class":"OneVarMultiComparison_ValueColumnHeader"});_6.set(tr.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Lower");_6.set(tr.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Upper");if(this.autoHeight){_2f.contentClass.push("OneVarMultiComparison_Expanded_ContentPane");}_2f.addFooter("div");}});return _c;});