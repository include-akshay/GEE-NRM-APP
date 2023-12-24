var dateVals = [];

var typeVals = [];
var blog_label = ui.Label({value:'DropDown', style: {fontWeight: 'bold'}});
var onClickID;
var onClickID2 = {
  "Water Harvesting Structures - Private" : null,
  "Water Harvesting Structures - Public":null,
  "Plantation":null,
  "Livelihood":null
};
var legendLULC;
var legendLitho;
var legendADI;
var legend_prec;
var legend_adi;
var legend_clart;
var legend_admin;
var info;
var legendcount = 0;
var legendcountADI = 0;
var legend_narega={
  "Water Harvesting Structures - Private" : null,
  "Water Harvesting Structures - Public":null,
  "Plantation":null,
  "Livelihood":null
};
var info_narega={
  "Water Harvesting Structures - Private" : null,
  "Water Harvesting Structures - Public":null,
  "Plantation":null,
  "Livelihood":null
};
var table = ee.FeatureCollection("projects/ee-jamuidemo/assets/Bihar_Jamui_District")

////
var convertedFC = table.map(function(feature) {
  var propertyValue = ee.String(feature.get('Work Type'));
  var convertedValue = propertyValue.toLowerCase();
  return feature.set('Work Type', convertedValue);
});
print(convertedFC.first())
var propertyToSearch = 'Work Type'
var a = ee.Filter.stringContains(propertyToSearch, 'well')
var b = ee.Filter.stringContains(propertyToSearch, 'pond')
var c = ee.Filter.stringContains(propertyToSearch, 'borewell')
var d = ee.Filter.stringContains(propertyToSearch, 'tank')
var e = ee.Filter.stringContains(propertyToSearch, 'pits')


var aa = ee.Filter.stringContains(propertyToSearch, 'trench')
var ab = ee.Filter.stringContains(propertyToSearch, 'dam')
var ac = ee.Filter.stringContains(propertyToSearch, 'bund')
var ad = ee.Filter.stringContains(propertyToSearch, 'gabion')
var ae = ee.Filter.stringContains(propertyToSearch, 'canal')
var af= ee.Filter.stringContains(propertyToSearch, 'canals')
var ag = ee.Filter.stringContains(propertyToSearch, 'channel')
var ah = ee.Filter.stringContains(propertyToSearch, 'drainage')
var ai = ee.Filter.stringContains(propertyToSearch, 'weir')
var aj = ee.Filter.stringContains(propertyToSearch, 'gully')
var ak = ee.Filter.stringContains(propertyToSearch, 'irrigation')
var al = ee.Filter.stringContains(propertyToSearch, 'talab')
var am = ee.Filter.stringContains(propertyToSearch, 'anicut')
var an = ee.Filter.stringContains(propertyToSearch, 'embankment')
var ao = ee.Filter.stringContains(propertyToSearch, 'dyke')
var ap = ee.Filter.stringContains(propertyToSearch, 'drain')

var ba = ee.Filter.stringContains(propertyToSearch, 'plantation')
var bb = ee.Filter.stringContains(propertyToSearch, 'plntation')
var bc = ee.Filter.stringContains(propertyToSearch, 'palantation')

var ca = ee.Filter.stringContains(propertyToSearch, 'cattle')
var cb = ee.Filter.stringContains(propertyToSearch, 'goat')
var cd = ee.Filter.stringContains(propertyToSearch, 'poultry')

var combinedPrivate = ee.Filter.or(a,b,c,d,e)
var combinedPublic = ee.Filter.or(aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap)
var combinedPlantation = ee.Filter.or(ba,bb,bc)
var combinedLivelihood = ee.Filter.or(ca,cb,cd)


var waterPrivate = convertedFC.filter(combinedPrivate);
var waterPublic = convertedFC.filter(combinedPublic);
var plantation = convertedFC.filter(combinedPlantation);
var livelihood = convertedFC.filter(combinedLivelihood);


