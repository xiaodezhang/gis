//>>built
define("dojox/widget/FisheyeList",["dojo/_base/declare","dojo/_base/sniff","dojo/_base/lang","dojo/aspect","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/dom-construct","dojo/on","dojo/_base/window","dojo/mouse","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Container","./FisheyeListItem"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,on,_b,_c,_d,_e,_f,_10){return _1("dojox.widget.FisheyeList",[_d,_e,_f],{constructor:function(){this.pos={"x":-1,"y":-1};this.timerScale=1;},EDGE:{CENTER:0,LEFT:1,RIGHT:2,TOP:3,BOTTOM:4},templateString:"<div class=\"dojoxFisheyeListBar\" data-dojo-attach-point=\"containerNode\"></div>",snarfChildDomOutput:true,itemWidth:40,itemHeight:40,itemMaxWidth:150,itemMaxHeight:150,imgNode:null,orientation:"horizontal",isFixed:false,conservativeTrigger:false,effectUnits:2,itemPadding:10,attachEdge:"center",labelEdge:"bottom",postCreate:function(){var e=this.EDGE,_11=this.isHorizontal=(this.orientation=="horizontal");_5.setSelectable(this.domNode,false);this.selectedNode=-1;this.isOver=false;this.hitX1=-1;this.hitY1=-1;this.hitX2=-1;this.hitY2=-1;this.anchorEdge=this._toEdge(this.attachEdge,e.CENTER);this.labelEdge=this._toEdge(this.labelEdge,e.TOP);if(this.labelEdge==e.CENTER){this.labelEdge=e.TOP;}if(_11){if(this.anchorEdge==e.LEFT){this.anchorEdge=e.CENTER;}if(this.anchorEdge==e.RIGHT){this.anchorEdge=e.CENTER;}if(this.labelEdge==e.LEFT){this.labelEdge=e.TOP;}if(this.labelEdge==e.RIGHT){this.labelEdge=e.TOP;}}else{if(this.anchorEdge==e.TOP){this.anchorEdge=e.CENTER;}if(this.anchorEdge==e.BOTTOM){this.anchorEdge=e.CENTER;}if(this.labelEdge==e.TOP){this.labelEdge=e.LEFT;}if(this.labelEdge==e.BOTTOM){this.labelEdge=e.LEFT;}}var _12=this.effectUnits;this.proximityLeft=this.itemWidth*(_12-0.5);this.proximityRight=this.itemWidth*(_12-0.5);this.proximityTop=this.itemHeight*(_12-0.5);this.proximityBottom=this.itemHeight*(_12-0.5);if(this.anchorEdge==e.LEFT){this.proximityLeft=0;}if(this.anchorEdge==e.RIGHT){this.proximityRight=0;}if(this.anchorEdge==e.TOP){this.proximityTop=0;}if(this.anchorEdge==e.BOTTOM){this.proximityBottom=0;}if(this.anchorEdge==e.CENTER){this.proximityLeft/=2;this.proximityRight/=2;this.proximityTop/=2;this.proximityBottom/=2;}},startup:function(){this.children=this.getChildren();this._initializePositioning();this._onMouseMoveHandle=on.pausable(_b.doc.documentElement,"mousemove",_3.hitch(this,"_onMouseMove"));if(this.conservativeTrigger){this._onMouseMoveHandle.pause();}if(this.isFixed){this.own(on(_b.doc,"scroll",_3.hitch(this,this._onScroll)));}this.own(on(_b.doc.documentElement,_c.leave,_3.hitch(this,"_onBodyOut")),_4.after(this,"addChild",_3.hitch(this,"_initializePositioning"),true),_4.after(_b.global,"onresize",_3.hitch(this,"_initializePositioning"),true));},_initializePositioning:function(){this.itemCount=this.children.length;this.barWidth=(this.isHorizontal?this.itemCount:1)*this.itemWidth;this.barHeight=(this.isHorizontal?1:this.itemCount)*this.itemHeight;this.totalWidth=this.proximityLeft+this.proximityRight+this.barWidth;this.totalHeight=this.proximityTop+this.proximityBottom+this.barHeight;for(var i=0;i<this.children.length;i++){this.children[i].posX=this.itemWidth*(this.isHorizontal?i:0);this.children[i].posY=this.itemHeight*(this.isHorizontal?0:i);this.children[i].cenX=this.children[i].posX+(this.itemWidth/2);this.children[i].cenY=this.children[i].posY+(this.itemHeight/2);var isz=this.isHorizontal?this.itemWidth:this.itemHeight,r=this.effectUnits*isz,c=this.isHorizontal?this.children[i].cenX:this.children[i].cenY,lhs=this.isHorizontal?this.proximityLeft:this.proximityTop,rhs=this.isHorizontal?this.proximityRight:this.proximityBottom,siz=this.isHorizontal?this.barWidth:this.barHeight,_13=r,_14=r;if(_13>c+lhs){_13=c+lhs;}if(_14>(siz-c+rhs)){_14=siz-c+rhs;}this.children[i].effectRangeLeft=_13/isz;this.children[i].effectRangeRght=_14/isz;}_9.set(this.domNode,{width:this.barWidth+"px",height:this.barHeight+"px"});for(i=0;i<this.children.length;i++){var itm=this.children[i];var elm=itm.domNode;_9.set(elm,{left:itm.posX+"px",top:itm.posY+"px",width:this.itemWidth+"px",height:this.itemHeight+"px"});_9.set(itm.imgNode,{left:this.itemPadding+"%",top:this.itemPadding+"%",width:(100-2*this.itemPadding)+"%",height:(100-2*this.itemPadding)+"%"});}this._calcHitGrid();},_overElement:function(_15,e){_15=_5.byId(_15);var _16={x:e.pageX,y:e.pageY},_17=_8.position(_15,true),top=_17.y,_18=top+_17.h,_19=_17.x,_1a=_19+_17.w;return (_16.x>=_19&&_16.x<=_1a&&_16.y>=top&&_16.y<=_18);},_onBodyOut:function(e){if(this._overElement(_b.body(),e)){return;}this._setDormant(e);},_setDormant:function(e){if(!this.isOver){return;}this.isOver=false;if(this.conservativeTrigger){this._onMouseMoveHandle.pause();}this._onGridMouseMove(-1,-1);},_setActive:function(e){if(this.isOver){return;}this.isOver=true;if(this.conservativeTrigger){this._onMouseMoveHandle.resume();this.timerScale=0;this._onMouseMove(e);this._expandSlowly();}},_onMouseMove:function(e){if((e.pageX>=this.hitX1)&&(e.pageX<=this.hitX2)&&(e.pageY>=this.hitY1)&&(e.pageY<=this.hitY2)){if(!this.isOver){this._setActive(e);}this._onGridMouseMove(e.pageX-this.hitX1,e.pageY-this.hitY1);}else{if(this.isOver){this._setDormant(e);}}},_onScroll:function(){this._calcHitGrid();},onResized:function(){this._calcHitGrid();},_onGridMouseMove:function(x,y){this.pos={x:x,y:y};this._paint();},_paint:function(){var x=this.pos.x;var y=this.pos.y;if(this.itemCount<=0){return;}var pos=this.isHorizontal?x:y,prx=this.isHorizontal?this.proximityLeft:this.proximityTop,siz=this.isHorizontal?this.itemWidth:this.itemHeight,sim=this.isHorizontal?(1-this.timerScale)*this.itemWidth+this.timerScale*this.itemMaxWidth:(1-this.timerScale)*this.itemHeight+this.timerScale*this.itemMaxHeight,cen=((pos-prx)/siz)-0.5,_1b=(sim/siz)-0.5;if(_1b>this.effectUnits){_1b=this.effectUnits;}var _1c=0,_1d;if(this.anchorEdge==this.EDGE.BOTTOM){_1d=(y-this.proximityTop)/this.itemHeight;_1c=(_1d>0.5)?1:y/(this.proximityTop+(this.itemHeight/2));}if(this.anchorEdge==this.EDGE.TOP){_1d=(y-this.proximityTop)/this.itemHeight;_1c=(_1d<0.5)?1:(this.totalHeight-y)/(this.proximityBottom+(this.itemHeight/2));}if(this.anchorEdge==this.EDGE.RIGHT){_1d=(x-this.proximityLeft)/this.itemWidth;_1c=(_1d>0.5)?1:x/(this.proximityLeft+(this.itemWidth/2));}if(this.anchorEdge==this.EDGE.LEFT){_1d=(x-this.proximityLeft)/this.itemWidth;_1c=(_1d<0.5)?1:(this.totalWidth-x)/(this.proximityRight+(this.itemWidth/2));}if(this.anchorEdge==this.EDGE.CENTER){if(this.isHorizontal){_1c=y/(this.totalHeight);}else{_1c=x/(this.totalWidth);}if(_1c>0.5){_1c=1-_1c;}_1c*=2;}for(var i=0;i<this.itemCount;i++){var _1e=this._weighAt(cen,i);if(_1e<0){_1e=0;}this._setItemSize(i,_1e*_1c);}var _1f=Math.round(cen),_20=0;if(cen<0){_1f=0;}else{if(cen>this.itemCount-1){_1f=this.itemCount-1;}else{_20=(cen-_1f)*((this.isHorizontal?this.itemWidth:this.itemHeight)-this.children[_1f].sizeMain);}}this._positionElementsFrom(_1f,_20);},_weighAt:function(cen,i){var _21=Math.abs(cen-i),_22=((cen-i)>0)?this.children[i].effectRangeRght:this.children[i].effectRangeLeft;return (_21>_22)?0:(1-_21/_22);},_setItemSize:function(p,_23){if(this.children[p].scale==_23){return;}this.children[p].scale=_23;_23*=this.timerScale;var w=Math.round(this.itemWidth+((this.itemMaxWidth-this.itemWidth)*_23)),h=Math.round(this.itemHeight+((this.itemMaxHeight-this.itemHeight)*_23));if(this.isHorizontal){this.children[p].sizeW=w;this.children[p].sizeH=h;this.children[p].sizeMain=w;this.children[p].sizeOff=h;var y=0;if(this.anchorEdge==this.EDGE.TOP){y=(this.children[p].cenY-(this.itemHeight/2));}else{if(this.anchorEdge==this.EDGE.BOTTOM){y=(this.children[p].cenY-(h-(this.itemHeight/2)));}else{y=(this.children[p].cenY-(h/2));}}this.children[p].usualX=Math.round(this.children[p].cenX-(w/2));_9.set(this.children[p].domNode,{top:y+"px",left:this.children[p].usualX+"px"});}else{this.children[p].sizeW=w;this.children[p].sizeH=h;this.children[p].sizeOff=w;this.children[p].sizeMain=h;var x=0;if(this.anchorEdge==this.EDGE.LEFT){x=this.children[p].cenX-(this.itemWidth/2);}else{if(this.anchorEdge==this.EDGE.RIGHT){x=this.children[p].cenX-(w-(this.itemWidth/2));}else{x=this.children[p].cenX-(w/2);}}this.children[p].usualY=Math.round(this.children[p].cenY-(h/2));_9.set(this.children[p].domNode,{left:x+"px",top:this.children[p].usualY+"px"});}_9.set(this.children[p].domNode,{width:w+"px",height:h+"px"});if(this.children[p].svgNode){this.children[p].svgNode.setSize(w,h);}},_positionElementsFrom:function(p,_24){var pos=0;var _25,_26;if(this.isHorizontal){_25="usualX";_26="left";}else{_25="usualY";_26="top";}pos=Math.round(this.children[p][_25]+_24);if(_9.get(this.children[p].domNode,_26)!=(pos+"px")){_9.set(this.children[p].domNode,_26,pos+"px");this._positionLabel(this.children[p]);}var _27=pos;for(var i=p-1;i>=0;i--){_27-=this.children[i].sizeMain;if(_9.get(this.children[p].domNode,_26)!=(_27+"px")){_9.set(this.children[i].domNode,_26,_27+"px");this._positionLabel(this.children[i]);}}var _28=pos;for(i=p+1;i<this.itemCount;i++){_28+=this.children[i-1].sizeMain;if(_9.get(this.children[p].domNode,_26)!=(_28+"px")){_9.set(this.children[i].domNode,_26,_28+"px");this._positionLabel(this.children[i]);}}},_positionLabel:function(itm){var x=0;var y=0;var mb=_8.getMarginBox(itm.lblNode);if(this.labelEdge==this.EDGE.TOP){x=Math.round((itm.sizeW/2)-(mb.w/2));y=-mb.h;}if(this.labelEdge==this.EDGE.BOTTOM){x=Math.round((itm.sizeW/2)-(mb.w/2));y=itm.sizeH;}if(this.labelEdge==this.EDGE.LEFT){x=-mb.w;y=Math.round((itm.sizeH/2)-(mb.h/2));}if(this.labelEdge==this.EDGE.RIGHT){x=itm.sizeW;y=Math.round((itm.sizeH/2)-(mb.h/2));}_9.set(itm.lblNode,{left:x+"px",top:y+"px"});},_calcHitGrid:function(){var pos=_8.position(this.domNode,true);this.hitX1=pos.x-this.proximityLeft;this.hitY1=pos.y-this.proximityTop;this.hitX2=this.hitX1+this.totalWidth;this.hitY2=this.hitY1+this.totalHeight;},_toEdge:function(inp,def){return this.EDGE[inp.toUpperCase()]||def;},_expandSlowly:function(){if(!this.isOver){return;}this.timerScale+=0.2;this._paint();if(this.timerScale<1){setTimeout(_3.hitch(this,"_expandSlowly"),10);}}});});