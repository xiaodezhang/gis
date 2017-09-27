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
require({cache:{"url:esri/dijit/analysis/templates/OverlayLayers.html":"<div class=\"esriAnalysis\">\r\n  <div data-dojo-type=\"dijit/layout/ContentPane\" style=\"margin-top:0.5em; margin-bottom: 0.5em;\">\r\n    <div data-dojo-attach-point=\"_overlaylayersToolContentTitle\" class=\"analysisTitle\">\r\n         <table class=\"esriFormTable\" > \r\n            <tr>\r\n              <td class=\"esriToolIconTd\"><div class=\"overlayLayersIcon\"></div></td>\r\n              <td class=\"esriAlignLeading\">${i18n.overlayLayers}</td>\r\n              <td>\r\n                <div class=\"esriFloatTrailing\" style=\"padding:0;\">\r\n                  <a href=\"#\" class='esriFloatLeading helpIcon' esriHelpTopic=\"toolDescription\"></a>\r\n                  <a href=\"#\" data-dojo-attach-point=\"_closeBtn\" title=\"${i18n.close}\" class=\"closeIcon\">              \r\n                  <img data-dojo-attach-point=\"_closeImg\" border=\"0\"/></a>            \r\n                </div>\r\n              </td>\r\n            </tr>\r\n         </table>\r\n    </div>\r\n    <div style=\"clear:both; border-bottom: #333 thin solid; height:1px;width:100%;\"></div>\r\n  </div>\r\n  <div data-dojo-type=\"dijit/form/Form\" data-dojo-attach-point=\"_form\" readOnly=\"true\">\r\n     <table class=\"esriFormTable\"  data-dojo-attach-point=\"_overlaylayersTable\"> \r\n       <tbody>\r\n        <tr>\r\n          <td  colspan=\"3\" class=\"sectionHeader\" data-dojo-attach-point=\"_overlaylayersToolDescription\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <label data-dojo-attach-point=\"_labelOne\" class=\"esriFloatLeading esriTrailingMargin025\">${i18n.oneLabel}</label>\r\n            <label data-dojo-attach-point=\"_polylabel\" class=\"\">${i18n.chooseOverlayLayer}</label>\r\n            <select class=\"esriLeadingMargin05  longInput\"  style=\"width:125%;margin-top:10px;table-layout:fixed;\" data-dojo-type=\"dijit/form/Select\" data-dojo-attach-point=\"_overlayFeaturesSelect\" data-dojo-attach-event=\"onChange:_handleLayerChange\"></select>\r\n          </td>\r\n          <td class=\"shortTextInput\" width=\"1%\">\r\n            <a href=\"#\" class='esriFloatTrailing helpIcon' data-dojo-attach-point=\"_analysisFieldHelpLink\" esriHelpTopic=\"OverlayLayer\"></a> \r\n          </td> \r\n        </tr>\r\n        <tr>\r\n          <td width=\"99%\" colspan=\"2\" style=\"white-space:nowrap;\">\r\n            <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.twoLabel}</label>\r\n            <label class=\"longTextInput\">${i18n.chooseOverlayMethod}</label>\r\n          </td>\r\n          <td>\r\n            <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"OverlayType\"></a> \r\n          </td>          \r\n        </tr>  \r\n        <tr>\r\n          <td style=\"width:33%\" align='center'>\r\n            <div class=\"esriContainerSelector\" data-dojo-props=\"groupName:'overlayType',checked:true\" data-dojo-type=\"esri/dijit/analysis/AnalysisToggleButton\" data-dojo-attach-point=\"_intersectBtnCtr\" style=\"width:100%\" data-dojo-attach-event=\"onClick:_handleIntersectBtnCtrClick\" >\r\n              <div data-dojo-type=\"esri/dijit/analysis/GroupToggleButton\" class=\"\" data-dojo-attach-event=\"onClick:_handleIntersectBtnClick\" data-dojo-attach-point=\"_intersectBtn\" data-dojo-props=\"groupName:'overlayType',showLabel:false,iconClass:'intersectLayersIcon',checked:true, style:'width:36px;height:36px;',label:'intersect'\"></div>\r\n              <div><label>${i18n.intersect}</label></div>\r\n            </div>\r\n          </td>\r\n          <td style=\"width:33%\" align='center'>  \r\n            <div class=\"esriContainerSelector\" data-dojo-props=\"groupName:'overlayType'\"  data-dojo-type=\"esri/dijit/analysis/AnalysisToggleButton\" data-dojo-attach-point=\"_unionBtnCtr\" style=\"width:100%\" data-dojo-attach-event=\"onClick:_handleUnionBtnCtrClick\">          \r\n            <div data-dojo-type=\"esri/dijit/analysis/GroupToggleButton\" class=\"\" data-dojo-attach-event=\"onClick:_handleUnionBtnClick\" data-dojo-attach-point=\"_unionBtn\" data-dojo-props=\"groupName:'overlayType',showLabel:false,iconClass:'unionLayersIcon' ,   style:'width:36px;height:36px;',label:'union'\"></div>\r\n              <div><label>${i18n.union}</label></div>\r\n            </div>\r\n          </td>\r\n          <td style=\"width:33%\" align='center'>\r\n            <div class=\"esriContainerSelector\" data-dojo-props=\"groupName:'overlayType'\"  data-dojo-type=\"esri/dijit/analysis/AnalysisToggleButton\" style=\"width:100%\" data-dojo-attach-point=\"_eraseBtnCtr\" data-dojo-attach-event=\"onClick:_handleEraseBtnCtrClick\">\r\n              <div  data-dojo-type=\"esri/dijit/analysis/GroupToggleButton\" class=\"\" data-dojo-attach-event=\"onClick:_handleEraseBtnClick\" data-dojo-attach-point=\"_eraseBtn\" data-dojo-props=\"groupName:'overlayType',showLabel:false,iconClass:'eraseLayersIcon',   style:'width:36px;height:36px;',label:'erase'\"></div>\r\n              <div><label>${i18n.erase}</label></div>\r\n            </div>\r\n          </td>\r\n        </tr>               \r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.threeLabel}</label>\r\n            <label class=\"longTextInput\">${i18n.outputLayerLabel}</label>\r\n          </td>\r\n          <td class=\"shortTextInput\">\r\n            <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"OutputLayer\"></a> \r\n          </td>             \r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\">\r\n            <input type=\"text\" data-dojo-type=\"dijit/form/ValidationTextBox\" data-dojo-props=\"required:true\" class=\"longTextInput esriLeadingMargin05\" data-dojo-attach-point=\"_outputLayerInput\"></input>\r\n          </td>                \r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\">\r\n             <div data-dojo-attach-point=\"_chooseFolderRow\">\r\n               <label style=\"width:9px;font-size:smaller;\">${i18n.saveResultIn}</label>\r\n               <input class=\"longInput\" dojoAttachPoint=\"_webMapFolderSelect\" dojotype=\"dijit/form/ComboBox\" trim=\"true\" style=\"width:60%;height:auto\"></input>\r\n             </div>              \r\n          </td>\r\n        </tr>         \r\n      </tbody>         \r\n     </table>\r\n   </div>\r\n  <div data-dojo-attach-point=\"_overlaylayersToolContentButtons\" style=\"padding:5px;margin-top:5px;border-top:solid 1px #BBB;\">\r\n      <div style=\"width:100%;padding:0.5em 0 0.5em 0\">\r\n        <a class=\"esriFloatTrailing esriSmallFont\"  href=\"#\" data-dojo-attach-point=\"_showCreditsLink\" data-dojo-attach-event=\"onclick:_handleShowCreditsClick\">${i18n.showCredits}</a>\r\n       <label data-dojo-attach-point=\"_chooseExtentDiv\"class=\"esriSelectLabel\" style=\"font-size:smaller;\">\r\n         <input type=\"radio\" data-dojo-attach-point=\"_useExtentCheck\" data-dojo-type=\"dijit/form/CheckBox\" data-dojo-props=\"checked:true\" name=\"extent\" value=\"true\"/>\r\n           ${i18n.useMapExtent}\r\n       </label>\r\n      </div>     \r\n    <button data-dojo-type=\"dijit/form/Button\" type=\"submit\" data-dojo-attach-point=\"_saveBtn\" class=\"esriLeadingMargin4\" data-dojo-attach-event=\"onClick:_handleSaveBtnClick\">\r\n        ${i18n.runAnalysis}\r\n    </button>\r\n  </div>\r\n  <div data-dojo-type=\"dijit/Dialog\" title=\"${i18n.creditTitle}\" data-dojo-attach-point=\"_usageDialog\" style=\"width:40em;\">\r\n    <div data-dojo-type=\"esri/dijit/analysis/CreditEstimator\"  data-dojo-attach-point=\"_usageForm\"></div>\r\n  </div>    \r\n  <div class=\"esriFormWarning esriRoundedBox\" data-dojo-attach-point=\"_errorMessagePane\" style=\"display:none;\">\r\n    <a href=\"#\" title=\"${i18n.close}\" class=\"esriFloatTrailing closeIcon\" title='${i18n.close}' data-dojo-attach-event=\"onclick:_handleCloseMsg\">\r\n      <img src='images/close.gif' border='0'/> \r\n    </a>\r\n    <span data-dojo-attach-point=\"_bodyNode\"></span>\r\n  </div>\r\n</div>\r\n"}});define("esri/dijit/analysis/OverlayLayers",["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/i18n","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/ComboBox","esri/kernel","esri/dijit/analysis/AnalysisBase","esri/dijit/analysis/CreditEstimator","esri/dijit/analysis/AnalysisToggleButton","esri/dijit/analysis/GroupToggleButton","esri/dijit/analysis/utils","dojo/text!esri/dijit/analysis/templates/OverlayLayers.html"],function(_1,_2,_3,_4,_5,_6,fx,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21,_22,_23,_24,_25){var _26=_2([_11,_12,_13,_14,_15,_20],{declaredClass:"esri.dijit.analysis.OverlayLayers",templateString:_25,basePath:_1.toUrl("esri/dijit/analysis"),widgetsInTemplate:true,inputFeatures:null,overlayFeatures:null,overlayType:"intersect",tolerance:0,snapToInputFeatures:false,outputLayerName:null,showSelectFolder:false,showChooseExtent:true,showHelp:true,showCredits:true,i18n:null,toolName:"OverlayLayers",helpFileName:"OverlayLayers",resultParameter:"Outputlayer",constructor:function(_27,_28){this.inherited(arguments);this._pbConnects=[];if(_27.containerNode){this.container=_27.containerNode;}this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName);},destroy:function(){this.inherited(arguments);_4.forEach(this._pbConnects,_5.disconnect);delete this._pbConnects;},postMixInProperties:function(){this.inherited(arguments);_3.mixin(this.i18n,_8.getLocalization("esri","jsapi").overlayLayersTool);},postCreate:function(){this.inherited(arguments);_f.add(this._form.domNode,"esriSimpleForm");_c.set(this._closeImg,"src",this.basePath+"/images/close.gif");this._outputLayerInput.set("validator",_3.hitch(this,this.validateServiceName));this._buildUI();},startup:function(){},_onClose:function(_29){if(_29){this._save();this.onSave();}this.onClose();},_handleSaveBtnClick:function(e){if(!this._form.validate()){return;}this._saveBtn.set("disabled",true);var _2a={},_2b={};_2a.InputLayer=_6.toJson(_24.constructAnalysisInputLyrObj(this.inputFeatures));if(this._overlayFeaturesSelect.get("value")!=="0"){var _2c=this.overlayFeatures[this._overlayFeaturesSelect.get("value")-1];_2a.OverlayLayer=_6.toJson(_24.constructAnalysisInputLyrObj(_2c));}_2a.OverlayType=this.get("overlayType");_2a.OutputName=_6.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});_2a.Tolerance=this.tolerance;_2a.SnapToInput=this.snapToInputFeatures;if(this.showChooseExtent){if(this._useExtentCheck.get("checked")){_2a.context=_6.toJson({extent:this.map.extent});}}_2b.jobParams=_2a;_2b.itemParams={"description":this.i18n.itemDescription,"tags":_a.substitute(this.i18n.itemTags,{layername:this.inputFeatures.name}),"snippet":this.i18n.itemSnippet};if(this.showSelectFolder){_2b.itemParams.folder=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"";}this.execute(_2b);},_handleShowCreditsClick:function(e){e.preventDefault();var _2d={},_2e={};if(!this._form.validate()){return;}_2d.InputLayer=_6.toJson(_24.constructAnalysisInputLyrObj(this.inputFeatures));if(this._overlayFeaturesSelect.get("value")!=="0"){var _2f=this.overlayFeatures[this._overlayFeaturesSelect.get("value")-1];_2d.OverlayLayer=_6.toJson(_24.constructAnalysisInputLyrObj(_2f));}_2d.OverlayType=this.get("overlayType");_2d.OutputName=_6.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});_2d.Tolerance=this.tolerance;_2d.SnapToInput=this.snapToInputFeatures;if(this.showChooseExtent){if(this._useExtentCheck.get("checked")){_2d.Context=_6.toJson({extent:this.map.extent});}}this.getCreditsEstimate(this.toolName,_2d).then(_3.hitch(this,function(_30){this._usageForm.set("content",_30);this._usageDialog.show();}));},_save:function(){},_sortbyGeometryType:function(a,b){if(a.geometryType==="esriGeometryPolygon"){return -1;}else{if(b.geometryType==="esriGeometryPolygon"){return 1;}else{if(a.geometryType==="esriGeometryPolyline"){return -1;}else{if(b.geometryType==="esriGeometryPolyline"){return 1;}else{if(a.geometryType==="esriGeometryPoint"){return -1;}else{if(b.geometryType==="esriGeometryPoint"){return 1;}}}}}}},_buildUI:function(){this._loadConnections();_24.initHelpLinks(this.domNode,this.showHelp);if(this.inputFeatures){_c.set(this._overlaylayersToolDescription,"innerHTML",_a.substitute(this.i18n.overlayDefine,{layername:this.inputFeatures.name}));}if(this.overlayFeatures){this.overlayFeatures=_4.filter(this.overlayFeatures,function(_31){if(this.inputFeatures!==_31&&(_31.geometryType==="esriGeometryPolygon"||_31.geometryType==="esriGeometryPoint"||_31.geometryType==="esriGeometryPolyline")){return true;}},this);this.overlayFeatures.sort(_3.hitch(this,this._sortbyGeometryType));this._selectedIndex=1;_4.forEach(this.overlayFeatures,function(_32,_33){this._overlayFeaturesSelect.addOption({value:_33+1,label:_32.name});},this);this._handleLayerChange(1);}if(this.overlayType){if(this.overlayType==="intersect"){this._intersectBtn.set("checked",true);this._handleIntersectBtnClick();}else{if(this.overlayType==="union"){this._unionBtn.set("checked",true);this._handleUnionBtnClick();}else{if(this.overlayType==="erase"){this._eraseBtn.set("checked",true);this._handleEraseBtnClick();}}}}if(this.outputLayerName){this._outputLayerInput.set("value",this.outputLayerName);}_b.set(this._chooseFolderRow,"display",this.showSelectFolder===true?"block":"none");if(this.showSelectFolder){this.getFolderStore().then(_3.hitch(this,function(_34){this.folderStore=_34;this._webMapFolderSelect.set("store",_34);this._webMapFolderSelect.set("value",this.portalUser.username);}));}_b.set(this._chooseExtentDiv,"display",this.showChooseExtent===true?"block":"none");_b.set(this._showCreditsLink,"display",this.showCredits===true?"block":"none");},_loadConnections:function(){this._connect(this,"onExecute",_3.hitch(this,"_onClose",false));this._connect(this._closeBtn,"onclick",_3.hitch(this,"_onClose",false));},_handleLayerChange:function(_35){var _36,_37,_38,_39;_36=this.overlayFeatures[_35-1];_37=false;_39=this.get("overlayType");_38=(this.inputFeatures.geometryType!=="esriGeometryPolygon"||_36.geometryType!=="esriGeometryPolygon");if(_36){this._unionBtn.set("disabled",_38);this._unionBtn.set("iconClass",_38?"unionLayersDisabledIcon":"unionLayersIcon");if(this.inputFeatures.geometryType==="esriGeometryPolygon"){_37=(this.inputFeatures.geometryType==="esriGeometryPolygon"&&_36.geometryType!=="esriGeometryPolygon");}else{if(this.inputFeatures.geometryType==="esriGeometryPolyline"){_37=(this.inputFeatures.geometryType==="esriGeometryPolyline"&&_36.geometryType==="esriGeometryPoint");}else{if(this.inputFeatures.geometryType==="esriGeometryPolyline"){_37=true;}}}this._eraseBtn.set("disabled",_37);this._eraseBtn.set("iconClass",_37?"eraseLayersDisabledIcon":"eraseLayersIcon");if(_39==="union"&&(this.inputFeatures.geometryType!=="esriGeometryPolygon"||_36.geometryType!=="esriGeometryPolygon")){this._showMessages(this.i18n.overlayLayerPolyMsg);this._intersectBtn.set("checked",true);this._handleIntersectBtnCtrClick();}else{if(_39==="erase"&&(this.inputFeatures.geometryType==="esriGeometryPolyline"&&_36.geometryType==="esriGeometryPoint")){this._showMessages(this.i18n.notSupportedEraseOverlayMsg);this._intersectBtn.set("checked",true);this._handleIntersectBtnCtrClick();}else{if(_39==="erase"&&(this.inputFeatures.geometryType==="esriGeometryPolygon"&&_36.geometryType!=="esriGeometryPolygon")){this._showMessages(this.i18n.notSupportedEraseOverlayMsg);this._intersectBtn.set("checked",true);this._handleIntersectBtnCtrClick();}else{if(_39==="intersect"){this._handleIntersectBtnCtrClick();}else{if(_39==="union"){this._handleUnionBtnCtrClick();}else{if(_39==="erase"){this._handleEraseBtnClick();}}}}}}}},_showMessages:function(msg){_c.set(this._bodyNode,"innerHTML",msg);fx.fadeIn({node:this._errorMessagePane,easing:_10.quadIn,onEnd:_3.hitch(this,function(){_b.set(this._errorMessagePane,{display:""});})}).play();window.setTimeout(_3.hitch(this,this._handleCloseMsg),3000);},_handleCloseMsg:function(e){if(e){e.preventDefault();}fx.fadeOut({node:this._errorMessagePane,easing:_10.quadOut,onEnd:_3.hitch(this,function(){_b.set(this._errorMessagePane,{display:"none"});})}).play();},_handleUnionBtnCtrClick:function(){this._unionBtnCtr.set("checked",true);this._unionBtn.set("checked",true);this._handleUnionBtnClick();},_handleIntersectBtnCtrClick:function(){this._intersectBtnCtr.set("checked",true);this._intersectBtn.set("checked",true);this._handleIntersectBtnClick();},_handleEraseBtnCtrClick:function(){this._eraseBtnCtr.set("checked",true);this._eraseBtn.set("checked",true);this._handleEraseBtnClick();},_handleUnionBtnClick:function(_3a){var _3b=this.overlayFeatures[this._overlayFeaturesSelect.get("value")-1].name;this._outputLayerInput.set("value",_a.substitute(this.i18n.unionOutputLyrName,{layername:this.inputFeatures.name,overlayname:_3b}));this._unionBtn.focus();this.set("OverlayType","union");},_handleEraseBtnClick:function(_3c){var _3d=this.overlayFeatures[this._overlayFeaturesSelect.get("value")-1].name;this._eraseBtn.focus();this._outputLayerInput.set("value",_a.substitute(this.i18n.eraseOutputLyrName,{layername:this.inputFeatures.name,overlayname:_3d}));this.set("OverlayType","erase");},_handleIntersectBtnClick:function(_3e){var _3f=this.overlayFeatures[this._overlayFeaturesSelect.get("value")-1].name;this._intersectBtn.focus();this._outputLayerInput.set("value",_a.substitute(this.i18n.intersectOutputLyrName,{layername:this.inputFeatures.name,overlayname:_3f}));this.set("OverlayType","intersect");},_setAnalysisGpServerAttr:function(url){this.analysisGpServer=url;this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName);},_setInputFeaturesAttr:function(_40){this.inputFeatures=_40;},_setOverlayFeaturesAttr:function(_41){this.overlayFeatures=_41;},_setOverlayTypeAttr:function(_42){this.overlayType=_42;},_getOverlayTypeAttr:function(){return this.overlayType;},_setDisableRunAnalysisAttr:function(_43){this._saveBtn.set("disabled",_43);},_setMapAttr:function(map){this.map=map;},_getMapAttr:function(){return this.map;},_setShowChooseExtentAttr:function(_44){this.showChooseExtent=_44;},_getShowChooseExtentAttr:function(){return this.showChooseExtent;},validateServiceName:function(_45){var _46=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(_45);if(_45.length===0||((_a.trim(_45)).length===0)){this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue);return false;}if(_46){this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName);return false;}if(_45.length>98){this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength);return false;}return true;},_setShowSelectFolderAttr:function(_47){this.showSelectFolder=_47;},_getShowSelectFolderAttr:function(){return this.showSelectFolder;},_setShowHelpAttr:function(_48){this.showHelp=_48;},_getShowHelpAttr:function(){return this.showHelp;},_setShowCreditsAttr:function(_49){this.showCredits=_49;},_getShowCreditsAttr:function(){return this.showCredits;},_connect:function(_4a,evt,_4b){this._pbConnects.push(_5.connect(_4a,evt,_4b));},onSave:function(){},onClose:function(){}});if(_7("extend-esri")){_3.setObject("dijit.analysis.OverlayLayers",_26,_1f);}return _26;});