////
var sld_intervals =
'<RasterSymbolizer>' +
  '<ColorMap type="intervals" extended="false">' +
    '<ColorMapEntry color="#419bdf" quantity="2" label="Water"/>' +
    '<ColorMapEntry color="#c4281b" quantity="3" label="Built up"/>' +
    '<ColorMapEntry color="#a59b8f" quantity="4" label="Barren"/>' +
    '<ColorMapEntry color="#397d49" quantity="6" label="Trees"/>' +
    '<ColorMapEntry color="#52ee09" quantity="9" label="Single Cropping Kharif"/>' +
    '<ColorMapEntry color="#d4791e" quantity="10" label="Single Cropping Non - Kharif"/>' +
    '<ColorMapEntry color="#e51f8f" quantity="11" label="Double Cropping"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var sld_intervals_clart =
'<RasterSymbolizer>' +
  '<ColorMap type="intervals" extended="false">' +
    '<ColorMapEntry color="#5dca21" quantity="1" label="Good Recharge Structure"/>' +
    '<ColorMapEntry color="#e0ef23" quantity="2" label="Moderate Recharge Structure"/>' +
    '<ColorMapEntry color="#f44336" quantity="3" label="Surface Water Harvesting"/>' +
    '<ColorMapEntry color="#b313a7" quantity="4" label="Regeneration"/>' +
    '<ColorMapEntry color="#0000FF" quantity="5" label="High Run off zone"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var sld_intervals_litho =
'<RasterSymbolizer>' +
  '<ColorMap type="intervals" extended="false">' +
    '<ColorMapEntry color="#e6194B" quantity="1" label="Alluvium"/>' +
    '<ColorMapEntry color="#f58231" quantity="2" label="Granite"/>' +
    '<ColorMapEntry color="#ffe119" quantity="3" label="Schist"/>' +
    '<ColorMapEntry color="#bfef45" quantity="4" label="Gneiss"/>' +
    '<ColorMapEntry color="#3cb44b" quantity="5" label="Phyllite"/>' +
    '<ColorMapEntry color="#42d4f4" quantity="6" label="Quartz"/>' +
    '<ColorMapEntry color="#4363d8" quantity="7" label="Basalt"/>' +
    '<ColorMapEntry color="#911eb4" quantity="8" label="Sandstone"/>' +
    '<ColorMapEntry color="#f032e6" quantity="9" label="Shale"/>' +
    '<ColorMapEntry color="#a9a9a9" quantity="10" label="Laterite"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var sld_intervals_drain =
'<RasterSymbolizer>' +
  '<ColorMap type="intervals" extended="false">' +
    '<ColorMapEntry color="#e6194B" quantity="1" label="Low"/>' +
    '<ColorMapEntry color="#ffe119" quantity="2" label="Moderate"/>' +
    '<ColorMapEntry color="#3cb44b" quantity="3" label="High"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var sld_intervals_lin =
'<RasterSymbolizer>' +

  '<ColorMap type="intervals" extended="false">' +
    '<ColorMapEntry color="#0000FF" quantity="0" label="Without"/>' +
    '<ColorMapEntry color="#ffffff" quantity="1" label="Within"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var adminLayers = ["projects/ee-jamuidemo/assets/All_All_State_Boundary",
"projects/ee-jamuidemo/assets/Bihar_Jamui_Block_Boundary",
"projects/ee-jamuidemo/assets/Bihar_Jamui_Panchayat_Boundary",
"projects/ee-jamuidemo/assets/Bihar_All_Village_Boundary"
]

var naregaLayers = ["Water Harvesting Structures - Private","Water Harvesting Structures - Public","Plantation","Livelihood"]

var socioLayers = ["projects/ee-jamuidemo/assets/Bihar_Jamui_Block_Boundary",
"projects/ee-jamuidemo/assets/Bihar_Jamui_Panchayat_Boundary",
"projects/ee-jamuidemo/assets/Bihar_All_Village_Boundary"]

