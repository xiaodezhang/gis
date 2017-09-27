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
define("esri/nls/he/jsapi",({io:{proxyNotSet:"esri.config.defaults.io.proxyUrl לא מוגדר."},map:{deprecateReorderLayerString:"Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecated. השתמש בMap.reorderLayer(/*Layer*/ layer, /*Number*/ index).",deprecateShiftDblClickZoom:"Map.(enable/disable)ShiftDoubleClickZoom מיושן. התנהגות ההתמקדות Shift-Double-Click לא תיתמך בעתיד."},geometry:{deprecateToScreenPoint:"esri.geometry.toScreenPoint מיושן. השתמש ב esri.geometry.toScreenGeometry.",deprecateToMapPoint:"esri.geometry.toMapPoint מיושן. השתמש ב esri.geometry.toMapGeometry."},layers:{tiled:{tileError:"לא ניתן לטעון את האריח"},dynamic:{imageError:"לא ניתן לטעון את התמונה"},graphics:{drawingError:"לא ניתן לצייר את הגרפיקה "},agstiled:{deprecateRoundrobin:"אפשרות ה Constructor 'roundrobin' מיושנת. השתמש באופציה 'tileServers'."},imageParameters:{deprecateBBox:"מאפיין 'bbox' מיושן. השתמש במאפיין 'extent'."},FeatureLayer:{noOIDField:"objectIdField לא הוגדר [url: ${url}]",fieldNotFound:"לא ניתן למצוא שדה '${field}' במידע השכבה 'fields' [url: ${url}]",noGeometryField:"לא ניתן למצוא שדה מסוג 'esriFieldTypeGeometry' במידע השכבה 'fields'. אם הנך משתמש בשכבת שירות מפה לא תהיה לישויות גיאומטרה,  [url: ${url}]",invalidParams:"השאילתא מכילה פרמטר אחד או יותר שאינו נתמך",updateError:"אירעה שגיאה בזמן עדכון השכבה.",createUserSeconds:"נוצר על ידי  ${userId}  לפני  שניה",createUserMinute:"נוצר על ידי  ${userId}  לפני  דקה",editUserSeconds:"נערך על ידי  ${userId}  לפני  שניה",editUserMinute:"נערך על ידי  ${userId}  לפני  דקה",createSeconds:"נוצר לפני שניות",createMinute:"נוצר לפני דקה",editSeconds:"נערך לפני שניות",editMinute:"נערך לפני דקה",createUserMinutes:"נוצר על ידי  ${userId}  לפני ${minutes} דקות",createUserHour:"נוצר על ידי  ${userId}  לפני  שעה",createUserHours:"נוצר על ידי  ${userId}  לפני ${hours} שעות",createUserWeekDay:"נוצר על ידי  ${userId} ב ${weekDay} ב  ${formattedTime}",createUserFull:"נוצר על ידי  ${userId} ב ${formattedDate} ב  ${formattedTime}",editUserMinutes:"נערך על ידי  ${userId} לפני ${minutes} דקות",editUserHour:"נערך על ידי  ${userId}  לפני  שעה",editUserHours:"נערך על ידי  ${userId} לפני ${hours} שעות",editUserWeekDay:"נערך על ידי  ${userId} ב ${weekDay} ב  ${formattedTime}",editUserFull:"נערך על ידי  ${userId} ב ${formattedDate} ב  ${formattedTime}",createUser:"נוצר על ידי ${userId}",editUser:"נערך על ידי ${userId}",createMinutes:"נוצר  ${minutes} לפני דקה",createHour:"נוצר לפני שעה",createHours:"נוצר לפני ${hours} שעות",createWeekDay:"נוצר ב ${weekDay} ${formattedTime}",createFull:"נוצר ב ${formattedTime} ${formattedDate}",editMinutes:"נערך לפני  ${minutes} דקות",editHour:"נערך לפני שעה",editHours:"נערך לפני ${hours} שעות",editWeekDay:"נערך ב ${weekDay} ב ${formattedTime}",editFull:"נוצר ב ${formattedTime}ב ${formattedDate}"}},tasks:{gp:{gpDataTypeNotHandled:"סוג נתוני GP לא מטופל."},na:{route:{routeNameNotSpecified:"לא הוגדר 'RouteName' עבור לפחות עצירה אחת ב- stops FeatureSet."}},query:{invalid:"אין אפשרות לבצע את השאילתה. נא לבדוק את הנתונים."}},toolbars:{draw:{convertAntiClockwisePolygon:"פוליגונים משורטטים נגד כיון השעון יתהפכו לכיוון השעון.",addPoint:"הקש להוספת נקודה",addShape:"לחץ להוספת צורה, או לחץ למטה כדי להתחיל ושחרר בסיום",addMultipoint:"הקש כדי להתחיל בהוספת נקודות",freehand:"לחץ כלפי מטה כדי להתחילושחרר כדי לסיים",start:"לחץ כדי להתחיל בשרטוט",resume:"לחץ להמשך שרטוט",complete:"לחיצה כפולה להשלמה",finish:"לחיצה כפולה לסיום",invalidType:"סוג גיאומטריה  לא נתמך"},edit:{invalidType:"לא ניתן להפעיל את הכלי. בדוק אם הכלי תקף לסוג הגיאומטריה הנתונה.",deleteLabel:"מחק"}},virtualearth:{vetiledlayer:{bingMapsKeyNotSpecified:"חייב להינתן BingMapsKey."},vegeocode:{bingMapsKeyNotSpecified:"חייב להינתן BingMapsKey.",requestQueued:"לא נמצא קוד זיהוי (token). הבקשה תמתין בתור לביצוע לאחר שקוד הזיהוי (token) של השרת יאוחזר."}},widgets:{attributeInspector:{NLS_first:"ראשון",NLS_previous:"קודם",NLS_next:"הבא",NLS_last:"אחרון",NLS_deleteFeature:"מחק",NLS_title:"עריכת מאפיינים",NLS_errorInvalid:"לא תקין",NLS_validationInt:"הערך חייב להיות מספר שלם.",NLS_validationFlt:"הערך חייב להיות מספר צף.",NLS_of:"מתוך",NLS_noFeaturesSelected:"לא נבחרו ישויות"},overviewMap:{NLS_drag:"גרור לשינוי תיחום המפה",NLS_show:"הצג חלון סקירה כללית של המפה",NLS_hide:"הסתר חלון סקירה כללית של המפה",NLS_maximize:"הגדל למקסימום",NLS_restore:"שחזר",NLS_noMap:"'map' לא נמצא בפרמטרי הקלט",NLS_noLayer:"למפה העיקרית אין שכבת בסיס",NLS_invalidSR:"היחוס המרחבי של המפה הנתונה לא תואם עם המפה הראשית",NLS_invalidType:"סוג שכבה לא נתמך. הסוגים הנתמכים הם  'TiledMapServiceLayer' ו- 'DynamicMapServiceLayer'"},timeSlider:{NLS_first:"ראשון",NLS_previous:"קודם",NLS_next:"הבא",NLS_play:"נגן/הפסק",NLS_invalidTimeExtent:"TimeExtent לא הוגדר, או בפורמט שגוי."},attachmentEditor:{NLS_attachments:"קישורים:",NLS_add:"הוסף",NLS_none:"ללא",NLS_error:"קרתה שגיאה.",NLS_fileNotSupported:"סוג הקובץ לא נתמך."},directions:{error:{notEnoughStops:"הכנס מוצא ויעד.",unknownStop:"לא ניתן למצוא מיקום '<name>'.",routeTask:"לא ניתן ליצור מסלול לכתובות אלה.",locator:"לא ניתן למצוא מיקום.",invalidStopType:"סוג עצירה לא חוקי",locatorUndefined:"לא ניתן למצוא כתובת לפי מיקום. URL של מגדיר עיגון כתובות לא מוגדר.",noAddresses:"לא הוחזרו כתובות.",noStops:"לא ניתנו עצירות בכדי להוסיף.",maximumStops:"הגעה למספר המקסימלי של עצירות"},time:{minute:"דקה",minutes:"דקות",hour:"שעה",hours:"שעות"},units:{KILOMETERS:{name:"קילומטרים",abbr:"km."},METERS:{name:"מטרים",abbr:"m."},MILES:{name:"מיילים",abbr:"mi."},NAUTICAL_MILES:{name:"nautical miles",abbr:"nm."}},showOptions:"הצג אפשרויות",hideOptions:"הסתר אפשרויות",findOptimalOrder:"סדר אופטימלי",useTraffic:"השתמש בתנועה",returnToStart:"חזור להתחלה",addDestination:"הוסף יעד",viewFullRoute:"התמקד בכל המסלול",getDirections:"קבל הנחיות",clearDirections:"נקה",reverseDirections:"הנחיות לכיוון ההפוך",print:"הדפס",printNotes:"הוסף הערות כאן",printDisclaimer:"הוראות נסיעה נמסרות למטרות תכנון בלבד וכפופות ל <a href='http://www.esri.com/legal/software-license' target='_blank'>Esri's terms of use</a>. תנאי דרך משתנים תדיר ועשויים לגרום להבדלים בהוראות הנסיעה שלך וחייבים להילקח בחשבון יחד עם שילוט הדרך והגבלות הכתובות בחוק. האחריות לשימוש היא על המשתמש בלבד."},editor:{tools:{NLS_attributesLbl:"מאפיינים",NLS_cutLbl:"גזור",NLS_deleteLbl:"מחק",NLS_extentLbl:"תיחום",NLS_freehandPolygonLbl:"פוליגון בשרטוט חופשי",NLS_freehandPolylineLbl:"קו בשרטוט חופשי",NLS_pointLbl:"נקודה",NLS_polygonLbl:"פוליגון",NLS_polylineLbl:"קו",NLS_reshapeLbl:"עצב מחדש",NLS_selectionNewLbl:"בחירה חדשה",NLS_selectionAddLbl:"הוסף לנבחרים",NLS_selectionClearLbl:"נקה נבחרים",NLS_selectionRemoveLbl:"החסר מהנבחרים",NLS_selectionUnionLbl:"איחוד",NLS_autoCompleteLbl:"השלמה אוטומטית",NLS_unionLbl:"איחוד",NLS_rectangleLbl:"מלבן",NLS_circleLbl:"מעגל",NLS_ellipseLbl:"אליפסה",NLS_triangleLbl:"משולש",NLS_arrowLbl:"חץ",NLS_arrowLeftLbl:"חץ שמאלה",NLS_arrowUpLbl:"חץ למעלה",NLS_arrowDownLbl:"חץ למטה",NLS_arrowRightLbl:"חץ ימינה",NLS_undoLbl:"בטל שינויים",NLS_redoLbl:"בצע מחדש"}},Geocoder:{main:{clearButtonTitle:"נקה חיפוש",searchButtonTitle:"חיפוש",geocoderMenuButtonTitle:"שנה מעגן כתובות",geocoderMenuHeader:"בחר מעגן כתובות",geocoderMenuCloseTitle:"סגור תפריט",untitledGeocoder:"מעגן כתובות ללא כותרת"},esriGeocoderName:"מעגן כתובות עולמי של Esri"},HistogramTimeSlider:{NLS_range:"טווח",NLS_cumulative:"מצטבר",NLS_play:"נגן/הפסק",NLS_invalidTimeExtent:"TimeExtent לא הוגדר, או בפורמט שגוי.",NLS_overview:"OVERVIEW",NLS_fullRange:"טווח מלא"},legend:{NLS_points:"נקודות",NLS_lines:"קווים",NLS_polygons:"פוליגונים",NLS_creatingLegend:"יצירת מקרא",NLS_noLegend:"אין מקרא"},popup:{NLS_moreInfo:"מידע נוסף",NLS_searching:"מחפש",NLS_prevFeature:"ישות קודמת",NLS_nextFeature:"הישות הבאה",NLS_close:"סגור",NLS_prevMedia:"המדיה הקודמת",NLS_nextMedia:"המדיה הבאה",NLS_noInfo:"אין מידע זמין",NLS_noAttach:"לא נמצאו קישורי קבצים",NLS_maximize:"הגדל למקסימום",NLS_restore:"שחזר",NLS_zoomTo:"התמקד אל",NLS_pagingInfo:"(${index} מתוך ${total})",NLS_attach:"קישורים"},measurement:{NLS_distance:"מרחק",NLS_area:"שטח",NLS_location:"מיקום",NLS_resultLabel:"תוצאות מדידה",NLS_length_miles:"מיילים",NLS_length_kilometers:"קילומטרים",NLS_length_feet:"רגל",NLS_length_meters:"מטרים",NLS_length_yards:"יארד",NLS_area_acres:"אקרים",NLS_area_sq_miles:"מיילים מרובע",NLS_area_sq_kilometers:"קילומטרים רבועים",NLS_area_hectares:"הקטרים",NLS_area_sq_yards:"יארדים רבועים",NLS_area_sq_feet:"רגל רבוע",NLS_area_sq_meters:"מטרים רבועים",NLS_deg_min_sec:"DMS",NLS_decimal_degrees:"מעלות",NLS_map_coordinate:"קואורדינטות מפה",NLS_longitude:"קו אורך",NLS_latitude:"קו רוחב"},bookmarks:{NLS_add_bookmark:"הוסף סימניה",NLS_new_bookmark:"ללא כותרת",NLS_bookmark_edit:"עריכה",NLS_bookmark_remove:"הסר"},print:{NLS_print:"הדפס",NLS_printing:"מדפיס",NLS_printout:"הדפסה"},templatePicker:{creationDisabled:"יצירת ישויות הופסקה עבור כל השכבות",loading:"טוען..."},renderingRule:{rendererLabelTitle:"Renderer",bandCombinationLabelTitle:"שילוב ערוצים ל- RGB",userDefinedRendererTitle:"הגדרת משתמש ל- Renderer",userDefinedRendererDesc:"הגדרת משתמש ל- Renderer. השתמש בערוצים שונים כקלט לערוצי אדום, ירוק וכחול (שירותים מרובי ערוצים בלבד). ניתן ליישם אלגוריתמים המשפרים רדיומטריה בכדי להציג את התמונה טוב יותר.",imageEnhancementLabelTitle:"שיפור תמונה",stretchDescLabel:"יישום משפרי ניגודיות בכדי להביא להשבחת תצוגת תמונה.",stretchMethodLabel:"סוג מתיחה:",stretchMethodNoneDesc:"לא יושם משפר נוסף.",stretchMethodMinMaxDesc:"מתיחה לטווח המלא של ערכי הפיקסל.",numStdDevLabelTitle:"חתוך ערכי פיקסל קיצוניים מעבר ל",numStdDevEndLabelTitle:"סטיית תקן",draLabelTitle:"התאמת טווח דינאמית",minMaxDescLabelTitle:"חתוך ערכי פיקסל קיצוניים",minPercentLabelTitle:"אין להכליל מתחת ל:",maxPercentLabelTitle:"אין להכליל מעל ל:",percentLabelTitle:"%",gammaLabelTitle:"גאמה:",bandNamesRequestMsg:"בקשת מידע על רצועה",noneStretchAlias:"ללא",minMaxStretchAlias:"מינימום ומקסימום",stdDevStretchAlias:"סטיית תקן",percentClipStretchAlias:"אחוז גזירה",minGammaLabel:"0.1",maxGammaLabel:"10"},mosaicRule:{mosaicMethodLabel:"הענקת עדיפות לתמונות בהתבסס על:",orderFieldLabel:"מאפיין:",orderValueLabel:"ערך ההעדפה הגבוה ביותר:",lockRasterIdLabel:"IDs של התמונה:",mosaicOperatorLabel:"פתור בעיית פיקסלים חופפים על ידי:",descendingLabel:"הפוך את הסדר",queryLabel:"סינון התמונות שלך:",queryFieldLabel:"שדה:",queryOperatorLabel:"פעולה:",queryValueLabel:"ערך:",selectAllLabel:"בחר הכל",mosaicruleNotApplicable:"שכבת התמונה מכילה רק תמונה אחת ולא תומכת בשינויים של סידור תצוגת התמונה.",lockRasterRequestMsg:"מחפש...",lockRasterRequestDoneMsg:"בוצע...",lockRasterRequestErrorMsg:"חיפוש אחר שגיאה...",lockRasterRequestNoRasterMsg:"לא נמצאו רסטרים...",refreshLockRasterIdsLabel:"רענן",orderFieldNotFound:"לא זמין",byAttributeAlias:"מאפיין",centerAlias:"מוקד התמונה הקרוב ביותר למוקד הצפייה",lockRasterAlias:"רשימת תמונות",nadirAlias:"מיקום חיישן הקרוב ביותר למוקד הצפייה",northWestAlias:"סדר קבוע כאשר צפון מערב עליון",seamlineAlias:"קווי תפר מוגדרים",viewPointAlias:"נקודת תצפית",noneAlias:"רק קנה מידה",firstAlias:"רק העדיפות הגבוהה ביותר",lastAlias:"רק העדיפות הנמוכה ביותר",minAlias:"מינימום ערכי פיקסל",maxAlias:"מקסימום ערכי פיקסל",averageAlias:"ממוצע ערכי פיקסל",blendAlias:"ערבוב ערכי פיקסל"}},arcgis:{utils:{baseLayerError:"לא ניתן לטעון את שכבת מפת הבסיס",geometryServiceError:"ספק שירות גיאומוריה לפתיחת Web Map.",showing:"הצגת ${fieldAlias}"}},identity:{lblItem:"פריט",title:"הירשם",info:"אנא הכנס לחשבונך כדי לגשת לפריט ב ${server} ${resource}",lblUser:"שם משתמש:",lblPwd:"סיסמה:",lblOk:"אישור",lblSigning:"הירשם...",lblCancel:"ביטול",errorMsg:"משתמש/סיסמא לא חוקיים. אנא נסה שנית.",invalidUser:"המשתמש או הסיסמא שהכנסת לא נכונים.",forbidden:"שם המשתמש והסיסמא תקינים, אך אין לך גישה למשאב זה.",noAuthService:"לא ניתן לגשת לשירות האימות."},common:{cancel:"ביטול",ok:"אישור",create:"צור",close:"סגור",done:"בוצע",apply:"יישם",remove:"הסר",open:"פתח",edit:"עריכה",share:"שתף",save:"שמור",help:"עזרה",warning:"אזהרה",deleteLabel:"מחק",titleLabel:"כותרת:",newLabel:"חדש",arcgis:"ArcGIS",previous:"קודם",submit:"סיכום",next:"הבא",yesLabel:"כן",noLabel:"לא",errorTitle:"שגיאה",upload:"טען",sum:"סכום",minimum:"מינימום",maximum:"מקסימום",average:"ממוצע",standardDev:"סטיית תקן",statistic:"סטטיסטיקה",attribute:"שדה",selectAttribute:"בחר מאפיין",runAnalysis:"הרצת ניתוח",oneLabel:"1.",twoLabel:"2.",threeLabel:"3.",fourLabel:"4.",fiveLabel:"5.",outputnameMissingMsg:"יש להכניס שם תוצר",miles:"מיילים",kilometers:"קילומטרים",meters:"מטרים",feet:"רגל",degree:"מעלות דצימליות",inches:"אינצ'(ים)",nautMiles:"מיילים ימיים",pointsUnit:"נקודה(ות)",yards:"יארד",comingSoonLabel:"בקרוב!",sqMiles:"מיילים רבועים",sqKm:"קמ\"ר",sqMeters:"מ\"ר",hectares:"הקטרים",acres:"אקרים",seconds:"שניות",minutes:"דקות",hours:"שעות",today:"היום",monday:"שני",tuesday:"שלישי",wednesday:"רביעי",thursday:"חמישי",friday:"שישי",saturday:"שבת",sunday:"ראשון",chooseSummarizeLabel:"בחר שכבה לסיכום",creditTitle:"דו\"ח שימוש בקרדיטים",analysisLayers:"שכבות ניתוח:",showCredits:"הצג קרדיטים",learnMore:"לימוד נוסף",hoursSmall:"שעות",minutesSmall:"מינימום",secondsSmall:"שניות"},analysisTools:{performAnalysis:"ביצוע ניתוח",summarizeData:"סיכום נתונים",findLocations:"מציאת מיקום",aggregateTool:"קיבוץ נקודות",bufferTool:"נתוני חיץ",dataEnrichment:"העשרת מידע",analyzePatterns:"ניתוח תבניות",useProximity:"שימוש בסמיכות",manageData:"ניהול נתונים",aggregateToolName:"קיבוץ נקודות",bufferToolName:"יצירת חיץ",aggregatePoints:"קיבוץ נקודות",summarizeWithin:"סיכום בתוך שטח",summarizeNearby:"סיכום סמיכויות",enrichLayer:"העשרת שכבה",findNearest:"מציאת המיקום הקרוב ביותר",findHotSpots:"מציאת נקודות חמות",createBuffers:"יצירת חיץ",dissolveBoundaries:"מיזוג גבולות",mergeLayers:"חיבור שכבות",extractData:"ייצוא נתונים",overlayLayers:"כיסוי שכבות",fieldCalculator:"חישוב שדה",createDriveTimeAreas:"צור אזורי זמן נסיעה",deriveNewLocations:"גזירת מיקומים חדשים",findExistingLocations:"מציאת מיקומים קיימים",exploreCorrelations:"חקירת עוצמת קשרים",findRoute:"מציאת מסלול",generateFleetPlan:"ייצור תכנית מסלולים לצי רכב",createDensitySurface:"יצירת משטח צפיפויות",createInterpolatedSurface:"יצירת משטח",orgUsrMsg:"בכדי להריץ שירות זה, חובה על המשתמש להיות חבר בארגון.",pubRoleMsg:"לחשבון המקוון שלך אין הרשאה כמפרסם",servNameExists:"כבר קיים שירות שפורסם  עם שם זהה בתוך הארגון. שמות שירותים חייבים להיות יחודיים בתוך הארגון. אנא בחר שם שונה.",outputLayerLabel:"שם שכבת התוצאה",outputFileName:"שם קובץ תוצר",emptyResultInfoMsg:"תוצאות הניתוח שלך לא החזירו ישויות. לא תיווצר שכבה.",invalidServiceName:"שם שכבת התוצאה מכיל תו אחד או יותר לא חוקיים (<, >, #, %, :, \", ?, &, +, /, or \\).",invalidServiceNameLength:"אורך השם של שכבת התוצאה צריך להיות פחות מ- 98 תווים.",requiredValue:"חובה להכניס ערך זה.",saveResultIn:"שמור תוצאה ב",useMapExtent:"השתמש בתיחום המפה הנוכחי"},aggregatePointsTool:{aggregateDefine:"ספירה בתוך <b>${layername}</b>",outputLayerName:"קיבוץ של  ${pointlayername} ל- ${polygonlayername}",groupByLabel:"בחר שדה לקבץ על פיו (אופציונלי)",itemDescription:"שירות ישויות נוצר מתוך הרצת פתרונות קיבוץ נקודות. נקודות מתוך ${pointlayername} קובצו ל${polygonlayername}",itemTags:"תוצאת ניתוח, קיבוץ נקודות, ${pointlayername}, ${polygonlayername}",itemSnippet:"ניתוח שירות ישויות אותחל מתוך קיבוץ נקודות",removeAttrStats:"הסרת סטטיסטיקה של מאפיינים",keepPolygonLabel:"השאר שטח ללא נקודות",addStatsLabel:"הוסף סטטיסטיקה (אפשרי)",chooseAreaLabel:"בחר אזור"},findHotSpotsTool:{hotspotsPolyDefine:"בצע ניתוח של <b>${layername}</b> בכדי למצוא נקודות חמות וקרות שיש להן משמעות סטטיסטית מתוך ",hotspotsPointDefine:"בצע ניתוח של <b>${layername}</b> בכדי למצוא נקודות חמות וקרות שיש להן משמעות סטטיסטית ",fieldLabel:"עם או ללא שדה ניתוח",noAnalysisField:"אין שדה ניתוח",hotspots:"נקודות חמות",outputLayerName:"נקודות חמות ${layername}",Options:"אפשרויות",defineBoundingLabel:"הגדר היכן עשויים להתרחש אירועים",provideAggLabel:"ספק אזורים לקיבוץ בכדי לסכם אירועים",defaultBoundingOption:"בחר אזורים תוחמים",defaultAggregationOption:"בדוק אזורים שעברו קיבוץ",itemDescription:"שירות ישות נוצר מתוך הרצת פתרון מציאת נקודות חמות.",itemTags:"תוצאת ניתוח, נקודות חמות, ${layername}, ${fieldname}",itemSnippet:"ניתוח שירות ישויות נוצר מתוך מציאת נקודות חמות",chooseAttributeLabel:"בחר את שדה הניתוח",blayerName:"גבולות משורטטים"},overlayLayersTool:{overlayDefine:"כיסוי <b>${layername}</b> עם",chooseOverlayLayer:"בחר שכבת כיסוי",chooseOverlayMethod:"בחר צורת כיסוי",itemDescription:"שירות ישויות נוצר מתוך הרצת פתרון כיסוי שכבות.",itemTags:"תוצאת ניתוח, כיסוי שכבות, ${layername}",itemSnippet:"ניתוח שירות ישויות נוצר מתוך שכבות כיסוי",unionOutputLyrName:"איחוד של ${layername} ו- ${overlayname}",intersectOutputLyrName:"חיתוך של ${layername} ו- ${overlayname}",eraseOutputLyrName:"מחיקה של ${layername} עם ${overlayname}",overlayLayerPolyMsg:"שכבת הכיסוי צריכה להיות פוליגונלית לביצוע איחוד כיסוי",notSupportedEraseOverlayMsg:"שכבת הכיסוי הזו לא נתמכת לפעולת מחיקת כיסוי. ברירות מחדל לחיתוך כיסוי.",intersect:"חיתוך",union:"איחוד",erase:"למחוק"},bufferTool:{bufferDefine:"צור חייצים מתוך <b>${layername}</b>",outputLayerName:"חייצים של ${layername}",sizeLabel:"הכנס גודל חיץ",sizeHelp:"בכדי ליצור חייצים מרובים",typeLabel:"סוג חיץ",resultLabel:"שם שכבת התוצאה",optionsLabel:"אפשרויות",itemDescription:"שירות ישויות נוצר מתוך תוצאות הרצת חיץ על ישויות. החיץ נוצר על קלט מתוך ${layername} הגדרות החיץ לפי ${distance_field} ${units}",itemTags:"תוצאת ניתוח, חיץ , ${layername}",itemSnippet:"ניתוח שירות ישויות אותחל מתוך חיץ",overlap:"חפיפה",dissolve:"מיזוג",include:"כלול",exclude:"הרחקה",around:"מסביב",sideType:"סוג צד",endType:"סוג סוף",left:"שמאל",right:"ימין",round:"עגול",flat:"שטוח",multipleDistance:"חייצי מרחק מסוג Multiple אמור להיות",rings:"טבעות",disks:"דיסקים",areaofInputPoly:"שטח של פוליגוני קלט בפוליגוני חיץ",distanceMsg:"מותר להכניס רק ערכים נומריים",distance:"מרחק",field:"שדה"},driveTimes:{toolDefine:"צור אזורים סביב <b>${layername}</b>",outputLayerName:"סע מ ${layername} (${breakValues} ${breakUnits})",measureLabel:"מדידה:",measureHelp:"כדי להדגיש מספר אזורים עבור כל נקודה, הקלד גדלים המופרדים על ידי רווחים (2 3.5 5).",areaLabel:"שטחים מנקודות שונות:",trafficLabel:"השתמש בתנאי תנועה אופיינים עבור",resultLabel:"שם שכבת התוצאה",itemDescription:"שירות ישויות נוצר מתוך הרצת פתרון יצירת זמני נסיעה.",itemTags:"תוצאת ניתוח, זמן הנסיעה , ${layername}",itemSnippet:"ניתוח שירות ישויות נוצר מתוך יצירת זמני נסיעה",split:"פיצול",seeAvailability:"ראה זמינות.",timeOfDeparture:"זמן יציאה:",drivingDistance:"מרחק נסיעה",drivingTime:"זמן נסיעה"},extractDataTool:{layersToExtract:"שכבות לייצוא",studyArea:"שטח לימוד",outputDataFormat:"פורמט נתוני פלט",filegdb:"File Geodatabase (.zip)",shpFile:"Shape File (.zip)",lyrpkg:"Layer Package (.lpk)",selectFtrs:"בחר ישויות",clipFtrs:"גזור ישויות",sameAsDisplay:"בדומה לתצוגה",sameAsLayer:"בדומה ל- ${layername}",outputfileName:"ייצוא נתונים ${datetime}",itemDescription:"קובץ נוצר מתוך הרצת פתרון ייצוא נתונים.",itemTags:"תוצאות ניתוח, יצוא נתונים",itemSnippet:"פריט קובץ הניתוח נוצר מייצוא הנתונים",kml:"KML (.kmz או .zip)",csvPoints:"CSV (.csv או .zip)  ",linesCSVValidationMsg:"לא ניתן לייצא שכבות קווים ושטחים ל- CSV. בחר פורמט אחר או הסר מהבחירה את כל שכבות השטחים והקווים.",runAnalysisMsg:"הנתונים עוברים ייצוא ויהיו זמינים בתוכן שלי."},summarizeWithinTool:{summarizeDefine:"עבור ישויות בתוך <b>${sumWithinLayerName}</b>",outputLayerName:"סיכום ${summaryLayerName} בתוך ${sumWithinLayerName}",groupByLabel:"בחר שדה לקבץ על פיו (אופציונלי)",itemDescription:"שירות ישויות נוצר מתוך פתרון סיכום פנימי . ${summaryLayerName} סוכם בתוך ${sumWithinLayerName}",itemTags:"תוצאת ניתוח, סיכום מתוך, ${sumWithinLayerName}, ${summaryLayerName}",itemSnippet:"ניתוח שירות ישות נוצר מתוך סיכום בתוך",removeAttrStats:"הסרת סטטיסטיקה של מאפיינים",summarizeMetricPoint:"ספירת נקודות",summarizeMetricLine:"אורך קווים בתוך",summarizeMetricPoly:"סיכום שטח בתוך",addStatsLabel:"סטטיסטיקות מאפיינים",addStats:"הוסף סטטיסטיקות מ<b>${summaryLayerName}</b>",sumLabel:"סיכום"},summarizeNearbyTool:{summarizeDefine:"חפש מה נמצא ליד <b>${sumNearbyLayerName}</b>",findNearLabel:"חפש את הישויות הסמוכות ביותר על ידי",outputLayerName:"סיכום ${summaryLayerName} ב ${sumNearbyLayerName}",groupByLabel:"בחר שדה לקבץ על פיו (אופציונלי)",itemDescription:"שירות ישויות נוצר מתוך פתרון סיכום סמיכויות. ${sumNearbyLayerName} עבר סיכום סמיכויות של ${summaryLayerName}",itemTags:"תוצאת ניתוח, סיכום סמיכויות, ${sumNearbyLayerName}, ${summaryLayerName}",itemSnippet:"ניתוח שירות ישויות נוצר מתוך סיכום סמיכויות",removeAttrStats:"הסרת סטטיסטיקה של מאפיינים",summarizeMetricPoint:"ספירת נקודות",summarizeMetricLine:"סך אורך",summarizeMetricPoly:"סך כל השטח",addStatsLabel:"סטטיסטיקות מאפיינים",addStats:"הוסף סטטיסטיקות מ<b>${summaryLayerName}</b>",sumLabel:"סיכום",chooseLayer:"בחר שכבה לסיכום",straightLineDistance:"מרחק קווי"},creditEstimator:{analysisLayersLabel:"שכבות ניתוח:",totalRecordsLabel:"סך כל הרשומות:",creditsAvailLabel:"קרדיטים זמינים:",creditsReqLabel:"קרדיטים נדרשים:",ntwCreditsReqLabel:"קרדיטי רשת שנדרשים:",EnrichCreditsLabel:"קרדיטים נדרשים להעשרת נתונים:"},enrichLayerTool:{selectCountryLabel:"בחר ארץ",enrichDefine:"העשרה <b>${inputLayerName}</b>",chooseDataCollectionLabel:"הצג נתונים זמינים עבור:",defAreasLabel:"הגדר אזורים להעשרה",outputLayerName:"${layername} משופרת",itemDescription:"שירות ישויות נוצר מתוך הרצת פתרון העשרת שכבה. ${inputLayerName} עבר העשרה",itemTags:"תוצאות ניתוח, העשרת שכבה, ${inputLayerName}",itemSnippet:"שירות ישויות נוצר מניתוח שכבה מועשרת",straightLineDistance:"מרחק קווי",usCountryCode:"ארצות הברית",canadaCountryCode:"קנדה",austriaCountryCode:"אוסטריה",belgiumCountryCode:"בלגיה",brazilCountryCode:"ברזיל",denmarkCountryCode:"דנמרק",finlandCountryCode:"פינלנד",franceCountryCode:"צרפת",germanyCountryCode:"גרמניה",greeceCountryCode:"יוון",indiaCountryCode:"הודו",irelandCountryCode:"אירלנד",italyCountryCode:"איטליה",japanCountryCode:"יפן",liechtensteinCountryCode:"ליכטנשטיין",luxembourgCountryCode:"לוקסמבורג",netherlandsCountryCode:"הולנד",norwayCountryCode:"נורווגיה",portugalCountryCode:"פורטוגל",spainCountryCode:"ספרד",switzerlandCountryCode:"שווייץ",swedenCountryCode:"שבדיה",turkeyCountryCode:"טורקיה",ukCountryCode:"בריטניה",globalCode:"גלובלי",keyGlobalFacts:"נתונים עולמיים עיקריים",age:"גיל",husByOccupancy:"יחידות דיור לפי תפוסה",householdsByIncome:"משקי בית לפי הכנסה",keyUSFacts:"נתונים עיקריים בארה\"ב",policy:"נתונים בנושא מדיניות",raceAndEthnicity:"מוצא (גזע) ואתניות",wealth:"נתונים בנושא הון",keyCanFacts:"נתונים עקריים בקנדה",aTSpend:"הוצאות של אוסטריה",aTFacts:"עובדות אודות אוסטריה",bESpend:"הוצאות של בלגיה",bEFacts:"עובדות אודות בלגיה",bRSpend:"הוצאות של ברזיל",bRFacts:"נתונים על ברזיל",dKSpend:"הוצאות של דנמרק",dKFacts:"עובדות אודות דנמרק",fISpend:"הוצאות של פינלנד",fIFacts:"עובדות אודות פינלנד",fRSpend:"הוצאות של צרפת",fRFacts:"עובדות אודות צרפת",dESpend:"הוצאות של גרמניה",dEFacts:"עובדות אודות גרמניה",gRSpend:"הוצאות של יוון",gRFacts:"עובדות אודות יוון",iEFacts:"עובדות אודות אירלנד",iESpend:"הוצאות של אירלנד",iNFacts:"עובדות אודות הודו",iNSpend:"הוצאות של הודו",iTFacts:"עובדות אודות איטליה",iTSpend:"הוצאות של איטליה",keyWEFacts:"נתונים עיקריים על מערב אירופה",keyWESpend:"הוצאות עיקריות של מערב אירופה",jPFacts:"עובדות אודות יפן",jPSpend:"הוצאות של יפן",lIFacts:"עובדות אודות ליכטנשטיין",lISpend:"הוצאות של ליכטנשטיין",lUFacts:"עובדות אודות לוקסמבורג",lUSpend:"הוצאות של לוקסמבורג",nLFacts:"עובדות אודות הולנד",nLSpend:"הוצאות של הולנד",nOFacts:"עובדות אודות נורווגיה",nOSpend:"הוצאות של נורווגיה",pTFacts:"עובדות אודות פורטוגל",pTSpend:"הוצאות של פורטוגל",eSSpend:"הוצאות של ספרד",eSFacts:"עובדות אודות ספרד",sEFacts:"עובדות אודות שוודיה",sESpend:"הוצאות של שוודיה",cHFacts:"עובדות אודות שוויץ",cHSpend:"הוצאות של שוויץ",tRFacts:"עובדות אודות טורקיה",tRSpend:"הוצאות של טורקיה",gBFacts:"עובדות אודות אנגליה",gBSpend:"הוצאות של אנגליה",tapestry:"שטיח קיר",infrastructure:"תשתית",landCover:"כיסוי קרקע",landscapeFacts:"עובדות אודות תבנית נוף",publicLands:"קרקעות ציבוריות",soils:"קרקעות",waterWetlands:"שטחי ביצות"},dissolveBoundaries:{dissolveBoundariesDefine:"מיזוג <b>${layername}</b>",chooseDissolveLabel:"בחר שיטת מיזוג",overlappingAreasLabel:"שטחים חופפים או צמודים",sameAttributeAreasLabel:"שטחים עם אותו ערך בשדה",summarizeLabel:"הוסף סטטיסטיקה (אפשרי)",itemDescription:"שירות ישויות נוצר מתוך הרצת פתרון מיזוג גבולות",itemTags:"תוצאת ניתוח, מיזוג גבולות, ${layername}",itemSnippet:"ניתוח שירות ישויות נוצר מתוך מיזוג גבולות",resultLabel:"שם שכבת התוצאה",outputLayerName:"מיזוג ${layername}"},FindNearestTool:{summarizeDefine:"עבור כל מיקום ב <b>${sumNearbyLayerName}</b>, מצא את המיקומים הסמוכים ביותר.",findNearLabel:"מצא את המיקומים הסמוכים ביותר על ידי מדידת:",outputLayerName:"הקרוב ביותר ${sumNearbyLayerName} אל ${layer}",groupByLabel:"בחר שדה לקבץ על פיו (אופציונלי)",itemDescription:"שירות ישות נוצר מתוך הרצת פתרון מציאת המיקומים הסמוכים ביותר ${sumNearbyLayerName}.",itemTags:"תוצאת ניתוח, מציאת המיקום הקרוב ביותר, ${sumNearbyLayerName}, ${summaryLayerName}",itemSnippet:"ניתוח שירות ישויות נוצר מתוך מציאת המיקומים הסמוכים ביות",removeAttrStats:"הסרת סטטיסטיקה של מאפיינים",forEachLocationLabel:"עבור כל מיקום ב <b>${sumNearbyLayerName}</b>",findNearestLabel:"הגבל את מספר המיקומים הסמוכים ביותר ל:",limitSearchRangeCheck:"הגבל את טווח החיפוש ל:",addStats:"עבור כל מיקום ב <b>${summaryLayerName}</b>",chooseLayer:"בחר שכבה",findLocationsIn:"מצא את המיקומים הסמוכים ביותר ב:",outputLayersLabel:"שמות שכבת התוצאה",straightLineDistance:"מרחק קווי",resultLabel1:"שכבת המיקומים הסמוכים ביותר:",resultLabel2:"שכבת קווים מקשרים:",outputConnectingLayerName:"${layer} הסמוך ביותר ל${sumNearbyLayerName} (Lines)",chooseLayerInfoLabel:"שתי שכבות הקלט חייבות להכיל נקודות בכדי להדליק את אפשרויות מרחק נסיעה וזמן נסיעה"},mergeLayers:{mergeLayersDefine:"חיבור <b>${layername}</b> עם",outputLayerName:"Merge ${layername} ${mergelayername}",chooseMergeLayer:"בחר שכבה",mergeFieldsLabel:"שינוי שדות חיבור (אופציונלי)",itemDescription:"שירות ישויות נוצר מתוך הרצת פתרון חיבור שכבות.",itemTags:"תוצאת ניתוח, שכבות חיבור , ${layername}",itemSnippet:"ניתוח שירות ישויות נוצר מתוך חיבור שכבות",resultLabel:"שם שכבת התוצאה",rename:"שנה שם",remove:"הסר",match:"התאמה",operation:"Operation",fieldTypeMatchValidationMsg:"שדות להשוואה חייבים להיות מאותו הסוג. קיימת תמיכה להמרה בין סוגים שונים (לדוגמא,  double ל- integer, integer ל- string) למעט המרת טקסט למספר."},analysisMsgCodes:{SS_84493:"היה מיקום אחד חריג; הוא לא השתתף בחישוב ${AggregationType}.",SS_84492:"סך כל שטח הנבדק הוא ${Area}.",SS_84491:"ישנם ${NumFeatures} שטחים תקינים שהוכנסו לקבוצה.",SS_84490:"תהליך הקיבוץ הפיק ${AggNumFeatures} שטחים משוקללים.",SS_84489:"הניתוח בוצע על כל השטחים המקובצים.",SS_84485:"הועלו ${NumFeatures} ישויות תקינות.",SS_84477:"תוצרי ישויות כחולים מייצגים נקודות קרות שבהם קיבוץ ${FieldName} נמוך.",SS_84476:"תוצרי נקודות אדומים מייצגים נקודות חמות בהם קיבוץ ${FieldName} גבוה.",SS_84471:"פלט",SS_84470:"${NumSignificant} ישויות שנוצרו בעלי חשיבות סטטיסטית בהתבסס על תיקון FDR עבור מספר רב של בדיקות ותלות מרחבית.",SS_84466:"ניתוח נקודות חמות",SS_84465:"המרחק הקבוע האופטימלי התבסס על סטיית תקן אחת של הישויות מתוך הממוצע הגיאומטרי: ${DistanceInfo}.",SS_84464:"המרחק הקבוע האופטימלי התבסס על המרחק הממוצע לשכן הקרוב ביותר ${NumNeighs}: ${DistanceInfo}.",SS_84461:"המרחק הקבוע האופטימלי הנבחר התבסס על שיא הקיבוץ שנמצא ב${DistanceInfo}.",SS_84459:"טווח הניתוח",SS_84458:"הניתוח התבססעל מספר הנקודות בכל תא פוליגון.",SS_84457:"נקודות קובצו לרשת תאי פוליגון הנופלים בתוך שטח האזור הנתון.",SS_84453:"הניתוח התבצע עבור כל תאי פוליגוני הרשת בתוך גבולות שטח השכבה.",SS_84452:"הניתוח התבצע עבור כל תאי פוליגוני הרשת המכילים לפחות נקודה אחת.",SS_84451:"הניתוח התבסס על מספר הנקודות בכל תא פוליגון רשת.",SS_84450:"גודל תא פוליגון היה ${SnapInfo}.",SS_84449:"סבך רשת פוליגונים נוצר עבור קיבוץ נקודות.",SS_84446:"מאפייני ${VarName}:",SS_84444:"קיבוץ אירועים:",SS_84437:"אין מיקומים חריגים.",SS_84434:"ישנם ${NumOutliers} מיקומים חריגים; הם לא השתתפו בחישוב ${AggregationType}.",SS_84428:"הערכת מידע ראשונית.",SS_84271_0:"מינימום",SS_84272_0:"מקסימלי",SS_84261_0:"ממוצע",SS_84262_0:"סטיית תקן",SS_00002:"הדו\"ח הבא מציג את הליך העבודה הרצוי לחישוב הנקודות החמות שלך:",AO_100001:"AggregatePoints נכשל.",AO_100002:"סוג הגיאומטריה של שכבת נקודות חייב להיות נקודות.",AO_100003:"סוג הגיאומטריה של שכבת פוליגונים חייב להיות פוליגונים.",AO_100004:"השדה ${fieldName} שהוגדר לסיכום שדות לא קיים.",AO_100005:"השדה ${fieldName} שהוגדר לסיכום שדות לא מספרי.",AO_100006:"סוג הסיכום ${summary} שהוגדר לשדה ${fieldName} לא תקין.",AO_100007:"FindHotSpots נכשל.",AO_100008:"סוג הגיאומטריה של שכבת גבולות פוליגונלית חייב להיות פוליגונים.",AO_100009:"סוג הגיאומטריה של שכבת הניתוח חייב להיות נקודות או פוליגונים.",AO_100010:"סוג הגיאומטריה של שכבת קיבוץ פוליגונים חייב להיות פוליגונים.",AO_100011:"חובה לספק שדה ניתוח לשכבת ניתוח פוליגונים.",AO_100012:"CreateBuffers נכשל.",AO_100013:"CreateBuffers נכשל.",AO_100014:"SummarizeWithin נכשל.",AO_100015:"סוג הגיאומטריה של קלט שכבת סיכום חייב להיות נקודה, קו או פוליגונים.",AO_100016:"סוג הגיאומטריה של קלט שכבת סיכום חייב להיות נקודה או קו.",AO_100017:"סוג הגיאומטריה של קלט שכבת סיכום חייב להיות נקודה.",AO_100018:"יחידות סיכום ${sumUnits} לא ניתנות ליישום עבור צורה מסוג ${shapeType}",AO_100019:"נדרש לפחות אחד מהפרמטרים הבאים - סיכום גיאומטריה או סיכום שדות.",AO_468:"סוגי צורת קלט לא שווים.",AO_1156:"ערך שדה לא תאם עם סוג השדה.",AO_800:"הערך אינו חלק מ- SUM | MEAN | MIN | MAX | RANGE | STD | COUNT | FIRST | LAST.",AO_728:"השדה ${fieldName} לא קיים בטבלה.",AO_12:"השדה להוספה כבר קיים.",AO_539:"הביטוי אינו תקין.",AO_1115:"מאפיין תיאור שכבה חייב להיות מוגדר עבור ${layerName}.",AO_366:"סוג גיאומטריה לא תקין.",AO_641:"בכדי לחשב תוצאות, לכלי זה נדרש לפחות ${numFeatures} ישו(יו)ת.",AO_906:"שונות אפס: כל הערכים של שדה הקלט שלך הם ככל הנראה זהים.",AO_1534:"מספר האירועים בתוך כל אחד מהפוליגונים המקובצים שסופקו על ידי המשתמש זהים. אנא בחר סט נתוני פוליגונים אחר או שיטת קיבוץ אחרת.",AO_1535:"מספר הפוליגונים המקובצים שסופקו על ידי המשתמש חייב להיות לפחות מינימום של ${numFeatures}.",AO_1536:"ישנם מעט מידי אירועים לניתוח. לשיטת הקיבוץ הזו נדרש לפחות ${numFeatures} אירועים בכדי לחשב תוצאות.",AO_84426:"חובה לספק פוליגונים עבור אירועי קיבוץ לספירה עבור שיטת קיבוץ נתוני אירועים זו.",AO_26:"גודל החיץ הוא אפס.",AO_109:"גודל החיץ לא יכול להיות שלילי עבור נקודות וקווים.",AO_385:"האפשרות קו לא אפשרית בישויות מסוג נקודה.",AO_438:"החפיפה אינה פוליגון.",AO_100020:"EnrichLayer נכשל",AO_100021:"סוג הגיאומטריה של שכבת הקלט חייב להיות נקודה, קו או פוליגון.",AO_100022:"יחידות ${units} לא נתמכות לסוג החיץ ${bufferType}.",AO_100023:"נכשל בשיפור השכבה עבור קלט הייחוס המרחבי ${spref}.",AO_100024:"מספר הישויות ב${inputLayer} הוא אפס.",AO_100025:"SummarizeNearby נכשל.",AO_100026:"ExtractData נכשל.",AO_100027:"DissolveBoundaries נכשל.",AO_100028:"CreateDriveTimeAreas נכשל.",AO_100029:"MergeLayers נכשל.",AO_100030:"מציאת המיקום הקרוב ביותר נכשלה.",AO_100031:"מספר המיקומים הקרובים ביותר לא יכול לעלות על 100.",AO_100032:"מספר הישויות בתוך ${analysisLayer} הוא 0.",AO_100033:"מספר הישויות בתוך  ${nearLayer} הוא 0.",AO_100034:"מספר הישויות בתוך ${analysisLayer} לא יכול לעלות על 1000.",AO_100035:"מספר הישויות בתוך ${nearLayer} לא יכול לעלות על 1000.",GPEXT_001:"ערך פרמטר ${name} שגוי",GPEXT_002:"חסר פרמטר ${name}",GPEXT_003:"פרמטר ${name} שגוי: חסר ${propname}",GPEXT_004:"מאפיין פרמטר שכבה שגוי חסר ${propname}",GPEXT_005:"גישה ל-url ${url} נכשלה",GPEXT_006:"התקבלה שגיאה ${error} בגישה ל-url ${url}",GPEXT_007:"פריט ${id} שגוי",GPEXT_008:"יצירת שירות ${name} נכשלה",GPEXT_009:"הוספת שכבה ${name} לשירות ${name} נכשלה",GPEXT_010:"ניתוח JSON השכבה נכשל",GPEXT_012:"פעולה חיצונית נכשלה",GPEXT_013:"כלי זה משתמש בשירות ה-Geoenrichment. הסתכל בבקשה ב- ArcGIS Online Service Credit Estimator לפרטים נוספים.",GPEXT_014:"כלי זה משתמש בשירותי ה-Network Analysis. הסתכל בבקשה ב- ArcGIS Online Service Credit Estimator לפרטים נוספים."},geoenrichment:{data:{bufferTitle:{pointRing:{esriFeet:"טבעת של ${radius} רגל",esriKilometers:"טבעת של ${radius} ק\"\"מ",esriMeters:"טבעת של ${radius} מטרים",esriMiles:"טבעת של ${radius} מיילים"},pointDriveTime:{esriFeet:"מרחק נסיעה של ${radius} רגל",esriKilometers:"מרחק נסיעה של ${radius} ק\"\"מ",esriMeters:"מרחק נסיעה של ${radius} מטרים",esriMiles:"מרחק נסיעה של ${radius} מיילים",esriDriveTimeUnitsMinutes:"מרחק נסיעה של ${radius} דקות"},lineBuffer:{esriFeet:"חיץ של ${radius} רגל",esriKilometers:"חיץ של ${radius} ק\"\"מ",esriMeters:"חיץ של ${radius} מטרים",esriMiles:"חיץ של ${radius} מיילים"},polygon:"שטח זה",stdGeo:"חיתוך ישות ${level}"}},dijit:{AgePyramid:{maxLabel:"הקבוצה הגדולה ביותר:",minLabel:"הקבוצה הקטנה ביותר:",compLabel:"נקודות מציגות השוואה ל",menLabel:"גברים",womenLabel:"נשים"},BaseWidget:{sortLabel:"מיון",unsortLabel:"איתחול"},BufferOptions:{studyArea:"הצג נתונים עבור:",ring:"טבעת",driveTime:"זמני נסיעה",driveDistance:"מרחק נסיעה",radius:"רדיוס:",units:{esriDriveTimeUnitsMinutes:"דקות",esriMiles:"מיילים",esriKilometers:"קילומטרים",esriFeet:"רגל",esriMeters:"מטרים"}},DataCollectionsPage:{loading:"טוען...",chooseCountry:"הצג נתונים זמינים עבור:",global:"גלובלי",chooseDataCollection:"בחר אוסף נתונים:",back:"חזור",next:"הבא"},EnrichOptionsPage:{bufferRing:"עיגול של מייל אחד סביב מיקומים",bufferPolygon:"פוליגוני קלט (חיץ לא זמין)",selectedVariables:"משתנים נבחרים:",customize:"התאם",bufferOptions:"הצג נתונים עבור:",edit:"עריכה",totalVars:"סך כל המשתנים (${count})",overwriteExisting:"ערכי עמודה קיימים יידרסו",varName:"שם משתנה",column:"עמודה",newColumn:"<צור חדש>",noColumn:"<None>",back:"חזור",finish:"הוסף נתונים למערכת"},InfographicsMainPage:{mainTitle:"הגדרת תצורת אינפורגרפיקות",loading:"טוען...",chooseCountry:"הצג נתונים זמינים עבור: ",chooseDataCollection:"בחר מתוך אוספי נתונים פופולריים: ",chooseTheme:"בחר סכמת צבעים:",dark:"כהה",light:"בהיר",addVariables:"הוסף עוד משתנים יחידים",ok:"אישור",cancel:"ביטול"},OneVar:{greater:" יותר מזה של",lesser:" פחות מזה של",equal:"שווה לזה של"},OneVarMultiComparison:{subtitleSite2:"עבור שטח זה ",is:" הוא ",lesser:"שהוא פחות מ - ",greater:"שהוא יותר מ - ",equal:"שהוא זהה ל - ",average:" ממוצע",area:"שטח",val:"ערך"},RelatedVariables:{highLabel:"הקבוצה הגדולה ביותר: ",lowLabel:"הקבוצה הקטנה ביותר: ",indicator:"אינדיקטור",val:"ערך",difference:"שונות",chartLabel:"עמודות מציגות סטייה מ -"},Tapestry:{hhTypeLabel:"סוג משק בית:",medianAgeLabel:"גיל חציוני:",incomeLabel:"הכנסה:",employmentLabel:"תעסוקה",educationLabel:"השכלה:",residentialLabel:"מגורים",raceEthnicityLabel:"מוצא / עדתיות",hhLabel:"משקי בית",adultsLabel:"בוגרים"},VariablesPage:{back:"חזור",ok:"אישור"}}}}));