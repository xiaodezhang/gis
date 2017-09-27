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
define("esri/nls/sv/jsapi",({io:{proxyNotSet:"esri.config.defaults.io.proxyUrl är inte inställd."},map:{deprecateReorderLayerString:"Map.reorderLayer(/*String*/ id, /*Number*/ index) stöds inte längre. Använd Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",deprecateShiftDblClickZoom:"Map.(enable/disable)ShiftDoubleClickZoom stöds inte längre. Zoomning med skift+dubbelklick stöds inte."},geometry:{deprecateToScreenPoint:"esri.geometry.toScreenPoint stöds inte längre. Använd esri.geometry.toScreenGeometry.",deprecateToMapPoint:"esri.geometry.toMapPoint stöds inte längre. Använd esri.geometry.toMapGeometry."},layers:{tiled:{tileError:"Det gick inte att ladda rutan"},dynamic:{imageError:"Det gick inte att ladda bilden"},graphics:{drawingError:"Det gick inte att rita diagrammet "},agstiled:{deprecateRoundrobin:"Konstrueraralternativet roundrobin är inaktuellt. Använd alternativet tileServers."},imageParameters:{deprecateBBox:"Egenskapen bbox är inaktuell. Använd egenskapen extent."},FeatureLayer:{noOIDField:"objectIdField är inte angivet [url: ${url}]",fieldNotFound:"det går inte att hitta fältet ${field} i fields-informationen för lagret [url: ${url}]",noGeometryField:"det går inte att hitta ett fält av typen esriFieldTypeGeometry i fields-informationen för lagret. Om du använder ett karttjänstlager har geoobjekten inte geometri [url: ${url}]",invalidParams:"frågan innehåller en eller flera parametrar som inte stöds",updateError:"ett fel uppstod när lagret uppdaterades",createUserSeconds:"Skapades av ${userId} för några sekunder sedan",createUserMinute:"Skapades av ${userId} för någon minut sedan",editUserSeconds:"Redigerades av ${userId} för några sekunder sedan",editUserMinute:"Redigerades av ${userId} för någon minut sedan",createSeconds:"Skapades för några sekunder sedan",createMinute:"Skapades för någon minut sedan",editSeconds:"Redigerades för några sekunder sedan",editMinute:"Redigerades för någon minut sedan",createUserMinutes:"Skapades av ${userId} för ${minutes} minuter sedan",createUserHour:"Skapades av ${userId} för en timme sedan",createUserHours:"Skapades av ${userId} för ${hours} timmar sedan",createUserWeekDay:"Skapades av ${userId} på ${weekDay} kl. ${formattedTime}",createUserFull:"Skapades av ${userId} den ${formattedDate} kl. ${formattedTime}",editUserMinutes:"Redigerades av ${userId} för ${minutes} minuter sedan",editUserHour:"Redigerades av ${userId} för en timme sedan",editUserHours:"Redigerades av ${userId} för ${hours} timmar sedan",editUserWeekDay:"Redigerades av ${userId} på ${weekDay} kl. ${formattedTime}",editUserFull:"Redigerades av ${userId} den ${formattedDate} kl. ${formattedTime}",createUser:"Skapades av ${userId}",editUser:"Redigerades av ${userId}",createMinutes:"Skapades för ${minutes} minuter sedan",createHour:"Skapades för en timme sedan",createHours:"Skapades för ${hours} timmar sedan",createWeekDay:"Skapades på ${weekDay} kl. ${formattedTime}",createFull:"Skapades den ${formattedDate} kl. ${formattedTime}",editMinutes:"Redigerades för ${minutes} minuter sedan",editHour:"Redigerades för en timme sedan",editHours:"Redigerades för ${hours} timmar sedan",editWeekDay:"Redigerades på ${weekDay} kl. ${formattedTime}",editFull:"Redigerades den ${formattedDate} kl. ${formattedTime}"}},tasks:{gp:{gpDataTypeNotHandled:"GP-datatyp hanteras inte."},na:{route:{routeNameNotSpecified:"RouteName har inte angetts för minst 1 stopp i stoppens FeatureSet."}},query:{invalid:"Det går inte att köra frågan. Kontrollera parametrarna."}},toolbars:{draw:{convertAntiClockwisePolygon:"Polygoner som ritas i moturs riktning vänds till medurs.",addPoint:"Klicka om du vill lägga till en punkt",addShape:"Klicka om du vill lägga till en form eller tryck ner för att starta och släpp för att avsluta",addMultipoint:"Klicka om du vill börja lägga till punkter",freehand:"Tryck ned för att starta och släpp för att avsluta",start:"Klicka för att börja rita",resume:"Klicka för att fortsätta rita",complete:"Dubbelklicka för att slutföra",finish:"Dubbelklicka för att avsluta",invalidType:"Geometritypen stöds inte"},edit:{invalidType:"Det går inte att aktivera verktyget. Kontrollera om verktyget är giltigt för den givna geometritypen.",deleteLabel:"Ta bort"}},virtualearth:{vetiledlayer:{bingMapsKeyNotSpecified:"BingMapsKey måste anges."},vegeocode:{bingMapsKeyNotSpecified:"BingMapsKey måste anges.",requestQueued:"Servertoken hämtades inte. Begäran läggs i kö för att köras efter att servertoken har hämtats."}},widgets:{attributeInspector:{NLS_first:"Första",NLS_previous:"Föregående",NLS_next:"Nästa",NLS_last:"Sista",NLS_deleteFeature:"Ta bort",NLS_title:"Redigera attribut",NLS_errorInvalid:"Ogiltig",NLS_validationInt:"Värdet måste vara ett heltal.",NLS_validationFlt:"Värdet måste vara ett flyttal.",NLS_of:"av",NLS_noFeaturesSelected:"Inga geoobjekt valda"},overviewMap:{NLS_drag:"Dra för att ändra kartutbredningen",NLS_show:"Visa kartöversikt",NLS_hide:"Dölj kartöversikt",NLS_maximize:"Maximera",NLS_restore:"Återställ",NLS_noMap:"map hittades inte i indataparametrarna",NLS_noLayer:"huvudkartan har inget baslager",NLS_invalidSR:"den geografiska referensen för det givna lagret är inte kompatibel med huvudkartan",NLS_invalidType:"Lagertypen stöds inte. Giltiga typer är TiledMapServiceLayer och DynamicMapServiceLayer"},timeSlider:{NLS_first:"Första",NLS_previous:"Föregående",NLS_next:"Nästa",NLS_play:"Spela upp/pausa",NLS_invalidTimeExtent:"TimeExtent är inte angiven, eller i felaktigt format."},attachmentEditor:{NLS_attachments:"Bilagor:",NLS_add:"Lägg till",NLS_none:"Ingen",NLS_error:"Ett fel uppstod.",NLS_fileNotSupported:"Den här filtypen stöds inte."},directions:{error:{notEnoughStops:"Ange en startpunkt och en destination.",unknownStop:"Det gick inte att hitta platsen <name>.",routeTask:"Det gick inte att skapa en vägbeskrivning till dessa adresser.",locator:"Det gick inte att hitta platsen.",invalidStopType:"Ogiltig stopptyp.",locatorUndefined:"Det gick inte att vända på geokoden. Lokaliserar-URL:en har inte angetts.",noAddresses:"Inga adresser returnerades.",noStops:"Inga stopp som ska läggas till har angetts.",maximumStops:"Det maximala antalet stopp har uppnåtts"},time:{minute:"minut",minutes:"minuter",hour:"timme",hours:"timmar"},units:{KILOMETERS:{name:"kilometer",abbr:"km."},METERS:{name:"meter",abbr:"m."},MILES:{name:"engelska mil",abbr:"mi."},NAUTICAL_MILES:{name:"nautiska mil",abbr:"nm"}},showOptions:"Visa alternativ",hideOptions:"Dölj alternativ",findOptimalOrder:"Optimera ordning",useTraffic:"Använd trafik",returnToStart:"Återvänd till starten",addDestination:"Lägg till destination",viewFullRoute:"Zooma till hel rutt",getDirections:"Hämta vägbeskrivningar",clearDirections:"Rensa",reverseDirections:"Omvända vägbeskrivningar",print:"Skriv ut",printNotes:"Ange anteckningar här",printDisclaimer:"Vägbeskrivningar är endast avsedda som hjälp vid ruttplanering, och de omfattas av <a href='http://www.esri.com/legal/software-license' target='_blank'>Esris användarvillkor</a>. Vägförhållandena kan variera och detta kan påverka noggrannheten i din vägbeskrivning. Ta alltid hänsyn till detta tillsammans med skyltning och juridiska begränsningar. Du står själv för hela risken vid användning av produkten."},editor:{tools:{NLS_attributesLbl:"Attribut",NLS_cutLbl:"Beskär",NLS_deleteLbl:"Ta bort",NLS_extentLbl:"Utbredning",NLS_freehandPolygonLbl:"Frihandspolygon",NLS_freehandPolylineLbl:"Frihandspolylinje",NLS_pointLbl:"Punkt",NLS_polygonLbl:"Polygon",NLS_polylineLbl:"Polylinje",NLS_reshapeLbl:"Omforma",NLS_selectionNewLbl:"Nytt urval",NLS_selectionAddLbl:"Lägg till i urval",NLS_selectionClearLbl:"Rensa urval",NLS_selectionRemoveLbl:"Ta bort från urval",NLS_selectionUnionLbl:"Slå samman",NLS_autoCompleteLbl:"Slutför automatiskt",NLS_unionLbl:"Slå samman",NLS_rectangleLbl:"Rektangel",NLS_circleLbl:"Cirkel",NLS_ellipseLbl:"Ellips",NLS_triangleLbl:"Triangel",NLS_arrowLbl:"Pil",NLS_arrowLeftLbl:"Vänsterpil",NLS_arrowUpLbl:"Uppåtpil",NLS_arrowDownLbl:"Nedåtpil",NLS_arrowRightLbl:"Högerpil",NLS_undoLbl:"Ångra",NLS_redoLbl:"Upprepa"}},Geocoder:{main:{clearButtonTitle:"Rensa sökning",searchButtonTitle:"Sök",geocoderMenuButtonTitle:"Ändra geocoder",geocoderMenuHeader:"Välj geocoder",geocoderMenuCloseTitle:"Stäng meny",untitledGeocoder:"Namnlös geocoder"},esriGeocoderName:"Esri World Geocoder"},HistogramTimeSlider:{NLS_range:"Intervall",NLS_cumulative:"Kumulativ",NLS_play:"Spela upp/pausa",NLS_invalidTimeExtent:"TimeExtent är inte angiven eller i felaktigt format.",NLS_overview:"ÖVERSIKT",NLS_fullRange:"helt intervall"},legend:{NLS_points:"Punkter",NLS_lines:"Linjer",NLS_polygons:"Polygoner",NLS_creatingLegend:"Teckenförklaring skapas",NLS_noLegend:"Ingen teckenförklaring"},popup:{NLS_moreInfo:"Mer information",NLS_searching:"Söker",NLS_prevFeature:"Föregående geoobjekt",NLS_nextFeature:"Nästa geoobjekt",NLS_close:"Stäng",NLS_prevMedia:"Föregående media",NLS_nextMedia:"Nästa media",NLS_noInfo:"Det finns ingen information tillgänglig",NLS_noAttach:"Inga bilagor hittades",NLS_maximize:"Maximera",NLS_restore:"Återställ",NLS_zoomTo:"Zooma till",NLS_pagingInfo:"(${index} av ${total})",NLS_attach:"Bilagor"},measurement:{NLS_distance:"Avstånd",NLS_area:"Area",NLS_location:"Plats",NLS_resultLabel:"Mätningsresultat",NLS_length_miles:"Engelska mil",NLS_length_kilometers:"Kilometer",NLS_length_feet:"Fot",NLS_length_meters:"Meter",NLS_length_yards:"Yard",NLS_area_acres:"Tunnland",NLS_area_sq_miles:"Engelska kvadratmil",NLS_area_sq_kilometers:"Kvadratkilometer",NLS_area_hectares:"Hektar",NLS_area_sq_yards:"Kvadratyard",NLS_area_sq_feet:"Kvadratfot",NLS_area_sq_meters:"Kvadratmeter",NLS_deg_min_sec:"DMS",NLS_decimal_degrees:"Grader",NLS_map_coordinate:"Kartkoordinat",NLS_longitude:"Longitud",NLS_latitude:"Latitud"},bookmarks:{NLS_add_bookmark:"Lägg till bokmärke",NLS_new_bookmark:"Namnlös",NLS_bookmark_edit:"Redigera",NLS_bookmark_remove:"Ta bort"},print:{NLS_print:"Skriv ut",NLS_printing:"Skriver ut",NLS_printout:"Utskrift"},templatePicker:{creationDisabled:"Skapande av geoobjekt är inaktiverat för alla lager.",loading:"Läser in..."},renderingRule:{rendererLabelTitle:"Renderare",bandCombinationLabelTitle:"RGB-sammansättning",userDefinedRendererTitle:"Användardefinierad renderare",userDefinedRendererDesc:"En användardefinierad renderare. Använd olika band för indata till Röda, Gröna och Blå kanaler (endast flerbandstjänster). Använd olika radiometriska förbättringsalgoritmer så att bilden ser bättre ut.",imageEnhancementLabelTitle:"Bildförbättring",stretchDescLabel:"Använd kontrastförbättringar för att förbättra bildvisningen.",stretchMethodLabel:"Sträckningstyp:",stretchMethodNoneDesc:"Inga ytterligare förbättringar används.",stretchMethodMinMaxDesc:"Sträck till hela intervallet med pixelvärden.",numStdDevLabelTitle:"Trimma extrema pixelvärden bortom",numStdDevEndLabelTitle:"standardavvikelser.",draLabelTitle:"Dynamisk intervalljustering",minMaxDescLabelTitle:"Trimma extrema pixelvärden",minPercentLabelTitle:"Uteslut nederst:",maxPercentLabelTitle:"Uteslut överst:",percentLabelTitle:"%",gammaLabelTitle:"Gamma:",bandNamesRequestMsg:"Begär bandinformation...",noneStretchAlias:"Ingen",minMaxStretchAlias:"Minimum och max",stdDevStretchAlias:"Standardavvikelse",percentClipStretchAlias:"Procentklippning",minGammaLabel:"0.1",maxGammaLabel:"10"},mosaicRule:{mosaicMethodLabel:"Prioritera bilder efter:",orderFieldLabel:"Attribut:",orderValueLabel:"Värde för högsta prioritet:",lockRasterIdLabel:"Bild-ID:",mosaicOperatorLabel:"Lösning för överlappande pixlar:",descendingLabel:"Vänd på ordningen",queryLabel:"Filtrera bilder:",queryFieldLabel:"Fält:",queryOperatorLabel:"Operator:",queryValueLabel:"Värde:",selectAllLabel:"Markera alla",mosaicruleNotApplicable:"Bildlagret innehåller endast en bild och det är därför inte möjligt att ändra bildvisningsordningen.",lockRasterRequestMsg:"Söker...",lockRasterRequestDoneMsg:"Klar...",lockRasterRequestErrorMsg:"Fel vid sökning...",lockRasterRequestNoRasterMsg:"Inga raster hittades...",refreshLockRasterIdsLabel:"Uppdatera",orderFieldNotFound:"Inte tillgänglig",byAttributeAlias:"Ett attribut",centerAlias:"Bildens mitt närmast mitten av vyn",lockRasterAlias:"En bildlista",nadirAlias:"Sensorplats närmast mitten av vyn",northWestAlias:"Fast ordningsföljd med den nordvästligaste överst",seamlineAlias:"Markerade sömmar",viewPointAlias:"Visningspunkt",noneAlias:"Endast skala",firstAlias:"Endast högsta prioritet",lastAlias:"Endast lägsta prioritet",minAlias:"Minsta antal pixelvärden",maxAlias:"Största antal pixelvärden",averageAlias:"Genomsnitt av pixelvärden",blendAlias:"Blanda pixelvärden"}},arcgis:{utils:{baseLayerError:"Det går inte att ladda baskartslagret",geometryServiceError:"Ange en geometritjänst för att öppna webbkarta.",showing:"Visar ${fieldAlias}"}},identity:{lblItem:"objekt",title:"Logga in",info:"Logga in för att komma åt objektet på ${server} ${resource}",lblUser:"Användarnamn:",lblPwd:"Lösenord:",lblOk:"OK",lblSigning:"Loggar in...",lblCancel:"Avbryt",errorMsg:"Ogiltigt användarnamn/lösenord. Försök igen.",invalidUser:"Det användarnamn eller lösenord du har angett är felaktigt.",forbidden:"Användarnamnet och lösenordet är giltiga, men du har inte behörighet till den här resursen.",noAuthService:"Det gick inte att komma åt autentiseringstjänsten."},common:{cancel:"Avbryt",ok:"OK",create:"Skapa",close:"Stäng",done:"Klar",apply:"Använd",remove:"Ta bort",open:"Öppna",edit:"Redigera",share:"Dela",save:"Spara",help:"Hjälp",warning:"Varning",deleteLabel:"Ta bort",titleLabel:"Titel:",newLabel:"Ny",arcgis:"ArcGIS",previous:"Föregående",submit:"Skicka",next:"Nästa",yesLabel:"Ja",noLabel:"Nej",errorTitle:"Fel",upload:"Överför",sum:"Summa",minimum:"Minimum",maximum:"Maximum",average:"Genomsnitt",standardDev:"Stdavvikelse",statistic:"Statistik",attribute:"Fält",selectAttribute:"Välj attribut",runAnalysis:"Kör analys",oneLabel:"1.",twoLabel:"2.",threeLabel:"3.",fourLabel:"4.",fiveLabel:"5.",outputnameMissingMsg:"Ett utdatanamn krävs",miles:"Engelska mil",kilometers:"Kilometer",meters:"Meter",feet:"Fot",degree:"Decimalgrader",inches:"Tum",nautMiles:"Nautiska mil",pointsUnit:"Punkter",yards:"Yard",comingSoonLabel:"Kommer snart!",sqMiles:"Engelska kvadratmil",sqKm:"Kvadratkilometer",sqMeters:"Kvadratmeter",hectares:"Hektar",acres:"Tunnland",seconds:"Sekunder",minutes:"Minuter",hours:"Timmar",today:"I dag",monday:"måndag",tuesday:"tisdag",wednesday:"onsdag",thursday:"torsdag",friday:"fredag",saturday:"lördag",sunday:"söndag",chooseSummarizeLabel:"Välj lager som ska summeras",creditTitle:"Rapport över kreditutnyttjande",analysisLayers:"Analyslager:",showCredits:"Visa krediter",learnMore:"Läs mer",hoursSmall:"h",minutesSmall:"min",secondsSmall:"sek"},analysisTools:{performAnalysis:"Utför analys",summarizeData:"Summera data",findLocations:"Hitta platser",aggregateTool:"Förena punkter",bufferTool:"Buffertdata",dataEnrichment:"Data Enrichment",analyzePatterns:"Analysera mönster",useProximity:"Använd närhet",manageData:"Hantera data",aggregateToolName:"Förena punkter",bufferToolName:"Skapa buffertar",aggregatePoints:"Förena punkter",summarizeWithin:"Summera inom",summarizeNearby:"Summera nära",enrichLayer:"Berika lager",findNearest:"Hitta närmaste",findHotSpots:"Hitta hotspots",createBuffers:"Skapa buffertar",dissolveBoundaries:"Lös upp gränser",mergeLayers:"Sammanfoga lager",extractData:"Extrahera data",overlayLayers:"Överlagra lager",fieldCalculator:"Fältkalkylator",createDriveTimeAreas:"Skapa körtidsområden",deriveNewLocations:"Härled nya platser",findExistingLocations:"Hitta befintliga platser",exploreCorrelations:"Utforska korrelationer",findRoute:"Hitta rutt",generateFleetPlan:"Generera ruttplan för flera fordon",createDensitySurface:"Skapa täthetsyta",createInterpolatedSurface:"Skapa yta",orgUsrMsg:"Du måste vara medlem i en organisation för att köra den här tjänsten.",pubRoleMsg:"Ditt onlinekonto har inte tilldelats rollen Utgivare.",servNameExists:"Det finns redan en publicerad tjänst med det här namnet inom organisationen. Tjänstnamn måste vara unika i hela organisationen. Använd ett annat namn.",outputLayerLabel:"Resultatlagrets namn",outputFileName:"Filnamn för utdata",emptyResultInfoMsg:"Din analys returnerade inte några geoobjekt. Inget lager kommer att skapas.",invalidServiceName:"Resultatlagrets namn innehåller ett eller flera ogiltiga tecken (<, >, #, %, :, \", ?, &, +, / eller \\).",invalidServiceNameLength:"Resultatlagrets namn ska vara kortare än 98 tecken.",requiredValue:"Det här värdet är obligatoriskt.",saveResultIn:"Spara resultat i",useMapExtent:"Använd aktuell kartutbredning"},aggregatePointsTool:{aggregateDefine:"Antal <b>${layername}</b> inom",outputLayerName:"Aggregering av ${pointlayername} till ${polygonlayername}",groupByLabel:"Välj ett fält att gruppera efter (valfritt)",itemDescription:"Geoobjektstjänsten har genererats från att köra lösningarna Förena punkterna. Punkter från ${pointlayername} förenades till ${polygonlayername}",itemTags:"Analysresultat, Förena punkter, ${pointlayername}, ${polygonlayername}",itemSnippet:"Analysgeoobjektstjänst genererad från förenade punkter",removeAttrStats:"Ta bort attributstatistik",keepPolygonLabel:"Behåll områden utan punkter",addStatsLabel:"Lägg till statistik (valfritt)",chooseAreaLabel:"Välj yta"},findHotSpotsTool:{hotspotsPolyDefine:"Analysera <b>${layername}</b> för att hitta statistiskt signifikanta hotspots och coldspots av ",hotspotsPointDefine:"Analysera <b>${layername}</b> för att hitta statistiskt signifikanta hotspots och coldspots ",fieldLabel:"med eller utan ett analysfält",noAnalysisField:"Inget analysfält",hotspots:"Hotspots",outputLayerName:"Hotspots ${layername}",Options:"Alternativ",defineBoundingLabel:"Definiera var incidenter är möjliga",provideAggLabel:"Ange aggregeringsområden för att summera incidenter",defaultBoundingOption:"Välj begränsningsytor",defaultAggregationOption:"Välj aggregeringsområden",itemDescription:"Geoobjektstjänst genererad från att köra lösningen Hitta hotspots.",itemTags:"Analysresultat, Hotspots, ${layername}, ${fieldname}",itemSnippet:"Analysgeoobjektstjänst genererad från Hitta hotspots",chooseAttributeLabel:"Välj ett analysfält",blayerName:"Dragna gränser"},overlayLayersTool:{overlayDefine:"Överlagra <b>${layername}</b> med",chooseOverlayLayer:"Välj överlagringslager",chooseOverlayMethod:"Välj överlagringsmetod",itemDescription:"En geoobjektstjänst har genererats vid körning av lösningen för överlagringslager.",itemTags:"Analysresultat, Överlagra lager, ${layername}",itemSnippet:"En analysgeoobjektstjänst har genererats från överlagringslager",unionOutputLyrName:"Sammanslagning av ${layername} och ${overlayname}",intersectOutputLyrName:"Skärning av ${layername} och ${overlayname}",eraseOutputLyrName:"Radera ${layername} med ${overlayname}",overlayLayerPolyMsg:"Överlagringslagret ska vara ett polygonlager för sammanslagningsöverlagringen",notSupportedEraseOverlayMsg:"Detta överlagringslager stöds inte för raderingsöverlagringar. Övergår som standard till skärningsöverlagring.",intersect:"Korsa",union:"Slå samman",erase:"Radera"},bufferTool:{bufferDefine:"Skapa buffertar av <b>${layername}</b>",outputLayerName:"Buffert av ${layername}",sizeLabel:"Ange buffertstorlek",sizeHelp:"Om du vill skapa flera buffertar anger du avstånd avgränsade med blanksteg (2 3 5).",typeLabel:"Bufferttyp",resultLabel:"Resultatlagrets namn",optionsLabel:"Alternativ",itemDescription:"En geoobjektstjänst har genererats vid körning av lösningen för buffertegenskaper. Indata från ${layername} buffrades av ${distance_field} ${units}",itemTags:"Analysresultat, Buffert, ${layername}",itemSnippet:"En analysgeoobjektstjänst har genererats från bufferten",overlap:"Överlappa",dissolve:"Lös upp",include:"Ta med",exclude:"Uteslut",around:"Omkring",sideType:"Sidotyp",endType:"Sluttyp",left:"Vänster",right:"Höger",round:"Rund",flat:"Platt",multipleDistance:"Flera avståndsbuffertar bör vara",rings:"Ringar",disks:"Skivor",areaofInputPoly:"Indatapolygonernas area i buffertpolygonerna",distanceMsg:"Endast numeriska värden är tillåtna",distance:"Avstånd",field:"Fält"},driveTimes:{toolDefine:"Skapa områden runt <b>${layername}</b>",outputLayerName:"Kör från ${layername} (${breakValues} ${breakUnits})",measureLabel:"Mått:",measureHelp:"Om du vill mata ut flera områden för varje punkt, anger du storlekarna avgränsade med blanksteg (2 3.5 5).",areaLabel:"Områden från olika punkter:",trafficLabel:"Använd typiska vägförhållanden för",resultLabel:"Resultatlagrets namn",itemDescription:"En geoobjektstjänst har genererats vid körning av lösningen för skapande av körtider.",itemTags:"Analysresultat, Körtider, ${layername}",itemSnippet:"En analysgeoobjektstjänst har genererats vid skapande av körtider",split:"Dela",seeAvailability:"Se tillgänglighet.",timeOfDeparture:"Avresetid:",drivingDistance:"Köravstånd",drivingTime:"Körtid"},extractDataTool:{layersToExtract:"Lager att extrahera",studyArea:"Undersökningsområde",outputDataFormat:"Utdataformat",filegdb:"Filbaserad geodatabas (.zip)",shpFile:"Shapefil (.zip)",lyrpkg:"Lagerpaket (.lpk)",selectFtrs:"Välj objekt",clipFtrs:"Klipp geoobjekt",sameAsDisplay:"Samma som visningsfönstret",sameAsLayer:"Samma som ${layername}",outputfileName:"Extrahera data ${datetime}",itemDescription:"Filen genererades vid körning av lösningen för dataextrahering.",itemTags:"Analysresultat, Extrahera data",itemSnippet:"Ett analysfilobjekt har genererats vid dataextraheringen",kml:"KML (.kmz eller .zip)",csvPoints:"CSV (.csv eller .zip)  ",linesCSVValidationMsg:"Linje- och områdeslager går inte att extrahera till CSV. Välj ett annat format eller avmarkera alla linje- och områdeslager.",runAnalysisMsg:"Data extraheras och kommer att finnas tillgänglig i MITT INNEHÅLL."},summarizeWithinTool:{summarizeDefine:"För geoobjekt inom <b>${sumWithinLayerName}</b>",outputLayerName:"Summera ${summaryLayerName} inom ${sumWithinLayerName}",groupByLabel:"Välj ett fält att gruppera efter (valfritt)",itemDescription:"En geoobjektstjänst har genererats vid körning av lösningen Summera inom. ${summaryLayerName} summerades inom ${sumWithinLayerName}",itemTags:"Analysresultat, Summera inom, ${sumWithinLayerName}, ${summaryLayerName}",itemSnippet:"En analysgeoobjektstjänst har genererats från Summera inom",removeAttrStats:"Ta bort attributstatistik",summarizeMetricPoint:"Antal punkter",summarizeMetricLine:"Linjernas längd i",summarizeMetricPoly:"Summera yta i",addStatsLabel:"Attributstatistik",addStats:"Lägg till statistik från <b>${summaryLayerName}</b>",sumLabel:"Summera"},summarizeNearbyTool:{summarizeDefine:"Hitta vad som finns i närheten av <b>${sumNearbyLayerName}</b>",findNearLabel:"Sök efter närmaste geoobjekt med en",outputLayerName:"Summera ${summaryLayerName} i ${sumNearbyLayerName}",groupByLabel:"Välj ett fält att gruppera efter (valfritt)",itemDescription:"En geoobjektstjänst har genererats vid körning av lösningen Summera nära. ${sumNearbyLayerName} summerades i närheten av ${summaryLayerName}",itemTags:"Analysresultat, Summera nära, ${sumNearbyLayerName}, ${summaryLayerName}",itemSnippet:"En analysgeoobjektstjänst har genererats från Summera nära",removeAttrStats:"Ta bort attributstatistik",summarizeMetricPoint:"Antal punkter",summarizeMetricLine:"Totallängd",summarizeMetricPoly:"Totalyta",addStatsLabel:"Attributstatistik",addStats:"Lägg till statistik från <b>${summaryLayerName}</b>",sumLabel:"Summera",chooseLayer:"Välj lager som ska summeras",straightLineDistance:"Linjeavstånd"},creditEstimator:{analysisLayersLabel:"Analyslager:",totalRecordsLabel:"Totalt antal poster:",creditsAvailLabel:"Tillgängliga krediter:",creditsReqLabel:"Kreditkostnad:",ntwCreditsReqLabel:"Kostnad nätverkskrediter:",EnrichCreditsLabel:"Kostnad berikade krediter"},enrichLayerTool:{selectCountryLabel:"Välj land",enrichDefine:"Berika <b>${inputLayerName}</b>",chooseDataCollectionLabel:"Visa tillgängliga data för:",defAreasLabel:"Definiera områden att berika",outputLayerName:"Berikat ${layername}",itemDescription:"Geoobjektstjänsten genererades av lösningen Berika lager. ${inputLayerName} berikades",itemTags:"Analysresultat, Berika lager, ${inputLayerName}",itemSnippet:"Analysgeoobjektstjänsten genererades av Berika lager",straightLineDistance:"Linjeavstånd",usCountryCode:"USA",canadaCountryCode:"Kanada",austriaCountryCode:"Österrike",belgiumCountryCode:"Belgien",brazilCountryCode:"Brasilien",denmarkCountryCode:"Danmark",finlandCountryCode:"Finland",franceCountryCode:"Frankrike",germanyCountryCode:"Tyskland",greeceCountryCode:"Grekland",indiaCountryCode:"Indien",irelandCountryCode:"Irland",italyCountryCode:"Italien",japanCountryCode:"Japan",liechtensteinCountryCode:"Liechtenstein",luxembourgCountryCode:"Luxemburg",netherlandsCountryCode:"Nederländerna",norwayCountryCode:"Norge",portugalCountryCode:"Portugal",spainCountryCode:"Spanien",switzerlandCountryCode:"Schweiz",swedenCountryCode:"Sverige",turkeyCountryCode:"Turkiet",ukCountryCode:"Storbritannien",globalCode:"Global",keyGlobalFacts:"Viktiga globala fakta",age:"Ålder",husByOccupancy:"Bostadsenheter efter beläggning",householdsByIncome:"Hushåll efter inkomst",keyUSFacts:"Viktiga fakta om USA",policy:"Politiska fakta",raceAndEthnicity:"Etniciteter",wealth:"Fakta om välstånd",keyCanFacts:"Viktiga fakta om Kanada",aTSpend:"Österrikes utgifter",aTFacts:"Fakta om Österrike",bESpend:"Belgiens utgifter",bEFacts:"Fakta om Belgien",bRSpend:"Brasiliens utgifter",bRFacts:"Fakta om Brasilien",dKSpend:"Danmarks utgifter",dKFacts:"Fakta om Danmark",fISpend:"Finlands utgifter",fIFacts:"Fakta om Finland",fRSpend:"Frankrikes utgifter",fRFacts:"Fakta om Frankrike",dESpend:"Tysklands utgifter",dEFacts:"Fakta om Tyskland",gRSpend:"Greklands utgifter",gRFacts:"Fakta om Grekland",iEFacts:"Fakta om Irland",iESpend:"Irlands utgifter",iNFacts:"Fakta om Indien",iNSpend:"Indiens utgifter",iTFacts:"Fakta om Italien",iTSpend:"Italiens utgifter",keyWEFacts:"Viktiga fakta om Västeuropa",keyWESpend:"Huvudsakliga västeuropeiska utgifter",jPFacts:"Fakta om Japan",jPSpend:"Japans utgifter",lIFacts:"Fakta om Liechtenstein",lISpend:"Liechtensteins utgifter",lUFacts:"Fakta om Luxemburg",lUSpend:"Luxemburgs utgifter",nLFacts:"Fakta om Nederländerna",nLSpend:"Nederländernas utgifter",nOFacts:"Fakta om Norge",nOSpend:"Norges utgifter",pTFacts:"Fakta om Portugal",pTSpend:"Portugals utgifter",eSSpend:"Spaniens utgifter",eSFacts:"Fakta om Spanien",sEFacts:"Fakta om Sverige",sESpend:"Sveriges utgifter",cHFacts:"Fakta om Schweiz",cHSpend:"Schweiz utgifter",tRFacts:"Fakta om Turkiet",tRSpend:"Turkiets utgifter",gBFacts:"Fakta om Storbritannien",gBSpend:"Storbritanniens utgifter",tapestry:"Gobeläng",infrastructure:"Infrastruktur",landCover:"Marktäckning",landscapeFacts:"Landskapsfakta",publicLands:"Offentlig mark",soils:"Mark",waterWetlands:"Våtmarker"},dissolveBoundaries:{dissolveBoundariesDefine:"Lös upp <b>${layername}</b>",chooseDissolveLabel:"Välj metod för att lösa upp",overlappingAreasLabel:"Överlappande eller närliggande områden",sameAttributeAreasLabel:"Områden som har samma fältvärde",summarizeLabel:"Lägg till statistik (valfritt)",itemDescription:"Geoobjektstjänsten genererades från lösningen Lös upp gränser.",itemTags:"Analysresultat, Lös upp gränser, ${layername}",itemSnippet:"Analysgeoobjektstjänsten genererades från Lös upp gränser",resultLabel:"Resultatlagrets namn",outputLayerName:"Lös upp ${layername}"},FindNearestTool:{summarizeDefine:"Hitta närmaste platser för varje plats i <b>${sumNearbyLayerName}</b>.",findNearLabel:"Hitta närmaste platser genom att mäta:",outputLayerName:"Närmaste ${sumNearbyLayerName} till ${layer}",groupByLabel:"Välj ett fält att gruppera efter (valfritt)",itemDescription:"Geoobjektstjänst genererad genom att köra lösningen Hitta närmaste. Närmast ${sumNearbyLayerName}",itemTags:"Analysresultat, Hitta närmaste, ${sumNearbyLayerName}, ${summaryLayerName}",itemSnippet:"Analysgeoobjektstjänst genererad med Hitta närmaste",removeAttrStats:"Ta bort attributstatistik",forEachLocationLabel:"För varje plats i <b>${sumNearbyLayerName}</b>",findNearestLabel:"Begränsa antalet närmaste platser till:",limitSearchRangeCheck:"Begränsa sökintervallet till:",addStats:"För varje plats i <b>${summaryLayerName}</b>",chooseLayer:"Välj ett lager",findLocationsIn:"Hitta närmaste platser i:",outputLayersLabel:"Resultlagrets namn",straightLineDistance:"Linjeavstånd",resultLabel1:"Lager med närmaste platser:",resultLabel2:"Lager med anslutningslinjer:",outputConnectingLayerName:"Närmaste ${layer} till ${sumNearbyLayerName} (Lines)",chooseLayerInfoLabel:"Båda indatalagren måste innehålla punkter för att aktivera alternativen Köravstånd och Körtid"},mergeLayers:{mergeLayersDefine:"Sammanfoga <b>${layername}</b> med",outputLayerName:"Sammanfoga ${layername} ${mergelayername}",chooseMergeLayer:"Välj lager",mergeFieldsLabel:"Ändra sammanfogade fält (valfritt)",itemDescription:"Geoobjektstjänst som har genererats med lösningen Sammanfoga lager.",itemTags:"Analysresultat, Sammanfoga lager, ${layername}",itemSnippet:"Analysgeoobjektstjänst genererad med Sammanfoga lager",resultLabel:"Resultatlagrets namn",rename:"Byt namn",remove:"Ta bort",match:"Matcha",operation:"Åtgärd",fieldTypeMatchValidationMsg:"Fält som ska matchas måste vara av samma typ. Omvandling av typer stöds (till exempel dubbel till heltal, heltal till sträng) förutom sträng till numerisk."},analysisMsgCodes:{SS_84493:"Det fanns 1 avvikande plats. Denna användes inte för att beräkna ${AggregationType}.",SS_84492:"Det totala undersökningsområdet var ${Area} stort.",SS_84491:"Det fanns ${NumFeatures} aggregeringsområden som är giltiga för indata.",SS_84490:"Aggregeringsprocessen resulterade i ${AggNumFeatures} viktade områden.",SS_84489:"Analysen utfördes på alla aggregeringsområden.",SS_84485:"Det fanns ${NumFeatures} giltiga indata-geoobjekt.",SS_84477:"Blå utdata-geoobjekt representerar cold spots med bara ${FieldName} kluster.",SS_84476:"Röda utdata-geoobjekt representerar hot spots med hela ${FieldName} kluster.",SS_84471:"Utdata",SS_84470:"${NumSignificant} geoobjektsutdata är statistiskt signifikanta baserat på en FDR-korrigering för flerfaldig testning och geografiska beroenden.",SS_84466:"Hot spot-analys",SS_84465:"Det optimala fasta avståndsbandet baserades på ett standardavstånd från geoobjekten från det geometriska medelvärdet: ${DistanceInfo}.",SS_84464:"Det optimala fasta avståndsbandet baserades på det genomsnittliga avståndet till de ${NumNeighs} närmaste grannarna: ${DistanceInfo}.",SS_84461:"Det optimala fasta avståndsbandet som valdes baserades på toppklustringen som hittades i ${DistanceInfo}.",SS_84459:"Analysskala",SS_84458:"Analysen baserades på antalet punkter i varje polygoncell.",SS_84457:"Punkterna aggregerades till fisknätspolygoncellerna inom de angivna begränsningsområdena.",SS_84453:"Analysen utfördes på alla fisknätspolygonceller inom begränsningsområdets lager.",SS_84452:"Analysen utfördes på alla fisknätspolygonceller som innehöll minst en punkt.",SS_84451:"Analysen byggde på antalet punkter i varje fisknätspolygoncell.",SS_84450:"Polygoncellstorleken var ${SnapInfo}.",SS_84449:"Ett fisknätspolygonrutnät skapades för aggregering av punkter.",SS_84446:"Egenskaper för ${VarName}:",SS_84444:"Incidentaggregering",SS_84437:"Det fanns inga avvikande platsvärden.",SS_84434:"Det fanns ${NumOutliers} avvikande platsvärden. Dessa användes inte för att beräkna ${AggregationType}.",SS_84428:"Initial databedömning.",SS_84271_0:"min",SS_84272_0:"max",SS_84261_0:"Medelvärde",SS_84262_0:"Stdavvik.",SS_00002:"Följande rapport visar arbetsflödet som användes för att optimera dina hot spot-resultat:",AO_100001:"Förena punkter misslyckades.",AO_100002:"Punktlager måste ha punkter som geometrityp.",AO_100003:"Polygonlager måste ha polygoner som geometrityp.",AO_100004:"Fältet ${fieldName} som angavs för summeringsfälten finns inte.",AO_100005:"Fältet ${fieldName} som angavs för summeringsfälten är inte numeriskt.",AO_100006:"Summeringstypen ${summary} som angavs för fältet ${fieldName} är ogiltig.",AO_100007:"Hitta hotspots misslyckades.",AO_100008:"Geometritypen för begränsningspolygonlagret måste vara polygoner.",AO_100009:"Geometritypen för analyslagret måste vara punkter eller polygoner.",AO_100010:"Geometritypen för aggregationspolygonlagret måste vara polygoner.",AO_100011:"Du måste ange ett analysfält för polygonanalyslagret.",AO_100012:"Skapa buffertar misslyckades.",AO_100013:"Överlagra lager misslyckades.",AO_100014:"Summera inom misslyckades.",AO_100015:"Geometritypen för summeringslagrets indata måste vara punkter, linjer eller polygoner.",AO_100016:"Geometritypen för summeringslagrets indata måste vara punkter eller linjer.",AO_100017:"Geometritypen för summeringslagrets indata måste vara punkter.",AO_100018:"Summeringsenheter ${sumUnits} kan inte användas med shapetypen ${shapeType}.",AO_100019:"Minst en av parametrarna krävs (summera shape eller summeringsfält).",AO_468:"Indatashapetyperna är olika.",AO_1156:"Ett fältvärde var inte kompatibelt med fälttypen.",AO_800:"Värdet är inte del av SUM | MEAN | MIN | MAX | RANGE | STD | COUNT | FIRST | LAST.",AO_728:"Fältet ${fieldName} finns inte i tabellen.",AO_12:"Fältet som du vill lägga till finns redan.",AO_539:"Uttrycket är ogiltigt.",AO_1115:"Lagerbeskrivningsegenskapen måste anges för ${layerName}.",AO_366:"Ogiltig geometrityp.",AO_641:"Det här verktyget kräver minst ${numFeatures} geoobjekt för att kunna beräkna resultat.",AO_906:"Ingen variation: alla värden i indatafältet verkar vara samma.",AO_1534:"Användaren har angett samma antal incidenter inom alla aggregationspolygoner. Ange ett annat polygon-dataset eller en annan aggregationsmetod.",AO_1535:"Antalet användardefinierade aggregationspolygoner måste vara minst ${numFeatures}.",AO_1536:"Incidentpunkterna är inte tillräckligt många för en analys. Aggregationsmetoden kräver minst ${numFeatures} incidenter för att beräkna resultatet.",AO_84426:"Du måste ange polygoner för aggregering av incidenterna till beräkningar i den här metoden.",AO_26:"Buffertavståndet är noll.",AO_109:"Buffertavståndet får inte vara negativt för linjer och punkter.",AO_385:"Linjealternativet är ogiltigt för punktgeoobjekt.",AO_438:"Överlagringen är inte en polygon.",AO_100020:"EnrichLayer misslyckades.",AO_100021:"Geometritypen för indatalagret måste vara punkt, linje eller polygon.",AO_100022:"Enheterna ${units} stöds inte för bufferttypen ${bufferType}.",AO_100023:"Det gick inte att berika lager för den geografiska indatareferensen ${spref}.",AO_100024:"Antalet geoobjekt i ${inputLayer} är noll.",AO_100025:"SummarizeNearby misslyckades.",AO_100026:"ExtractData misslyckades.",AO_100027:"DissolveBoundaries misslyckades.",AO_100028:"CreateDriveTimeAreas misslyckades.",AO_100029:"MergeLayers misslyckades.",AO_100030:"FindNearest misslyckades.",AO_100031:"Antalet närmaste platser som ska hittas får inte överstiga 100.",AO_100032:"Antalet geoobjekt i ${analysisLayer} är noll.",AO_100033:"Antalet geoobjekt i ${nearLayer} är noll.",AO_100034:"Antalet geoobjekt i ${analysisLayer} får inte vara större än 1 000.",AO_100035:"Antalet geoobjekt i ${nearLayer} får inte vara större än 1 000.",GPEXT_001:"Ogiltig parameter ${name} värde",GPEXT_002:"Parameter saknas ${name}",GPEXT_003:"Ogiltig parameter ${name}: egenskapen ${propname} saknas",GPEXT_004:"Ogiltig lagerparameteregenskap ${propname} saknas",GPEXT_005:"Det gick inte att komma åt url ${url}",GPEXT_006:"Åtkomst till url ${url} returnerade felet ${error}",GPEXT_007:"Ogiltigt objekt ${id}",GPEXT_008:"Det gick inte att skapa tjänsten ${name}",GPEXT_009:"Det gick inte att lägga till lagret ${name} till tjänsten ${name}",GPEXT_010:"Det gick inte att parsa lagret JSON",GPEXT_012:"Ogiltig extern åtgärd",GPEXT_013:"Det här verktyget använder geoberikningstjänsten. Läs mer i tjänstkreditberäknaren för ArcGIS Online.",GPEXT_014:"Det här verktyget använder nätverksanalystjänster. Läs mer i tjänstkreditberäknaren för ArcGIS Online."},geoenrichment:{data:{bufferTitle:{pointRing:{esriFeet:"${radius} fots ring",esriKilometers:"${radius} km ring",esriMeters:"${radius} meters ring",esriMiles:"${radius} engelska mils ring"},pointDriveTime:{esriFeet:"${radius} fots köravstånd",esriKilometers:"${radius} km köravstånd",esriMeters:"${radius} meters köravstånd",esriMiles:"${radius} engelska mils köravstånd",esriDriveTimeUnitsMinutes:"${radius} minuters körtid"},lineBuffer:{esriFeet:"${radius} fots buffert",esriKilometers:"${radius} km buffert",esriMeters:"${radius} meters buffert",esriMiles:"${radius} engelska mils buffert"},polygon:"Det här området",stdGeo:"Beskär ${level} geoobjekt"}},dijit:{AgePyramid:{maxLabel:"Den största gruppen:",minLabel:"Den minsta gruppen:",compLabel:"Punkter visar jämförelse med",menLabel:"Män",womenLabel:"Kvinnor"},BaseWidget:{sortLabel:"sortera",unsortLabel:"återställ"},BufferOptions:{studyArea:"Visa data för:",ring:"Ring",driveTime:"Körtider",driveDistance:"Köravstånd",radius:"Radie:",units:{esriDriveTimeUnitsMinutes:"minuter",esriMiles:"engelska mil",esriKilometers:"kilometer",esriFeet:"fot",esriMeters:"meter"}},DataCollectionsPage:{loading:"Läser in...",chooseCountry:"Visa tillgängliga data för:",global:"Global",chooseDataCollection:"Välj datasamling:",back:"Bakåt",next:"Nästa"},EnrichOptionsPage:{bufferRing:"Cirkel på 1 engelsk mil runt platserna",bufferPolygon:"indatapolygoner (buffert ej tillgänglig)",selectedVariables:"Valda variabler:",customize:"anpassa",bufferOptions:"Visa data för:",edit:"redigera",totalVars:"Totala variabler (${count})",overwriteExisting:"Befintliga kolumnvärden skrivs över",varName:"Variabelnamn",column:"Kolumn",newColumn:"<Skapa ny>",noColumn:"<Inget>",back:"Bakåt",finish:"Lägg till data till system"},InfographicsMainPage:{mainTitle:"Konfigurera infografik",loading:"Läser in...",chooseCountry:"Visa tillgängliga data för: ",chooseDataCollection:"Välj bland populära datasamlingar: ",chooseTheme:"Välj färgtema:",dark:"Mörk",light:"Ljus",addVariables:"Lägg till fler enskilda variabler",ok:"OK",cancel:"Avbryt"},OneVar:{greater:" mer än för",lesser:" mindre än för",equal:"samma som för"},OneVarMultiComparison:{subtitleSite2:"för det här området ",is:" är ",lesser:"vilket är mindre än ",greater:"vilket är mer än ",equal:"vilket är samma som ",average:" genomsnitt",area:"Area",val:"Värde"},RelatedVariables:{highLabel:"Den största gruppen: ",lowLabel:"Den minsta gruppen: ",indicator:"Indikator",val:"Värde",difference:"skillnad",chartLabel:"Staplar visar avvikelse från"},Tapestry:{hhTypeLabel:"Typ av hushåll:",medianAgeLabel:"Medianålder:",incomeLabel:"Inkomst:",employmentLabel:"Yrke:",educationLabel:"Utbildning:",residentialLabel:"Bostad:",raceEthnicityLabel:"Ras/etnicitet:",hhLabel:"hushåll",adultsLabel:"vuxna"},VariablesPage:{back:"Bakåt",ok:"OK"}}}}));