var lulcLayers = ["projects/ee-jamuidemo/assets/Bihar_Jamui_LULC_2015",
"projects/ee-jamuidemo/assets/Bihar_Jamui_LULC_2016",
"projects/ee-jamuidemo/assets/Bihar_Jamui_LULC_2017",
"projects/ee-jamuidemo/assets/Bihar_Jamui_LULC_2018",
"projects/ee-jamuidemo/assets/Bihar_Jamui_LULC_2019",
"projects/ee-jamuidemo/assets/Bihar_Jamui_LULC_2020"]
var recommendLayers = ["projects/ee-jamuidemo/assets/Bihar_Jamui_CLART"]
var hydrolayers_feature = ["projects/ee-jamuidemo/assets/Bihar_Jamui_Microwatershed_Boundary",
"projects/ee-jamuidemo/assets/Bihar_Jamui_Precipitation",
"projects/ee-harshita-om/assets/Bihar_Jamui_Drainage_Lines"]
var hydrolayers_img =["projects/ee-jamuidemo/assets/Bihar_Jamui_Drainage_Density",
"projects/ee-jamuidemo/assets/Bihar_Jamui_Lithology", 
"projects/ee-jamuidemo/assets/Bihar_Jamui_Lineaments",
"projects/ee-jamuidemo/assets/Bihar_Jamui_Slope_Percentage"]
var adminLayerNames=["State Boundary","Block Boundary","Panchayat Boundary","Village Boundary"];
var socioLayerNames=["State Boundary ADI","Block Boundary ADI","Panchayat Boundary ADI","Village Boundary ADI"];
var lulcLayerNames = ["LULC 2015", "LULC 2016","LULC 2017","LULC 2018","LULC 2019", "LULC 2020"]
var lithoLayerNames = ["Lithology"]
var checkBoxDict={};
var admin
//flag 1 = table
//flag 0 = image
var loadLayers = function(layerlabel, listName, flag){
    var Label = ui.Label(layerlabel)
    panel.add(Label)
    var layerboxes = [];
    var length = listName.length;
    for(var i = 0; i<length;i++){
      var layerName = listName[i].split("/");
      layerName = layerName[layerName.length - 1].split("_");
      layerName = layerName.slice(2).join(" ");
      if(layerlabel === 'Socioeconomic Layers')
        layerName+=' ADI';
      var box = createBox(layerName,listName[i],flag);
      checkBoxDict[layerName] = box;
    }
} 

