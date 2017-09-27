//>>built
define("dgrid/TouchScroll",["dojo/_base/declare","dojo/on","./util/touch","./util/has-css3","put-selector/put","xstyle/css!./css/TouchScroll.css"],function(_1,on,_2,_3,_4){var _5=50,_6=30,_7={},_8={},_9=1,_a=8,_b=/^translate(?:3d)?\((-?\d+)(?:\.\d*)?(?:px)?, (-?\d+)/,_c=/^matrix\(1, 0, 0, 1, (-?\d+)(?:\.\d*)?(?:px)?, (-?\d+)/,_d=_3("css-transitions"),_e=_3("transitionend"),_f=_3("css-transforms"),_10=_3("css-transforms3d"),_11,_12,_13,_14,_15;if(_10){_14="translate3d(";_15=",0)";}else{if(_f){_14="translate(";_15=")";}}if(!_d||!_14){console.warn("CSS3 features unavailable for touch scroll effects.");return function(){};}_13=_10||_f;_13=_13===true?"transform":_13+"Transform";_12=_d===true?"transition":_d+"Transition";_11=_f===true?"":"-"+_f.toLowerCase()+"-";function _16(_17,_18){var _19=_17.touchNode,_1a=_19.parentNode,_1b=_1a.offsetWidth-_a,_1c=_1a.offsetHeight-_a,_1d=_18.scrollWidth=_19.scrollWidth,_1e=_18.scrollHeight=_19.scrollHeight,_1f=_18.parentWidth=_1a.offsetWidth,_20=_18.parentHeight=_1a.offsetHeight,_21;if(_1d>_1f){if(!_17._scrollbarXNode){_21=_4(_1a,"div.touchscroll-x");}_21=_17._scrollbarXNode=_17._scrollbarXNode||_4(_21,"div.touchscroll-bar");_21.style.width=_1b*_1b/_1d+"px";_21.style.left=_19.offsetLeft+"px";_4(_1a,".touchscroll-scrollable-x");_18.scrollableX=true;}else{_4(_1a,"!touchscroll-scrollable-x");}if(_1e>_20){if(!_17._scrollbarYNode){_21=_4(_1a,"div.touchscroll-y");}_21=_17._scrollbarYNode=_17._scrollbarYNode||_4(_21,"div.touchscroll-bar");_21.style.height=_1c*_1c/_1e+"px";_21.style.top=_19.offsetTop+"px";_4(_1a,".touchscroll-scrollable-y");_18.scrollableY=true;}else{_4(_1a,"!touchscroll-scrollable-y");}_4(_1a,"!touchscroll-fadeout");};function _22(_23,_24){var _25=_23.touchNode,_26=_7[_23.id],pos,_27,_28,x,y;if(typeof _24!=="object"){x=_24;y=arguments[2];_24=arguments[3];_27=_28=true;}else{_27="x" in _24;_28="y" in _24;if(!_27||!_28){pos=_23.getScrollPosition();}x=_27?_24.x:pos.x;y=_28?_24.y:pos.y;}_25.style[_13]=_14+-x+"px,"+-y+"px"+_15;if(_26&&_27&&_23._scrollbarXNode){_23._scrollbarXNode.style[_13]=_14+(x*_26.parentWidth/_26.scrollWidth)+"px,0"+_15;}if(_26&&_28&&_23._scrollbarYNode){_23._scrollbarYNode.style[_13]=_14+"0,"+(y*_26.parentHeight/_26.scrollHeight)+"px"+_15;}on.emit(_23.touchNode.parentNode,"scroll",{scrollLeft:x,scrollTop:y});};function _29(_2a){if(_7[_2a.id]){return _c.exec(window.getComputedStyle(_2a.touchNode)[_13]);}return _b.exec(_2a.touchNode.style[_13]);};function _2b(_2c){var _2d=this.widget,_2e=[this.node,_2d._scrollbarXNode,_2d._scrollbarYNode],i=_2e.length;if(this.timer){clearTimeout(this.timer);this.timer=null;}if(this.transitionHandler){this.transitionHandler.remove();}while(i--){if(_2e[i]){_2e[i].style[_12+"Duration"]="0";}}if(!_2c||!_2c.preserveScrollbars){_4(this.node.parentNode,".touchscroll-fadeout");}delete this.resetEffects;};function _2f(evt){var _30=evt.widget,_31=_30.touchNode,id=_30.id,_32=0,_33=0,_34,_35,_36;if(_2.countCurrentTouches(evt,_31)!==_30.touchesToScroll){return;}_35=_29(_30);if(_35){_32=+_35[1];_33=+_35[2];}if((_36=_7[id])){if(_36.resetEffects){_36.resetEffects({preserveScrollbars:true});}_31.style[_13]=_14+_32+"px,"+_33+"px"+_15;_8[id]=_36;}_34=evt.targetTouches[0];_36=_7[id]={widget:_30,node:_31,startX:_32-_34.pageX,startY:_33-_34.pageY,lastX:_32,lastY:_33,pageX:_34.pageX,pageY:_34.pageY,tickFunc:function(){_37(id);}};_36.timer=setTimeout(_36.tickFunc,_5);};function _38(evt){var _39=evt.widget,id=_39.id,_3a=_39.touchesToScroll,_3b=_7[id],_3c,_3d,_3e,nx,ny,_3f,_40,i;if(!_3b||(_3c=_2.countCurrentTouches(evt,_39.touchNode))!==_3a){if(_3c>_3a){_39.cancelTouchScroll();}return;}_3d=evt.targetTouches;_3e=_3d[0];if(!_3b.scrollbarsShown){if(_8[id]||(Math.abs(_3e.pageX-_3b.pageX)>_39.scrollThreshold||Math.abs(_3e.pageY-_3b.pageY)>_39.scrollThreshold)){_16(_39,_3b);_3b.scrollbarsShown=true;for(i=_3d.length;i--;){_3d[i].touchScrolled=true;}}}evt.preventDefault();if(_3b.scrollbarsShown&&(_3b.scrollableX||_3b.scrollableY)){nx=_3b.scrollableX?_3b.startX+_3e.pageX:0;ny=_3b.scrollableY?_3b.startY+_3e.pageY:0;_3f=_3b.scrollableX?-(_3b.scrollWidth-_3b.parentWidth):0;_40=_3b.scrollableY?-(_3b.scrollHeight-_3b.parentHeight):0;if(nx>0){nx=nx/2;}else{if(nx<_3f){nx=_3f-(_3f-nx)/2;}}if(ny>0){ny=ny/2;}else{if(ny<_40){ny=_40-(_40-ny)/2;}}_22(_39,-nx,-ny);}};function _41(evt){var _42=evt.widget,id=_42.id,_43=_7[id];if(!_43||_2.countCurrentTouches(evt,_42.touchNode)!=_42.touchesToScroll-1){return;}_44(id);};function _37(id){var _45=_7[id],_46,_47,x,y;if(!_45){return;}_46=_45.node;_47=_b.exec(_46.style[_13]);if(_47){x=+_47[1];y=+_47[2];_45.velX=x-_45.lastX;_45.velY=y-_45.lastY;_45.lastX=x;_45.lastY=y;}else{_45.lastX=_45.lastY=0;}_45.timer=setTimeout(_45.tickFunc,_5);};function _48(id,_49,_4a){var _4b=_7[id],_4c=_4b.widget,_4d=_4b.node,_4e,x=_4b.scrollableX?Math.max(Math.min(0,_49),-(_4b.scrollWidth-_4b.parentWidth)):_49,y=_4b.scrollableY?Math.max(Math.min(0,_4a),-(_4b.scrollHeight-_4b.parentHeight)):_4a;function end(){delete _4b.transitionHandler;_4b.resetEffects();delete _7[id];};delete _4b.timer;if(x!=_49||y!=_4a){_4b.transitionHandler=on.once(_4d,_e,end);_4d.style[_12+"Duration"]=_4c.bounceDuration+"ms";_4d.style[_13]=_14+x+"px,"+y+"px"+_15;if(x!=_49&&_4b.scrollableX){_4e=_4b.widget._scrollbarXNode;_4e.style[_12+"Duration"]=_4c.bounceDuration+"ms";if(_49>x){_4e.style[_13]=_14+"0,0"+_15;}else{_4e.style[_13]=_14+(_4e.parentNode.offsetWidth-_4e.offsetWidth)+"px,0"+_15;}}if(y!=_4a&&_4b.scrollableY){_4e=_4b.widget._scrollbarYNode;_4e.style[_12+"Duration"]=_4c.bounceDuration+"ms";if(_4a>y){_4e.style[_13]=_14+"0,0"+_15;}else{_4e.style[_13]=_14+"0,"+(_4e.parentNode.offsetHeight-_4e.offsetHeight)+"px"+_15;}}}else{end();}};function _44(id){var _4f=_7[id],_50=_8[id],_51,_52,_53,_54=1.15;delete _8[id];if(_4f.timer){clearTimeout(_4f.timer);}_4f.resetEffects=_2b;_51=_b.exec(_4f.node.style[_13]);if(_51){_52=+_51[1];_53=+_51[2];}else{_52=_53=0;}if((!_4f.velX&&!_4f.velY)||((_52>=0||_52<=-(_4f.scrollWidth-_4f.parentWidth))&&(_53>=0||_53<=-(_4f.scrollHeight-_4f.parentHeight)))){_48(id,_52,_53);return;}function _55(a,b){return ((a.velX<=0&&b.velX<=0)||(a.velX>=0&&b.velX>=0))&&((a.velY<=0&&b.velY<=0)||(a.velY>=0&&b.velY>=0));};if(_50&&(_50.velX||_50.velY)&&_55(_4f,_50)){_4f.velX=(_4f.velX+_50.velX)*_54;_4f.velY=(_4f.velY+_50.velY)*_54;}_4f.lastX=_52;_4f.lastY=_53;_4f.calcFunc=function(){_56(id);};_4f.timer=setTimeout(_4f.calcFunc,_6);};function _56(id){var _57=_7[id],_58,_59,_5a,i,nx,ny,nvx,nvy,_5b=6;if(!_57){return;}_58=_57.node;_59=_58.parentNode;_5a=_57.widget;nvx=_5a.glideDecel(_57.velX);nvy=_5a.glideDecel(_57.velY);if(Math.abs(nvx)>=_9||Math.abs(nvy)>=_9){nx=_57.lastX+nvx;ny=_57.lastY+nvy;if(nx>0||nx<-(_57.scrollWidth-_57.parentWidth)){for(i=_5b;i--;){nvx=_5a.glideDecel(nvx);}}if(ny>0||ny<-(_57.scrollHeight-_57.parentHeight)){for(i=_5b;i--;){nvy=_5a.glideDecel(nvy);}}_22(_5a,-nx,-ny);_57.lastX=nx;_57.lastY=ny;_57.velX=nvx;_57.velY=nvy;_57.timer=setTimeout(_57.calcFunc,_6);}else{_48(id,_57.lastX,_57.lastY);}};return _1("dgrid.TouchScroll",null,{touchesToScroll:1,touchNode:null,scrollThreshold:10,bounceDuration:300,postCreate:function(){this._initTouch();this.inherited(arguments);},_initTouch:function(){var _5c=this.touchNode=this.touchNode||this.containerNode,_5d=this,_5e;if(!_5c||!_5c.parentNode){console.warn("TouchScroll requires a nested node upon which to operate.");return;}_5e=_5c.parentNode;_5e.style.overflow="hidden";_5c.style[_12+"Property"]=_11+"transform";_5c.style[_12+"TimingFunction"]="cubic-bezier(0.33, 0.66, 0.66, 1)";function _5f(){_5d.cancelTouchScroll();};function _60(_61){return function(evt){evt.widget=_5d;evt.cancelTouchScroll=_5f;_61.call(this,evt);};};this._touchScrollListeners=[on(_5e,"touchstart",_60(_2f)),on(_5e,"touchmove",_60(_38)),on(_5e,"touchend,touchcancel",_60(_41))];},destroy:function(){var i=this._touchScrollListeners.length;while(i--){this._touchScrollListeners[i].remove();}delete _7[this.id];this.inherited(arguments);},scrollTo:function(_62){var _63=_7[this.id],_64=this.touchNode,_65=_64.parentNode;if(!_62.preserveMomentum&&_63&&_63.resetEffects){_63.resetEffects();}if(_62.x){_62.x=Math.max(0,Math.min(_62.x,_64.scrollWidth-_65.offsetWidth));}if(_62.y){_62.y=Math.max(0,Math.min(_62.y,_64.scrollHeight-_65.offsetHeight));}_22(this,_62);},getScrollPosition:function(){var _66=_29(this);return _66?{x:-_66[1],y:-_66[2]}:{x:0,y:0};},cancelTouchScroll:function(){var _67=_7[this.id];if(!_67){return;}if(_67.resetEffects){_67.resetEffects();}else{if(_67.timer){clearTimeout(_67.timer);}_4(_67.node.parentNode,".touchscroll-fadeout");}delete _7[this.id];},glideDecel:function(n){return n*0.9;}});});