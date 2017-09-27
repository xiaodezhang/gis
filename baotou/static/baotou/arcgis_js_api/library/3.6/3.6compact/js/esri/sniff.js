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
define("esri/sniff",["dojo/_base/sniff","esri/kernel"],function(_1,_2){var _3=_1("ff"),_4=_1("ie"),_5=_1("webkit"),_6=_1("opera"),_7=_1("chrome"),_8=_1("safari");var _9=navigator.userAgent,_a;_a=_9.match(/(iPhone|iPad|CPU)\s+OS\s+(\d+\_\d+)/i);if(_a){_1.add("esri-iphone",parseFloat(_a[2].replace("_",".")));}_a=_9.match(/Android\s+(\d+\.\d+)/i);if(_a){_1.add("esri-android",parseFloat(_a[1]));}_a=_9.match(/Fennec\/(\d+\.\d+)/i);if(_a){_1.add("esri-fennec",parseFloat(_a[1]));}if(_9.indexOf("BlackBerry")>=0){if(_9.indexOf("WebKit")>=0){_1.add("esri-blackberry",1);}}_1.add("esri-touch",(_1("esri-iphone")||_1("esri-android")||_1("esri-blackberry")||(_1("esri-fennec")>=6)||((_3||_5)&&document.createTouch))?true:false);_1.add("esri-pointer",navigator.pointerEnabled||navigator.msPointerEnabled);_2._getDOMAccessor=function(_b){var _c="";if(_3){_c="Moz";}else{if(_5){_c="Webkit";}else{if(_4){_c="ms";}else{if(_6){_c="O";}}}}return _c+_b.charAt(0).toUpperCase()+_b.substr(1);};_1.add("esri-cors",_7>=4||_3>=3.5||_8>=4||_4>=10);_1.add("esri-file-upload",(window.FormData&&window.FileList)?true:false);_1.add("esri-transforms",_4>=9||_3>=3.5||_7>=4||_8>=3.1||_6>=10.5||_1("esri-iphone")>=3.2||_1("esri-android")>=2.1);_1.add("esri-transitions",_4>=10||_3>=4||_7>=4||_8>=3.1||_6>=10.5||_1("esri-iphone")>=3.2||_1("esri-android")>=2.1);_1.add("esri-transforms3d",_4>=11||_3>=10||_7>=12||_8>=4||_1("esri-iphone")>=3.2||_1("esri-android")>=3);if(_1("esri-android")<3){_1.add("esri-transforms",false,false,true);_1.add("esri-transitions",false,false,true);_1.add("esri-transforms3d",false,false,true);}_2._css=function(_d){var _e=_1("esri-transforms3d");if(_d!==undefined&&_d!==null){_e=_d;}else{if(_e){if(_7||(_8&&!_1("esri-iphone"))){_e=false;}}}var _f=_e?"translate3d(":"translate(",_10=_e?(_7?",-1px)":",0px)"):")",_11=_e?"scale3d(":"scale(",_12=_e?",1)":")",_13=_e?"rotate3d(0,0,1,":"rotate(",_14=_e?"matrix3d(":"matrix(",_15=_e?",0,0,":",",_16=_e?",0,0,0,0,1,0,":",",_17=_e?",0,1)":")";return {names:{transition:(_5&&"-webkit-transition")||(_3&&"MozTransition")||(_6&&"OTransition")||(_4&&"msTransition"),transform:(_5&&"-webkit-transform")||(_3&&"MozTransform")||(_6&&"OTransform")||(_4&&"msTransform"),transformName:(_5&&"-webkit-transform")||(_3&&"-moz-transform")||(_6&&"-o-transform")||(_4&&"-ms-transform"),origin:(_5&&"-webkit-transform-origin")||(_3&&"MozTransformOrigin")||(_6&&"OTransformOrigin")||(_4&&"msTransformOrigin"),endEvent:(_5&&"webkitTransitionEnd")||(_3&&"transitionend")||(_6&&"oTransitionEnd")||(_4&&"MSTransitionEnd")},translate:function(x,y){return _f+x+"px,"+y+"px"+_10;},scale:function(_18){return _11+_18+","+_18+_12;},rotate:function(_19){return _13+_19+"deg)";},matrix:function(m){return _14+m.xx+","+m.xy+_15+m.yx+","+m.yy+_16+m.dx.toFixed(10)+(_3?"px,":",")+m.dy.toFixed(10)+(_3?"px":"")+_17;}};};if(_1("extend-esri")){_2.isiPhone=_1("esri-iphone");_2.isAndroid=_1("esri-android");_2.isFennec=_1("esri-fennec");_2.isBlackBerry=_1("esri-blackberry");_2.isTouchEnabled=_1("esri-touch");_2.isPointerEnabled=_1("esri-pointer");_2._hasCors=_1("esri-cors");_2._hasFileUpload=_1("esri-file-upload");_2._hasTransforms=_1("esri-transforms");_2._hasTransitions=_1("esri-transitions");_2._has3DTransforms=_1("esri-transforms3d");}return _1;});