var loadLayersMisc = function(layerlabel, listName, flag){
    var Label = ui.Label(layerlabel)
    panel.add(Label)
    var layerboxes = [];
    var length = listName.length;
    for(var i = 0; i<length;i++){
      var layerName = listName[i];
      var box = createBox(layerName,listName[i],flag);
      checkBoxDict[layerName] = box;
    }
} 
var createBox = function(layerName,assetURL,flag){
    var layer1 = ui.Checkbox(layerName,0,function(){
        if(layer1.getValue()){
          var test;
          if(flag == 1)
            test = ee.FeatureCollection(assetURL)
          else if(flag == 0 ){
            test = ee.Image.load(assetURL);
          }
          
          if(layerName=="Precipitation"){
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            colorCoding(test,"Microwater",layerName);
            addLegendPrecipitation();
          }
          else if(layerName=="Evapotranspiration"){
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            colorCoding(test,"mean",layerName);
          }
          else if(layerName=="Microwatershed Boundary"){
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            var styling = {fillColor : '#ffffff00'}
            Map.addLayer(test.style(styling),{},layerName);
          }
          else if(layerName=="Drainage Density"){
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            Map.addLayer(test.selfMask().sldStyle(sld_intervals_drain),{min:17, max : 242, gamma : 0.40},layerName,1)
          }
          else if(layerName=="Drainage Lines"){
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            Map.addLayer(test,{},layerName,1)
          }
          else if(layerName=="Lithology"){
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            Map.addLayer(test.selfMask().sldStyle(sld_intervals_litho),{min:25, max : 255, gamma : 0.80},layerName,1);
            addLegendLitho();
          }
          else if(layerName=="Lineaments"){
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            
            Map.addLayer(test.selfMask().sldStyle(sld_intervals_lin),{min:1, max : 10, gamma : 0.80},layerName,1)
          }
          else if(layerName=="Slope Percentage"){
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            Map.addLayer(test,{min:28685.103515625, max : 6425308, gamma : 1.2},layerName,1)
          }
          else if(adminLayerNames.indexOf(layerName)!=-1){
            if(layerName!='State Boundary')
              Map.setCenter(86.2212694694794,24.923835150182867,10);
            addLegendadmin();
            dispPanel(test,layerName);
            var x = Object.keys(checkBoxDict);
            var n = x.length;
            for(var i =0; i<n;i++){
              if(adminLayerNames.indexOf(x[i]) != -1 && layerName!=x[i]){
                var layerBox = checkBoxDict[x[i]];
                layerBox.setDisabled(1);
              }
            }
          }
          else if(socioLayerNames.indexOf(layerName)!=-1){
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            ++legendcountADI;
            if(legendcountADI==1)
              addLegendADI();
            var adiName = 'adi_2019';
            if(layerName === 'Village Boundary ADI')
              adiName = 'ADI_2019';
            colorCodingSocioEconomic(test,layerName,adiName);
          }
          else if(layerName == "CLART"){
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            Map.addLayer(test.selfMask().sldStyle(sld_intervals_clart),{min:19, max : 244, gamma : 1.32},"CLART",1);
            addLegendclart();
          }
           else if(layerName === "Water Harvesting Structures - Private")
          {
            dispPanel2(waterPrivate, layerName,"darkblue");
            addLegendNarega(layerName);
          }
          else if(layerName === "Water Harvesting Structures - Public")
          {
            dispPanel2(waterPublic, layerName,"skyblue");
            addLegendNarega(layerName);
          }
          else if(layerName === "Plantation")
          {
            dispPanel2(plantation, layerName,"green");
            addLegendNarega(layerName);
          }
          else if(layerName === "Livelihood")
          {
            dispPanel2(livelihood, layerName,"black");
            addLegendNarega(layerName);
          }
          //LULC
          else {
            Map.setCenter(86.2212694694794,24.923835150182867,10);
            ++legendcount;
            if(legendcount==1)
              addLegend();
            Map.addLayer(test.selfMask().sldStyle(sld_intervals),{min:17, max : 242, gamma : 0.40},layerName,1)
          }
          
          // Map.addLayer(test,{min:0,max:9,gamma:0.40},layerName);
        }
        else{
          Map.setCenter(85.81, 25.92,7);
          var size = Map.layers().length();
          var layers = Map.layers();
          var name = layer1.getLabel();
          print(name);
          for(var i=0;i<size;i++){
            if(layers.get(i).get('name') == name){
              Map.remove(Map.layers().get(i));
              if(layerName == 'Precipitation')
                Map.remove(legend_prec);
              else if(layerName === 'CLART')
                Map.remove(legend_clart);
              else if(adminLayerNames.indexOf(name)!=-1){
                Map.unlisten(onClickID);
                Map.remove(legend_admin);
              }
              else if(lulcLayerNames.indexOf(name)!=-1){
                --legendcount;
                if(legendcount===0)
                  Map.remove(legendLULC);
              }
              else if(socioLayerNames.indexOf(name)!=-1){
                --legendcountADI;
                print(legendcountADI)
                if(legendcountADI===0)
                  Map.remove(legend_adi);
              }
              else if(naregaLayers.indexOf(name)!=-1){
                Map.unlisten(onClickID2[name]);
                Map.remove(legend_narega[name]);
              }
              else if(lithoLayerNames.indexOf(name)!=-1){
                Map.remove(legendLitho);
              }
              break;
            }
          }
          
          //Enable all the checkboxes in admin layers
          var len = adminLayerNames.length;
          for(var idx=0;idx<len;idx++){
            checkBoxDict[adminLayerNames[idx]].setDisabled(0);
          }
        }
          
      });
    panel.add(layer1);
    return layer1;
}

