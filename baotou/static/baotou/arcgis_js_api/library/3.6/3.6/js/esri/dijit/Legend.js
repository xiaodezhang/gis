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
define("esri/dijit/Legend",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/sniff","dojo/DeferredList","dojo/json","dojo/dom","dojo/dom-construct","dojo/dom-style","dijit/_Widget","dojox/gfx","dojox/html/entities","esri/kernel","esri/config","esri/request","esri/renderers/SimpleRenderer","esri/renderers/UniqueValueRenderer","esri/renderers/ClassBreaksRenderer","esri/symbols/jsonUtils","esri/dijit/_EventedWidget","dojo/i18n!esri/nls/jsapi"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18){var _19=_1([_17,_d],{declaredClass:"esri.dijit.Legend",widgetsInTemplate:false,layers:null,alignRight:false,hoverLabelShowing:false,_ieTimer:100,constructor:function(_1a,_1b){_2.mixin(this,_18.widgets.legend);_1a=_1a||{};if(!_1a.map){console.error("esri.dijit.Legend: unable to find the 'map' property in parameters");return;}if(!_1b){console.error("esri.dijit.Legend: must specify a container for the legend");return;}this.map=_1a.map;this.layerInfos=_1a.layerInfos;this._respectCurrentMapScale=(_1a.respectCurrentMapScale===false)?false:true;this.arrangement=(_1a.arrangement===_19.ALIGN_RIGHT)?_19.ALIGN_RIGHT:_19.ALIGN_LEFT;if(this.arrangement===_19.ALIGN_RIGHT){this.alignRight=true;}this.autoUpdate=(_1a.autoUpdate===false)?false:true;this._surfaceItems=[];},startup:function(){this.inherited(arguments);this._initialize();if(_6("ie")){this._repaintItems=_2.hitch(this,this._repaintItems);setTimeout(this._repaintItems,this._ieTimer);}},destroy:function(){this._deactivate();this._removeHoverHandlers();this.inherited(arguments);},refresh:function(_1c){var i;if(!this.domNode){return;}if(_1c){this.layerInfos=_1c;this.layers=[];_3.forEach(this.layerInfos,function(_1d){if(this._isSupportedLayerType(_1d.layer)){if(_1d.title){_1d.layer._titleForLegend=_1d.title;}_1d.layer._hideDefaultSymbol=(_1d.defaultSymbol===false)?true:false;if(_1d.hideLayers){_1d.layer._hideLayersInLegend=_1d.hideLayers;this._addSubLayersToHide(_1d);}else{_1d.layer._hideLayersInLegend=[];}if(_1d.hoverLabel){_1d.layer._hoverLabel=_1d.hoverLabel;}if(_1d.hoverLabels){_1d.layer._hoverLabels=_1d.hoverLabels;}this.layers.push(_1d.layer);}},this);}else{if(this.useAllMapLayers){this.layerInfos=null;this.layers=null;}}for(i=this.domNode.children.length-1;i>=0;i--){_b.destroy(this.domNode.children[i]);}this._removeHoverHandlers();this.startup();},_legendUrl:"http://utility.arcgis.com/sharing/tools/legend",_initialize:function(){if(this.layerInfos){this.layers=[];_3.forEach(this.layerInfos,function(_1e){if(this._isSupportedLayerType(_1e.layer)){if(_1e.title){_1e.layer._titleForLegend=_1e.title;}_1e.layer._hideDefaultSymbol=(_1e.defaultSymbol===false)?true:false;if(_1e.hideLayers){_1e.layer._hideLayersInLegend=_1e.hideLayers;this._addSubLayersToHide(_1e);}else{_1e.layer._hideLayersInLegend=[];}if(_1e.hoverLabel){_1e.layer._hoverLabel=_1e.hoverLabel;}if(_1e.hoverLabels){_1e.layer._hoverLabels=_1e.hoverLabels;}this.layers.push(_1e.layer);}},this);}this.useAllMapLayers=false;if(!this.layers){this.useAllMapLayers=true;this.layers=[];var _1f=[];var _20=[];_3.forEach(this.map.layerIds,function(_21){var _22=this.map.getLayer(_21),_23;if(this._isSupportedLayerType(_22)){if(_22.arcgisProps&&_22.arcgisProps.title){_22._titleForLegend=_22.arcgisProps.title;}this.layers.push(_22);}if(_22.declaredClass=="esri.layers.KMLLayer"){_23=_22.getLayers();_3.forEach(_23,function(_24){_1f.push(_24.id);},this);}if(_22.declaredClass=="esri.layers.GeoRSSLayer"){_23=_22.getFeatureLayers();_3.forEach(_23,function(_25){_20.push(_25.id);},this);}},this);_3.forEach(this.map.graphicsLayerIds,function(_26){var _27=this.map.getLayer(_26);if(_3.indexOf(_1f,_26)==-1&&_3.indexOf(_20,_26)==-1){if(this._isSupportedLayerType(_27)&&_27._params&&_27._params.drawMode){if(_27.arcgisProps&&_27.arcgisProps.title){_27._titleForLegend=_27.arcgisProps.title;}this.layers.push(_27);}}},this);}this._createLegend();},_activate:function(){this._deactivate();if(!this.autoUpdate){return;}if(this._respectCurrentMapScale){this._ozeConnect=_4.connect(this.map,"onZoomEnd",this,"_refreshLayers");}if(this.useAllMapLayers){this._olaConnect=_4.connect(this.map,"onLayerAdd",this,"_updateAllMapLayers");this._olrConnect=_4.connect(this.map,"onLayerRemove",this,"_updateAllMapLayers");this._olroConnect=_4.connect(this.map,"onLayersReordered",this,"_updateAllMapLayers");}_3.forEach(this.layers,function(_28){_28.ovcConnect=_4.connect(_28,"onVisibilityChange",this,"_refreshLayers");_28.oscConnect=_4.connect(_28,"onScaleRangeChange",this,"_refreshLayers");if(_28.declaredClass==="esri.layers.ArcGISDynamicMapServiceLayer"&&_28.supportsDynamicLayers){_28.odcConnect=_4.connect(_28,"_onDynamicLayersChange",_2.hitch(this,"_updateDynamicLayers",_28));}if(_28.declaredClass==="esri.layers.ArcGISImageServiceLayer"){_28.oirConnect=_4.connect(_28,"onRenderingChange",_2.partial(this._updateImageServiceLayers,this,_28));}},this);},_deactivate:function(){if(this._ozeConnect){_4.disconnect(this._ozeConnect);}if(this._olaConnect){_4.disconnect(this._olaConnect);}if(this._olroConnect){_4.disconnect(this._olroConnect);}if(this._olrConnect){_4.disconnect(this._olrConnect);}_3.forEach(this.layers,function(_29){if(_29.ovcConnect){_4.disconnect(_29.ovcConnect);}if(_29.oscConnect){_4.disconnect(_29.oscConnect);}if(_29.odcConnect){_4.disconnect(_29.odcConnect);}if(_29.oirConnect){_4.disconnect(_29.oirConnect);}},this);},_updateDynamicLayers:function(_2a){delete _2a.legendResponse;this._refreshLayers();},_updateImageServiceLayers:function(_2b,_2c){delete _2c.legendResponse;_2b._refreshLayers();},_refreshLayers:function(){this.refresh();},_updateAllMapLayers:function(){this.layers=[];_3.forEach(this.map.layerIds,function(_2d){var _2e=this.map.getLayer(_2d);if(this._isSupportedLayerType(_2e)){this.layers.push(_2e);}},this);_3.forEach(this.map.graphicsLayerIds,function(_2f){var _30=this.map.getLayer(_2f);if(this._isSupportedLayerType(_30)&&_30._params&&_30._params.drawMode){this.layers.push(_30);}},this);this.refresh();},_createLegend:function(){var _31=false;_c.set(this.domNode,"position","relative");_b.create("div",{id:this.id+"_msg",innerHTML:this.NLS_creatingLegend+"..."},this.domNode);var _32=[];_3.forEach(this.layers,function(_33){if(_33.declaredClass=="esri.layers.KMLLayer"||_33.declaredClass=="esri.layers.GeoRSSLayer"){var _34;if(!_33.loaded){_4.connect(_33,"onLoad",_2.hitch(this,function(){this.refresh(this.layerInfos);}));}else{if(_33.declaredClass=="esri.layers.KMLLayer"){_34=_33.getLayers();}else{if(_33.declaredClass=="esri.layers.GeoRSSLayer"){_34=_33.getFeatureLayers();if(_33._hideLayersInLegend){_34=_3.filter(_34,function(_35){return (_3.indexOf(_33._hideLayersInLegend,_35.id)==-1);});}}}_3.forEach(_34,function(_36){if(_36.declaredClass=="esri.layers.FeatureLayer"&&_33._titleForLegend){_36._titleForLegend=_33._titleForLegend+" - ";if(_36.geometryType=="esriGeometryPoint"){_36._titleForLegend+=this.NLS_points;}else{if(_36.geometryType=="esriGeometryPolyline"){_36._titleForLegend+=this.NLS_lines;}else{if(_36.geometryType=="esriGeometryPolygon"){_36._titleForLegend+=this.NLS_polygons;}}}_32.push(_36);}},this);}}else{if(_33.declaredClass==="esri.layers.WMSLayer"){if(!_33.loaded){_4.connect(_33,"onLoad",_2.hitch(this,function(){this.refresh(this.layerInfos);}));}else{if(_33.visible&&_33.layerInfos.length>0&&_3.some(_33.layerInfos,function(_37){return _37.legendURL;})){var _38=_33._titleForLegend||_33.name||_33.id;_b.create("div",{innerHTML:"<span class='esriLegendServiceLabel'>"+_38+"</span>"},this.domNode);_3.forEach(_33.layerInfos,function(_39){if(_3.indexOf(_33.visibleLayers,_39.name)>-1){_b.create("div",{innerHTML:"<img src='"+_39.legendURL+"'/>"},this.domNode);_31=true;}},this);}}}else{_32.push(_33);}}},this);var _3a=[];_3.forEach(_32,function(_3b){if(!_3b.loaded){var _3c=_4.connect(_3b,"onLoad",this,function(_3d){_4.disconnect(_3c);_3c=null;this.refresh();});}else{if(_3b.visible===true&&(_3b.layerInfos||_3b.renderer||_3b.declaredClass=="esri.layers.ArcGISImageServiceLayer")){var d=_b.create("div",{id:this.id+"_"+_3b.id,style:"display: none;","class":"esriLegendService"});_b.create("span",{innerHTML:this._getServiceTitle(_3b),"class":"esriLegendServiceLabel"},_b.create("td",{align:(this.alignRight?"right":"left")},_b.create("tr",{},_b.create("tbody",{},_b.create("table",{width:"95%"},d)))));_b.place(d,this.id,"first");if(_6("ie")){_c.set(_a.byId(this.id+"_"+_3b.id),"display","none");}if(_3b.legendResponse||_3b.renderer){this._createLegendForLayer(_3b);}else{_3a.push(this._legendRequest(_3b));}}}},this);if(_3a.length===0&&!_31){_a.byId(this.id+"_msg").innerHTML=this.NLS_noLegend;this._activate();}else{var _3e=new _8(_3a);_3e.addCallback(_2.hitch(this,function(_3f){if(!_31){_a.byId(this.id+"_msg").innerHTML=this.NLS_noLegend;}else{_a.byId(this.id+"_msg").innerHTML="";}this._activate();}));}},_createLegendForLayer:function(_40){if(_40.legendResponse||_40.renderer){var _41=false;if(_40.legendResponse){var _42=_40.dynamicLayerInfos||_40.layerInfos;if(_42){_3.forEach(_42,function(_43,i){if(!_40._hideLayersInLegend||_3.indexOf(_40._hideLayersInLegend,_43.id)==-1){var f=this._buildLegendItems(_40,_43,i);_41=_41||f;}},this);}else{if(_40.declaredClass=="esri.layers.ArcGISImageServiceLayer"){_41=this._buildLegendItems(_40,{id:0,name:null,title:_40.name,subLayerIds:null,parentLayerId:-1},0);}}}else{if(_40.renderer){var id;if(!_40.url){id="fc_"+_40.id;}else{id=_40.url.substring(_40.url.lastIndexOf("/")+1,_40.url.length);}_41=this._buildLegendItems(_40,{id:id,name:null,subLayerIds:null,parentLayerId:-1},0);}}if(_41){_c.set(_a.byId(this.id+"_"+_40.id),"display","block");_c.set(_a.byId(this.id+"_msg"),"display","none");}}},_legendRequest:function(_44){if(!_44.loaded){_4.connect(_44,"onLoad",_2.hitch(this,"_legendRequest"));return;}if(_44.version>=10.01){return this._legendRequestServer(_44);}else{return this._legendRequestTools(_44);}},_legendRequestServer:function(_45){var url=_45.url;var pos=url.indexOf("?");if(pos>-1){url=url.substring(0,pos)+"/legend"+url.substring(pos);}else{url+="/legend";}var _46=_45._getToken();if(_46){url+="?token="+_46;}var _47=_2.hitch(this,"_processLegendResponse");var _48={};_48.f="json";if(_45._params.dynamicLayers){_48.dynamicLayers=_9.stringify(this._createDynamicLayers(_45));if(_48.dynamicLayers==="[{}]"){_48.dynamicLayers="[]";}}if(_45._params.bandIds){_48.bandIds=_45._params.bandIds;}if(_45._params.renderingRule){_48.renderingRule=_45._params.renderingRule;}var _49=_12({url:url,content:_48,callbackParamName:"callback",load:function(_4a,_4b){_47(_45,_4a,_4b);},error:_11.defaults.io.errorHandler});return _49;},_legendRequestTools:function(_4c){var p=_4c.url.toLowerCase().indexOf("/rest/");var _4d=_4c.url.substring(0,p)+_4c.url.substring(p+5,_4c.url.length);var url=this._legendUrl+"?soapUrl="+window.escape(_4d);if(!_6("ie")||_6("ie")>8){url+="&returnbytes=true";}var _4e=_2.hitch(this,"_processLegendResponse");var _4f={};_4f.f="json";var _50=_12({url:url,content:_4f,callbackParamName:"callback",load:function(_51,_52){_4e(_4c,_51,_52);},error:_11.defaults.io.errorHandler});return _50;},_processLegendResponse:function(_53,_54){if(_54&&_54.layers){_53.legendResponse=_54;if(_a.byId(this.id+"_"+_53.id)){_b.empty(_a.byId(this.id+"_"+_53.id));}_b.create("span",{innerHTML:this._getServiceTitle(_53),"class":"esriLegendServiceLabel"},_b.create("td",{align:(this.alignRight?"right":"left")},_b.create("tr",{},_b.create("tbody",{},_b.create("table",{width:"95%"},_a.byId(this.id+"_"+_53.id))))));this._createLegendForLayer(_53);}else{console.log("Legend could not get generated for "+_53.url+": "+_5.toJson(_54));}},_buildLegendItems:function(_55,_56,pos){var _57=false;var _58=_a.byId(this.id+"_"+_55.id);var _59=_56.subLayerIds;var _5a=_56.parentLayerId;if(_59){var _5b=_b.create("div",{id:this.id+"_"+_55.id+"_"+_56.id+"_group",style:"display: none;","class":(_5a==-1)?((pos>0)?"esriLegendGroupLayer":""):(this.alignRight?"esriLegendRight":"esriLegendLeft")},(_5a==-1)?_58:_a.byId(this.id+"_"+_55.id+"_"+_5a+"_group"));if(_6("ie")){_c.set(_a.byId(this.id+"_"+_55.id+"_"+_56.id+"_group"),"display","none");}_b.create("td",{innerHTML:_56.name.replace(/[\<]/g,"&lt;").replace(/[\>]/g,"&gt;"),align:(this.alignRight?"right":"left")},_b.create("tr",{},_b.create("tbody",{},_b.create("table",{width:"95%","class":"esriLegendLayerLabel"},_5b))));}else{if(_55.visibleLayers&&(","+_55.visibleLayers+",").indexOf(","+_56.id+",")==-1){return _57;}var d=_b.create("div",{id:this.id+"_"+_55.id+"_"+_56.id,style:"display:none;","class":(_5a>-1)?(this.alignRight?"esriLegendRight":"esriLegendLeft"):""},(_5a==-1)?_58:_a.byId(this.id+"_"+_55.id+"_"+_5a+"_group"));if(_6("ie")){_c.set(_a.byId(this.id+"_"+_55.id+"_"+_56.id),"display","none");}_b.create("td",{innerHTML:(_56.name)?_56.name.replace(/[\<]/g,"&lt;").replace(/[\>]/g,"&gt;"):"",align:(this.alignRight?"right":"left")},_b.create("tr",{},_b.create("tbody",{},_b.create("table",{width:"95%","class":"esriLegendLayerLabel"},d))));if(_55.legendResponse){_57=_57||this._buildLegendItems_Tools(_55,_56,d);}else{if(_55.renderer){_57=_57||this._buildLegendItems_Renderer(_55,_56,d);}}}return _57;},_buildLegendItems_Tools:function(_5c,_5d,_5e){var _5f=_5d.parentLayerId;var _60=this.map.getScale();var _61=false;var _62=function(_63,_64){var i,k;for(i=0;i<_63.length;i++){if(_64.dynamicLayerInfos){for(k=0;k<_64.dynamicLayerInfos[k].length;k++){if(_64.dynamicLayerInfos[k].mapLayerId==_63[i].layerId){return _63[i];}}}else{if(_64.id==_63[i].layerId){return _63[i];}}}return {};};if(!this._respectCurrentMapScale||(this._respectCurrentMapScale&&this._isLayerInScale(_5c,_5d,_60))){var _65=_62(_5c.legendResponse.layers,_5d);var _66=_65.legend;if(!_66){}else{var _67=_b.create("table",{cellpadding:0,cellspacing:0,width:"95%","class":"esriLegendLayer"},_5e);var _68=_b.create("tbody",{},_67);if(_5c._hoverLabel||_5c._hoverLabels){this._createHoverAction(_67,_5c,_5d);}_3.forEach(_66,function(_69){if(_5c.version>=10.1&&!_69.values&&_66.length>1&&(_5c._hideDefaultSymbol||_69.label==="<all other values>"||!_69.label)){}else{if((_69.url&&_69.url.indexOf("http")===0)||(_69.imageData&&_69.imageData.length>0)){_61=true;this._buildRow_Tools(_69,_68,_5c,_5d.id);}}},this);}}if(_61){_c.set(_a.byId(this.id+"_"+_5c.id+"_"+_5d.id),"display","block");if(_5f>-1){_c.set(_a.byId(this.id+"_"+_5c.id+"_"+_5f+"_group"),"display","block");this._findParentGroup(_5c.id,_5c,_5f);}}return _61;},_buildRow_Tools:function(_6a,_6b,_6c,_6d){var tr=_b.create("tr",{},_6b);var _6e;var _6f;if(this.alignRight){_6e=_b.create("td",{align:"right"},tr);_6f=_b.create("td",{align:"right",width:35},tr);}else{_6f=_b.create("td",{width:35},tr);_6e=_b.create("td",{},tr);}var src=_6a.url;if((!_6("ie")||_6("ie")>8)&&_6a.imageData&&_6a.imageData.length>0){src="data:image/png;base64,"+_6a.imageData;}else{if(_6a.url.indexOf("http")!==0){src=_6c.url+"/"+_6d+"/images/"+_6a.url;var _70=_6c._getToken();if(_70){src+="?token="+_70;}}}var img=_b.create("img",{src:src,border:0,style:"opacity:"+_6c.opacity},_6f);_b.create("td",{innerHTML:_6a.label.replace(/[\<]/g,"&lt;").replace(/[\>]/g,"&gt;"),align:(this.alignRight?"right":"left")},_b.create("tr",{},_b.create("tbody",{},_b.create("table",{width:"95%",dir:"ltr"},_6e))));if(_6("ie")<9){img.style.filter="alpha(opacity="+(_6c.opacity*100)+")";}},_buildLegendItems_Renderer:function(_71,_72,_73){var _74=_72.parentLayerId;var _75=this.map.getScale();var _76=false;if(!this._respectCurrentMapScale||this._isLayerInScale(_71,_72,_75)){var _77,_78;if(_71.renderer instanceof _14){if(_71.renderer.infos&&_71.renderer.infos.length>0){_76=true;_78=_b.create("table",{cellpadding:0,cellspacing:0,width:"95%","class":"esriLegendLayer"},_73);_77=_b.create("tbody",{},_78);if(_71._hoverLabel||_71._hoverLabels){this._createHoverAction(_78,_71,_72);}_3.forEach(_71.renderer.infos,function(_79,_7a){var _7b=null;if(_71._editable&&_71.types){_7b=this._getTemplateFromTypes(_71.types,_79.value);}var _7c=_79.label;if(!_7c||_7c.length===0){_7c=_79.value;}this._buildRow_Renderer(_71,_79.symbol,_7c,_7b,_77);},this);}}else{if(_71.renderer instanceof _15){if(_71.renderer.infos&&_71.renderer.infos.length>0){_76=true;_78=_b.create("table",{cellpadding:0,cellspacing:0,width:"95%","class":"esriLegendLayer"},_73);_77=_b.create("tbody",{},_78);if(_71._hoverLabel||_71._hoverLabels){this._createHoverAction(_78,_71,_72);}_3.forEach(_71.renderer.infos,function(_7d,_7e){var _7f=_7d.label;if(!_7f||_7f.length===0){_7f=_7d.minValue+" - "+_7d.maxValue;}this._buildRow_Renderer(_71,_7d.symbol,_7f,null,_77);},this);}}else{if(_71.renderer instanceof _13){_76=true;_78=_b.create("table",{cellpadding:0,cellspacing:0,width:"95%","class":"esriLegendLayer"},_73);_77=_b.create("tbody",{},_78);if(_71._hoverLabel||_71._hoverLabels){this._createHoverAction(_78,_71,_72);}var _80=null;if(_71._editable&&_71.templates&&_71.templates.length>0){_80=_71.templates[0];}this._buildRow_Renderer(_71,_71.renderer.symbol,_71.renderer.label,_80,_77);}}}if(!_71._hideDefaultSymbol&&_71.renderer.defaultSymbol){_76=true;this._buildRow_Renderer(_71,_71.renderer.defaultSymbol,_71.renderer.defaultLabel?_71.renderer.defaultLabel:"others",null,_77);}}if(_76){_c.set(_a.byId(this.id+"_"+_71.id+"_"+_72.id),"display","block");if(_74>-1){_c.set(_a.byId(this.id+"_"+_71.id+"_"+_74+"_group"),"display","block");this._findParentGroup(_71.id,_74);}}return _76;},_buildRow_Renderer:function(_81,_82,_83,_84,_85){var tr=_b.create("tr",{},_85);var _86;var _87;if(this.alignRight){_86=_b.create("td",{align:"right"},tr);_87=_b.create("td",{align:"right",width:35},tr);}else{_87=_b.create("td",{width:35},tr);_86=_b.create("td",{},tr);}var _88=30;var _89=30;if(_82.type=="simplemarkersymbol"){_88=Math.min(Math.max(_88,_82.size+12),125);_89=Math.min(Math.max(_89,_82.size+12),125);}else{if(_82.type=="picturemarkersymbol"){_88=Math.min(Math.max(_88,_82.width),125);_89=Math.min(_82.height?_82.height:_89,125);}}var div=_b.create("div",{style:"width:"+_88+"px;height:"+_89+"px;"},_87);_b.create("td",{innerHTML:_83?_83.replace(/[\<]/g,"&lt;").replace(/[\>]/g,"&gt;").replace(/^#/,""):"",align:(this.alignRight?"right":"left")},_b.create("tr",{},_b.create("tbody",{},_b.create("table",{width:"95%"},_86))));var _8a=this._drawSymbol(div,_82,_88,_89,_84,_81.opacity);this._surfaceItems.push(_8a);},_drawSymbol:function(_8b,sym,_8c,_8d,_8e,_8f){var _90=_16.fromJson(sym.toJson()),_91;if(_90.type==="simplelinesymbol"||_90.type==="cartographiclinesymbol"||_90.type==="textsymbol"){if(!_90.color){return;}_91=_90.color.toRgba();_91[3]=_91[3]*_8f;_90.color.setColor(_91);}else{if(_90.type==="simplemarkersymbol"||_90.type==="simplefillsymbol"){if(!_90.color){return;}_91=_90.color.toRgba();_91[3]=_91[3]*_8f;_90.color.setColor(_91);if(_90.outline&&_90.outline.color){_91=_90.outline.color.toRgba();_91[3]=_91[3]*_8f;_90.outline.color.setColor(_91);}}else{if(_90.type==="picturemarkersymbol"){_8b.style.opacity=_8f;_8b.style.filter="alpha(opacity=("+_8f*100+"))";}}}var _92=_e.createSurface(_8b,_8c,_8d);if(_6("ie")){var _93=_92.getEventSource();_c.set(_93,"position","relative");_c.set(_93.parentNode,"position","relative");}var _94=this._getDrawingToolShape(_90,_8e)||_16.getShapeDescriptors(_90);var _95;try{_95=_92.createShape(_94.defaultShape).setFill(_94.fill).setStroke(_94.stroke);}catch(e){_92.clear();_92.destroy();return;}var _96=_95.getBoundingBox(),_97=_96.width,_98=_96.height,_99=-(_96.x+(_97/2)),_9a=-(_96.y+(_98/2)),dim=_92.getDimensions(),_9b={dx:_99+dim.width/2,dy:_9a+dim.height/2};if(_97>_8c||_98>_8d){var _9c=_97>_98?_97:_98;var _9d=_8c<_8d?_8c:_8d;var _9e=(_9d-5)/_9c;_2.mixin(_9b,{xx:_9e,yy:_9e});}_95.applyTransform(_9b);return _92;},_getDrawingToolShape:function(_9f,_a0){var _a1,_a2=_a0?_a0.drawingTool||null:null;switch(_a2){case "esriFeatureEditToolArrow":_a1={type:"path",path:"M 10,1 L 3,8 L 3,5 L -15,5 L -15,-2 L 3,-2 L 3,-5 L 10,1 E"};break;case "esriFeatureEditToolTriangle":_a1={type:"path",path:"M -10,14 L 2,-10 L 14,14 L -10,14 E"};break;case "esriFeatureEditToolRectangle":_a1={type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 E"};break;case "esriFeatureEditToolCircle":_a1={type:"circle",cx:0,cy:0,r:10};break;case "esriFeatureEditToolEllipse":_a1={type:"ellipse",cx:0,cy:0,rx:10,ry:5};break;default:return null;}return {defaultShape:_a1,fill:_9f.getFill(),stroke:_9f.getStroke()};},_repaintItems:function(){_3.forEach(this._surfaceItems,function(_a3){this._repaint(_a3);},this);},_repaint:function(_a4){if(!_a4){return;}if(_a4.getStroke&&_a4.setStroke){_a4.setStroke(_a4.getStroke());}try{if(_a4.getFill&&_a4.setFill){_a4.setFill(_a4.getFill());}}catch(e){}if(_a4.children&&_2.isArray(_a4.children)){_3.forEach(_a4.children,this._repaint,this);}},_createHoverAction:function(_a5,_a6,_a7){var _a8=_a6._hoverLabel||_a6._hoverLabels[_a7.id];if(!_a8){return;}_a6.mouseMoveHandler=_a6.mouseMoveHandler||{};_a6.mouseMoveHandler[_a7.id]=dojo.connect(_a5,"onmousemove",dojo.hitch(this,function(_a9,evt){this.mouseX=evt.clientX;this.mouseY=evt.clientY;if(this.hoverLabelShowing){this.hoverLabelShowing=false;dojo.style(dojo.byId(this.id+"_hoverLabel"),"display","none");}setTimeout(dojo.hitch(this,function(_aa,_ab,_ac){if(_aa==this.mouseX&&_ab==this.mouseY&&!this.hoverLabelShowing){this.hoverLabelShowing=true;if(dojo.byId(this.id+"_hoverLabel")){var n=dojo.byId(this.id+"_hoverLabel");n.innerHTML="<span>"+_ac+"</span>";dojo.style(n,"top",_ab+"px");dojo.style(n,"left",(_aa+15)+"px");dojo.style(n,"display","");}else{dojo.create("div",{innerHTML:"<span>"+_ac+"</span>",id:this.id+"_hoverLabel","class":"esriLegendHoverLabel",style:{top:_ab+"px",left:(_aa+15)+"px"}},document.body);}}},evt.clientX,evt.clientY,_a9),500);},_a8));_a6.mouseOutHandler=_a6.mouseOutHandler||{};_a6.mouseOutHandler[_a7.id]=dojo.connect(_a5,"onmouseout",dojo.hitch(this,function(evt){this.mouseX=-1;this.mouseY=-1;if(this.hoverLabelShowing){this.hoverLabelShowing=false;dojo.style(dojo.byId(this.id+"_hoverLabel"),"display","none");}}));},_removeHoverHandlers:function(){_3.forEach(this.layers,function(_ad){if(_ad.mouseMoveHandler){for(key in _ad.mouseMoveHandler){_4.disconnect(_ad.mouseMoveHandler[key]);}}if(_ad.mouseOutHandler){for(key in _ad.mouseOutHandler){_4.disconnect(_ad.mouseOutHandler[key]);}}});},_createDynamicLayers:function(_ae){var _af=[],_b0;var _b1=_ae.dynamicLayerInfos||_ae.layerInfos;_3.forEach(_b1,function(_b2){var _b3={id:_b2.id};_b3.source=_b2.source&&_b2.source.toJson();var _b4;if(_ae.layerDefinitions&&_ae.layerDefinitions[_b2.id]){_b4=_ae.layerDefinitions[_b2.id];}if(_b4){_b3.definitionExpression=_b4;}var _b5;if(_ae.layerDrawingOptions&&_ae.layerDrawingOptions[_b2.id]){_b5=_ae.layerDrawingOptions[_b2.id];}if(_b5){_b3.drawingInfo=_b5.toJson();}_b3.minScale=_b2.minScale||0;_b3.maxScale=_b2.maxScale||0;_af.push(_b3);});return _af;},_getTemplateFromTypes:function(_b6,_b7){var i;for(i=0;i<_b6.length;i++){if(_b6[i].id==_b7&&_b6[i].templates&&_b6[i].templates.length>0){return _b6[i].templates[0];}}return null;},_findParentGroup:function(_b8,_b9,_ba){var k;var _bb=_b9.dynamicLayerInfos||_b9.layerInfos;for(k=0;k<_bb.length;k++){if(_ba==_bb[k].id){if(_bb[k].parentLayerId>-1){_c.set(_a.byId(this.id+"_"+_b8+"_"+_bb[k].parentLayerId+"_group"),"display","block");this._findParentGroup(_b8,_b9,_bb[k].parentLayerId);}break;}}},_addSubLayersToHide:function(_bc){var i;if(!_bc.layer.layerInfos){return;}function _bd(id,_be){var _bf=_bc.layer.dynamicLayerInfos||_bc.layer.layerInfos,i,k;for(i=0;i<_bf.length;i++){if(_bf[i].id===id&&_bf[i].subLayerIds){for(k=0;k<_bf[i].subLayerIds.length;k++){var _c0=_bf[i].subLayerIds[k];if(_3.indexOf(_be,_c0)===-1){_be.push(_c0);_bd(_c0,_be);}}}}};_3.forEach(_bc.layer._hideLayersInLegend,function(_c1){_bd(_c1,_bc.layer._hideLayersInLegend);});},_isLayerInScale:function(_c2,_c3,_c4){var i;var _c5=true;if(_c2.legendResponse&&_c2.legendResponse.layers){for(i=0;i<_c2.legendResponse.layers.length;i++){var _c6=_c2.legendResponse.layers[i];if(_c3.id==_c6.layerId){var _c7,_c8;if((!_c2.minScale&&_c2.minScale!==0)||(!_c2.maxScale&&_c2.maxScale!==0)){if(_c6.minScale==0&&_c2.tileInfo){_c7=_c2.tileInfo.lods[0].scale;}if(_c6.maxScale==0&&_c2.tileInfo){_c8=_c2.tileInfo.lods[_c2.tileInfo.lods.length-1].scale;}}else{_c7=Math.min(_c2.minScale,_c6.minScale)||_c2.minScale||_c6.minScale;_c8=Math.max(_c2.maxScale,_c6.maxScale);}if((_c7>0&&_c7<_c4)||_c8>_c4){_c5=false;}break;}}}else{if(_c2.minScale||_c2.maxScale){if((_c2.minScale&&_c2.minScale<_c4)||_c2.maxScale&&_c2.maxScale>_c4){_c5=false;}}}return _c5;},_getServiceTitle:function(_c9){var _ca=_c9._titleForLegend;if(!_ca){_ca=_c9.url;if(!_c9.url){_ca="";}else{if(_c9.url.indexOf("/MapServer")>-1){_ca=_c9.url.substring(0,_c9.url.indexOf("/MapServer"));_ca=_ca.substring(_ca.lastIndexOf("/")+1,_ca.length);}else{if(_c9.url.indexOf("/ImageServer")>-1){_ca=_c9.url.substring(0,_c9.url.indexOf("/ImageServer"));_ca=_ca.substring(_ca.lastIndexOf("/")+1,_ca.length);}else{if(_c9.url.indexOf("/FeatureServer")>-1){_ca=_c9.url.substring(0,_c9.url.indexOf("/FeatureServer"));_ca=_ca.substring(_ca.lastIndexOf("/")+1,_ca.length);}}}}if(_c9.name){if(_ca.length>0){_ca+=" - "+_c9.name;}else{_ca=_c9.name;}}}return _f.encode(_ca);},_isSupportedLayerType:function(_cb){if(_cb&&(_cb.declaredClass==="esri.layers.ArcGISDynamicMapServiceLayer"||(_cb.declaredClass==="esri.layers.ArcGISImageServiceLayer"&&_cb.version>=10.2)||_cb.declaredClass==="esri.layers.ArcGISTiledMapServiceLayer"||_cb.declaredClass==="esri.layers.FeatureLayer"||_cb.declaredClass==="esri.layers.KMLLayer"||_cb.declaredClass==="esri.layers.GeoRSSLayer"||_cb.declaredClass==="esri.layers.WMSLayer")){return true;}return false;}});_2.mixin(_19,{ALIGN_LEFT:0,ALIGN_RIGHT:1});if(_6("extend-esri")){_2.setObject("dijit.Legend",_19,_10);}return _19;});