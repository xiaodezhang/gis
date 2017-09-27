//>>built
define("dojox/gfx/Moveable",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/event","dojo/topic","dojo/touch","dojo/dom-class","dojo/_base/window","./Mover","dojo/mouse"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a){return _2("dojox.gfx.Moveable",null,{constructor:function(_b,_c){this.shape=_b;this.delay=(_c&&_c.delay>0)?_c.delay:0;this.mover=(_c&&_c.mover)?_c.mover:_9;this.leftButtonOnly=_c&&_c.leftButtonOnly;this.events=[this.shape.connect(_6.press,_1.hitch(this,"onMouseDown"))];},destroy:function(){_3.forEach(this.events,function(_d){_d.remove();});this.events=this.shape=null;},onMouseDown:function(e){if(this.delay){this.events.push(this.shape.connect(_6.move,_1.hitch(this,"onMouseMove")),this.shape.connect(_6.release,_1.hitch(this,"onMouseUp")));this._lastX=e.clientX;this._lastY=e.clientY;}else{if(!this.leftButtonOnly||_a.isLeft(e)){new this.mover(this.shape,e,this);}}_4.stop(e);},onMouseMove:function(e){var _e=e.clientX,_f=e.clientY;if(Math.abs(_e-this._lastX)>this.delay||Math.abs(_f-this._lastY)>this.delay){this.onMouseUp(e);new this.mover(this.shape,e,this);}_4.stop(e);},onMouseUp:function(e){this.events.pop().remove();},onMoveStart:function(_10){_5.publish("/gfx/move/start",_10);_7.add(_8.body(),"dojoMove");},onMoveStop:function(_11){_5.publish("/gfx/move/stop",_11);_7.remove(_8.body(),"dojoMove");},onFirstMove:function(_12){},onMove:function(_13,_14){this.onMoving(_13,_14);this.shape.applyLeftTransform(_14);this.onMoved(_13,_14);},onMoving:function(_15,_16){},onMoved:function(_17,_18){}});});