var typeOfData = ui.Select({
  items: ["Jamui"],
  placeholder: 'Select District',
  onChange: function(value) {
    Map.setCenter(85.81, 25.92,7);
    loadLayers("Administrative Layers", adminLayers,1);
    loadLayers("Hydrological Layers Feature Collections", hydrolayers_feature,1);
    loadLayers("Hydrological Layers Images", hydrolayers_img,0);
    loadLayers("LULC Layers", lulcLayers,0);
    loadLayers("Socioeconomic Layers", socioLayers,1);
    loadLayers("Recommendation Layers", recommendLayers,0);
    loadLayersMisc("MGNREGA Geo-Tagged Layers", naregaLayers,2);
  }
});
typeOfData.setDisabled(1)
var nameOfData = ui.Select({
  items: ["Bihar"],
  placeholder: 'Select State',
  onChange:function(){
    typeOfData.setDisabled(0)
  }
});




var panel = ui.Panel([blog_label,
                      nameOfData,
                      typeOfData,
                      ],
                      ui.Panel.Layout.flow('vertical'));
                      
panel.style().set({width: '325px'});

ui.root.add(panel);
Map.style().set('cursor', 'crosshair');

Map.setCenter(78.05, 23.30,4)

var dispPanel = function(fc,layerName){
  var toFind;
  if(layerName==='Block Boundary' || layerName === 'Panchayat Boundary')
    fc = fc.filter(ee.Filter.eq('District name', 'jamui'));
  else if(layerName === 'Village Boundary')
    fc = fc.filter(ee.Filter.eq('District_N', 'jamui'));
  else if(layerName === 'State Boundary')
      fc = fc.filter(ee.Filter.eq('Name', 'Bihar'));
      
  
  var SEARCH_DISTANCE = 5000;  // Meters.
  function getProps(loc) {
    loc = ee.Dictionary(loc);
    print(loc)
    var point = ee.Geometry.Point(loc.getNumber('lon'), loc.getNumber('lat'));
    var thisFeature = fc.filterBounds(
      point.buffer(SEARCH_DISTANCE)).map(function(ft) {
        return ft.set('system:click_distance', point.distance(ft.geometry()));
    })
    .sort('system:click_distance').first();
    
    var props = thisFeature.toDictionary();
    
    props.evaluate(function(props) {
      var str = 'Properties of the Selected Coordinate\n\n\n';
      if(props===undefined)
      {
        info.setValue('Click on valid location');
      }
      else
      {
        Object.keys(props).forEach(function(i) {
        str = str + i + ': ' + props[i] + '\n';
      });
      info.setValue(str);
      }
      
    });
  }
  onClickID = Map.onClick(getProps);
  var styling = {fillColor : '#ffffff00'}
  Map.addLayer(fc.style(styling),{},layerName);
}

var dispPanel2 = function(fc,layerName,COLOR){
  var SEARCH_DISTANCE = 5000;  // Meters.
  function getProps(loc) {
    loc = ee.Dictionary(loc);
    var point = ee.Geometry.Point(loc.getNumber('lon'), loc.getNumber('lat'));
    var thisFeature = fc.filterBounds(
      point.buffer(SEARCH_DISTANCE)).map(function(ft) {
        return ft.set('system:click_distance', point.distance(ft.geometry()));
    })
    .sort('system:click_distance').first();
    
    var props = thisFeature.toDictionary();
    
    props.evaluate(function(props) {
      var str = 'Properties of the Selected Coordinate\n\n\n';
      if(props===undefined)
      {
        var str2 = "Click on valid location ( " + layerName +" )";
        info_narega[layerName].setValue(str2);
      }
      else
      {
        Object.keys(props).forEach(function(i) {
        str = str + i + ': ' + props[i] + '\n';
      });
      info_narega[layerName].setValue(str);
      }
      
    });
  }
  onClickID2[layerName] = Map.onClick(getProps);
  var styling = {color: COLOR}
  Map.addLayer(fc.style(styling),{},layerName);
}

