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
define("esri/dijit/Scalebar",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/query","esri/kernel","esri/lang","esri/domUtils","esri/units","esri/SpatialReference","esri/WKIDUnitConversion","esri/geometry/Point","esri/geometry/ScreenPoint","esri/geometry/Polyline","esri/geometry/geodesicUtils","esri/geometry/webMercatorUtils","esri/geometry/screenUtils","esri/geometry/normalizeUtils"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17){var _18=_1(null,{declaredClass:"esri.dijit.Scalebar",map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,constructor:function(_19,_1a){this.metricScalebar=_6.create("div",{innerHTML:"<div class='esriScaleLabelDiv'><div class='esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'></div></div><div class='esriScalebarLine esriScalebarMetricLine'></div>"});this.englishScalebar=_6.create("div",{innerHTML:"<div class='esriScalebarLine esriScalebarEnglishLine'></div><div class='esriScaleLabelDiv'><div class='esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'></div></div>"});this.domNode=_6.create("div");_19=_19||{};if(!_19.map){console.error("scalebar: unable to find the 'map' property in parameters");return;}if(!_19.scalebarUnit){this.scalebarUnit="english";}else{if(_19.scalebarUnit!=="english"&&_19.scalebarUnit!=="metric"&&_19.scalebarUnit!=="dual"){console.error("scalebar unit only accepts english or metric or dual");return;}else{this.scalebarUnit=_19.scalebarUnit;}}if(!_19.scalebarStyle){this.scalebarStyle="ruler";}else{if(_19.scalebarStyle!=="ruler"&&_19.scalebarStyle!=="line"){console.error("scalebar style must be ruler or line");return;}else{this.scalebarStyle=_19.scalebarStyle;}}this.background=_19.background;switch(this.scalebarUnit){case "english":if(this.scalebarStyle==="ruler"){this.englishScalebar.innerHTML="<div class='esriScalebarRuler'><div class='esriScalebarRulerBlock upper_firstpiece'></div><div class='esriScalebarRulerBlock upper_secondpiece'></div><div class='esriScalebarRulerBlock lower_firstpiece'></div><div class='esriScalebarRulerBlock lower_secondpiece'></div></div><div class='scaleLabelDiv'><div class='esriScalebarLabel' style='left: -3%'>0</div><div class='esriScalebarLabel esriScalebarFirstNumber'></div><div class='esriScalebarLabel esriScalebarSecondNumber'></div></div>";}this.domNode.appendChild(this.englishScalebar);break;case "metric":if(this.scalebarStyle==="ruler"){this.metricScalebar.innerHTML="<div class='esriScalebarRuler'><div class='esriScalebarRulerBlock upper_firstpiece'></div><div class='esriScalebarRulerBlock upper_secondpiece'></div><div class='esriScalebarRulerBlock lower_firstpiece'></div><div class='esriScalebarRulerBlock lower_secondpiece'></div></div><div class='scaleLabelDiv'><div class='esriScalebarLabel' style='left: -3%'>0</div><div class='esriScalebarLabel esriScalebarFirstNumber'></div><div class='esriScalebarLabel esriScalebarSecondNumber'></div></div>";}this.domNode.appendChild(this.metricScalebar);break;case "dual":this.domNode.appendChild(this.metricScalebar);this.domNode.appendChild(this.englishScalebar);break;}this.map=_19.map;if(_1a){_1a.appendChild(this.domNode);}else{this.map.container.appendChild(this.domNode);if(_19.attachTo){_5.add(this.domNode,"scalebar_"+_19.attachTo);}else{_5.add(this.domNode,"scalebar_bottom-left");}}_5.add(this.domNode,"esriScalebar");if(this.map.loaded){this._getDistance(this.map.extent);this._checkBingMaps();}else{var _1b=_4.connect(this.map,"onLoad",this,function(){_4.disconnect(_1b);_1b=null;this._getDistance(this.map.extent);this._checkBingMaps();});}this._mapOnPan=_4.connect(this.map,"onPan",this,this._getDistance);this._mapOnExtentChange=_4.connect(this.map,"onExtentChange",this,this._getDistance);_3.forEach(this.map.layerIds,function(_1c,idx){if(this.map.getLayer(_1c).declaredClass==="esri.virtualearth.VETiledLayer"){_4.connect(this.map.getLayer(_1c),"onVisibilityChange",_2.hitch(this,function(_1d){this._checkBingMaps();}));}},this);this._mapOnLayerAdd=_4.connect(this.map,"onLayerAdd",_2.hitch(this,function(_1e){if(_1e.declaredClass==="esri.virtualearth.VETiledLayer"){_4.connect(_1e,"onVisibilityChange",_2.hitch(this,function(_1f){this._checkBingMaps();}));}this._checkBingMaps();}));this._mapOnLayerRemove=_4.connect(this.map,"onLayerRemove",_2.hitch(this,this._checkBingMaps));},hide:function(){this._hidden=true;_d.hide(this.domNode);},show:function(){this._hidden=false;_d.show(this.domNode);},destroy:function(){_4.disconnect(this._mapOnPan);_4.disconnect(this._mapOnExtentChange);_4.disconnect(this._mapOnLayerAdd);_4.disconnect(this._mapOnLayerRemove);this.hide();this.map=null;_6.destroy(this.domNode);},_checkBingMaps:function(){if(_5.contains(this.domNode,"scalebar_bottom-left")){_8.set(this.domNode,"left","25px");_3.forEach(this.map.layerIds,function(_20,idx){if(this.map.getLayer(_20).declaredClass==="esri.virtualearth.VETiledLayer"&&this.map.getLayer(_20).visible){var _21="95px";if(this.map._mapParams.nav){_21="115px";}_8.set(this.domNode,"left",_21);}},this);}},_getDistance:function(_22){var _23=_7.position(this.domNode,true);var _24=_23.y-this.map.position.y;_24=(_24>this.map.height)?this.map.height:_24;_24=(_24<0)?0:_24;var _25=new _12(0,_24);var _26=new _12(this.map.width,_24);var _27,_28,_29,_2a;this.mapUnit="esriDecimalDegrees";var pt1=_16.toMapPoint(_22,this.map.width,this.map.height,_25);var pt2=_16.toMapPoint(_22,this.map.width,this.map.height,_26);var _2b=new _11(_22.xmin,(_22.ymin+_22.ymax)/2,this.map.spatialReference);var _2c=new _11(_22.xmax,(_22.ymin+_22.ymax)/2,this.map.spatialReference);if(this.map.spatialReference.wkid===3857||this.map.spatialReference.wkid===102100||this.map.spatialReference.wkid===102113||(this.map.spatialReference.wkt&&this.map.spatialReference.wkt.indexOf("WGS_1984_Web_Mercator")!=-1)){pt1=_15.webMercatorToGeographic(pt1,true);pt2=_15.webMercatorToGeographic(pt2,true);_2b=_15.webMercatorToGeographic(_2b,true);_2c=_15.webMercatorToGeographic(_2c,true);}else{if(_c.isDefined(_10[this.map.spatialReference.wkid])||(this.map.spatialReference.wkt&&this.map.spatialReference.wkt.indexOf("PROJCS")===0)){this.mapUnit="linearUnit";_27=Math.abs(_22.xmax-_22.xmin);var _2d;if(_c.isDefined(_10[this.map.spatialReference.wkid])){_2d=_10.values[_10[this.map.spatialReference.wkid]];}else{var wkt=this.map.spatialReference.wkt;var _2e=wkt.lastIndexOf(",")+1;var end=wkt.lastIndexOf("]]");_2d=parseFloat(wkt.substring(_2e,end));}_27*=_2d;_2a=_27/1609;_29=_27/1000;_27/=1000;}}if(this.mapUnit==="esriDecimalDegrees"){var _2f=new _13(new _f({wkid:4326}));_2f.addPath([pt1,pt2]);var _30=_17._straightLineDensify(_2f,10);_27=_14.geodesicLengths([_30],_e.KILOMETERS)[0];var _31=new _13(new _f({wkid:4326}));_31.addPath([_2b,_2c]);var _32=_17._straightLineDensify(_31,10);_28=_14.geodesicLengths([_32],_e.KILOMETERS)[0];_2a=_27/1.609;_28/=1.609;_29=_27;}if(this.scalebarUnit==="english"){this._getScaleBarLength(_2a,"mi");}else{if(this.scalebarUnit==="metric"){this._getScaleBarLength(_29,"km");}else{if(this.scalebarUnit==="dual"){this._getScaleBarLength(_2a,"mi");this._getScaleBarLength(_29,"km");}}}},_getScaleBarLength:function(_33,_34){var _35=50;var _36=_35*_33/this.map.width;var i=0;var _37=_34;if(_36<0.1){if(_34==="mi"){_36*=5280;_37="ft";}else{if(_34==="km"){_36*=1000;_37="m";}}}while(_36>=1){_36/=10;i++;}var _38,_39;if(_36>0.5){_38=1;_39=0.5;}else{if(_36>0.3){_38=0.5;_39=0.3;}else{if(_36>0.2){_38=0.3;_39=0.2;}else{if(_36>0.15){_38=0.2;_39=0.15;}else{if(_36>0.1){_38=0.15;_39=0.1;}}}}}var _3a=((_38/_36)>=(_36/_39))?_39:_38;var _3b=_3a/_36;var _3c=_35*_3b;var _3d=Math.pow(10,i)*_3a;this._drawScaleBar(_3c,_3d,_37);},_drawScaleBar:function(_3e,_3f,_40){var _41=2*Math.round(_3e),_42,_43,_44;if(_40==="mi"||_40==="ft"){this.englishScalebar.style.width=_41+"px";_42=_a(".esriScalebarFirstNumber",this.englishScalebar);_43=_a(".esriScalebarSecondNumber",this.englishScalebar);_44=_a(".esriScalebarMetricLineBackground",this.englishScalebar);}else{this.metricScalebar.style.width=_41+"px";_42=_a(".esriScalebarFirstNumber",this.metricScalebar);_43=_a(".esriScalebarSecondNumber",this.metricScalebar);_44=_a(".esriScalebarMetricLineBackground",this.metricScalebar);}_3.forEach(_44,function(_45,idx){_45.style.width=_41-2+"px";},this);_3.forEach(_42,function(_46,idx){_46.innerHTML=_3f;},this);_3.forEach(_43,function(_47,idx){if(this.mapUnit!=="esriUnknown"){_47.innerHTML=2*_3f+_40;}else{_47.innerHTML=2*_3f+"Unknown Unit";}},this);}});if(_9("extend-esri")){_2.setObject("dijit.Scalebar",_18,_b);}return _18;});