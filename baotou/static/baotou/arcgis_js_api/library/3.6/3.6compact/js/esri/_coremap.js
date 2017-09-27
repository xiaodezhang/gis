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
define("esri/_coremap",["require","dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/array","dojo/_base/event","dojo/_base/unload","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/sniff","dijit/registry","dojox/gfx/matrix","esri/kernel","esri/config","esri/lang","esri/Evented","esri/fx","esri/deferredUtils","esri/tileUtils","esri/geometry/Point","esri/geometry/ScreenPoint","esri/geometry/Extent","esri/geometry/Rect","esri/geometry/mathUtils","esri/geometry/scaleUtils","esri/geometry/screenUtils","esri/geometry/webMercatorUtils","esri/layers/GraphicsLayer","esri/layers/TileInfo","esri/layers/LOD","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/OpenStreetMapLayer","esri/dijit/Popup","dojo/uacss"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,has,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21,_22,LOD,_23,_24,_25){var _26=_1f.toMapPoint,_27=_1f.toScreenPoint,dc=_4.connect,ddc=_4.disconnect,dh=_6.hitch,ds=_f.set,iOf=_7.indexOf,_28=_6.mixin,uid=0,_29=_13.defaults.map,_2a=1000000,_2b=0.75,_2c=0.25,_2d=3,_2e=20,_2f=40;function _30(_31,_32){var _33=_31.lods;_33.sort(function(l1,l2){if(l1.scale>l2.scale){return -1;}else{if(l1.scale<l2.scale){return 1;}}return 0;});var _34=[];_33=_7.filter(_33,function(l){if(iOf(_34,l.scale)===-1){_34.push(l.scale);return true;}});var pl=(_32.lods=[]),l;_7.forEach(_33,function(lod,_35){l=(pl[_35]=new LOD(lod));l.level=_35;});_32.tileInfo=new _22(_28(_31,{lods:pl}));};var _36=_3([_15],{declaredClass:"esri._CoreMap",resizeDelay:300,invalidExtent:"Map does not have a valid extent.",invalidGeometry:"Geometry (wkid: ${geometry}) cannot be converted to spatial reference of the map (wkid: ${map})",unknownBasemap:"Unable to find basemap definition for: \"${basemapName}\". Try one of these: ${list}",invalidBasemap:"Unable to add basemap: \"${basemapName}\".",unknownLayerType:"Unknown basemap layer type: \"${type}\" found in basemap definition for: \"${basemapName}\".",visible:true,_eventMap:{"basemap-change":true,"extent-change":["extent","delta","levelChange","lod"],"layer-add":["layer"],"layer-add-result":["layer","error"],"layer-remove":["layer"],"layer-reorder":["layer","index"],"layer-resume":["layer"],"layer-suspend":["layer"],"layers-add-result":["layers"],"layers-removed":true,"layers-reordered":["layerIds"],"load":["map"],"pan":["extent","delta"],"pan-end":["extent","delta"],"pan-start":["extent","screenPoint"],"reposition":["x","y"],"resize":["extent","width","height"],"scale":["matrix","immediate"],"time-extent-change":["timeExtent"],"unload":["map"],"update-end":["error"],"update-start":true,"zoom":["extent","zoomFactor","anchor"],"zoom-end":["extent","zoomFactor","anchor","level"],"zoom-start":["extent","zoomFactor","anchor","level"],"click":true,"dbl-click":true,"key-down":true,"key-up":true,"mouse-down":true,"mouse-drag":true,"mouse-drag-end":true,"mouse-drag-start":true,"mouse-move":true,"mouse-out":true,"mouse-over":true,"mouse-up":true,"mouse-wheel":true,"basic-tap":true,"double-tap":true,"pinch-end":true,"pinch-move":true,"pinch-start":true,"processed-double-tap":true,"processed-tap":true,"swipe-end":true,"swipe-move":true,"swipe-start":true,"tap":true,"two-finger-tap":true},constructor:function(_37,_38){this.registerConnectEvents();_28(this,{_internalLayerIds:[],_layers:[],_layerDivs:[],_layerSize:0,_clickHandles:[],_connects:[]});_28(this,{_zoomAnimDiv:null,_zoomAnim:null,_layersDiv:null,_firstLayerId:null,_delta:null,_cursor:null,_ratioW:1,_ratioH:1,_params:null});_28(this,{cursor:null,layerIds:[],graphicsLayerIds:[],graphics:null,loaded:false});_28(this,{__panning:false,__zooming:false,__container:null,root:null,__LOD:null,__tileInfo:null,__visibleRect:null,__visibleDelta:null});this._rids=[];var _39=(this.container=_a.byId(_37));var id=(this.id=_b.get(_39,"id")||_10.getUniqueId(this.declaredClass));_c.add(_39,"map");var box=_e.getContentBox(_39),dac=_c.add,dcr=_d.create;this.position=new _1a(0,0);this._reposition();var _3a=(this.width=(box.w||_29.width));var _3b=(this.height=box.h||_29.height);if(box.w===0){ds(_39,"width",_3a+"px");}if(box.h===0){ds(_39,"height",_3b+"px");}var _3c=(this.root=dcr("div",{id:id+"_root",style:{width:_3a+"px",height:_3b+"px",direction:"ltr"}}));dac(_3c,"container");var _3d=(this.__container=dcr("div",{id:id+"_container"},_3c));ds(_3d,"position","absolute");dac(_3d,"container");_39.appendChild(_3c);var _3e=(this._params=_28({slider:true,nav:false,zoom:-1,minZoom:-1,maxZoom:-1,scale:-1,minScale:0,maxScale:0,showInfoWindowOnClick:true,displayGraphicsOnPan:true,wrapAround180:true,fitExtent:false},_38||{}));this.wrapAround180=_3e.wrapAround180;if(_14.isDefined(_3e.resizeDelay)){this.resizeDelay=_3e.resizeDelay;}if(_3e.lods){_30({rows:512,cols:512,dpi:96,format:"JPEG",compressionQuality:75,origin:{x:-180,y:90},spatialReference:{wkid:4326},lods:_3e.lods},_3e);this.__tileInfo=_3e.tileInfo;}var ext=(this.extent=_3e.extent);this._extentUtil({mapCenter:_3e.center,targetLevel:_3e.zoom,targetScale:_3e.scale});this.__visibleRect=new _1c(0,0,_3a,_3b);this.__visibleDelta=new _1c(0,0,_3a,_3b);var _3f=(this._layersDiv=dcr("div",{id:id+"_layers"}));dac(_3f,"layersDiv");_3d.appendChild(_3f);this._zoomAnimDiv=dcr("div",{style:{position:"absolute"}});if(_3e.infoWindow){this.infoWindow=_3e.infoWindow;}else{var iw=(this.infoWindow=new _25(_3e.popupOptions,dcr("div")));iw.startup();iw._ootb=true;ds(iw.domNode,"zIndex",_2f);}this._zoomStartHandler=dh(this,this._zoomStartHandler);this._zoomingHandler=dh(this,this._zoomingHandler);this._zoomEndHandler=dh(this,this._zoomEndHandler);this._panningHandler=dh(this,this._panningHandler);this._panEndHandler=dh(this,this._panEndHandler);this._endTranslate=dh(this,this._endTranslate);_9.addOnWindowUnload(this,this.destroy);},_cleanUp:function(){var iw=this.infoWindow;if(iw){if(iw._ootb&&iw.destroy){iw.destroy();}else{iw.unsetMap(this);}delete this.infoWindow;}ddc(this._tsTimeExtentChange_connect);this.setInfoWindowOnClick(false);_d.destroy(this.root);this.root=null;},_addLayer:function(_40,_41,_42){var id=(_40.id=_40.id||(_40 instanceof _21?_29.graphicsLayerNamePrefix:_29.layerNamePrefix)+(uid++));this._layers[id]=_40;var i,lyr;if(_41===this.layerIds||_41===this.graphicsLayerIds){i=this._layerSize;this._layerSize++;}_40._isRefLayer=(_42==="top");_42=(!_14.isDefined(_42)||_42<0||_42>_41.length||_42==="top")?_41.length:_42;if(i===0){this._firstLayerId=id;}if(!_40._isRefLayer){while((lyr=this.getLayer(_41[_42-1]))&&lyr._isRefLayer){_42--;}}_41.splice(_42,0,id);var _43=dh(this,this._addLayerHandler),_44=this,_45=this._connects,_46=function(){if(_40.loaded){if(_44._onLoadFix){_44._onLoadFix=false;setTimeout(function(){_43(_40);},0);}else{_43(_40);}}else{_44[id+"_addtoken_load"]=dc(_40,"onLoad",_44,"_addLayerHandler");_44[id+"_addtoken_err"]=dc(_40,"onError",_44,function(_47){_43(_40,_47,_41);});}};if(this.loaded||i===0||(_40.loaded&&iOf(this.graphicsLayerIds,id)===-1)){_46();}else{_45.push(dc(this,"onLoad",_46));}return _40;},_addLayerHandler:function(_48,_49,_4a){var id=this.id,_4b=_48.id,_4c=iOf(_48 instanceof _21?this.graphicsLayerIds:this.layerIds,_4b),_4d=_4c,_4e=false,_4f=this._params,_50,_51,_52,_53;ddc(this[_4b+"_addtoken_load"]);ddc(this[_4b+"_addtoken_err"]);if(_49){delete this._layers[_4b];if(_4c!==-1){_4a.splice(_4c,1);this.onLayerAddResult(_48,_49);}return;}if(_4c===-1){_4c=iOf(this._internalLayerIds,_4b);_4d=_2e+_4c;_4e=true;}if(_4b===this._firstLayerId){_51=_48.spatialReference;_52=(this.extent&&this.extent.spatialReference);if(_52&&!_52.equals(_51)&&(_48.tileInfo||!_48.url)){_52=null;}_50=(this.spatialReference=(_52||_51));this.wrapAround180=(this.wrapAround180&&_50&&_50._isWrappable())?true:false;if(_48.tileInfo){if(!this.__tileInfo){_30(_28({},_48.tileInfo),_4f);this.__tileInfo=_4f.tileInfo;}else{_53=this.__tileInfo.lods;this.__tileInfo=_28({},_48.tileInfo);this.__tileInfo.lods=_53;}}if(this.wrapAround180){var _54=this.__tileInfo,_55=_50._getInfo();if(!_54||Math.abs(_55.origin[0]-_54.origin.x)>_55.dx){this.wrapAround180=false;}if(this.wrapAround180&&_54){_18._addFrameInfo(_54,_55);}}_4f.units=_48.units;_53=this.__tileInfo&&this.__tileInfo.lods;if(_53&&_53.length){var _56=_4f.minScale,_57=_4f.maxScale,_58=-1,_59=-1,_5a=false,_5b=false,i;for(i=0;i<_53.length;i++){if(_56>0&&!_5a&&_56>=_53[i].scale){_58=_53[i].level;_5a=true;}if(_57>0&&!_5b&&_57>=_53[i].scale){_59=(i>0)?_53[i-1].level:-1;_5b=true;}}if(_4f.minZoom===-1){_4f.minZoom=(_56===0)?_53[0].level:_58;}if(_4f.maxZoom===-1){_4f.maxZoom=(_57===0)?_53[_53.length-1].level:_59;}for(i=0;i<_53.length;i++){if(_4f.minZoom===_53[i].level){_4f.minScale=_53[i].scale;}if(_4f.maxZoom===_53[i].level){_4f.maxScale=_53[i].scale;}}}else{_4f.minZoom=_4f.maxZoom=_4f.zoom=-1;}}if(_48 instanceof _21){if(!this._gc){this._gc=new _21._GraphicsContainer();var gc=this._gc._setMap(this,this._layersDiv);gc.id=id+"_gc";}var _5c=_48._setMap(this,this._gc._surface);_5c.id=id+"_"+_4b;this._layerDivs[_4b]=_5c;this._reorderLayers(this.graphicsLayerIds);if(_4f.showInfoWindowOnClick){this._clickHandles.push(dc(_48,"onClick",this,"_gClickHandler"));}}else{var _5d=_48._setMap(this,this._layersDiv,_4d,this.__LOD);_5d.id=id+"_"+_4b;this._layerDivs[_4b]=_5d;this._reorderLayers(this.layerIds);if(!_4e&&_48.declaredClass.indexOf("VETiledLayer")!==-1){this._onBingLayerAdd(_48);}}if(_4b===this._firstLayerId){this.graphics=new _21({id:id+"_graphics",displayOnPan:_4f.displayGraphicsOnPan});this._addLayer(this.graphics,this._internalLayerIds,_2e);}if(_48===this.graphics){var _5e,_5f=this._layers[this._firstLayerId],_60,_61=_4f.zoom,_62=_4f.scale,_63=_4f.center,_64=_5f.initialExtent||_5f.fullExtent;this._firstLayerId=null;if(this.extent){this.extent=this._convertGeometry(this,this.extent);}if(!this.extent&&_64){if(_63){_63=this._convertGeometry(_64,_63);}if(_63){_64=_64.centerAt(_63);_63=null;}}_60=this.extent||(_64&&new _1b(_64.toJson()));if(_60){if(_61>-1){_60=this.__getExtentForLevel(_61,null,_60).extent;}else{if(_62>0){_60=_1e.getExtentForScale(this,_62,_60);}}}if(!_60){console.log("Map: "+this.invalidExtent);return;}_5e=this._fixExtent(_60,_4f.fitExtent);this.extent=_5e.extent;this.__LOD=_5e.lod;this.__setExtent(this.extent,null,null,_4f.fitExtent);this.loaded=true;this.infoWindow.setMap(this);this.onLoad(this);}if(!_4e){this.onLayerAdd(_48);this.onLayerAddResult(_48);}ddc(this[_4b+"_addLayerHandler_connect"]);},_convertGeometry:function(_65,_66){var _67=_65&&_65.spatialReference,_68=_66&&_66.spatialReference;if(_67&&_68&&!_67.equals(_68)){if(_67._canProject(_68)){if(_67.isWebMercator()){_66=_20.geographicToWebMercator(_66);}else{if(_67.wkid===4326){_66=_20.webMercatorToGeographic(_66,true);}}}else{console.log("Map: "+_14.substitute({geometry:_68.wkid||_68.wkt,map:_67.wkid||_67.wkt},this.invalidGeometry));_66=null;}}return _66;},_reorderLayers:function(_69){var _6a=this.onLayerReorder,djp=_d.place,_6b=this._layerDivs,_6c=this._layers,_6d=this._gc?this._gc._surface.getEventSource():null;if(_69===this.graphicsLayerIds){_7.forEach(_69,function(id,i){var _6e=_6b[id];if(_6e){djp(_6e.getEventSource(),_6d,i);_6a(_6c[id],i);}});}else{var g=this.graphics,gId=g?g.id:null,_6f=this._layersDiv,_70;_7.forEach(_69,function(id,i){_70=_6b[id];if(id!==gId&&_70){djp(_70,_6f,i);_6a(_6c[id],i);}});if(_6d){_6d=(has("ie")<9)?_6d.parentNode:_6d;djp(_6d,_6d.parentNode,_69.length);}}this.onLayersReordered([].concat(_69));},_zoomStartHandler:function(){this.__zoomStart(this._zoomAnimDiv.startingExtent,this._zoomAnimDiv.anchor);},_zoomingHandler:function(_71){var rl=parseFloat(_71.left),rt=parseFloat(_71.top),_72=new _1b(rl,rt-parseFloat(_71.height),rl+parseFloat(_71.width),rt,this.spatialReference),_73=this.extent.getWidth()/_72.getWidth();this.__zoom(_72,_73,this._zoomAnimDiv.anchor);},_zoomEndHandler:function(){var _74=this._zoomAnimDiv,_75=_74.extent,_76=this.extent.getWidth()/_75.getWidth();var _77=_74.anchor,_78=_74.newLod,_79=_74.levelChange;_74.extent=_74.anchor=_74.levelChange=_74.startingExtent=_74.newLod=this._delta=this._zoomAnim=null;this.__zoomEnd(_75,_76,_77,_78,_79);},_panningHandler:function(_7a){if(isNaN(parseFloat(_7a.left))||isNaN(parseFloat(_7a.top))){var _7b=Math.round,_7c=this._panAnim.node;_7a.left=(-1*(this._delta.x-_7b(this.width/2)))+"px";_7a.top=(-1*(this._delta.y-_7b(this.height/2)))+"px";_f.set(_7c,"left",_7a.left);_f.set(_7c,"top",_7a.top);}var d=new _1a(parseFloat(_7a.left),parseFloat(_7a.top)),dm=this.toMap(d);this.onPan(this.extent.offset(dm.x,dm.y),d);},_panEndHandler:function(_7d){this.__panning=false;var _7e=Math.round,_7f=new _1a(-_7e(parseFloat(_7d.style.left)),-_7e(parseFloat(_7d.style.top))),dx=_7f.x,dy=_7f.y,_80=this.__visibleRect,_81=this.__visibleDelta;_80.x+=-dx;_80.y+=-dy;_81.x+=-dx;_81.y+=-dy;ds(this._zoomAnimDiv,{left:"0px",top:"0px"});var _82=this.extent,rw=this._ratioW,rh=this._ratioH;_82=new _1b(_82.xmin+(dx/rw),_82.ymin-(dy/rh),_82.xmax+(dx/rw),_82.ymax-(dy/rh),this.spatialReference);_7f.setX(-_7f.x);_7f.setY(-_7f.y);this._delta=this._panAnim=null;this._updateExtent(_82);this.onPanEnd(_82,_7f);this._fireExtChg([_82,_7f,false,this.__LOD]);},_fixExtent:function(_83,fit){var _84=this._reshapeExtent(_83),_85=1+_2c;while(fit===true&&(_84.extent.getWidth()<_83.getWidth()||_84.extent.getHeight()<_83.getHeight())&&_84.lod.level>0&&_85<=_2d){_84=this._reshapeExtent(_83.expand(_85));_85+=_2c;}return _84;},_getFrameWidth:function(){var _86=-1,_87=this.spatialReference._getInfo();if(this.__LOD){var _88=this.__LOD._frameInfo;if(_88){_86=_88[3];}}else{if(_87){_86=Math.round((2*_87.valid[1])/(this.extent.getWidth()/this.width));}}return _86;},_reshapeExtent:function(_89){var w=_89.getWidth(),h=_89.getHeight(),r=w/h,_8a=this.width/this.height,dw=0,dh=0;if(this.width>this.height){if(w>h){if(_8a>r){dw=(h*_8a)-w;}else{dh=(w/_8a)-h;}}else{if(w<h){dw=(h*_8a)-w;}else{dw=(h*_8a)-w;}}}else{if(this.width<this.height){if(w>h){dh=(w/_8a)-h;}else{if(w<h){if(_8a>r){dw=(h*_8a)-w;}else{dh=(w/_8a)-h;}}else{dh=(w/_8a)-h;}}}else{if(w<h){dw=h-w;}else{if(w>h){dh=(w/_8a)-h;}}}}if(dw){_89.xmin-=dw/2;_89.xmax+=dw/2;}if(dh){_89.ymin-=dh/2;_89.ymax+=dh/2;}return this._getAdjustedExtent(_89);},_getAdjustedExtent:function(_8b){if(this.__tileInfo){return _18.getCandidateTileInfo(this,this.__tileInfo,_8b);}else{var _8c=_1e.getScale(this,_8b),_8d=this.getMinScale(),_8e=this.getMaxScale(),_8f=!_8d||(_8c<=_8d),_90=!_8e||(_8c>=_8e);if(!_8f){_8b=_1e.getExtentForScale(this,_8d,_8b);}else{if(!_90){_8b=_1e.getExtentForScale(this,_8e,_8b);}}return {extent:_8b};}},_gClickHandler:function(evt){var _91=evt.graphic,iw=this.infoWindow;if(_91._getEffInfoTemplate()&&iw){_8.stop(evt);var _92=_91.geometry,_93=(_92&&_92.type==="point")?_92:evt.mapPoint,_94,_95;if(iw.setFeatures){iw.setFeatures([_91]);}else{iw.setTitle(_91.getTitle());_94=_91.getContent();if(_94&&_6.isString(_94.id)){_95=_10.byId(_94.id);if(_95&&_95.set&&/_PopupRenderer/.test(_95.declaredClass)){_95.set("showTitle",false);}}iw.setContent(_94);}iw.show(_93);}},_onBingLayerAdd:function(_96){this["__"+_96.id+"_vis_connect"]=_4.connect(_96,"onVisibilityChange",this,"_toggleBingLogo");this._toggleBingLogo(_96.visible);},_onBingLayerRemove:function(_97){_4.disconnect(this["__"+_97.id+"_vis_connect"]);delete this["__"+_97.id+"_vis_connect"];var _98=this.layerIds;var _99=_7.some(_98,function(_9a){var _9b=this._layers[_9a];return _9b&&_9b.visible&&_9b.declaredClass.indexOf("VETiledLayer")!==-1;},this);this._toggleBingLogo(_99);},_toggleBingLogo:function(_9c){if(_9c&&!this._bingLogo){var _9d={left:(this._mapParams&&this._mapParams.nav?"25px":"")};if(has("ie")===6){_9d.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true', sizingMethod='crop', src='"+_1.toUrl("esri")+"/images/map/bing-logo-lg.png"+"')";}var _9e=this._bingLogo=_d.create("div",{style:_9d},this.root);_c.add(_9e,"bingLogo-lg");}else{if(!_9c&&this._bingLogo){_d.destroy(this._bingLogo);delete this._bingLogo;}}},__panStart:function(x,y){var _9f=this._zoomAnim,_a0=this._panAnim;if(_9f&&_9f._active){_9f.stop();_9f._fire("onEnd",[_9f.node]);}else{if(_a0&&_a0._active){_a0.stop();this._panAnim=null;var _a1=_a0.curve.getValue(_a0._getStep()),rl=Math.round(parseFloat(_a1.left)),rt=Math.round(parseFloat(_a1.top)),_a2=this.navigationManager._dragOrigin;this.__pan(rl,rt);if(_a2){_a2.x-=rl;_a2.y-=rt;}return;}}this.__panning=true;this.onPanStart(this.extent,new _1a(x,y));},__pan:function(dx,dy){var _a3=this.extent,rw=this._ratioW,rh=this._ratioH;this.onPan(new _1b(_a3.xmin-(dx/rw),_a3.ymin+(dy/rh),_a3.xmax-(dx/rw),_a3.ymax+(dy/rh),this.spatialReference),new _1a(dx,dy));},__panEnd:function(dx,dy){var _a4=this.__visibleRect,_a5=this.__visibleDelta;_a4.x+=dx;_a4.y+=dy;_a5.x+=dx;_a5.y+=dy;var d=new _1a(dx,dy),_a6=this.extent,rw=this._ratioW,rh=this._ratioH;_a6=new _1b(_a6.xmin-(dx/rw),_a6.ymin+(dy/rh),_a6.xmax-(dx/rw),_a6.ymax+(dy/rh),this.spatialReference);this.__panning=false;this._updateExtent(_a6);this.onPanEnd(_a6,d);this._fireExtChg([_a6,d,false,this.__LOD]);},__zoomStart:function(_a7,_a8){this.__zooming=true;this.onZoomStart(_a7,1,_a8,this.__LOD?this.__LOD.level:null);},__zoom:function(_a9,_aa,_ab){this.onZoom(_a9,_aa,_ab);},__zoomEnd:function(_ac,_ad,_ae,lod,_af){ds(this._layersDiv,{left:"0px",top:"0px"});this._delta=new _1a(0,0);this.__visibleRect.x=(this.__visibleRect.y=0);_ac=new _1b(_ac);this.__LOD=lod;this._ratioW=this.width/_ac.getWidth();this._ratioH=this.height/_ac.getHeight();var _b0=this._delta;this._delta=null;this.__zooming=false;this._updateExtent(_ac,_af);this.onZoomEnd(_ac,_ad,_ae,lod?lod.level:null);this._fireExtChg([_ac,_b0,_af,lod]);},_extentUtil:function(_b1,pan,_b2,fit,_b3){var dfd=new _5(),_b4,_b5,_b6,_b7,_b8,_b9,_ba,_bb,dx,dy,_bc=this.width,_bd=this.height,_be,_bf,_c0;if(_b1){_b4=_b1.numLevels;_b5=_b1.targetLevel;_be=_14.isDefined(_b5);_b6=_b1.factor;_b7=_b1.mapAnchor;_b8=_b1.screenAnchor;_b9=_b1.mapCenter;_bf=_b1.levelOrFactor;_ba=_b1.targetScale;_bb=_14.isDefined(_ba)&&_ba>0;}if(pan){dx=pan.dx;dy=pan.dy;_b9=pan.mapCenter;}if(_6.isArray(_b9)){_b9=new _19(_b9);}var _c1=this._panAnim,_c2=this._stopAnim(),_c3=_c2?_c2.divExtent:this.extent,_c4=this.__tileInfo,_c5,_c6,ewd,eht,_c7=this._params;if(!this.loaded){if(_b2){if(_c3){_b2=this._convertGeometry(_c3,_b2);}if(_b2){this.extent=_b2;_c7.zoom=_c7.scale=-1;_c7.center=null;}}else{if(_b9||_be||_bb){if(_b9){if(_c3){_b9=this._convertGeometry(_c3,_b9);if(_b9){this.extent=_c3.centerAt(_b9);_c7.center=null;}}else{_c7.center=_b9;}}if(_be&&_b5>-1){_c7.zoom=_b5;_c7.scale=-1;}else{if(_bb){_c7.scale=_ba;_c7.zoom=-1;}}}}dfd.resolve();return dfd;}if(_b9){_b9=this._convertGeometry(this,_b9);if(!_b9){dfd.reject();return dfd;}}if(_b7){_b7=this._convertGeometry(this,_b7);if(!_b7){dfd.reject();return dfd;}}if(_b2){_b2=this._convertGeometry(this,_b2);if(!_b2){dfd.reject();return dfd;}}if(_c1&&_b7&&_b8){_b7=_26(this.extent,_bc,_bd,_b8);}if(_c2&&_b7&&_b8){_b7=_26(_c2.divExtent,_bc,_bd,_b8);}if(_be){if(_c4){var _c8=this.getMinZoom(),_c9=this.getMaxZoom();if(_b5<_c8){_b5=_c8;}else{if(_b5>_c9){_b5=_c9;}}_b4=_b5-(_c2?_c2.level:this.getLevel());}else{_b4=_b5>0?-1:1;_c0=_bf?_b5:null;}}if(_b2){}else{if(_14.isDefined(_b4)){var _ca;if(_c4){var _cb=_c2?_c2.level:this.getLevel();_ca=this.__getExtentForLevel(_cb+_b4,_b9,_c3).extent;}else{var _cc=_c2?_c2.end:this.extent;_ca=_cc.expand(_c0||(_b4>0?0.5*_b4:2*-_b4));if(_c0&&_b9){_ca=_ca.centerAt(_b9);}}if(_ca){if(_b9){_b2=_ca;}else{var _cd=_b7||_c3.getCenter(),_ce=_c3.ymax-((_ca.getHeight()-_c3.getHeight())*(_cd.y-_c3.ymax)/_c3.getHeight());_c5=_c3.xmin-((_ca.getWidth()-_c3.getWidth())*(_cd.x-_c3.xmin)/_c3.getWidth());_b2=new _1b(_c5,_ce-_ca.getHeight(),_c5+_ca.getWidth(),_ce,this.spatialReference);}}}else{if(_bb){_b2=_1e.getExtentForScale(this,_ba,_c3);}else{if(_14.isDefined(_b6)){_b2=_c3.expand(_b6);}else{if(dx||dy){if(_c2){var end=_c2.end,c1=end.getCenter(),c2=_27(end,_bc,_bd,c1);c2.x+=dx;c2.y+=dy;c2=_26(end,_bc,_bd,c2);_b2=end.offset(c2.x-c1.x,c2.y-c1.y);}else{var _cf=new _1a((_bc/2)+dx,(_bd/2)+dy),_d0=_26(_c3,_bc,_bd,_cf);ewd=_c3.getWidth();eht=_c3.getHeight();_c5=_d0.x-(ewd/2);_c6=_d0.y-(eht/2);_b2=new _1b(_c5,_c6,_c5+ewd,_c6+eht,this.spatialReference);}}}}}}if(!_b2){if(_b9){var ext=_c2?_c2.end:_c3;ewd=ext.getWidth();eht=ext.getHeight();_c5=_b9.x-(ewd/2);_c6=_b9.y-(eht/2);_b2=new _1b(_c5,_c6,_c5+ewd,_c6+eht,this.spatialReference);}else{if(_c2){_b2=_c2.end;}}}if(_b2){if(this._extentDfd&&this._extentDfd.fired===-1){this._extentDfd.reject();}this._extentDfd=dfd;this.__setExtent(_b2,null,_b8,fit,_c2,_b3);}else{dfd.reject();}return dfd;},__setExtent:function(_d1,_d2,_d3,fit,_d4,_d5){try{if(this._firstLayerId){this.extent=_d1;return;}var _d6=true,sr=this.spatialReference,ext=_d4?_d4.divExtent:this.extent,_d7=this._fixExtent(_d1,fit||false);_d1=_d7.extent;var _d8=_d1.getWidth(),_d9=_d1.getHeight(),_da=Math.round;if(ext){var tw=_da(ext.getWidth()*_2a),w=_da(_d8*_2a),th=_da(ext.getHeight()*_2a),h=_da(_d9*_2a);_d6=(tw!==w)||(th!==h);}var _db,end,_dc,_dd,_de=_d4&&_d4.rect,_df=_d4&&_d4.divExtent;if(_29.zoomDuration&&_d6&&ext){_df=_df||new _1b(ext);_de=_de||{left:ext.xmin,top:ext.ymax,width:ext.getWidth(),height:ext.getHeight()};end={left:_d1.xmin,top:_d1.ymax,width:_d8,height:_d9};_dc=_de.width/end.width;_dd=_de.height/end.height;var mtl=new _19(_d1.xmin,_d1.ymax,sr),mbl=new _19(_d1.xmin,_d1.ymin,sr),etl=new _19(this.extent.xmin,this.extent.ymax,sr),ebl=new _19(this.extent.xmin,this.extent.ymin,sr);_db=_1d.getLineIntersection(etl,mtl,ebl,mbl,sr);if(!_db&&!_d4){_d6=false;}}this._ratioW=this.width/_d8;this._ratioH=this.height/_d9;var _e0=this._zoomAnimDiv;if(_d6){ds(this._layersDiv,{left:"0px",top:"0px"});_d2=new _1a(0,0);this.__visibleRect.x=(this.__visibleRect.y=0);if(_de&&end){this._delta=_d2;_e0.id="_zAD";_e0.startingExtent=_df;_e0.extent=_d1;_e0.levelChange=_d6;_e0.newLod=_d7.lod;if(_d3){_e0.anchor=_d3;}else{if(!_db&&_d4){_e0.anchor=_d4.anchor;}else{_e0.anchor=_27(this.extent,this.width,this.height,_db);}}this._zoomAnim=_16.resize({node:_e0,start:_de,end:end,duration:_29.zoomDuration,rate:_29.zoomRate,beforeBegin:!_d4?this._zoomStartHandler:null,onAnimate:this._zoomingHandler,onEnd:this._zoomEndHandler}).play();this._fireOnScale(this.extent.getWidth()/_d1.getWidth(),_e0.anchor);}else{this._updateExtent(_d1,_d6);this._fireExtChg([this.extent,_d2,_d6,(this.__LOD=_d7.lod)]);}}else{if(!this.__panning){if(this.loaded===false||_d5){this._updateExtent(_d1,_d6);this._fireExtChg([this.extent,_d2,_d6,(this.__LOD=_d7.lod)]);}else{this.__panning=true;_de=new _1c(0,0,this.width,this.height,this.spatialReference).getCenter();_de.x=_da(_de.x);_de.y=_da(_de.y);this.onPanStart(this.extent,new _1a(0,0));var _e1=(this._delta=this.toScreen(_d1.getCenter()));this._panAnim=_16.slideTo({node:_e0,left:_de.x-_e1.x,top:_de.y-_e1.y,duration:_29.panDuration,rate:_29.panRate,onAnimate:this._panningHandler,onEnd:this._panEndHandler});this._panAnim.play();}}}}catch(e){console.log(e.stack);console.error(e);}},_fireOnScale:function(_e2,_e3,_e4){if(this.navigationMode==="css-transforms"){var vd=this.__visibleDelta;this.onScale(_11.scaleAt(_e2,{x:-1*((this.width/2)-(_e3.x-vd.x)),y:-1*((this.height/2)-(_e3.y-vd.y))}),_e4);}},_stopAnim:function(){var _e5=this._zoomAnim,_e6=this._panAnim;if(_e5&&_e5._active){_e5.stop();var _e7=_e5.curve.getValue(_e5._getStep()),rl=parseFloat(_e7.left),rt=parseFloat(_e7.top),_e8=_e5.node;return {anchor:_e8.anchor,start:_e8.startingExtent,end:_e8.extent,level:_e8.newLod&&_e8.newLod.level,rect:_e7,divExtent:new _1b(rl,rt-parseFloat(_e7.height),rl+parseFloat(_e7.width),rt,this.spatialReference)};}else{if(_e6&&_e6._active){_e6.stop();_e6._fire("onEnd",[_e6.node]);}}},__getExtentForLevel:function(_e9,_ea,_eb){var ti=this.__tileInfo,_ec=ti&&ti.lods;_e9=_14.isDefined(_e9)?_e9:0;_eb=_eb||this.extent;_ea=_ea||(_eb&&_eb.getCenter());if(_ec){if(!_ea){console.log("Map: "+this.invalidExtent);return;}var _ed=this.getMinZoom(),_ee=this.getMaxZoom();if(_e9>_ee){_e9=_ee;}if(_e9<_ed){_e9=_ed;}var lod=_ec[_e9],_ef=this.width*lod.resolution/2,_f0=this.height*lod.resolution/2;return {extent:new _1b(_ea.x-_ef,_ea.y-_f0,_ea.x+_ef,_ea.y+_f0,_ea.spatialReference),lod:lod};}else{if(!_eb){console.log("Map: "+this.invalidExtent);return;}_e9=(!_e9||_e9<1)?1:_e9;return {extent:_eb.expand(_e9).centerAt(_ea)};}},_jobs:0,_incr:function(){if((++this._jobs)===1){this.updating=true;this.onUpdateStart();}},_decr:function(){var _f1=--this._jobs;if(!_f1){this.updating=false;this.onUpdateEnd();}else{if(_f1<0){this._jobs=0;}}},_fireEvent:function(_f2,_f3){if(this[_f2]){this[_f2].apply(this,_f3);}},_updateExtent:function(_f4,_f5){this.extent=_f4;if(_f5){this._setClipRect();}var _f6=this.spatialReference;if(_f6){if(_f6.isWebMercator()){this.geographicExtent=_20.webMercatorToGeographic(this._getAvailExtent(),true);}else{if(_f6.wkid===4326){this.geographicExtent=new _1b(this._getAvailExtent().toJson());}}}},_fireExtChg:function(_f7){this._fireEvent("onExtentChange",_f7);var dfd=this._extentDfd;if(dfd){delete this._extentDfd;dfd.resolve();}},onUpdateStart:function(){},onUpdateEnd:function(){},onLoad:function(){this._setClipRect();},onUnload:function(){},onExtentChange:function(a,b,_f8){},onTimeExtentChange:function(){},onLayerAdd:function(){},onLayerAddResult:function(){},onLayersAddResult:function(){},onLayerRemove:function(){},onLayersRemoved:function(){},onLayerReorder:function(){},onLayersReordered:function(){},onLayerSuspend:function(){},onLayerResume:function(){},onPanStart:function(){},onPan:function(){},onPanEnd:function(){},onScale:function(){},onZoomStart:function(){},onZoom:function(){},onZoomEnd:function(){},onResize:function(){this._setClipRect();},onReposition:function(){},destroy:function(){if(!this._destroyed){this.removeAllLayers();this._cleanUp();if(this._gc){this._gc._cleanUp();}this._destroyed=true;this.onUnload(this);}},setCursor:function(_f9){ds(this.__container,"cursor",(this.cursor=_f9));},setMapCursor:function(c){this.setCursor((this._cursor=c));},resetMapCursor:function(){this.setCursor(this._cursor);},setInfoWindow:function(_fa){var iw=this.infoWindow;if(iw){iw.unsetMap(this);}this.infoWindow=_fa;if(this.loaded&&_fa){_fa.setMap(this);}},setInfoWindowOnClick:function(_fb){var _fc=this._params;if(_fb){if(!_fc.showInfoWindowOnClick){var _fd=[this.graphics].concat(_7.map(this.graphicsLayerIds,this.getLayer,this));_7.map(_fd,function(_fe){if(_fe&&_fe.loaded){this._clickHandles.push(dc(_fe,"onClick",this,"_gClickHandler"));}},this);}}else{_7.forEach(this._clickHandles,ddc);this._clickHandles=[];}_fc.showInfoWindowOnClick=_fb;},getInfoWindowAnchor:function(pt){return (this.infoWindow&&this.infoWindow._getAnchor&&this.infoWindow._getAnchor(pt))||"upperright";},toScreen:function(pt,_ff){return _27(this.extent,this.width,this.height,pt,_ff);},toMap:function(pt){return _26(this.extent,this.width,this.height,pt);},addLayer:function(_100,_101){if(_100&&!this.getLayer(_100.id)){this._addLayer(_100,_100 instanceof _21?this.graphicsLayerIds:this.layerIds,_101);}return _100;},addLayers:function(_102){var _103=[],_104=_102.length,_105,i,len=_102.length;var _106=function(_107,_108){if(_7.indexOf(_102,_107)!==-1){_104--;_103.push({"layer":_107,"success":!_108,"error":_108});if(!_104){_4.disconnect(_105);this.onLayersAddResult(_103);}}};_105=_4.connect(this,"onLayerAddResult",_106);for(i=0;i<len;i++){this.addLayer(_102[i]);}return this;},removeLayer:function(_109,_10a){var id=_109.id,ids=_109 instanceof _21?this.graphicsLayerIds:this.layerIds,i=iOf(ids,id);if(i>=0){ids.splice(i,1);if(_109 instanceof _21){ddc(this["_gl_"+_109.id+"_click_connect"]);if(_109.loaded){_109._unsetMap(this,this._gc._surface);}}else{if(_109.loaded){_109._unsetMap(this,this._layersDiv);if(_109.declaredClass.indexOf("VETiledLayer")!==-1){this._onBingLayerRemove(_109);}}}delete this._layers[id];delete this._layerDivs[id];if(!_10a){this._reorderLayers(ids);}this.onLayerRemove(_109);}},removeAllLayers:function(){var ids=this.layerIds,i;for(i=ids.length-1;i>=0;i--){this.removeLayer(this._layers[ids[i]],1);}ids=this.graphicsLayerIds;for(i=ids.length-1;i>=0;i--){this.removeLayer(this._layers[ids[i]],1);}this.onLayersRemoved();},reorderLayer:function(_10b,_10c){if(_6.isString(_10b)){_2.deprecated(this.declaredClass+": "+"Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecated. Use Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",null,"v2.0");_10b=this.getLayer(_10b);}var id=_10b.id,i,ids=_10b instanceof _21?this.graphicsLayerIds:this.layerIds;if(_10c<0){_10c=0;}else{if(_10c>=ids.length){_10c=ids.length-1;}}i=iOf(ids,id);if(i===-1||i===_10c){return;}ids.splice(i,1);ids.splice(_10c,0,id);this._reorderLayers(ids);},getLayer:function(id){return this._layers[id];},setExtent:function(_10d,fit){_10d=new _1b(_10d.toJson());var _10e=_10d.getWidth(),_10f=_10d.getHeight(),dfd;if(_10e===0&&_10f===0){dfd=this.centerAt(new _19({x:_10d.xmin,y:_10d.ymin,spatialReference:_10d.spatialReference&&_10d.spatialReference.toJson()}));}else{dfd=this._extentUtil(null,null,_10d,fit);}return dfd;},centerAt:function(_110){return this._extentUtil(null,{mapCenter:_110});},centerAndZoom:function(_111,_112){return this._extentUtil({targetLevel:_112,mapCenter:_111,levelOrFactor:true});},getScale:function(){return this.__LOD?this.__LOD.scale:_1e.getScale(this);},getMinScale:function(){return this._params.minScale;},getMaxScale:function(){return this._params.maxScale;},setScale:function(_113){return this._extentUtil({targetScale:_113});},getLayersVisibleAtScale:function(_114){var _115=[];_114=_114||this.getScale();if(_114){_7.forEach(this.layerIds.concat(this.graphicsLayerIds),function(_116){_116=this.getLayer(_116);if(_116.isVisibleAtScale(_114)){_115.push(_116);}},this);}return _115;},getNumLevels:function(){var _117=this.getMinZoom(),_118=this.getMaxZoom();return ((_117===_118)&&_117<0)?0:(_118-_117+1);},getLevel:function(){return this.__LOD?this.__LOD.level:-1;},setLevel:function(_119){if(_119>-1){return this._extentUtil({targetLevel:_119});}},getZoom:function(){return this.getLevel();},setZoom:function(zoom){return this.setLevel(zoom);},getMinZoom:function(){return this._params.minZoom;},getMaxZoom:function(){return this._params.maxZoom;},setBasemap:function(_11a){var _11b,_11c="Map.setBasemap: ";if(_6.isObject(_11a)){_11b=_11a;_11a=_11b.title;}else{_11b=_29.basemaps&&_29.basemaps[_11a];}if(_11b){if(this._basemapDfd&&this._basemapDfd.fired===-1){this._basemapDfd.cancel();}var _11d=[],_11e=[],_11f=0;_7.forEach(_11b.baseMapLayers||_11b.layers,function(_120){var _121,_122={id:_120.id,displayLevels:_120.displayLevels,opacity:_14.isDefined(_120.opacity)?_120.opacity:null,visible:_14.isDefined(_120.visibility)?_120.visibility:null};if(_120.type){switch(_120.type){case "OpenStreetMap":_121=new _24(_122);break;default:console.log(_11c+_14.substitute({basemapName:_11a,type:_120.type},this.unknownLayerType));break;}}else{var url=_120.url;if(window.location.protocol==="https:"&&((url.search(/^http\:\/\/server\.arcgisonline\.com/i)!==-1)||(url.search(/^http\:\/\/services\.arcgisonline\.com/i)!==-1)||(url.search(/^http\:\/\/.+\.arcgis\.com/i)!==-1))){url=url.replace(/http:/i,"https:");}_121=new _23(url,_122);}if(_121){_11d.push(_121);_11e.push(_120);if(!_120.isReference){_11f++;}}},this);if(!_11d.length||!_11f){console.log(_11c+_14.substitute({basemapName:_11a},this.invalidBasemap));return;}var _123={basemapName:_11a,infos:_11e,layers:_11d};if(!this.loaded){this._basemapLoaded(_123);return;}var self=this,dfd=new _5(_17._dfdCanceller),_124=function(_125){dfd._pendingLayers--;var idx=_7.indexOf(_123.layers,this);if(idx>-1){var _126=dfd._layerEvents[idx];if(_126){_4.disconnect(_126[0]);_4.disconnect(_126[1]);}}if(dfd._pendingLayers<=0){delete dfd._layerEvents;delete self._basemapDfd;dfd.callback(_123);}};this._basemapDfd=dfd;dfd._pendingLayers=0;dfd._layerEvents={};_7.forEach(_11d,function(_127,i){if(_127){dfd._pendingLayers++;if(_127.loaded){_124(_127);}else{dfd._layerEvents[i]=[_4.connect(_127,"onLoad",_127,_124),_4.connect(_127,"onError",_127,_124)];}}});dfd.addCallback(_6.hitch(this,this._basemapLoaded));}else{var _128=[],_129;for(_129 in _29.basemaps){_128.push(_129);}console.log(_11c+_14.substitute({basemapName:_11a,list:_128.join(",")},this.unknownBasemap));}},_basemapLoaded:function(_12a){var _12b=_12a.layers,_12c=_12a.infos,_12d=0,_12e=true;if(this.loaded){_7.forEach(_12b,function(_12f,i){if(_12f.loaded){if(!_12c[i].isReference){_12d++;}}});_12e=_12d;}if(_12e){this._removeBasemap();this._basemap=_12a.basemapName;this.basemapLayerIds=this._addBasemap(_12b,_12c);this._fireEvent("onBasemapChange");}},_addBasemap:function(_130,_131){var _132=[],ids=[],_133=0;_7.forEach(_130,function(_134,i){if(_131[i].isReference){_132.push(_134);}else{this.addLayer(_134,_133++);ids.push(_134.id);}},this);if(_132.length){_7.forEach(_132,function(_135){this.addLayer(_135,"top");ids.push(_135.id);},this);}return ids;},_removeBasemap:function(){var ids=this.basemapLayerIds,_136;if(ids&&ids.length){_7.forEach(ids,function(id){_136=this.getLayer(id);if(_136){this.removeLayer(_136);}},this);}},getBasemap:function(){return this._basemap||"";},translate:function(dx,dy){dx=dx||0;dy=dy||0;if(!this._txTimer){this._tx=this._ty=0;var _137=this.toScreen(this.extent.getCenter());this.__panStart(_137.x,_137.y);}this._tx+=dx;this._ty+=dy;this.__pan(this._tx,this._ty);clearTimeout(this._txTimer);this._txTimer=setTimeout(this._endTranslate,150);},_endTranslate:function(){clearTimeout(this._txTimer);this._txTimer=null;var dx=this._tx,dy=this._ty;this._tx=this._ty=0;this.__panEnd(dx,dy);},setTimeExtent:function(_138){this.timeExtent=_138;var arg=_138?new _138.constructor(_138.toJson()):null;this.onTimeExtentChange(arg);},setTimeSlider:function(_139){if(this.timeSlider){ddc(this._tsTimeExtentChange_connect);this._tsTimeExtentChange_connect=null;this.timeSlider=null;}if(_139){this.timeSlider=_139;this.setTimeExtent(_139.getCurrentTimeExtent());this._tsTimeExtentChange_connect=dc(_139,"onTimeExtentChange",this,"setTimeExtent");}},setVisibility:function(_13a){if(this.visible!==_13a){this.visible=_13a;if(!_13a){this._display=this.container.style.display;}this.container.style.display=_13a?this._display:"none";if(this.autoResize){var _13b=_13a?"resume":"pause";this._rszSignal[_13b]();this._oriSignal[_13b]();}if(_13a){this.resize();}}},resize:function(_13c){var self=this,_13d=function(){clearTimeout(self._resizeT);self.reposition();self._resize();};clearTimeout(self._resizeT);if(_13c===true){_13d();}else{self._resizeT=setTimeout(_13d,self.resizeDelay);}},_resize:function(){var w=this.width,h=this.height,box=_e.getContentBox(this.container);if(w===box.w&&h===box.h){return;}var _13e=this._zoomAnim||this._panAnim;if(_13e){_13e.stop();_13e._fire("onEnd",[_13e.node]);}ds(this.root,{width:(this.width=box.w)+"px",height:(this.height=box.h)+"px"});var wd=this.width,ht=this.height;if(this.attribution&&this.attribution.domNode){_f.set(this.attribution.domNode,"width",Math.floor(wd*this._mapParams.attributionWidth)+"px");}this.__visibleRect.update(this.__visibleRect.x,this.__visibleRect.y,wd,ht);this.__visibleDelta.update(this.__visibleDelta.x,this.__visibleDelta.y,wd,ht);var r=new _1c(this.extent),ne=(new _1c(r.x,r.y,r.width*(wd/w),r.height*(ht/h),this.spatialReference)).getExtent();this.onResize(ne,wd,ht);this._extentUtil(null,null,ne,null,true);},reposition:function(){this._reposition();this.onReposition(this.position.x,this.position.y);},_reposition:function(){var pos=_e.position(this.container,true),brdr=_e.getPadBorderExtents(this.container);this.position.update(pos.x+brdr.l,pos.y+brdr.t);},_setClipRect:function(){delete this._clip;var _13f=has("ie")?"rect(auto,auto,auto,auto)":null;if(this.wrapAround180){var _140=this.width,_141=this.height,_142=this._getFrameWidth(),diff=_140-_142;if(diff>0){var left=diff/2;_13f="rect(0px,"+(left+_142)+"px,"+_141+"px,"+left+"px)";var _143=this.extent.getWidth(),_144=_143*(_142/_140);this._clip=[(_143-_144)/2,_144];}}ds(this.__container,"clip",_13f);},_getAvailExtent:function(){var _145=this.extent,clip=this._clip;if(clip){if(!_145._clip){var rect=new _1c(_145);rect.width=clip[1];rect.x=rect.x+clip[0];_145._clip=rect.getExtent();}return _145._clip;}return _145;},_fixedPan:function(dx,dy){return this._extentUtil(null,{dx:dx,dy:dy});},panUp:function(){return this._fixedPan(0,this.height*-_2b);},panUpperRight:function(){return this._fixedPan(this.width*_2b,this.height*-_2b);},panRight:function(){return this._fixedPan(this.width*_2b,0);},panLowerRight:function(){return this._fixedPan(this.width*_2b,this.height*_2b);},panDown:function(){return this._fixedPan(0,this.height*_2b);},panLowerLeft:function(){return this._fixedPan(this.width*-_2b,this.height*_2b);},panLeft:function(){return this._fixedPan(this.width*-_2b,0);},panUpperLeft:function(){return this._fixedPan(this.width*-_2b,this.height*-_2b);},enableSnapping:function(_146){_146=_146||{};if(_146.declaredClass==="esri.SnappingManager"){this.snappingManager=_146;}else{var _147=["esri/SnappingManager"],rid=uid++,self=this;this._rids&&this._rids.push(rid);_1(_147,function(_148){var idx=self._rids?_7.indexOf(self._rids,rid):-1;if(idx!==-1){self._rids.splice(idx,1);self.snappingManager=new _148(_6.mixin({map:self},_146));}});}return this.snappingManager;},disableSnapping:function(){if(this.snappingManager){this.snappingManager.destroy();}this.snappingManager=null;}});if(has("extend-esri")){_12._CoreMap=_36;}return _36;});