var colorCoding = function(table,featureName,layerName){
  
  var getBucketNumber = function(buckets) {
    var maxv = ee.Number(table.aggregate_max(featureName));
    var minv = ee.Number(table.aggregate_min(featureName));
    var x = maxv.add(minv).divide(buckets);
    return x;
  }
  
  var color_codes = ee.Dictionary({
    '0.0' : {fillColor: 'red', color:'red', lineType:'dashed'},
    '1.0' : {fillColor: 'yellow',lineType:'dashed'},
    '2.0' : {fillColor: 'orange',lineType:'dashed'},
    '3.0' : {fillColor: 'green',lineType:'dashed'}
  });
  
  var m = ee.Number(getBucketNumber(4)).floor()
  var l = ee.List([]);
  var colorCodedCollection = table.map(function(feature){
    var val = feature.get(featureName);
    if(val === null)
        return feature.set('style', color_codes.get('0.0'));
    var bucket = ee.String(ee.Number(val).floor().divide(m).floor());
    return feature.set('style', color_codes.get(bucket));
  })

  print(colorCodedCollection)
    print(l)
  
  var fcVisCustom = colorCodedCollection.style({
    styleProperty: 'style',
  });

  // Display the FeatureCollection visualization (ee.Image) on the map.
  Map.addLayer(fcVisCustom, null, layerName);

}

var colorCodingSocioEconomic = function(table,layerName,adiName){
  
  var toFind;
  if(layerName==='Block Boundary ADI' || layerName === 'Panchayat Boundary ADI') 
    toFind = 'District name';
  else
    toFind = 'District_N';
  table = table.filter(ee.Filter.eq(toFind, 'jamui'));
  var color_codes = ee.Dictionary({
    '0.0' : {fillColor: 'red', color:'red', lineType:'dashed'},
    '1.0' : {fillColor: 'yellow',lineType:'dashed'},
    '2.0' : {fillColor: 'green',lineType:'dashed'},
  });

 var colorCodedCollection = table.map(function(feature1){
    var val = ee.Number(feature1.get(adiName))
    var bucket = ee.Algorithms.If(val.eq(ee.Number(9)),bucket='1.0',ee.Algorithms.If(val.lt(ee.Number(9)),bucket='0.0',bucket='2.0') )
    return feature1.set('style', color_codes.get(bucket));
  })
 
 
  var fcVisCustom = colorCodedCollection.style({
    styleProperty: 'style',
  });

  // Display the FeatureCollection visualization (ee.Image) on the map.
  Map.addLayer(fcVisCustom, null, layerName);

}

var addLegendLitho = function(){
  
  legendLitho = ui.Panel({
    style: {
      position: 'bottom-left',
      padding: '8px 15px'
    }
  });
   
  // Create legend title
  var legendTitle = ui.Label({
    value: 'Lithology Legend',
    style: {
      fontWeight: 'bold',
      fontSize: '18px',
      margin: '0 0 4px 0',
      padding: '0'
      }
  });
  
   
  // Add the title to the panel
  legendLitho.add(legendTitle);
   
  // Creates and styles 1 row of the legend.
  var makeRow = function(color, name) {
   
        // Create the label that is actually the colored box.
        var colorBox = ui.Label({
          style: {
            backgroundColor: '#' + color,
            // Use padding to give the box height and width.
            padding: '8px',
            margin: '0 0 4px 0'
          }
        });
   
        // Create the label filled with the description text.
        var description = ui.Label({
          value: name,
          style: {margin: '0 0 4px 6px'}
        });
   
        // return the panel
        return ui.Panel({
          widgets: [colorBox, description],
          layout: ui.Panel.Layout.Flow('horizontal')
        });
  };
   
  var palette =['e6194B', 'f58231', 'ffe119','bfef45','3cb44b','42d4f4','4363d8',
  '911eb4','f032e6','a9a9a9'];
   
  // name of the legend
  var names = ['Alluvium','Granite','Schist','Gneiss','Phyllite','Quartz','Basalt','Sandstone',
  'Shale','Laterite'];
   
  // Add color and and names
  for (var i = 0; i < 10; i++) {
    legendLitho.add(makeRow(palette[i], names[i]));
    } 

  Map.add(legendLitho);
}

