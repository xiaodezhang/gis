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
define("esri/layers/OnDemandMode",["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/has","esri/kernel","esri/geometry/Point","esri/tasks/query","esri/layers/RenderMode","esri/layers/GridLayout"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a){var _b=_1([_9],{declaredClass:"esri.layers._OnDemandMode",constructor:function(_c){this.featureLayer=_c;this._featureMap={};this._queryErrorHandler=_3.hitch(this,this._queryErrorHandler);},initialize:function(_d){this.inherited(arguments);var _e=this.featureLayer,_f=_e._srInfo;this._gridLayer=new _a(new _7(_f?_f.valid[0]:_d.extent.xmin,_d.extent.ymax,_d.spatialReference),{width:_e._tileWidth,height:_e._tileHeight},{width:_d.width,height:_d.height},_f);this._cellMap={};this._gridLayer.setResolution(_d.extent);},startup:function(){this._ioQueue=[];if(!this.featureLayer.suspended){this._zoomHandler();this._enableConnectors();}},propertyChangeHandler:function(_10){if(this._init){if(_10<2){this._zoomHandler();}else{console.log("FeatureLayer: layer in on-demand mode does not support time definitions. Layer id = "+this.featureLayer.id+", Layer URL = "+this.featureLayer.url);}}},destroy:function(){this._disableConnectors();this.inherited(arguments);},drawFeature:function(_11){var _12=this._gridLayer,_13=_11.geometry,_14=[];if(!_13){return;}_14=_12.getCellsInExtent((_13.type==="point")?{xmin:_13.x,ymin:_13.y,xmax:_13.x,ymax:_13.y}:_13.getExtent(),false).cells;var _15=this._cellMap,i,_16,oid=_11.attributes[this.featureLayer.objectIdField],_17,row,col;for(i=0;i<_14.length;i++){_16=_14[i];_17=_16.latticeID;row=_16.row;col=_16.col;if(_17){_16=(_15[_17]=(_15[_17]||_16));}else{_15[row]=_15[row]||{};_16=(_15[row][col]=(_15[row][col]||_16));}_16.features=_16.features||[];_16.features.push(_11);this._addFeatureIIf(oid,_11);this._incRefCount(oid);}},suspend:function(){if(!this._init){return;}this._disableConnectors();},resume:function(){if(!this._init){return;}this._enableConnectors();this._zoomHandler();},refresh:function(){this._zoomHandler();},_enableConnectors:function(){var map=this.map;this._zoomConnect=_2.connect(map,"onZoomEnd",this,this._zoomHandler);this._panConnect=_2.connect(map,"onPanEnd",this,this._panHandler);this._resizeConnect=_2.connect(map,"onResize",this,this._panHandler);},_disableConnectors:function(){_2.disconnect(this._zoomConnect);_2.disconnect(this._panConnect);_2.disconnect(this._resizeConnect);},_zoomHandler:function(){this._processIOQueue(true);var _18=this.featureLayer,map=this.map;if(_18.suspended){return;}_18._fireUpdateStart();this._clearIIf();var _19=_18._trackManager;if(_19){_19.clearTracks();}this._cellMap={};this._gridLayer.setResolution(map.extent);this._sendRequest();},_panHandler:function(){this.featureLayer._fireUpdateStart();this._sendRequest(this.featureLayer._resized&&arguments[0]);},_getRequestId:function(_1a,_1b){var id="_"+_1a.name+_1a.layerId+_1a._ulid+"_"+_1b.resolution+"_"+(_1b.latticeID||(_1b.row+"_"+_1b.col));return id.replace(/[^a-zA-Z0-9\_]+/g,"_");},_sendRequest:function(_1c){this._exceeds=false;var _1d=this.featureLayer,map=this.map,_1e=_1c||map.extent,_1f=this._gridLayer.getCellsInExtent(_1e,_1d.latticeTiling),_20=_1f.cells;if(!_1d.isEditable()){var _21=this._cellMap;_20=_4.filter(_20,function(_22){if(_22.lattice){if(_21[_22.latticeID]){return false;}}else{if(_21[_22.row]&&_21[_22.row][_22.col]){return false;}}return true;});}var _23=_1d.getOutFields(),_24=_1d.getDefinitionExpression(),_25=_1d._getOffsettedTE(_1d._mapTimeExtent),_26=_1d._usePatch,_27=this._ioQueue,i,_28=this,_29=this._drawFeatures,_2a,_2b,_2c;this._pending=this._pending||0;for(i=0;i<_20.length;i++){_2a=_20[i];_2b=new _8();_2b.geometry=_2a.extent||_2a.lattice;_2b.outFields=_23;_2b.where=_24;if(_1d.latticeTiling&&_2a.extent){_2b.spatialRelationship=_8.SPATIAL_REL_CONTAINS;}_2b.returnGeometry=true;_2b.timeExtent=_25;_2b.maxAllowableOffset=_1d._maxOffset;if(_1d._ts){_2b._ts=(new Date()).getTime();}_2c=null;if(_26){_2c=this._getRequestId(_1d,_2a);if(this._isPending(_2c)){continue;}}this._pending++;_27.push(_1d._task.execute(_2b,function(){var _2d=_2a;return function(_2e){_29.apply(_28,[_2e,_2d]);};}.call(this),this._queryErrorHandler,_2c));}this._removeOldCells(_1e);this._endCheck();},_drawFeatures:function(_2f,_30){this._exceeds=this._exceeds||_2f.exceededTransferLimit;this._finalizeIO();var _31=this.featureLayer,map=this.map,_32=map.extent,_33=_30.extent,row=_30.row,col=_30.col,_34=_31.objectIdField,_35=_2f.features,_36=this._gridLayer,_37=this._cellMap,i,len,_38=_30.latticeID,_39=_38?_37[_38]:(_37[row]&&_37[row][col]);if((_30.resolution!=_36._resolution)||(_38?(_38!==_36.getLatticeID(_32)):(!_36.intersects(_33,_32)))){if(_39){this._removeCell(row,col,_38);}}else{if(_39){this._updateCell(_39,_35);}else{_30.features=_35;if(_38){_37[_38]=_30;}else{_37[row]=_37[row]||{};_37[row][col]=_30;}len=_35.length;for(i=0;i<len;i++){var _3a=_35[i];var oid=_3a.attributes[_34];this._addFeatureIIf(oid,_3a);this._incRefCount(oid);}}}this._endCheck();},_queryErrorHandler:function(err){this._finalizeIO();this.featureLayer._errorHandler(err);this._endCheck(true);},_finalizeIO:function(){this._purgeRequests();this._pending--;},_endCheck:function(_3b){if(this._pending===0){this._processIOQueue();var _3c=this.featureLayer,_3d=_3c._trackManager;if(_3d){_3d.clearTracks();_3d.addFeatures(_3c.graphics);if(_3c._ager){_4.forEach(_3c.graphics,function(_3e){if(_3e._shape){_3c._repaint(_3e);}});}_3d.moveLatestToFront();_3d.drawTracks();}this.featureLayer._fireUpdateEnd(_3b&&new Error("FeatureLayer: an error occurred while updating the layer"),this._exceeds?{queryLimitExceeded:true}:null);if(this._exceeds){_3c.onQueryLimitExceeded();}}},_processIOQueue:function(_3f){this._ioQueue=_4.filter(this._ioQueue,function(dfd){var _40=dfd.fired>-1?false:true;return _40;});if(_3f){_4.forEach(this._ioQueue,this._cancelPendingRequest);}},_removeOldCells:function(_41){var _42=this._cellMap,_43=this._gridLayer,_44,_45;for(_44 in _42){if(_42[_44]){var row=_42[_44],_46=row.latticeID,_47=0,_48=0;if(_46){_47++;if(_46!==_43.getLatticeID(_41)){this._removeCell(null,null,_46);_48++;}}else{for(_45 in row){if(row[_45]){_47++;var _49=row[_45].extent;if(!_43.intersects(_49,_41)){this._removeCell(_44,_45);_48++;}}}}if(_48===_47){delete _42[_44];}}}},_updateCell:function(_4a,_4b){var _4c=this.featureLayer,_4d=_4c.objectIdField,_4e=_4c._selectedFeatures,i,len=_4b.length;_4a.features=_4a.features||[];for(i=0;i<len;i++){var _4f=_4b[i];var oid=_4f.attributes[_4d];var _50=this._addFeatureIIf(oid,_4f);if(_50===_4f){this._incRefCount(oid);_4a.features.push(_50);}else{if(!(oid in _4e)){_50.setGeometry(_4f.geometry);_50.setAttributes(_4f.attributes);}}}},_removeCell:function(row,col,_51){var _52=this._cellMap,_53=this.featureLayer,_54=_53.objectIdField;var _55=_51?_52[_51]:(_52[row]&&_52[row][col]);if(_55){if(_51){delete _52[_51];}else{delete _52[row][col];}var _56=_55.features,i;for(i=0;i<_56.length;i++){var _57=_56[i];var oid=_57.attributes[_54];this._decRefCount(oid);if(oid in _53._selectedFeatures){continue;}this._removeFeatureIIf(oid);}}}});if(_5("extend-esri")){_3.setObject("layers._OnDemandMode",_b,_6);}return _b;});