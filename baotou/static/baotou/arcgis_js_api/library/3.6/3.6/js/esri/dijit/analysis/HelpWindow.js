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
define("esri/dijit/analysis/HelpWindow",["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/event","dojo/_base/kernel","dojo/has","dojo/i18n","dojo/dom-construct","dojo/dom-class","dojo/dom-attr","dojo/dom-style","dijit/_Widget","dijit/TooltipDialog","dijit/popup","esri/kernel","esri/lang","esri/request"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12){var _13=_2([_d],{declaredClass:"esri.dijit.analysis.HelpWindow",i18n:null,basePath:_1.toUrl("esri/dijit/analysis"),onlineHelpMap:null,showLearnMore:false,postMixInProperties:function(){this.inherited(arguments);this.i18n={};_3.mixin(this.i18n,_8.getLocalization("esri","jsapi").common);_3.mixin(this.i18n,_8.getLocalization("esri","jsapi").analysisHelp);},postCreate:function(){this.inherited(arguments);var _14=["ar","he"],i,_15=false,_16,_17,url,_18;this.onlineHelpMap={};for(i=0;i<_14.length;i=i+1){_16=_14[i];if(dojo.locale&&dojo.locale.indexOf(_16)!==-1){if(dojo.locale.indexOf("-")!==-1){if(dojo.locale.indexOf(_16+"-")!==-1){this._isRightToLeft=true;}}else{this._isRightToLeft=true;}}}url=this._getAbsoluteUrl(this.basePath)+"/help/helpmap.json";console.log(url);_12({"url":url}).then(_3.hitch(this,function(_19){this.onlineHelpMap=_19.map;}));},_getAbsoluteUrl:function(url){if(/^https?\:/i.test(url)){return url;}else{if(/^\/\//i.test(url)){return window.location.protocol+url;}else{if(/^\//i.test(url)){return window.location.protocol+"//"+window.location.host+url;}}}},_computeSize:function(_1a){var _1b={w:400,h:200};if(_1a.indexOf("Category")!==-1){_1b.w=400;_1b.h=320;}else{if(_1a.indexOf("Tool")!==-1){_1b.w=400;_1b.h=320;}else{if(_1a.indexOf("toolDescription")!==-1){_1b.w=400;_1b.h=520;}}}return _1b;},_setHelpTopicAttr:function(_1c){if(this.tooltipHelpDlg){_f.close(this.tooltipHelpDlg);_9.destroy(this.tooltipHelpDlg);_9.destroy(this.tooltipHelpDlg.domNode);}var _1d,_1e,_1f,_20,_21,_22,_23,_24;this.showLearnMore=false;_1d=dojo.clone(dojo.locale);if(_1d==="nb"){_1d="no";}_1e=["ar","da","de","es","et","fr","he","it","ja","ko","lt","lv","ru","nl","no","pl","pt-br","pt-pt","ro","sv","zh-cn"];_1f=_6.baseUrl.substring(0,_6.baseUrl.indexOf("/js/"));_22=_1f+"/js/esri/dijit/analysis/help/"+this.helpFileName+".html";if(_11.isDefined(this.onlineHelpMap[this.helpFileName])&&_11.isDefined(this.onlineHelpMap[this.helpFileName][_1c])){this.showLearnMore=true;_24="http://resources.arcgis.com/en/help/arcgisonline/#/"+this.onlineHelpMap[this.helpFileName][_1c];}if(dojo.indexOf(_1e,_1d)!==-1){if(_1d.indexOf("-")!==-1){_23=_1d.split("-");_1d=_23[0]+"-"+_23[1].toUpperCase();}_22=_1f+"/js/esri/dijit/analysis/help/"+_1d+"/"+this.helpFileName+".html";if(this.showLearnMore){_24="http://resources.arcgis.com/"+_1d+"/help/arcgisonline/#/"+this.onlineHelpMap[this.helpFileName][_1c];}}_20=this._computeSize(_1c);_21="<div class='' style='position=relative'"+"<div class='sizer content'>"+"<div class='contentPane'>"+"<div class='esriFloatTrailing' style='padding:0;'>"+"<a href='#' onclick='esri.dijit._helpDialog.close()' 'title='"+this.i18n.close+"'>"+"<img src='images/close.gif' border='0'/></a>"+"</div>"+"<iframe frameborder='0'  id='"+_1c+"' src='"+_22+"#"+_1c+"' width='"+_20.w+"' height='"+_20.h+"' marginheight='0' marginwidth='0'></iframe>"+"</div>"+"</div>"+"<div class='sizer'>"+"<div class='actionsPane'>"+"<div class='actionList"+(this.showLearnMore?"'>":" hidden'>")+"<a class='action zoomTo' href='"+(this.showLearnMore?_24:"#")+"' target='_help'>"+this.i18n.learnMore+"</a>"+"</div>"+"</div>"+"</div>"+"</div>"+"</div>";this.tooltipHelpDlg=new _e({"preload":true,"content":_21,"class":"esriHelpPopup esriHelpPopupWrapper"});},show:function(_25,_26,_27){this.helpFileName=_27;this.set("helpTopic",_26);_f.open({popup:this.tooltipHelpDlg,x:(this._isRightToLeft===true)?_25.pageX-40:_25.pageX+40,y:_25.screenY-_25.pageY+10,onExecute:function(){_f.close(this.tooltipHelpDlg);}});},close:function(_28,_29){_f.close(this.tooltipHelpDlg);}});if(_7("extend-esri")){_3.setObject("dijit.analysis.HelpWindow",_13,_10);}return _13;});