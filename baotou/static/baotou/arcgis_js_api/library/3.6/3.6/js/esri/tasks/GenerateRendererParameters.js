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
define("esri/tasks/GenerateRendererParameters",["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","esri/kernel"],function(_1,_2,_3,_4,_5){var _6=_1(null,{declaredClass:"esri.tasks.GenerateRendererParameters",classificationDefinition:null,where:null,toJson:function(){var _7={classificationDef:_3.toJson(this.classificationDefinition.toJson()),where:this.where};return _7;}});if(_4("extend-esri")){_2.setObject("tasks.GenerateRendererParameters",_6,_5);}return _6;});