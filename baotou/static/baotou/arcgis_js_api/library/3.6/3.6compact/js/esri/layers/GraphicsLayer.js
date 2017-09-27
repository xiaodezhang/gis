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
define("esri/layers/GraphicsLayer",["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/dom-attr","dojo/dom-construct","dojo/dom-style","dojox/gfx","dojox/gfx/matrix","esri/kernel","esri/lang","esri/sniff","esri/domUtils","esri/layers/layer","esri/symbols/SimpleMarkerSymbol","esri/geometry/Point","esri/geometry/ScreenPoint","esri/geometry/Extent","esri/geometry/mathUtils","esri/geometry/screenUtils"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14){var _15;var _16=_1(null,{declaredClass:"esri.layers._GraphicsContainer",_setMap:function(map,_17){var es,_18=(this._connects=[]);this._map=map;if(_8.renderer.toLowerCase().indexOf("canvas")!==-1){es=_6.create("div",{style:"overflow: visible; position: absolute;"},_17);this._surface={getEventSource:function(){return es;}};_18.push(_2.connect(es,"onmousedown",this,this._canvasDownHandler));_18.push(_2.connect(es,"onmouseup",this,this._canvasUpHandler));_18.push(_2.connect(es,"onclick",this,this._canvasClickHandler));_15.prototype._canvas=true;}else{var _19=(this._surface=_8.createSurface(_17,map.width,map.height));es=_19.getEventSource();_7.set((es=(_c("ie")<9)?es.parentNode:es),{overflow:"visible",position:"absolute"});}_18.push(_2.connect(map,"onResize",this,"_onResizeHandler"));return es;},_onResizeHandler:function(_1a,_1b,_1c){var es=this._surface.getEventSource(),map=this._map,_1d;if(_c("ie")<9){_7.set((es=es.parentNode),{width:_1b+"px",height:_1c+"px",clip:"rect(0px "+_1b+"px "+_1c+"px 0px)"});}_5.set(es,"width",_1b);_5.set(es,"height",_1c);if(!this._surface.declaredClass){_4.forEach(es.childNodes,function(_1e){_5.set(_1e,"width",_1b);_5.set(_1e,"height",_1c);});}if(map.loaded){if(!map.graphics.suspended){map.graphics._resized=true;}_4.forEach(map.graphicsLayerIds,function(_1f){_1d=map.getLayer(_1f);if(!_1d.suspended){_1d._resized=true;}});}},_cleanUp:function(){_4.forEach(this._connects,_2.disconnect,_2);this._map=this._surface=null;},_processEvent:function(evt){var map=this._map;evt.screenPoint=new _11(evt.pageX-map.position.x,evt.pageY-map.position.y);evt.mapPoint=map.toMap(evt.screenPoint);},_canvasDownHandler:function(evt){this._processEvent(evt);this._downPt=evt.screenPoint.x+","+evt.screenPoint.y;},_canvasUpHandler:function(evt){this._processEvent(evt);this._upPt=evt.screenPoint.x+","+evt.screenPoint.y;},_tolerance:15,_canvasClickHandler:function(evt){if(!this._downPt||!this._upPt||this._downPt!==this._upPt){return;}this._processEvent(evt);var map=this._map,_20=_4.map(map.graphicsLayerIds,function(id){return map.getLayer(id);});_20.push(map.graphics);_20.reverse();_20=_4.filter(_20,function(_21){return _21.loaded&&_21._mouseEvents&&!_21.suspended&&(!_b.isDefined(_21.opacity)||_21.opacity>0);});var _22=evt.screenPoint,_23=this._tolerance,_24=_22.x-_23,_25=_22.y+_23,_26=_22.x+_23,_27=_22.y-_23,_28=new _12(_24,_27,_26,_25),_29=map.toMap(new _11(_24,_25)),_2a=map.toMap(new _11(_26,_27)),_2b=new _12(_29.x,_29.y,_2a.x,_2a.y,_29.spatialReference),_2c,_2d=_c("esri-touch");delete _28.spatialReference;_4.some(_20,function(_2e){var _2f=_4.filter(_2e.graphics,function(_30){var _31=_30.getDojoShape();if(!_30.visible||!_31){return false;}var _32=_31.getTransformedBoundingBox();if(_32){var _33=new _12(_32[0].x,_32[0].y,_32[2].x,_32[2].y);delete _33.spatialReference;return _2d?_33.intersects(_28):_33.contains(_22);}else{return _4.some(_31.children||[],function(_34){_32=_34.getTransformedBoundingBox();var _35=new _12(_32[0].x,_32[0].y,_32[2].x,_32[2].y);delete _35.spatialReference;return _2d?_35.intersects(_28):_35.contains(_22);});}});_2f.reverse();if(_2f.length>0){var _36;_4.some(_2f,function(_37){if(_37.geometry&&_2b.intersects(_37.geometry)){_36=_37;return true;}return false;});if(_36){_2c=_36;return true;}}return false;});if(_2c){var _38=_2c.getLayer();if(_38){evt.graphic=_2c;_38.onClick(evt);}}}});_15=_1(_e,{declaredClass:"esri.layers._GraphicsLayer",managedSuspension:true,_eventMap:{"graphic-add":["graphic"],"graphic-remove":["graphic"]},constructor:function(_39){if(_39&&(_3.isString(_39)||(_3.isObject(_39)&&_39.layerDefinition))){_39=arguments[1];}this._params=_3.mixin({displayOnPan:true,drawMode:true},_39||{});this.infoTemplate=_39&&_39.infoTemplate;this.graphics=[];this._draw=_3.hitch(this,this._draw);this._refresh=_3.hitch(this,this._refresh);this.registerConnectEvents();},setDrawMode:function(_3a){this._params.drawMode=_3a;},renderer:null,_setMap:function(map,_3b){this.inherited(arguments);this._map=map;this._wrap=map.wrapAround180;this._srInfo=map.spatialReference._getInfo();if(!this._canvas){this._div=_3b.createGroup();}else{_3b=_8.createSurface(_3b.getEventSource(),map.width,map.height);_7.set(_3b.rawNode,"position","absolute");this._div=_3b.createGroup();this._renderProto=this._div.constructor.prototype._render;this._div._render=_3.hitch(this,this._canvasRender);}this._div.getEventSource().id=this.id+"_layer";var op=this.opacity;if(_b.isDefined(op)&&op<1){this.setOpacity(op,true);}return this._div;},_unsetMap:function(map,_3c){_4.forEach(this.graphics,function(g){g._shape=null;});if(!this._canvas){this._div.clear();_3c.remove(this._div);_6.destroy(this._div.getEventSource());}else{_3c=this._div.getParent();_3c._parent={};_6.destroy(_3c.rawNode);_3c.destroy();}this._map=this._div=null;clearTimeout(this._wakeTimer);this._wakeTimer=null;this._disableDrawConnectors();this.inherited(arguments);},_onZoomStartHandler:function(){_d.hide(this._div.getEventSource());},_onExtentChangeHandler:function(_3d,_3e,_3f,lod){clearTimeout(this._wakeTimer);this._wakeTimer=null;if(_3f){var _40=this._map.__visibleRect,_41=this._div;this._refresh(true);_41.setTransform(_9.translate({x:_40.x,y:_40.y}));if(this._renderProto&&_41.surface.pendingRender){this._dirty=true;}else{if(!this.suspended){_d.show(_41.getEventSource());}}}else{if(this._resized){this._refresh(false);this._resized=false;}}if(this.graphics.length>0){this.onUpdate();}},_canvasRender:function(){var _42=this._div;if(this._dirty){delete this._dirty;if(!this.suspended){_d.show(_42.getEventSource());}}return this._renderProto.apply(_42,arguments);},_refresh:function(_43){var gs=this.graphics,il=gs.length,i,_44=this._draw;for(i=0;i<il;i++){_44(gs[i],_43);}},refresh:function(){this._refresh(true);},redraw:function(){this._refresh(true);},_onPanHandler:function(_45,_46){this._panDx=_46.x;this._panDy=_46.y;var _47=this._map.__visibleRect;this._div.setTransform(_9.translate({x:_47.x+_46.x,y:_47.y+_46.y}));},_onPanEndUpdateHandler:function(_48,_49){if(!this._params._child&&(_49.x!==this._panDx||_49.y!==this._panDy)){var _4a=this._map.__visibleRect;this._div.setTransform(_9.translate({x:_4a.x,y:_4a.y}));}this._refresh(false);if(this.graphics.length){this.onUpdate();}},_onPanStartHandler:function(){_d.hide(this._div.getEventSource());},_onPanEndHandler:function(){var _4b=this._map.__visibleRect,_4c=this._div;_4c.setTransform(_9.translate({x:_4b.x,y:_4b.y}));this._refresh(false);if(this._renderProto&&_4c.surface.pendingRender){this._dirty=true;}else{_d.show(_4c.getEventSource());}if(this.graphics.length){this.onUpdate();}},onSuspend:function(){this.inherited(arguments);_d.hide(this._div.getEventSource());clearTimeout(this._wakeTimer);this._wakeTimer=null;this._disableDrawConnectors();},onResume:function(evt){this.inherited(arguments);this._enableDrawConnectors();this._wakeTimer=this._wakeTimer||setTimeout(_3.hitch(this,function(){if(!this.suspended){this._onExtentChangeHandler(null,null,true);}}),0);},_enableDrawConnectors:function(){var map=this._map,dc=_2.connect;this._disableDrawConnectors();if(this._params.displayOnPan){if(!this._params._child){this._onPanHandler_connect=dc(map,"onPan",this,"_onPanHandler");}this._onPanEndHandler_connect=dc(map,"onPanEnd",this,"_onPanEndUpdateHandler");}else{this._onPanStartHandler_connect=dc(map,"onPanStart",this,"_onPanStartHandler");this._onPanEndHandler_connect=dc(map,"onPanEnd",this,"_onPanEndHandler");}this._onZoomStartHandler_connect=dc(map,"onZoomStart",this,"_onZoomStartHandler");this._onExtentChangeHandler_connect=dc(map,"onExtentChange",this,"_onExtentChangeHandler");},_disableDrawConnectors:function(){var dd=_2.disconnect;dd(this._onExtentChangeHandler_connect);dd(this._onZoomStartHandler_connect);dd(this._onPanHandler_connect);dd(this._onPanStartHandler_connect);dd(this._onPanEndHandler_connect);this._onExtentChangeHandler_connect=this._onZoomStartHandler_connect=this._onPanHandler_connect=this._onPanStartHandler_connect=this._onPanEndHandler_connect=null;},_updateExtent:function(_4d){var _4e=_4d.geometry;if(!_4e){_4d._extent=null;return;}var _4f=(_4d._extent=_4e.getExtent());if(!_4f){var x,y;if(_4e.declaredClass==="esri.geometry.Point"){x=_4e.x;y=_4e.y;}else{if(_4e.declaredClass==="esri.geometry.Multipoint"){x=_4e.points[0][0];y=_4e.points[0][1];}else{_4d._extent=null;return;}}_4d._extent=new _12(x,y,x,y,_4e.spatialReference);}},_intersects:function(map,_50,_51){var _52=map.spatialReference,_53=_50.spatialReference,_54=(_52&&_53&&!_52.equals(_53)&&_52._canProject(_53)&&_53.wkid===4326);if(this._wrap&&!_51){var _55=[],_56=map._getFrameWidth(),_57=this._srInfo,_58,_59=map._clip?map._getAvailExtent():map.extent,_5a,g,m,f,gl,ml,fl,_5b,_5c,_5d=[],_5e=_50._partwise;if(_54){_59=map.geographicExtent;_57=_53._getInfo();}_5a=_59._getParts(_57);if(_5e&&_5e.length){_58=[];for(g=0,gl=_5e.length;g<gl;g++){_58=_58.concat(_5e[g]._getParts(_57));}}else{_58=_50._getParts(_57);}for(g=0,gl=_58.length;g<gl;g++){_5b=_58[g];for(m=0,ml=_5a.length;m<ml;m++){_5c=_5a[m];if(_5c.extent.intersects(_5b.extent)){for(f=0,fl=_5b.frameIds.length;f<fl;f++){_55.push((_5c.frameIds[0]-_5b.frameIds[f])*_56);}}}}for(g=0,gl=_55.length;g<gl;g++){f=_55[g];if(_4.indexOf(_55,f)===g){_5d.push(f);}}return (_5d.length)?_5d:null;}else{return (_54?map.geographicExtent:map.extent).intersects(_50)?[0]:null;}},_draw:function(_5f,_60){if(!this._params.drawMode||!this._map||this.suspended){return;}try{var _61=_5f._extent,_62,_63;if(_5f.visible&&_61&&(_62=this._intersects(this._map,_61,_5f.geometry._originOnly))&&(_63=this._getSymbol(_5f))){if(!_5f.getDojoShape()||_60||_62){var _64=_5f.geometry.type;if(_64==="point"){this._drawMarker(_5f,_63,_62);this._symbolizeMarker(_5f,_63);}else{if(_64==="multipoint"){this._drawMarkers(_5f,_63,_62);this._symbolizeMarkers(_5f,_63);}else{this._drawShape(_5f,_62);this._symbolizeShape(_5f,_63);}}}}else{if(_5f.getDojoShape()){this._removeShape(_5f);}}}catch(err){this._errorHandler(err,_5f);}},_removeShape:function(_65){var _66=_65.getDojoShape();_66.removeShape();_65._shape=null;},_drawShape:function(_67,_68){var _69=_67.geometry,_6a=_69.type,map=this._map,me=map.extent,mw=map.width,mh=map.height,_6b=map.__visibleRect,_6c=[],i,il,_6d,pt,xy,wh,_6e=(_6a==="extent");if(_6a==="rect"||_6e){pt={x:0,y:0,spatialReference:_69.spatialReference};pt.x=_6e?_69.xmin:_69.x;pt.y=_6e?_69.ymax:_69.y;xy=_14.toScreenPoint(me,mw,mh,pt);pt.x=_6e?_69.xmax:(_69.x+_69.width);pt.y=_6e?_69.ymin:(_69.y+_69.height);wh=_14.toScreenPoint(me,mw,mh,pt);_6d={x:xy.x-_6b.x+_68[0],y:xy.y-_6b.y,width:Math.abs(wh.x-xy.x),height:Math.abs(wh.y-xy.y)};if(_6d.width===0){_6d.width=1;}if(_6d.height===0){_6d.height=1;}_67._shape=this._drawRect(this._div,_67.getDojoShape(),_6d);}else{if(_6a==="polyline"||_6a==="polygon"){for(i=0,il=_68.length;i<il;i++){_6c=_6c.concat(_14._toScreenPath(me,mw,mh,_69,-_6b.x+_68[i],-_6b.y));}_67._shape=this._drawPath(this._div,_67.getDojoShape(),_6c);if(this._rendererLimits){if(_6a==="polyline"){this._clipPolyline(_67._shape,_69);}else{this._clipPolygon(_67._shape,_69);}}}}},_drawRect:function(_6f,_70,_71){return _70?_70.setShape(_71):_6f.createRect(_71);},_drawImage:function(_72,_73,_74){return _73?_73.setShape(_74):_72.createImage(_74);},_drawCircle:function(_75,_76,_77){return _76?_76.setShape(_77):_75.createCircle(_77);},_drawPath:(function(){if(_c("ie")<9){return function(_78,_79,_7a,_7b){_7a=_7b?_7a:_7a.join(" ");if(_79){return _79.setShape(_7a);}else{var p=_78.createObject(_7b?_8.Path:_8.EsriPath,_7a);_78._overrideSize(p.getEventSource());return p;}};}else{return function(_7c,_7d,_7e,_7f){_7e=_7f?_7e:_7e.join(" ");return _7d?_7d.setShape(_7e):_7c.createPath(_7e);};}}()),_drawText:function(_80,_81,_82){return _81?_81.setShape(_82):_80.createText(_82);},_getSymbol:function(_83){return _83.symbol||(this.renderer?this.renderer.getSymbol(_83):null)||null;},_symbolizeShape:function(_84,_85){var _86=_85._stroke,_87=_85._fill;if(_86===null||_87===null){_86=_85.getStroke();_87=_85.getFill();}_84.getDojoShape().setStroke(_86).setFill(_87);_85._stroke=_86;_85._fill=_87;},_smsToPath:(function(){if(_c("ie")<9){return function(SMS,_88,x,y,xMh,xPh,yMh,yPh,_89){switch(_88){case SMS.STYLE_SQUARE:return ["M",xMh+","+yMh,"L",xPh+","+yMh,xPh+","+yPh,xMh+","+yPh,"X","E"];case SMS.STYLE_CROSS:return ["M",x+","+yMh,"L",x+","+yPh,"M",xMh+","+y,"L",xPh+","+y,"E"];case SMS.STYLE_X:return ["M",xMh+","+yMh,"L",xPh+","+yPh,"M",xMh+","+yPh,"L",xPh+","+yMh,"E"];case SMS.STYLE_DIAMOND:return ["M",x+","+yMh,"L",xPh+","+y,x+","+yPh,xMh+","+y,"X","E"];case SMS.STYLE_TARGET:return ["M",xMh+","+yMh,"L",xPh+","+yMh,xPh+","+yPh,xMh+","+yPh,xMh+","+yMh,"M",(xMh-_89)+","+y,"L",xMh+","+y,"M",x+","+(yMh-_89),"L",x+","+yMh,"M",(xPh+_89)+","+y,"L",xPh+","+y,"M",x+","+(yPh+_89),"L",x+","+yPh,"E"];}};}else{return function(SMS,_8a,x,y,xMh,xPh,yMh,yPh,_8b){switch(_8a){case SMS.STYLE_SQUARE:return ["M",xMh+","+yMh,xPh+","+yMh,xPh+","+yPh,xMh+","+yPh,"Z"];case SMS.STYLE_CROSS:return ["M",x+","+yMh,x+","+yPh,"M",xMh+","+y,xPh+","+y];case SMS.STYLE_X:return ["M",xMh+","+yMh,xPh+","+yPh,"M",xMh+","+yPh,xPh+","+yMh];case SMS.STYLE_DIAMOND:return ["M",x+","+yMh,xPh+","+y,x+","+yPh,xMh+","+y,"Z"];case SMS.STYLE_TARGET:return ["M",xMh+","+yMh,xPh+","+yMh,xPh+","+yPh,xMh+","+yPh,xMh+","+yMh,"M",(xMh-_8b)+","+y,xMh+","+y,"M",x+","+(yMh-_8b),x+","+yMh,"M",(xPh+_8b)+","+y,xPh+","+y,"M",x+","+(yPh+_8b),x+","+yPh];}};}}()),_pathStyles:{"square":1,"cross":1,"x":1,"diamond":1,"target":1},_typeMaps:{"picturemarkersymbol":"image","textsymbol":"text"},_isInvalidShape:function(_8c,_8d){var _8e=_8d&&_8d.shape&&_8d.shape.type,_8f=_8c&&_8c.type,_90=_8c&&_8c.style;if(!_90){if(_8f){_90=this._typeMaps[_8f];}}else{if(this._pathStyles[_90]){_90="path";}}if(_8e&&_90&&(_8e!==_90)){return true;}},_drawPoint:function(_91,_92,_93,_94,_95){var _96=_93.type,map=this._map,_97=map.__visibleRect,_98=_14.toScreenPoint(map.extent,map.width,map.height,_92).offset(-_97.x+_95[0],-_97.y),px=_98.x,py=_98.y,_99,_9a,_9b=0,_9c=0;if(this._isInvalidShape(_93,_94)){_94.removeShape();_94=null;}if(_96==="simplemarkersymbol"){var _9d=_93.style,_9e=_93.size/2,_9f=Math.round;switch(_9d){case _f.STYLE_SQUARE:case _f.STYLE_CROSS:case _f.STYLE_X:case _f.STYLE_DIAMOND:_99=this._drawPath(_91,_94,this._smsToPath(_f,_9d,px,py,_9f(px-_9e),_9f(px+_9e),_9f(py-_9e),_9f(py+_9e)));break;case _f.STYLE_TARGET:var _a0=_93._targetWidth/2,_a1=_93._targetHeight/2;_99=this._drawPath(_91,_94,this._smsToPath(_f,_9d,px,py,_9f(px-_a0),_9f(px+_a0),_9f(py-_a1),_9f(py+_a1),_93._spikeSize));break;case _f.STYLE_PATH:_99=this._drawPath(_91,_94,_93.path,true);_9a=_99.getBoundingBox();_9b=-(_9a.x+(_9a.width/2))+px;_9c=-(_9a.y+(_9a.height/2))+py;break;default:_99=this._drawCircle(_91,_94,{cx:px,cy:py,r:_9e});}}else{if(_96==="picturemarkersymbol"){var w=_93.width,h=_93.height;_99=this._drawImage(_91,_94,{x:px-(w/2),y:py-(h/2),width:w,height:h,src:_93.url});}else{if(_96==="textsymbol"){_99=this._drawText(_91,_94,{type:"text",text:_93.text,x:px,y:py,align:_93.align,decoration:_93.decoration,rotated:_93.rotated,kerning:_93.kerning});}}}_99.setTransform(_9.multiply(_9.translate(_93.xoffset,-_93.yoffset),_9.rotategAt(_93.angle,_98),_9.translate(_9b,_9c)));_99._wrapOffsets=_95;return _99;},_symbolizePoint:function(_a2,_a3){var _a4=_a3.type;if(_a4==="picturemarkersymbol"){return;}var _a5=_a3._stroke,_a6=_a3._fill;if(_a4==="textsymbol"){_a2.setFont(_a3.font).setFill(_a3.getFill());}else{if(_a5===null||_a6===null){_a5=_a3.getStroke();_a6=_a3.getFill();}if(_a4==="simplemarkersymbol"){_a2.setFill(_a6).setStroke(_a5);}_a3._stroke=_a5;_a3._fill=_a6;}},_drawMarker:function(_a7,_a8,_a9){_a7._shape=this._drawPoint(this._div,_a7.geometry,_a8,_a7.getDojoShape(),_a9);},_symbolizeMarker:function(_aa,_ab){this._symbolizePoint(_aa.getDojoShape(),_ab);},_drawMarkers:function(_ac,_ad,_ae){var _af=_ac.geometry,_b0=_af.points,_b1=_ac.getDojoShape()||this._div.createGroup(),_b2,i,il=_b0.length,_b3=[],idx=0,j,jl=_ae?_ae.length:0;if(_b1.children[0]&&this._isInvalidShape(_ad,_b1.children[0])){_b1.clear();}for(i=0;i<il;i++){_b2=_b0[i];for(j=0;j<jl;j++){_b3[0]=_ae[j];this._drawPoint(_b1,{x:_b2[0],y:_b2[1],spatialReference:_af.spatialReference},_ad,_b1.children[idx++],_b3);}}var _b4=_b1.children.length;if(il*_ae.length<_b4){for(i=_b4-1;i>=il*_ae.length;i--){_b1.children[i].removeShape();}}_ac._shape=_b1;},_symbolizeMarkers:function(_b5,_b6){var _b7=_b5.getDojoShape(),_b8=_b7.children,i,il=_b8.length;for(i=0;i<il;i++){this._symbolizePoint(_b8[i],_b6);}},_errorHandler:function(err,_b9){var msg="Unable to draw graphic ";if(_b9){err.message=msg+"(geometry:"+(_b9.geometry?_b9.geometry.declaredClass:null)+", symbol:"+(_b9.symbol?_b9.symbol.declaredClass:null)+"): "+err.message;}else{err.message=msg+"(null): "+err.message;}this.inherited(arguments);},_rendererLimits:(function(){var _ba,_bb,_bc;if(_c("ff")){_ba=16125;_bb=-32250;_bc=32250;}else{if(_c("ie")<9){_ba=100000;_bb=-100000;_bc=100000;}else{if(_c("chrome")&&_c("chrome")<6){_ba=8150;_bb=-10000;_bc=10000;}}}if(_ba){var _bd,_be;_bd=[-_ba,-_ba,_ba,_ba];_be=[[[-_ba,-_ba],[_ba,-_ba]],[[_ba,-_ba],[_ba,_ba]],[[_ba,_ba],[-_ba,_ba]],[[-_ba,_ba],[-_ba,-_ba]]];return {clipLimit:_ba,rangeMin:_bb,rangeMax:_bc,clipBBox:_bd,clipSegments:_be};}}()),_clipPolyline:function(_bf,_c0){var _c1=this._getCorners(_bf,_c0);var _c2=_c1.tl,_c3=_c1.br;var _c4=this._rendererLimits;var _c5=_c4.rangeMin,_c6=_c4.rangeMax,_c7=_c4.clipBBox,_c8=_c4.clipSegments;var _c9=this._isPointWithinRange,_ca=this._isPointWithinBBox,_cb=this._getClipperIntersection,_cc=this._getPlaneIndex;if(!_c9(_c2,_c5,_c6)||!_c9(_c3,_c5,_c6)){if(_c("ie")<9){this._createSegments(_bf);}var _cd=[];_4.forEach(_bf.segments,function(_ce){var _cf=_ce.args,len=_cf.length,_d0=[],i;for(i=0;i<len;i+=2){var pt1=[_cf[i],_cf[i+1]];var pt2=[_cf[i+2],_cf[i+3]];var _d1=_ca(pt1,_c7);var _d2=_ca(pt2,_c7);if(_d1^_d2){var _d3=_cb([pt1,pt2],_c8);if(_d3){if(!_d1){_d0.push(_d3[1],pt2);}else{if(i){_d0.push(_d3[1]);}else{_d0.push(pt1,_d3[1]);}_cd.push(_d0);_d0=[];}}}else{if(_d1){if(i){_d0.push(pt2);}else{_d0.push(pt1,pt2);}}else{var _d4=_cc(pt1,_c7);var _d5=_cc(pt2,_c7);if(_d4===-1||_d5===-1||_d4===_d5){continue;}var _d6=_cb([pt1,pt2],_c8,true);if(_d6.length>0){if(!_d6[_d4]){_d4=_d6[_d4[0]]?_d4[0]:_d4[1];}if(!_d6[_d5]){_d5=_d6[_d5[0]]?_d5[0]:_d5[1];}var _d7=_d6[_d4],_d8=_d6[_d5];if(_d7){_d0.push(_d7);}if(_d8){_d0.push(_d8);_cd.push(_d0);_d0=[];}}}}}_cd.push(_d0);});_bf.setShape(this._getPathStringFromPaths(_cd));}},_clipPolygon:function(_d9,_da){var _db=this._getCorners(_d9,_da);var _dc=_db.tl,_dd=_db.br;var _de=this._rendererLimits;var _df=_de.clipLimit,_e0=_de.rangeMin,_e1=_de.rangeMax,_e2=_de.clipBBox,_e3=_de.clipSegments;var _e4=this._isPointWithinRange,_e5=this._isPointWithinBBox,_e6=this._getClipperIntersection,_e7=this._getPlaneIndex,_e8=_13._pointLineDistance;if(!_e4(_dc,_e0,_e1)||!_e4(_dd,_e0,_e1)){if(_c("ie")<9){this._createSegments(_d9);}var _e9=_4.map(_d9.segments,function(_ea){var _eb=_ea.args,len=_eb.length,_ec=[],_ed=[],i;for(i=0;i<len;i+=2){var pt1=[_eb[i],_eb[i+1]];var pt2=[_eb[i+2],_eb[i+3]];if(i===(len-2)){_ec.push(pt1);break;}var _ee=_e5(pt1,_e2);var _ef=_e5(pt2,_e2);_ec.push(pt1);if(_ee^_ef){var _f0=_e6([pt1,pt2],_e3);if(_f0){var _f1=_f0[1];_f1[_ee?"inOut":"outIn"]=true;_ec.push(_f1);_ed.push([_ee?"INOUT":"OUTIN",_ec.length-1,_f0[0]]);}}else{if(!_ee){var _f2=_e7(pt1,_e2);var _f3=_e7(pt2,_e2);if(_f2===-1||_f3===-1||_f2===_f3){continue;}var _f0=_e6([pt1,pt2],_e3,true);if(_f0.length>0){if(!_f0[_f2]){_f2=_f0[_f2[0]]?_f2[0]:_f2[1];}if(!_f0[_f3]){_f3=_f0[_f3[0]]?_f3[0]:_f3[1];}var _f4=_f0[_f2],_f5=_f0[_f3];if(_f4){_f4.outIn=true;_ec.push(_f4);_ed.push(["OUTIN",_ec.length-1,_f2]);}if(_f5){_f5.inOut=true;_ec.push(_f5);_ed.push(["INOUT",_ec.length-1,_f3]);}}else{if(_3.isArray(_f2)&&_3.isArray(_f3)){var _f6=_f2.concat(_f3);_f6.sort();if(_f6.join("")==="0123"){var _f7=[];if((_f2[0]+_f2[1])===3){_f7.push([_df,-_df],[-_df,_df]);}else{_f7.push([-_df,-_df],[_df,_df]);}var d1=_e8(_f7[0],[pt1,pt2]);var d2=_e8(_f7[1],[pt1,pt2]);_ec.push((d1<d2)?_f7[0]:_f7[1]);}}}}}}var _f8=_e2[0],_f9=_e2[1],_fa=_e2[2],_fb=_e2[3];_4.forEach(_ec,function(_fc){if(_fc[0]<_f8){if(_fc[1]>=_f9&&_fc[1]<=_fb){_fc[0]=_f8;}else{_fc[0]=_f8;_fc[1]=_fc[1]<_f9?_f9:_fb;}}});_4.forEach(_ec,function(_fd){if(_fd[1]<_f9){if(_fd[0]>=_f8&&_fd[0]<=_fa){_fd[1]=_f9;}else{_fd[1]=_f9;_fd[0]=_fd[0]<_f8?_f8:_fa;}}});_4.forEach(_ec,function(_fe){if(_fe[0]>_fa){if(_fe[1]>=_f9&&_fe[1]<=_fb){_fe[0]=_fa;}else{_fe[0]=_fa;_fe[1]=_fe[1]<_f9?_f9:_fb;}}});_4.forEach(_ec,function(_ff){if(_ff[1]>_fb){if(_ff[0]>=_f8&&_ff[0]<=_fa){_ff[1]=_fb;}else{_ff[1]=_fb;_ff[0]=_ff[0]<_f8?_f8:_fa;}}});var k=0,len=_ed.length;if(len>0){do{var curr=_ed[k];var next=_ed[(k+1)%len];if(curr[2]===next[2]&&curr[0]==="INOUT"&&next[0]==="OUTIN"){var _100=curr[1],end=next[1],u;if(_100<end){for(u=_100+1;u<end;u++){_ec[u][2]=true;}}else{if(_100>end){for(u=_100+1;u<_ec.length;u++){_ec[u][2]=true;}for(u=0;u<end;u++){_ec[u][2]=true;}}}}k=(k+1)%len;}while(k!==0);}var _101=_ec[0],last=_ec[_ec.length-1];if(_101[2]){last[2]=true;_4.some(_ed,function(data){if(data[1]===1){_ec.splice(_ec.length-1,0,_3.clone(_ec[1]));return true;}return false;});}_ec=_4.filter(_ec,function(_102){return _102[2]?false:true;});for(k=0;k<_ec.length-1;k++){var now=_ec[k];var next=_ec[k+1];if(!next||(now[0]!==next[0])||(now[1]!==next[1])){continue;}if(next.outIn){now.outIn=true;}else{if(next.inOut){now.inOut=true;}}_ec.splice(k+1,1);}var abs=Math.abs,_103=[];for(k=0;k<_ec.length-1;k++){var curr=_ec[k],cx=curr[0],cy=curr[1];var x1=(abs(cx)===_df);var y1=(abs(cy)===_df);var next=_ec[k+1],nx=next[0],ny=next[1];var x2=(abs(nx)===_df);var y2=(abs(ny)===_df);if(x1&&y2){_103.push([k+1,[cx,ny]]);}else{if(y1&&x2){_103.push([k+1,[nx,cy]]);}}}for(k=_103.length-1;k>=0;k--){var data=_103[k];var prev=_ec[data[0]-1];var now=_ec[data[0]];if(prev.outIn||prev.inOut||now.outIn||now.inOut){continue;}_ec.splice(data[0],0,data[1]);}var _101=_ec[0],last=_ec[_ec.length-1];if(_101[0]!==last[0]||_101[1]!==last[1]){_ec.push(_101);}return _ec;});_d9.setShape(this._getPathStringFromPaths(_e9));}},_getCorners:function(_104,_105){if(_c("ie")<9){var map=this._map,_106=_105.getExtent(),_107=_106.spatialReference,_108=map.toScreen(new _10(_106.xmin,_106.ymax,_107)),_109=map.toScreen(new _10(_106.xmax,_106.ymin,_107));return {tl:_108,br:_109};}else{var _10a=_104.getTransformedBoundingBox();return {tl:_10a[0],br:_10a[2]};}},_createSegments:function(_10b){_10b.shape.path=_10b.vmlPath;_10b.segmented=false;_10b._confirmSegmented();var _10c=_10b.segments;if(_10c.length>1){_10b.segments=_4.filter(_10c,function(_10d,idx,arr){var next=arr[idx+1];if(_10d.action==="M"&&next&&next.action==="L"){_10d.args=_10d.args.concat(next.args);return true;}return false;});}},_getPathStringFromPaths:function(_10e){if(_c("ie")<9){_10e=_4.map(_10e,function(path){var _10f=_4.map(path,function(_110,idx){return (idx===1?"l ":"")+_110.join(",");});return "m "+_10f.join(" ");});_10e.push("e");}else{_10e=_4.map(_10e,function(path){var _111=_4.map(path,function(_112){return _112.join(",");});return "M "+_111.join(" ");});}return _10e.join(" ");},_isPointWithinBBox:function(_113,bbox){var left=bbox[0],top=bbox[1];var _114=bbox[2],_115=bbox[3];var x=_113[0],y=_113[1];if(x>left&&x<_114&&y>top&&y<_115){return true;}else{return false;}},_isPointWithinRange:function(_116,_117,_118){var x=_116.x,y=_116.y;if(x<_117||y<_117||x>_118||y>_118){return false;}else{return true;}},_getClipperIntersection:function(line,_119,_11a){var i,_11b=_13._getLineIntersection2,_11c=Math.round,data={length:0};for(i=0;i<4;i++){var _11d=_11b(line,_119[i]);if(_11d){_11d[0]=_11c(_11d[0]);_11d[1]=_11c(_11d[1]);if(!_11a){return [i,_11d];}else{data[i]=_11d;data.length++;}}}return _11a?data:null;},_getPlaneIndex:function(_11e,_11f){var px=_11e[0],py=_11e[1],xmin=_11f[0],ymin=_11f[1],xmax=_11f[2],ymax=_11f[3];if(px<=xmin){if((py>=ymin)&&(py<=ymax)){return 3;}else{return (py<ymin)?[0,3]:[2,3];}}if(py<=ymin){if((px>=xmin)&&(px<=xmax)){return 0;}else{return (px<xmin)?[3,0]:[1,0];}}if(px>=xmax){if((py>=ymin)&&(py<=ymax)){return 1;}else{return (py<ymin)?[0,1]:[2,1];}}if(py>=ymax){if((px>=xmin)&&(px<=xmax)){return 2;}else{return (px<xmin)?[3,2]:[1,2];}}return -1;},onGraphicAdd:function(){},onGraphicRemove:function(){},onGraphicsClear:function(){},onOpacityChange:function(){},setInfoTemplate:function(_120){this.infoTemplate=_120;},add:function(_121){var _122=arguments[1];if(_121._graphicsLayer===this){return _121;}if(!_122){this.graphics.push(_121);}_121._graphicsLayer=this;this._updateExtent(_121);this._draw(_121);if(!_122){this.onGraphicAdd(_121);}return _121;},remove:function(_123){if(!arguments[1]){var _124=this.graphics,i;if((i=_4.indexOf(_124,_123))===-1){return null;}_123=this.graphics.splice(i,1)[0];}if(_123.getDojoShape()){this._removeShape(_123);}_123._shape=_123._graphicsLayer=null;this.onGraphicRemove(_123);return _123;},clear:function(){var _125=arguments[1],g=this.graphics;while(g.length>0){this.remove(g[0]);}if(!_125){this.onGraphicsClear();}},setOpacity:function(op,_126){if(_126||this.opacity!=op){var div=this._div;if(div){if(_c("ie")<9){_4.forEach(this.graphics,function(_127){var _128=_127._shape;var node=_128&&_128.getNode();if(node){var _129=_128.strokeStyle,_12a=node.stroke;if(_129&&_12a){_12a.opacity=_129.color.a*op;}var _12b=_128.fillStyle,fill=node.fill;if(_12b&&fill){if(fill.type==="tile"){_7.set(node,"opacity",op);}else{fill.opacity=_12b.a*op;}}}});div._esriIeOpacity=op;}else{if(this._canvas){_7.set(div.getEventSource(),"opacity",op);}else{div.getEventSource().setAttribute("opacity",op);}}}this.opacity=op;if(!_126){this.onOpacityChange(op);}}},setRenderer:function(ren){this.renderer=ren;}});var _12c=_1(_15,{declaredClass:"esri.layers.GraphicsLayer",constructor:function(){this.enableMouseEvents=_3.hitch(this,this.enableMouseEvents);this.disableMouseEvents=_3.hitch(this,this.disableMouseEvents);this._processEvent=_3.hitch(this,this._processEvent);this._initLayer();},_initLayer:function(){this.loaded=true;this.onLoad(this);},_setMap:function(){var d=this.inherited("_setMap",arguments);this.enableMouseEvents();return d;},_unsetMap:function(){this.disableMouseEvents();this.inherited("_unsetMap",arguments);},_processEvent:function(evt){var _12d=this._map,g=this.graphics,gl=g.length;evt.screenPoint=new _11(evt.pageX-_12d.position.x,evt.pageY-_12d.position.y);evt.mapPoint=_12d.toMap(evt.screenPoint);var i,es,gr,ds,_12e=evt.target,_12f=_12e.parentNode;for(i=0;i<gl;i++){gr=g[i];ds=gr.getDojoShape();if(ds){es=ds.getEventSource();if(es===_12e||es===_12f){evt.graphic=gr;return evt;}}}},_onMouseOverHandler:function(evt){if(this._processEvent(evt)){this.onMouseOver(evt);}},_onMouseMoveHandler:function(evt){if(this._processEvent(evt)){this.onMouseMove(evt);}},_onMouseDragHandler:function(evt){if(this._processEvent(evt)){this.onMouseDrag(evt);}},_onMouseOutHandler:function(evt){if(this._processEvent(evt)){this.onMouseOut(evt);}},_onMouseDownHandler:function(evt){this._downGr=this._downPt=null;if(this._processEvent(evt)){_2.disconnect(this._onmousemove_connect);_2.disconnect(this._onmousedrag_connect);this._onmousedrag_connect=_2.connect(this._div.getEventSource(),"onmousemove",this,"_onMouseDragHandler");this._downGr=evt.graphic;this._downPt=evt.screenPoint.x+","+evt.screenPoint.y;this.onMouseDown(evt);}},_onMouseUpHandler:function(evt){this._upGr=this._upPt=null;if(this._processEvent(evt)){_2.disconnect(this._onmousedrag_connect);_2.disconnect(this._onmousemove_connect);this._onmousemove_connect=_2.connect(this._div.getEventSource(),"onmousemove",this,"_onMouseMoveHandler");this._upGr=evt.graphic;this._upPt=evt.screenPoint.x+","+evt.screenPoint.y;this.onMouseUp(evt);}},_onClickHandler:function(evt){if(this._processEvent(evt)){var _130=this._downGr,upGr=this._upGr;if(_130&&upGr&&_130===upGr&&this._downPt===this._upPt){if(_c("ie")<9){_a._ieGraphic=evt.graphic;}this.onClick(evt);}}},_onDblClickHandler:function(evt){if(this._processEvent(evt)){this.onDblClick(evt);}},onMouseOver:function(){},onMouseMove:function(){},onMouseDrag:function(){},onMouseOut:function(){},onMouseDown:function(){},onMouseUp:function(){},onClick:function(){},onDblClick:function(){},enableMouseEvents:function(){if(this._mouseEvents){return;}var dc=_2.connect,gc=this._div.getEventSource();if(_8.renderer.toLowerCase().indexOf("canvas")===-1){this._onmouseover_connect=dc(gc,"onmouseover",this,"_onMouseOverHandler");this._onmousemove_connect=dc(gc,"onmousemove",this,"_onMouseMoveHandler");this._onmouseout_connect=dc(gc,"onmouseout",this,"_onMouseOutHandler");this._onmousedown_connect=dc(gc,"onmousedown",this,"_onMouseDownHandler");this._onmouseup_connect=dc(gc,"onmouseup",this,"_onMouseUpHandler");this._onclick_connect=dc(gc,"onclick",this,"_onClickHandler");this._ondblclick_connect=dc(gc,"ondblclick",this,"_onDblClickHandler");}this._mouseEvents=true;},disableMouseEvents:function(){if(!this._mouseEvents){return;}var ddc=_2.disconnect;ddc(this._onmouseover_connect);ddc(this._onmousemove_connect);ddc(this._onmousedrag_connect);ddc(this._onmouseout_connect);ddc(this._onmousedown_connect);ddc(this._onmouseup_connect);ddc(this._onclick_connect);ddc(this._ondblclick_connect);this._mouseEvents=false;}});_12c._GraphicsContainer=_16;_12c._GraphicsLayer=_15;if(_c("extend-esri")){_3.setObject("layers.GraphicsLayer",_12c,_a);_3.setObject("layers._GraphicsContainer",_16,_a);_3.setObject("layers._GraphicsLayer",_15,_a);}return _12c;});