var addLegend = function(){
  
  if(legendcount > 1)
    return;
    legendLULC = ui.Panel({
    style: {
      position: 'bottom-left',
      padding: '8px 15px'
    }
  });
   
  // Create legend title
  var legendTitle = ui.Label({
    value: 'LULC Legend',
    style: {
      fontWeight: 'bold',
      fontSize: '18px',
      margin: '0 0 4px 0',
      padding: '0'
      }
  });
  
   
  // Add the title to the panel
  legendLULC.add(legendTitle);
   
  // Creates and styles 1 row of the legend.
  var makeRow = function(color, name) {
   
        // Create the label that is actually the colored box.
        var colorBox = ui.Label({
          style: {
            backgroundColor: '#' + color,
            // Use padding to give the box height and width.
            padding: '8px',
            margin: '0 0 4px 0'
          }
        });
   
        // Create the label filled with the description text.
        var description = ui.Label({
          value: name,
          style: {margin: '0 0 4px 6px'}
        });
   
        // return the panel
        return ui.Panel({
          widgets: [colorBox, description],
          layout: ui.Panel.Layout.Flow('horizontal')
        });
  };
   
  //  Palette with the colors
  var palette =['419bdf', 'c4281b', 'a59b8f','397d49','52ee09','d4791e','e51f8f'];
   
  // name of the legend
  var names = ['Water','Built up','Barren','Trees','Single Cropping Kharif','Single Cropping Non - Kharif','Double Cropping'];
   
  // Add color and and names
  for (var i = 0; i < 7; i++) {
    legendLULC.add(makeRow(palette[i], names[i]));
    } 
   
  // add legend to map (alternatively you can also print the legend to the console)
  Map.add(legendLULC);
}

var addLegendPrecipitation = function(){
  legend_prec = ui.Panel({
  style: {
    position: 'bottom-left',
    padding: '8px 15px'
  }
});
 
// Create legend title
var legendTitle_prec = ui.Label({
  value: 'Precipitation Legend',
  style: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0 0 4px 0',
    padding: '0'
    }
});
 
// Add the title to the panel
legend_prec.add(legendTitle_prec);
 
// Creates and styles 1 row of the legend.
var makeRow_prec = function(color, name) {
 
      // Create the label that is actually the colored box.
      var colorBox = ui.Label({
        style: {
          backgroundColor: color,
          // Use padding to give the box height and width.
          padding: '8px',
          margin: '0 0 4px 0'
        }
      });
 
      // Create the label filled with the description text.
      var description = ui.Label({
        value: name,
        style: {margin: '0 0 4px 6px'}
      });
 
      // return the panel
      return ui.Panel({
        widgets: [colorBox, description],
        layout: ui.Panel.Layout.Flow('horizontal')
      });
};
 
//  Palette with the colors
var palette =['red', 'yellow', 'orange','green'];
 
// name of the legend
var names = ['Poor (0mm <= Precipitation  < 50mm)','Below Average (50mm<= Precipitation < 100mm)','Average (100mm<= Precipitation < 150mm)','Good (150mm<= Precipitation)'];
 
// Add color and and names
for (var i = 0; i < 4; i++) {
  legend_prec.add(makeRow_prec(palette[i], names[i]));
  } 
 
// add legend to map (alternatively you can also print the legend to the console)
Map.add(legend_prec);
}

