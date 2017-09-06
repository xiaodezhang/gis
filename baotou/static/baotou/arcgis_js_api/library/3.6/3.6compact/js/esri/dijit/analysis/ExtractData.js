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
require({cache:{"url:esri/dijit/analysis/templates/ExtractData.html":"<div class=\"esriAnalysis\">\r\n  <div data-dojo-type=\"dijit/layout/ContentPane\" style=\"margin-top:0.5em; margin-bottom: 0.5em;\">\r\n    <div data-dojo-attach-point=\"_extractDataToolContentTitle\" class=\"analysisTitle\">\r\n         <table class=\"esriFormTable\" > \r\n            <tr>\r\n              <td><div class=\"extractDataIcon\"></div></td>\r\n              <td>${i18n.extractData}</td>\r\n              <td>\r\n                <div class=\"esriFloatTrailing\" style=\"padding:0;\">\r\n                  <a href=\"#\" class='esriFloatLeading helpIcon' esriHelpTopic=\"toolDescription\"></a>\r\n                  <a href=\"#\" data-dojo-attach-point=\"_closeBtn\" title=\"${i18n.close}\" class=\"closeIcon\">              \r\n                  <img src=\"images/close.gif\" border=\"0\"/></a>            \r\n                </div>\r\n              </td>\r\n            </tr>\r\n         </table>\r\n    </div>\r\n    <div style=\"clear:both; border-bottom: #333 thin solid; height:1px;width:100%;\"></div>\r\n  </div>\r\n  <div data-dojo-type=\"dijit/form/Form\" data-dojo-attach-point=\"_form\" readOnly=\"true\">\r\n     <table class=\"esriFormTable\"  data-dojo-attach-point=\"_extractDataTable\"> \r\n       <tbody>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.oneLabel}</label>\r\n            <label class=\"longTextInput\">${i18n.layersToExtract}</label>\r\n          </td>\r\n          <td class=\"shortTextInput\">\r\n            <a href=\"#\" class='esriFloatTrailing helpIcon' data-dojo-attach-point=\"_analysisFieldHelpLink\" esriHelpTopic=\"InputLayers\"></a> \r\n          </td> \r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\" style=\"padding:0.25em 0.5em 0.5em 0.5em\">\r\n            <table style=\"width:100%;table-layout:fixed;\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>\r\n                    <select multiple=\"true\"  class=\"esriLeadingMargin1\" data-dojo-attach-event=\"onChange:_handleDataFormatSelectChange\" style=\"width:100%;margin-top:10px;\" data-dojo-props=\"required:true\" data-dojo-type=\"dojox.form.CheckedMultiSelect\" data-dojo-attach-point=\"_inputLayersSelect\"></select>        \r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\" style=\"white-space:nowrap;padding:0.5em 0.5em 0.25em 0.5em\">\r\n            <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.twoLabel}</label>\r\n            <label class=\"longTextInput\">${i18n.studyArea}</label>\r\n          </td>\r\n          <td class=\"shortTextInput\">\r\n            <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"AreaOfInterest\"></a> \r\n          </td>          \r\n        </tr>  \r\n        <tr>\r\n          <td colpan=\"2\" style=\"padding:0.5em 0.5em 0.25em 0.5em;\">\r\n            <select class=\"esriLeadingMargin1 longInput esriMediumlabel\"  style=\"table-layout:fixed;\" data-dojo-type=\"dijit.form.Select\" data-dojo-attach-event=\"onChange:_handleExtentSelectChange\" data-dojo-attach-point=\"_extentSelect\"></select>                      \r\n          </td>\r\n          <td class=\"shortTextInput\" style=\"padding:0.5em 0.5em 0.25em 0.5em;\">\r\n            <button data-dojo-type=\"dijit/form/ToggleButton\" class=\"esriboundingButton esriLeadingMargin05\" data-dojo-attach-point=\"_drawExtentBtn\" data-dojo-props=\"showLabel:false,iconClass:'toolbarIcon polygonIcon',style:'width:16px;'\" data-dojo-attach-event=\"onClick:_handleExtentBtnClick\"></button>\r\n          </td> \r\n        </tr>      \r\n        <tr>\r\n          <td colspan=\"3\" style=\"padding:0.25em 0.5em 0.25em 0.5em;\">\r\n            <div class=\"esriLeadingMargin2\" style=\"width:100%;\">\r\n              <label class=\"esriSelectLabel\">\r\n                <input type=\"radio\" data-dojo-type=\"dijit/form/RadioButton\" data-dojo-props=\"'class':'esriSelectLabel',checked:true\" name=\"clip\" value=\"fgdb\"/>\r\n                ${i18n.selectFtrs}\r\n              </label>\r\n              <br/>\r\n              <label class=\"esriSelectLabel\">\r\n                <input type=\"radio\" data-dojo-type=\"dijit/form/RadioButton\" data-dojo-attach-point=\"_clipRadioBtn\" data-dojo-props=\"'class':'esriSelectLabel'\" name=\"clip\" value=\"shp\"/> \r\n                ${i18n.clipFtrs}\r\n              </label>\r\n            </div>\r\n          </td>\r\n        </tr>               \r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.threeLabel}</label>\r\n            <label class=\"longTextInput\">${i18n.outputDataFormat}</label>\r\n          </td>\r\n          <td class=\"shortTextInput\">\r\n            <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"OutputFormat\"></a> \r\n          </td>             \r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\" style=\"padding:0.25em 0.5em 0.5em 0.5em;\">\r\n            <select class=\"esriLeadingMargin1 longInput\"  style=\"table-layout:fixed;\" data-dojo-type=\"dijit/form/Select\" data-dojo-attach-point=\"_dataFormatSelect\" data-dojo-attach-event=\"onChange:_handleDataFormatSelectChange\">\r\n              <option value=\"CSV\">${i18n.csvPoints}</option>\r\n              <option value=\"FILEGEODATABASE\"> ${i18n.filegdb}</option>\r\n              <!--<option value=\"LAYERPACKAGE\">${i18n.lyrpkg}</option>-->\r\n              <option value=\"KML\">${i18n.kml}</option>\r\n              <option value=\"SHAPEFILE\">${i18n.shpFile}</option>                \r\n            </select>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.fourLabel}</label>\r\n            <label class=\"longTextInput\">${i18n.outputFileName}</label>\r\n          </td>\r\n          <td class=\"shortTextInput\">\r\n            <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"OutputName\"></a> \r\n          </td>             \r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\">\r\n            <input type=\"text\" data-dojo-type=\"dijit/form/ValidationTextBox\" data-dojo-props=\"required:true,missingMessage:'${i18n.outputnameMissingMsg}'\"class=\"esriLeadingMargin1 esriOutputText\" data-dojo-attach-point=\"_outputLayerInput\"></input>\r\n          </td>                \r\n        </tr> \r\n        <tr>\r\n          <td colspan=\"3\">\r\n             <div class=\"esriLeadingMargin1\" data-dojo-attach-point=\"_chooseFolderRow\">\r\n               <label style=\"width:9px;font-size:smaller;\">${i18n.saveResultIn}</label>\r\n               <input class=\"longInput esriFolderSelect\" dojoAttachPoint=\"_webMapFolderSelect\" dojotype=\"dijit/form/ComboBox\" trim=\"true\"></input>\r\n             </div>              \r\n          </td>\r\n        </tr>         \r\n      </tbody>         \r\n     </table>\r\n   </div>\r\n    <div data-dojo-attach-point=\"_aggregateToolContentButtons\" style=\"padding:5px;margin-top:5px;border-top:solid 1px #BBB;\">\r\n      <div style=\"width:100%;padding:0.5em 0 0.5em 0\">\r\n        <a class=\"esriFloatTrailing esriSmallFont\"  href=\"#\" data-dojo-attach-point=\"_showCreditsLink\" data-dojo-attach-event=\"onclick:_handleShowCreditsClick\">${i18n.showCredits}</a>\r\n       <label data-dojo-attach-point=\"_chooseExtentDiv\"class=\"esriSelectLabel\" style=\"font-size:smaller;\">\r\n         <input type=\"radio\" data-dojo-attach-point=\"_useExtentCheck\" data-dojo-type=\"dijit/form/CheckBox\" data-dojo-props=\"checked:true\" name=\"extent\" value=\"true\"/>\r\n           ${i18n.useMapExtent}\r\n       </label>\r\n      </div>\r\n      <button data-dojo-type=\"dijit/form/Button\" type=\"submit\" data-dojo-attach-point=\"_saveBtn\" class=\"esriLeadingMargin4\" data-dojo-attach-event=\"onClick:_handleSaveBtnClick\">\r\n          ${i18n.runAnalysis}\r\n      </button>\r\n    </div>\r\n    <div data-dojo-type=\"dijit/Dialog\" title=\"${i18n.creditTitle}\" data-dojo-attach-point=\"_usageDialog\" style=\"width:40em;\">\r\n      <div data-dojo-type=\"esri/dijit/analysis/CreditEstimator\"  data-dojo-attach-point=\"_usageForm\"></div>\r\n    </div>    \r\n  <div class=\"esriFormWarning esriRoundedBox\" data-dojo-attach-point=\"_errorMessagePane\" style=\"display:none;\">\r\n    <a href=\"#\" title=\"${i18n.close}\" class=\"esriFloatTrailing closeIcon\" title='${i18n.close}' data-dojo-attach-event=\"onclick:_handleCloseMsg\">\r\n      <img src='images/close.gif' border='0'/> \r\n    </a>\r\n    <span data-dojo-attach-point=\"_bodyNode\"></span>\r\n  </div>\r\n</div>\r\n"}});define("esri/dijit/analysis/ExtractData",["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dojo/date/locale","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ToggleButton","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/ComboBox","dojox/form/CheckedMultiSelect","esri/kernel","esri/lang","esri/dijit/analysis/AnalysisBase","esri/dijit/analysis/CreditEstimator","esri/geometry/jsonUtils","esri/toolbars/draw","esri/layers/FeatureLayer","esri/dijit/analysis/utils","esri/geometry/Point","esri/geometry/Polyline","esri/geometry/Polygon","esri/geometry/Multipoint","esri/geometry/Extent","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/SpatialReference","dojo/i18n!esri/nls/jsapi","dojo/text!esri/dijit/analysis/templates/ExtractData.html"],function(_1,_2,_3,_4,_5,_6,_7,fx,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21,_22,_23,_24,_25,_26,_27,_28,_29,_2a,_2b,_2c,_2d,_2e,_2f,_30,_31,_32,_33,_34){var _35=_2([_13,_14,_15,_16,_17,_25],{declaredClass:"esri.dijit.analysis.ExtractData",templateString:_34,basePath:_1.toUrl("esri/dijit/analysis"),widgetsInTemplate:true,showSelectFolder:false,showChooseExtent:false,showHelp:true,showCredits:true,inputLayers:null,featureLayers:null,outputLayerName:null,i18n:null,toolName:"ExtractData",helpFileName:"ExtractData",resultParameter:"contentID",constructor:function(_36,_37){this.inherited(arguments);this._pbConnects=[];if(_36.containerNode){this.container=_36.containerNode;}},destroy:function(){this.inherited(arguments);_4.forEach(this._pbConnects,_6.disconnect);delete this._pbConnects;},postMixInProperties:function(){this.inherited(arguments);this.i18n={};_3.mixin(this.i18n,_33.common);_3.mixin(this.i18n,_33.analysisTools);_3.mixin(this.i18n,_33.extractDataTool);},postCreate:function(){this.inherited(arguments);_f.add(this._form.domNode,"esriSimpleForm");_b.set(this._inputLayersSelect.selectNode,"width","90%");this._outputLayerInput.set("validator",_3.hitch(this,this.validateServiceName));this._buildUI();},startup:function(){},_onClose:function(_38){if(_38){this._save();this.onSave();}this.onClose();},_buildJobParams:function(){var _39={},_3a={},_3b,_3c,_3d=[];_3c=_4.map(this._inputLayersSelect.get("SelectedOptions"),function(opt){return this.featureLayers[parseInt(opt.value,10)];},this);_3b=[];_3b=_4.map(_3c,function(_3e){return _7.toJson(_2a.constructAnalysisInputLyrObj(_3e));},this);_39.InputLayers=_3b;_39.Clip=this._clipRadioBtn.get("checked");_39.DataFormat=this._dataFormatSelect.get("value");if(this._extentSelect.get("value")!=="-1"||this._extentArea){if(this._extentArea){if(!this._featureLayer){this._featureLayer=this._createBoundingPolyFeatColl();this.map.addLayer(this._featureLayer);}_3d.push(this._extentArea);this._featureLayer.applyEdits(_3d,null,null);_39.Extent=_7.toJson(_2a.constructAnalysisInputLyrObj(this._featureLayer));}else{_39.Extent=_7.toJson(_2a.constructAnalysisInputLyrObj(this.featureLayers[parseInt(this._extentSelect.get("value"),10)-1]));}_39.context=_7.toJson({extent:this.get("extent")});}else{_39.Extent=this.map.extent;_39.context=_7.toJson({extent:this.map.extent});}_39.OutputName=_7.toJson({itemProperties:{title:this._outputLayerInput.get("value"),description:this.i18n.itemDescription,tags:this.i18n.itemTags,snippet:this.i18n.itemSnippet,folderId:this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):""}});return _39;},_handleShowCreditsClick:function(e){var _3f={};e.preventDefault();if(!this._form.validate()){return;}_3f=this._buildJobParams();_3f.InputLayers=_7.toJson(_3f.InputLayers);this.getCreditsEstimate(this.toolName,_3f).then(_3.hitch(this,function(_40){this._usageForm.set("content",_40);this._usageDialog.show();}));},_handleSaveBtnClick:function(e){var _41={},_42={};if(!this._form.validate()){return;}this._saveBtn.set("disabled",true);_41=this._buildJobParams();_42.jobParams=_41;if(this._featureLayer){this.map.removeLayer(this._featureLayer);this._featureLayer=null;}if(this._extentArea){this.map.graphics.remove(this._extentArea);this._extentArea=null;}this.execute(_42);},_save:function(){},_buildUI:function(){var _43;this._loadConnections();_2a.initHelpLinks(this.domNode,this.showHelp);_43=_11.format(new Date(),{datePattern:"MMMM d yyyy",timePattern:"h.m.s a"});this._outputLayerInput.set("value",_a.substitute(this.i18n.outputfileName,{datetime:_43}));if(this.outputLayerName){this._outputLayerInput.set("value",this.outputLayerName);}if(this.featureLayers){this._extentSelect.addOption({value:"-1",label:this.i18n.sameAsDisplay});_4.forEach(this.featureLayers,function(_44,_45){this._inputLayersSelect.addOption({value:_45,label:_44.name,selected:(this.featureLayers&&_4.indexOf(this.selectedLayers,_44)!==-1)});this._extentSelect.addOption({value:_45+1,label:_a.substitute(this.i18n.sameAsLayer,{layername:_44.name})});},this);}if(this.outputLayerName){this._outputLayerInput.set("value",this.outputLayerName);}_b.set(this._chooseFolderRow,"display",this.showSelectFolder===true?"block":"none");if(this.showSelectFolder){this.getFolderStore().then(_3.hitch(this,function(_46){this.folderStore=_46;this._webMapFolderSelect.set("store",_46);this._webMapFolderSelect.set("value",this.portalUser.username);}));}_b.set(this._chooseExtentDiv,"display",this.showChooseExtent===true?"block":"none");},_loadConnections:function(){this._connect(this,"onExecute",_3.hitch(this,"_onClose",false));this._connect(this._closeBtn,"onclick",_3.hitch(this,"_onClose",false));},_handleDataFormatSelectChange:function(){var _47,_48,_49;_48=false;_49=this._dataFormatSelect.get("value");if(_49==="CSV"){_48=_4.some(this._inputLayersSelect.get("SelectedOptions"),function(opt){_47=this.featureLayers[parseInt(opt.value,10)];return (_47.geometryType==="esriGeometryPolyline"||_47.geometryType==="esriGeometryPolygon");},this);if(_48){this._showMessages(this.i18n.linesCSVValidationMsg);this.set("disableRunAnalysis",true);}else{this._handleCloseMsg();this.set("disableRunAnalysis",false);}}else{this._handleCloseMsg();this.set("disableRunAnalysis",false);}},_handleExtentSelectChange:function(_4a){var _4b,_4c;this._drawExtentBtn.set("disabled",this._extentSelect.get("value")!=="-1");if(this._extentArea){this.map.graphics.remove(this._extentArea);this._extentArea=null;}if(_4a!=="-1"){_4b=this.featureLayers[parseInt(_4a-1,10)].toJson();_4c=this.featureLayers[parseInt(_4a-1,10)];this.set("extent",_24.isDefined(_4b.layerDefinition.extent)?_4b.layerDefinition.extent:this._getLayerFullExtent(_4c));}else{this.set("extent",this.map.extent);}},_getLayerFullExtent:function(_4d){var _4e=null;_4.forEach(_4d.graphics,function(_4f,i){var ext=this._getExtent(_4f.geometry);if(ext){if(!_4e){_4e=ext;}else{_4e=_4e.union(ext);}}},this);return _4e;},_getExtent:function(_50){if(!_50){return null;}var _51=null;if(_50.declaredClass==="esri.geometry.Extent"){_51=_50;}else{if(_50.declaredClass==="esri.geometry.Point"){_51=new _2f(_50.x-0.0001,_50.y-0.0001,_50.x+0.0001,_50.y+0.0001,_50.spatialReference);}else{_51=_50.getExtent();if(_51){_51.spatialReference=new _32(_50.spatialReference.toJson());}}}return _51;},_handleExtentBtnClick:function(e){e.preventDefault();this.onDrawToolActivate();this._toolbar.activate(_28.POLYGON);if(this._featureLayer){this.map.removeLayer(this._featureLayer);this._featureLayer=null;}if(this._extentArea){this.map.graphics.remove(this._extentArea);this._extentArea=null;}},_addFeatures:function(_52){this.onDrawToolDeactivate();this._toolbar.deactivate();var _53=[],_54={},_55,_56;_55=new _30(_30.STYLE_NULL,new _31(_31.STYLE_SOLID,new _5([0,0,0]),4));this.set("extent",_52.getExtent());this._extentArea=new esri.Graphic(_52,_55);this.map.graphics.add(this._extentArea);},_setExtentAttr:function(_57){this.extent=_57;},_getExtentAttr:function(){return this.extent;},_setAnalysisGpServerAttr:function(url){this.analysisGpServer=url;this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName);},_setFeatureLayersAttr:function(_58){this.featureLayers=_4.filter(_58,function(_59){return (_59.capabilities.indexOf("Extract")!==-1);});},_getFeatureLayersAttr:function(){return this.featureLayers;},_setSelectedLayersAttr:function(lyr){this.selectedLayers=lyr;},_getSelectedLayersAttr:function(){this.selectedLayers=_4.map(this._inputLayersSelect.get("SelectedOptions"),function(opt){return this.featureLayers[parseInt(opt.value,10)];},this);return this.selectedLayers;},_setDisableRunAnalysisAttr:function(_5a){this._saveBtn.set("disabled",_5a);},_setShowSelectFolderAttr:function(_5b){this.showSelectFolder=_5b;},_getShowSelectFolderAttr:function(){return this.showSelectFolder;},_setShowChooseExtentAttr:function(_5c){this.showChooseExtent=_5c;},_getShowChooseExtentAttr:function(){return this.showChooseExtent;},_setMapAttr:function(map){this.map=map;this._toolbar=new _28(this.map);this.set("extent",this.map.extent);_6.connect(this._toolbar,"onDrawEnd",_3.hitch(this,this._addFeatures));},_getMapAttr:function(){return this.map;},_setShowHelpAttr:function(_5d){this.showHelp=_5d;},_getShowHelpAttr:function(){return this.showHelp;},_setShowCreditsAttr:function(_5e){this.showCredits=_5e;},_getShowCreditsAttr:function(){return this.showCredits;},validateServiceName:function(_5f){var _60=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(_5f);if(_5f.length===0||((_a.trim(_5f)).length===0)){this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue);return false;}if(_60){this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName);return false;}if(_5f.length>98){this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength);return false;}return true;},_connect:function(_61,evt,_62){this._pbConnects.push(_6.connect(_61,evt,_62));},_showMessages:function(msg){_c.set(this._bodyNode,"innerHTML",msg);fx.fadeIn({node:this._errorMessagePane,easing:_12.quadIn,onEnd:_3.hitch(this,function(){_b.set(this._errorMessagePane,{display:""});})}).play();},_handleCloseMsg:function(e){if(e){e.preventDefault();}fx.fadeOut({node:this._errorMessagePane,easing:_12.quadOut,onEnd:_3.hitch(this,function(){_b.set(this._errorMessagePane,{display:"none"});})}).play();},_createBoundingPolyFeatColl:function(){var _63,_64,_65;_64={"layerDefinition":null,"featureSet":{"features":[],"geometryType":"esriGeometryPolygon"}};_64.layerDefinition={"currentVersion":10.11,"copyrightText":"","defaultVisibility":true,"relationships":[],"isDataVersioned":false,"supportsRollbackOnFailureParameter":true,"supportsStatistics":true,"supportsAdvancedQueries":true,"geometryType":"esriGeometryPolygon","minScale":0,"maxScale":0,"objectIdField":"OBJECTID","templates":[],"type":"Feature Layer","displayField":"TITLE","visibilityField":"VISIBLE","name":"Boundary","hasAttachments":false,"typeIdField":"TYPEID","capabilities":"Query","allowGeometryUpdates":true,"htmlPopupType":"","hasM":false,"hasZ":false,"globalIdField":"","supportedQueryFormats":"JSON","hasStaticData":false,"maxRecordCount":-1,"indexes":[],"types":[],"drawingInfo":{"renderer":{"type":"simple","symbol":{"color":[0,0,0,255],"outline":{"color":[0,0,0,255],"width":3,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSNull"},"label":"","description":""},"transparency":0,"labelingInfo":null,"fixedSymbols":true},"fields":[{"alias":"OBJECTID","name":"OBJECTID","type":"esriFieldTypeOID","editable":false},{"alias":"Title","name":"TITLE","length":50,"type":"esriFieldTypeString","editable":true},{"alias":"Visible","name":"VISIBLE","type":"esriFieldTypeInteger","editable":true},{"alias":"Description","name":"DESCRIPTION","length":1073741822,"type":"esriFieldTypeString","editable":true},{"alias":"Type ID","name":"TYPEID","type":"esriFieldTypeInteger","editable":true}]};_65=new _29(_64,{id:"boundary"});return _65;},onDrawToolActivate:function(){},onDrawToolDeactivate:function(){},onSave:function(){},onClose:function(){}});if(_8("extend-esri")){_3.setObject("dijit.analysis.ExtractData",_35,_23);}return _35;});