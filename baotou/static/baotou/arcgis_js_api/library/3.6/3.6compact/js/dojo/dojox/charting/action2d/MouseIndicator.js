//>>built
define("dojox/charting/action2d/MouseIndicator",["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/_base/window","dojo/_base/sniff","./ChartAction","./_IndicatorElement","dojox/lang/utils","dojo/_base/event","dojo/_base/array"],function(_1,_2,_3,_4,_5,_6,_7,du,_8,_9){return _2("dojox.charting.action2d.MouseIndicator",_6,{defaultParams:{series:"",vertical:true,autoScroll:true,fixed:true,precision:0},optionalParams:{lineStroke:{},outlineStroke:{},shadowStroke:{},stroke:{},outline:{},shadow:{},fill:{},fillFunc:null,labelFunc:null,font:"",fontColor:"",markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerSymbol:""},constructor:function(_a,_b,_c){this._listeners=[{eventName:"onmousedown",methodName:"onMouseDown"}];this.opt=_1.clone(this.defaultParams);du.updateWithObject(this.opt,_c);du.updateWithPattern(this.opt,_c,this.optionalParams);this._uName="mouseIndicator"+this.opt.series;this._handles=[];this.connect();},_disconnectHandles:function(){if(_5("ie")){this.chart.node.releaseCapture();}_9.forEach(this._handles,_3.disconnect);this._handles=[];},connect:function(){this.inherited(arguments);this.chart.addPlot(this._uName,{type:_7,inter:this});},disconnect:function(){if(this._isMouseDown){this.onMouseUp();}this.chart.removePlot(this._uName);this.inherited(arguments);this._disconnectHandles();},onMouseDown:function(_d){this._isMouseDown=true;if(_5("ie")){this._handles.push(_3.connect(this.chart.node,"onmousemove",this,"onMouseMove"));this._handles.push(_3.connect(this.chart.node,"onmouseup",this,"onMouseUp"));this.chart.node.setCapture();}else{this._handles.push(_3.connect(_4.doc,"onmousemove",this,"onMouseMove"));this._handles.push(_3.connect(_4.doc,"onmouseup",this,"onMouseUp"));}this._onMouseSingle(_d);},onMouseMove:function(_e){if(this._isMouseDown){this._onMouseSingle(_e);}},_onMouseSingle:function(_f){var _10=this.chart.getPlot(this._uName);_10.pageCoord={x:_f.pageX,y:_f.pageY};_10.dirty=true;this.chart.render();_8.stop(_f);},onMouseUp:function(_11){var _12=this.chart.getPlot(this._uName);_12.stopTrack();this._isMouseDown=false;this._disconnectHandles();_12.pageCoord=null;_12.dirty=true;this.chart.render();}});});