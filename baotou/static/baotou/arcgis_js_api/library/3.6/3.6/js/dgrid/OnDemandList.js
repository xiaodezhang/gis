//>>built
define("dgrid/OnDemandList",["./List","./_StoreMixin","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/on","./util/misc","put-selector/put"],function(_1,_2,_3,_4,_5,_6,_7,_8){return _3("dgrid.OnDemandList",[_1,_2],{minRowsPerPage:25,maxRowsPerPage:250,maxEmptySpace:Infinity,bufferRows:10,farOffRemoval:2000,rowHeight:22,queryRowsOverlap:1,pagingDelay:_7.defaultDelay,postCreate:function(){this.inherited(arguments);var _9=this;_6(this.bodyNode,"scroll",_7.throttleDelayed(function(_a){_9._processScroll(_a);},null,this.pagingDelay));},renderQuery:function(_b,_c,_d){var _e={query:_b,count:0,node:_c,options:_d};if(!_c){var _f=true;var _10={node:_8(this.contentNode,"div.dgrid-preload",{rowIndex:0}),count:0,query:_b,next:_e,options:_d};_e.node=_c=_8(this.contentNode,"div.dgrid-preload");_e.previous=_10;}_c.rowIndex=this.minRowsPerPage;var _11=this.preload;if(_11){if((_e.next=_11.next)&&this.bodyNode.scrollTop>=_11.node.offsetTop){_e.previous=_11;}else{_e.next=_11;_e.previous=_11.previous;}_e.previous.next=_e;_e.next.previous=_e;}else{this.preload=_e;}var _12=_8(_c,"-div.dgrid-loading"),_13=_8(_12,"div.dgrid-below");_13.innerHTML=this.loadingMessage;_d=_4.mixin(this.get("queryOptions"),_d,{start:0,count:this.minRowsPerPage,query:_b});var _14=_b(_d);var _15=this;_5.when(this.renderArray(_14,_c,_d),function(trs){return _5.when(_14.total||_14.length,function(_16){_8(_12,"!");var _17=trs.length;_16=_16||_17;if(!_16){_15.noDataNode=_8(_15.contentNode,"div.dgrid-no-data");_15.noDataNode.innerHTML=_15.noDataMessage;}var _18=0;for(var i=0;i<_17;i++){_18+=_15._calcRowHeight(trs[i]);}if(_17&&_18){_15.rowHeight=_18/_17;}_16-=_17;_e.count=_16;_c.rowIndex=_17;if(_16){_c.style.height=Math.min(_16*_15.rowHeight,_15.maxEmptySpace)+"px";}else{_c.style.display="none";}_15._processScroll();return trs;});});return _14;},refresh:function(){this.inherited(arguments);if(this.store){var _19=this;this._trackError(function(){return _19.renderQuery(function(_1a){return _19.store.query(_19.query,_1a);});});}},_calcRowHeight:function(_1b){var _1c=_1b.previousSibling;return _1c&&_1c.offsetTop!=_1b.offsetTop?_1b.offsetHeight:0;},lastScrollTop:0,_processScroll:function(evt){var _1d=this,_1e=_1d.bodyNode,_1f=(evt&&evt.scrollTop)||_1e.scrollTop,_20=_1e.offsetHeight+_1f,_21,_22,_23=_1d.preload,_24=_1d.lastScrollTop,_25=_1d.bufferRows*_1d.rowHeight,_26=_25-_1d.rowHeight;var _27=1;_1d.lastScrollTop=_1f;function _28(_29,_2a,_2b,_2c){var _2d=_1d.farOffRemoval,_22=_29.node;if(_2a>2*_2d){var row,_2e=_22[_2b];var _2f=0;var _30=0;var _31=[];while((row=_2e)){var _32=_1d._calcRowHeight(row);if(_2f+_32+_2d>_2a||(_2e.className.indexOf("dgrid-row")<0&&_2e.className.indexOf("dgrid-loading")<0)){break;}var _2e=row[_2b];var _33,_34=row.observerIndex;if(_34!=_33&&_33>-1){var _35=_1d.observers;var _36=_35[_33];_36&&_36.cancel();_35[_33]=0;}_2f+=_32;_30+=row.count||1;_33=_34;_1d.removeRow(row,true);_31.push(row);}_29.count+=_30;if(_2c){_22.rowIndex-=_30;_37(_29);}else{_22.style.height=(_22.offsetHeight+_2f)+"px";}var _38=_8("div");for(var i=0;i<_31.length;i++){_8(_38,_31[i]);}setTimeout(function(){_8(_38,"!");},1);}};function _37(_39,_3a){_39.node.style.height=Math.min(_39.count*_1d.rowHeight,_3a?Infinity:_1d.maxEmptySpace)+"px";};while(_23&&!_23.node.offsetWidth){_23=_23.previous;}while(_23&&_23!=_21){_21=_1d.preload;_1d.preload=_23;_22=_23.node;var _3b=_22.offsetTop;var _3c;if(_20+_27+_26<_3b){do{_23=_23.previous;}while(_23&&!_23.node.offsetWidth);}else{if(_1f-_27-_26>(_3b+(_3c=_22.offsetHeight))){do{_23=_23.next;}while(_23&&!_23.node.offsetWidth);}else{var _3d=((_22.rowIndex?_1f-_25:_20)-_3b)/_1d.rowHeight;var _3e=(_20-_1f+2*_25)/_1d.rowHeight;var _3f=Math.max(Math.min((_1f-_24)*_1d.rowHeight,_1d.maxRowsPerPage/2),_1d.maxRowsPerPage/-2);_3e+=Math.min(Math.abs(_3f),10);if(_22.rowIndex==0){_3d-=_3e;}_3d=Math.max(_3d,0);if(_3d<10&&_3d>0&&_3e+_3d<_1d.maxRowsPerPage){_3e+=Math.max(0,_3d);_3d=0;}_3e=Math.min(Math.max(_3e,_1d.minRowsPerPage),_1d.maxRowsPerPage,_23.count);if(_3e==0){return;}_3e=Math.ceil(_3e);_3d=Math.min(Math.floor(_3d),_23.count-_3e);var _40=_4.mixin(_1d.get("queryOptions"),_23.options);_23.count-=_3e;var _41=_22,_42,_43=_1d.queryRowsOverlap,_44=_22.rowIndex>0&&_23;if(_44){var _45=_23.previous;if(_45){_28(_45,_1f-(_45.node.offsetTop+_45.node.offsetHeight),"nextSibling");if(_3d>0&&_45.node==_22.previousSibling){_3d=Math.min(_23.count,_3d);_23.previous.count+=_3d;_37(_23.previous,true);_23.count-=_3d;_22.rowIndex+=_3d;_43=0;}else{_3e+=_3d;}}_40.start=_22.rowIndex-_43;_22.rowIndex+=_3e;}else{if(_23.next){_28(_23.next,_23.next.node.offsetTop-_20,"previousSibling",true);var _41=_22.nextSibling;if(_41==_23.next.node){_23.next.count+=_23.count-_3d;_23.next.node.rowIndex=_3d+_3e;_37(_23.next);_23.count=_3d;_43=0;}else{_42=true;}}_40.start=_23.count;}_40.count=Math.min(_3e+_43,_1d.maxRowsPerPage);if(_42){_42=_41.offsetTop;}_37(_23);var _46=_8(_41,"-div.dgrid-loading[style=height:"+_3e*_1d.rowHeight+"px]"),_47=_8(_46,"div.dgrid-"+(_44?"below":"above"));_47.innerHTML=_1d.loadingMessage;_46.count=_3e;_40.query=_23.query;var _48=_23.query(_40),_49=_1d._trackError(function(){return _48;});if(_49===undefined){return;}(function(_4a,_4b,_4c,_4d,_4e){_5.when(_1d.renderArray(_4e,_4a,_40),function(){_41=_4a.nextSibling;_8(_4a,"!");if(_4d&&_41){var pos=_1d.getScrollPosition();_1d.scrollTo({x:pos.x,y:pos.y+_41.offsetTop-_4d,preserveMomentum:true});}if(_4c){_5.when(_4e.total||_4e.length,function(_4f){_4c.count=_4f-_4c.node.rowIndex;_37(_4c);});}_1d._processScroll();});}).call(this,_46,_1e,_44,_42,_48);_23=_23.previous;}}}}});});