var addLegendADI = function(){
// Creates and styles 1 row of the legend.
if(legendcountADI > 1)
  return;
legend_adi = ui.Panel({
  style: {
    position: 'bottom-left',
    padding: '8px 15px'
  }
});
 
// Create legend title
var legendTitle_adi = ui.Label({
  value: 'ADI Legend',
  style: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0 0 4px 0',
    padding: '0'
    }
});
 
// Add the title to the panel
legend_adi.add(legendTitle_adi);
var makeRow_adi = function(color, name) {
 
      // Create the label that is actually the colored box.
      var colorBox = ui.Label({
        style: {
          backgroundColor: color,
          // Use padding to give the box height and width.
          padding: '8px',
          margin: '0 0 4px 0'
        }
      });
      
 
      // Create the label filled with the description text.
      var description = ui.Label({
        value: name,
        style: {margin: '0 0 4px 6px'}
      });
 
      // return the panel
      return ui.Panel({
        widgets: [colorBox, description],
        layout: ui.Panel.Layout.Flow('horizontal')
      });
};
 
//  Palette with the colors
var palette =['red', 'yellow','green'];
 
// name of the legend
var names = ['Poor (ADI < 9)','Average (ADI = 9)','Good (ADI > 9)'];
 
// Add color and and names
for (var i = 0; i < 3; i++) {
  legend_adi.add(makeRow_adi(palette[i], names[i]));
  } 
 
// add legend to map (alternatively you can also print the legend to the console)
Map.add(legend_adi);
}

var addLegendadmin = function(){
  legend_admin = ui.Panel({style: {position: 'top-left', width: '300px', height: '200px'}});
  info = ui.Label({value: 'Click on a Coordinate ', style: {whiteSpace: 'pre'}});
  legend_admin.add(info);
  Map.add(legend_admin);
}

var addLegendclart = function(){
  legend_clart = ui.Panel({
  style: {
    position: 'bottom-leftM',
    padding: '8px 15px'
  }
});
 
// Create legend title
var legendTitle = ui.Label({
  value: 'CLART Legend',
  style: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0 0 4px 0',
    padding: '0'
    }
});
 
// Add the title to the panel
legend_clart.add(legendTitle);
 
// Creates and styles 1 row of the legend.
var makeRow = function(color, name) {
 
      // Create the label that is actually the colored box.
      var colorBox = ui.Label({
        style: {
          backgroundColor: '#' + color,
          // Use padding to give the box height and width.
          padding: '8px',
          margin: '0 0 4px 0'
        }
      });
 
      // Create the label filled with the description text.
      var description = ui.Label({
        value: name,
        style: {margin: '0 0 4px 6px'}
      });
 
      // return the panel
      return ui.Panel({
        widgets: [colorBox, description],
        layout: ui.Panel.Layout.Flow('horizontal')
      });
};
 
//  Palette with the colors
var palette =['5dca21', 'e0ef23', 'f44336','b313a7','0000FF'];
 
// name of the legend
var names = ['Good Recharge Structure','Moderate Recharge Structure','Surface Water Harvesting','Tree Plantation','High Run off zone'];
 
// Add color and and names
for (var i = 0; i < 5; i++) {
  legend_clart.add(makeRow(palette[i], names[i]));
  } 
 
// add legend to map (alternatively you can also print the legend to the console)
Map.add(legend_clart);
}
var addLegendNarega = function(layerName){
  legend_narega[layerName] = ui.Panel({style: {position: 'top-left', width: '300px', height: '200px'}});
  var str = "Click on a Coordinate (" + layerName +")"
  info_narega[layerName] = ui.Label({value: str, style: {whiteSpace: 'pre'}});
  legend_narega[layerName].add(info_narega[layerName]);
  Map.add(legend_narega[layerName]);
}

// var finalDS = {
//   bihar : {
//     jamui : {
//       administrative : ["A","B"],
//       hydrological : ["A","B"],
//       socioeconomic : ["A","B"],
//       lulc : ["A","B"],
//       recommendation : ["A","B"],
//     }
//   }
// };





