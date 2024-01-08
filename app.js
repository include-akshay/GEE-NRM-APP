var idxOfLocation,curState;
var imports_App_DS = require('users/mtpictd/a_j:AppFiles/App_DS');
var imports_Color_Codes = require('users/mtpictd/a_j:AppFiles/Color_Codes');
var imports_Panels = require('users/mtpictd/a_j:AppFiles/initPanels');
var layerCategory = imports_App_DS.layerCategory;
var layers = imports_App_DS.layer;
var hydroPanel = imports_App_DS.hydroPanel;
var climatePanel = imports_App_DS.climatePanel;
var climateYears = imports_App_DS.climateYears;
var seasonDates = imports_App_DS.seasonDates;
var lulcPanel = imports_App_DS.lulcPanel;
var lulcYears = imports_App_DS.lulcYears;
var lulcLevels = imports_App_DS.lulcLevels;
var wellDepthLevels = imports_App_DS.wellDepthLevels;
var hydroColorCoding = imports_Color_Codes.hydroColorCoding;
var lulc_levelI = imports_Color_Codes.lulc_levelI;
var lulc_levelII = imports_Color_Codes.lulc_levelII;
var lulc_levelIII = imports_Color_Codes.lulc_levelIII;
var clart_sld = imports_Color_Codes.clart_colors;

//var initLulcPanel = imports_Panels.initLulcPanel;
var hydrologicalYears = ['2017-2018','2018-2019','2019-2020','2020-2021','2021-2022','2022-2023']
var seasons = ['Kharif','Rabi','Zaid']

// DATA

function getTypesForState(selectedState) {
  var typeMappings = {
    "Bihar": ["Mohanpur"],
    "Jharkhand": ["Masalia"],
    "Odisha": ["Angul"],
    "Rajasthan": ["Pindwara", "Mandalgarh"],
  };

  return typeMappings[selectedState] || [];
}

// Functions to populate the dropdown boxes.

function populateTypeOfDataSelect(selectedState) {
  var types = getTypesForState(selectedState);
  var updatedTypeOfData = ui.Select({
    items: types,
    placeholder: "Select District",
    onChange: function (district) {
      idxOfLocation = district;
      createCheckboxesWithOnClickFunctions();
    },
  });

  // Replace the existing typeOfData widget with the updated one
  panel.widgets().set(2, updatedTypeOfData);
}

var typeOfData = ui.Select({
  items: [],
  placeholder: "Select District",
});

typeOfData.setDisabled(1);

var nameOfData = ui.Select({
  items: ["Bihar", "Jharkhand", "Odisha", "Rajasthan"],
  placeholder: "Select State",
  onChange: function (state) {
    curState = state;
    subPanel.clear();
    panel.remove(subPanel);
    panel.add(subPanel);
    populateTypeOfDataSelect(state);
    typeOfData.setDisabled(0);
  },
});

var subPanel = ui.Panel();

var blog_label = ui.Label({
  value: "Drop Down",
  style: { fontWeight: "bold" },
});
var panel = ui.Panel(
  [blog_label, nameOfData, typeOfData],
  ui.Panel.Layout.flow("vertical")
);

panel.style().set({ width: "325px" }, { position: "top-right" });

// ----------------x------------------x--------------------x----------------x----------------

//******************************** INIT PANELS **********************************
var initYearPanel = function(inputData,layer){
  hydroPanel[layer]['yearPanel'] = ui.Select({
    items: hydrologicalYears,
    onChange: function(key) {
      if( hydroPanel[layer]['seasonPanel'])
        hydroPanel[layer]['panel'].remove(hydroPanel[layer]['seasonPanel'])
      hydroPanel[layer]['seasonPanel'] = ui.Select({
        items: seasons,
        onChange: function(key) {
          removeLayer(inputData);
          var layerURL = ee.FeatureCollection(inputData.value[0]);
          var selectedYear = hydroPanel[layer]['yearPanel'].getValue();
          var selectedSeason = hydroPanel[layer]['seasonPanel'].getValue();
          var layerCollection = getLayer(layerURL,selectedYear,selectedSeason);
          var colorCodedCollection = colorCoding(layerCollection,inputData.label)
          Map.addLayer(colorCodedCollection, {}, inputData.label);
          Map.setCenter(inputData.value[2].long, inputData.value[2].lat, 10);
          inputData.value[1] = 1;
        }
      });
      hydroPanel[layer]['panel'].add(hydroPanel[layer]['seasonPanel']);
    }
  });
  hydroPanel[layer]['panel'].add(hydroPanel[layer]['yearPanel']);
}

var initLulcPanel = function(inputData,layer){
  console.log("called")
  lulcPanel['yearPanel'] = ui.Select({
    items: lulcYears,
    onChange: function(key) {
      if( lulcPanel['seasonPanel'])
        lulcPanel['panel'].remove(lulcPanel['seasonPanel'])
      lulcPanel['seasonPanel'] = ui.Select({
        items: lulcLevels,
        onChange: function(key) {
          removeLayer(inputData);
          var layerURL = ee.Image.load(inputData.value[0]);
          var selectedYear = lulcPanel['yearPanel'].getValue();
          var selectedLevel = lulcPanel['seasonPanel'].getValue();
          var intervals = lulc_levelIII;
          if(selectedLevel==="Level 1")
            intervals = lulc_levelI;
          else if(selectedLevel==="Level 2")
            intervals = lulc_levelII;
          Map.addLayer(layerURL.selfMask().sldStyle(intervals),{min:17, max : 242, gamma : 0.40}, inputData.label);
          Map.setCenter(inputData.value[2].long, inputData.value[2].lat, 10);
          inputData.value[1] = 1;
        }
      });
      lulcPanel['panel'].add(lulcPanel['seasonPanel']);
    }
  });
  lulcPanel['panel'].add(lulcPanel['yearPanel']);
}

var initClimatePanel = function(inputData,layer){
  climatePanel[layer]['yearPanel'] = ui.Select({
    items: climateYears,
    onChange: function(key) {
      removeLayer(inputData);
      var layerURL = ee.FeatureCollection(inputData.value[0]);
      var selectedYear = climatePanel[layer]['yearPanel'].getValue();
      Map.addLayer(ee.FeatureCollection(inputData.value[0]),{},layer);
      Map.setCenter(inputData.value[2]['long'], inputData.value[2]['lat'], 10);
      //var colorCodedCollection = colorCoding(layerCollection,inputData.label)
      //Map.addLayer(colorCodedCollection, {}, inputData.label);
      inputData.value[1] = 1;
    }
  });
  climatePanel[layer]['panel'].add(climatePanel[layer]['yearPanel']);
}

var initWellDepthPanel = function(inputData,layer){
  hydroPanel[layer]['yearPanel'] = ui.Select({
    items: wellDepthLevels,
    onChange: function(key) {
      removeLayer(inputData);
      var layerURL = ee.FeatureCollection(inputData.value[0]);
      var selectedYear = hydroPanel[layer]['yearPanel'].getValue();
      var propertyValue = "WellDepthNet2018_2023"
      if(selectedYear === "2017-2022")
        propertyValue = "WellDepthNet2017_2022";
      var colorCodedCollection = colorCodingWellDepth(layerURL,propertyValue)
      Map.addLayer(colorCodedCollection, {}, inputData.label);
      Map.setCenter(inputData.value[2]['long'], inputData.value[2]['lat'], 10);
      inputData.value[1] = 1;
    }
  });
  hydroPanel[layer]['panel'].add(hydroPanel[layer]['yearPanel']);
}



//***************** FUNCTIONS FOR POPULting the checkboxes **********************************

function removeLayer(inputData,year){
  var layers = Map.layers();
  layers.forEach(function ($layer) {
    if ($layer.getName() === inputData.label) {
      Map.layers().remove($layer);
      if(year!== "0")
        inputData.value[1] = 0;
      else
        inputData.value.year[1]=0;
    }
  });
}

function createCheckboxesWithOnClickFunctions() {
  
  var inputData = layers[idxOfLocation];
 
  for (var i = 0; i < layerCategory.length; i++) {
    var Label = ui.Label(layerCategory[i]);
    subPanel.add(Label);
    for (var j = 0; j < inputData[layerCategory[i]].length; j++) {
      var layer = inputData[layerCategory[i]][j].label;
      var checkbox;
      if(layerCategory[i]==='Administrative Boundaries'){
        checkbox = ui.Checkbox(inputData[layerCategory[i]][j].label, false);
        checkbox.onChange(createAdministrativeClickHandler(inputData[layerCategory[i]][j]));
        subPanel.add(checkbox);
      }
      else if(layerCategory[i]==='Hydrological Layers'){
        hydroPanel[layer]['panel'] = ui.Panel();
        checkbox = ui.Checkbox(layer, false);
        if(layer==='Change in Well Depth')
          checkbox.onChange(createWellDepthClickHandler(inputData[layerCategory[i]][j],layer))
        else
          checkbox.onChange(createHydrologicalLayerClickHandler(inputData[layerCategory[i]][j],layer));
        hydroPanel[layer]['panel'].add(checkbox);
        subPanel.add(hydroPanel[layer]['panel']);
      }
      else if(layerCategory[i]==='Climate Variables'){
        climatePanel[layer]['panel'] = ui.Panel();
        checkbox = ui.Checkbox(layer, false);
        checkbox.onChange(createClimateVariableClickHandler(inputData[layerCategory[i]][j],layer));
        climatePanel[layer]['panel'].add(checkbox);
        subPanel.add(climatePanel[layer]['panel']);
      }
      else if(layerCategory[i]==='Landscape variables:'){
        lulcPanel['panel'] = ui.Panel();
        checkbox = ui.Checkbox(layer, false);
        checkbox.onChange(createLulcClickHandler(inputData[layerCategory[i]][j],layer));
        lulcPanel['panel'].add(checkbox);
        subPanel.add(lulcPanel['panel']);
      }
      else if(layerCategory[i]==='Site suitability variables for RWH structures'){
        checkbox = ui.Checkbox(inputData[layerCategory[i]][j].label, false);
        checkbox.onChange(createRwhHandler(inputData[layerCategory[i]][j]));
        subPanel.add(checkbox);
      }
      else{
        checkbox = ui.Checkbox(inputData[layerCategory[i]][j].label, false);
        checkbox.onChange(createClickHandler(inputData[layerCategory[i]][j]));
        subPanel.add(checkbox);
      }
    }
  }
}

function createClickHandler(inputData) {
  return function () {
    Map.setCenter(86.2212694694794, 24.923835150182867, 10);
    if (inputData.value[1] === 0) {
      var layerURL;
      layerURL = ee.FeatureCollection(inputData.value[0]);
      print(layerURL)
      Map.addLayer(layerURL, {}, inputData.label);
      Map.setCenter(inputData.value[2].long, inputData.value[2].lat, 10);
      inputData.value[1] = 1;
    } else 
      removeLayer(inputData);
  };
}

function createRwhHandler(inputData){
  return function () {
    if (inputData.value[1] === 0) {
      var layerURL;
      layerURL = ee.Image.load(inputData.value[0]);
      Map.addLayer(layerURL.selfMask().sldStyle(clart_sld),{min:74.89, max : 193.91, gamma : 0.40}, inputData.label);
      Map.setCenter(inputData.value[2].long, inputData.value[2].lat, 10);
      inputData.value[1] = 1;
    } else 
      removeLayer(inputData);
  };
}

function createAdministrativeClickHandler(inputData) {
  return function () {
    Map.setCenter(86.2212694694794, 24.923835150182867, 10);
    if (inputData.value[1] === 0) {
      var layerURL;
      layerURL = ee.FeatureCollection(inputData.value[0]);
      if(inputData.label === 'State'){
        layerURL = layerURL.filter(ee.Filter.eq('Name', curState));
      }
      print(layerURL)
      Map.addLayer(layerURL, {}, inputData.label);
      Map.setCenter(inputData.value[2].long, inputData.value[2].lat, 10);
      inputData.value[1] = 1;
    } else 
      removeLayer(inputData);
  };
}

function createHydrologicalLayerClickHandler(inputData,layer) {
  return function () {
    
    if(hydroPanel[layer]['yearPanel']){
      hydroPanel[layer]['panel'].remove(hydroPanel[layer]['yearPanel']);
      hydroPanel[layer]['panel'].remove(hydroPanel[layer]['seasonPanel']);
      removeLayer(inputData);
      hydroPanel[layer]['yearPanel'] = null;
      return ;
    }
    
    initYearPanel(inputData,layer);
    
  };
}

function createClimateVariableClickHandler(inputData,layer) {
  return function () {
    
    if(climatePanel[layer]['yearPanel']){
      climatePanel[layer]['panel'].remove(climatePanel[layer]['yearPanel']);
      removeLayer(inputData);
      climatePanel[layer]['yearPanel'] = null;
      return ;
    }
    
    initClimatePanel(inputData,layer);
    
  };
}

function createWellDepthClickHandler(inputData,layer) {
  return function () {
    
    if(hydroPanel[layer]['yearPanel']){
      hydroPanel[layer]['panel'].remove(hydroPanel[layer]['yearPanel']);
      removeLayer(inputData);
      hydroPanel[layer]['yearPanel'] = null;
      return ;
    }
    
    initWellDepthPanel(inputData,layer);
    
  };
}

function createLulcClickHandler(inputData,layer) {
  return function () {
    if(lulcPanel['yearPanel']){
      lulcPanel['panel'].remove(lulcPanel['yearPanel']);
      lulcPanel['panel'].remove(lulcPanel['seasonPanel']);
      removeLayer(inputData);
      lulcPanel['yearPanel'] = null;
      return ;
    }
    initLulcPanel(inputData,layer);
    
  };
}

//--------------------LEGENDS AND COLOR CODING FUNCTIONS--------------------------xxxxx

//This function will set the ET,Runoff,deltaG,etc. properties on the layer 
//according to the year and season
var getLayer = function(layer,year,season){
  return layer.map(function(feature){
    var et = ee.Number(0),dg=ee.Number(0),g=ee.Number(0),p=ee.Number(0),r=ee.Number(0);
    for(var i=0;i<seasonDates[season][year].length;i++){
      var dic = ee.Dictionary(ee.String(feature.get(seasonDates[season][year][i])).decodeJSON());
      var $et = ee.Number(dic.get('ET')).add(et);
      var $dg = ee.Number(dic.get('DeltaG')).add(dg);
      var $g = ee.Number(dic.get('G')).add(g);
      var $p = ee.Number(dic.get('Precipitation')).add(p);
      var $r = ee.Number(dic.get('RunOff')).add(r);
      et = $et; dg = $dg; g = $g; p=$p;r=$r;
    }
    return feature.set('Evapotranspiration',et).set('Change in Groundwater',dg).set('g',g).set('Precipitation',p).set('Runoff',r);
  });
}

var getClimateLayer = function(layer,year){
  return layer.map(function(feature){
    var et = ee.Number(0),dg=ee.Number(0),g=ee.Number(0),p=ee.Number(0),r=ee.Number(0);
    for(var i=0;i<seasonDates[season][year].length;i++){
      var dic = ee.Dictionary(ee.String(feature.get(seasonDates[season][year][i])).decodeJSON());
      var $et = ee.Number(dic.get('ET')).add(et);
      var $dg = ee.Number(dic.get('DeltaG')).add(dg);
      var $g = ee.Number(dic.get('G')).add(g);
      var $p = ee.Number(dic.get('Precipitation')).add(p);
      var $r = ee.Number(dic.get('RunOff')).add(r);
      et = $et; dg = $dg; g = $g; p=$p;r=$r;
    }
    return feature.set('Evapotranspiration',et).set('Change in Groundwater',dg).set('g',g).set('Precipitation',p).set('Runoff',r);
  });
}

var colorCoding = function(table,featureName){
  
  var buckets = 5;
  var maxv = ee.Number(table.aggregate_max(featureName));
  var minv = ee.Number(table.aggregate_min(featureName));
  var m =  maxv.subtract(minv).divide(buckets).ceil();
  var color_codes = ee.Dictionary(hydroColorCoding[featureName]);


  var colorCodedCollection = table.map(function(feature){
    var val = feature.get(featureName);
    if(val === null)
        return feature.set('style', color_codes.get('0.0'));
    var bucket = ee.String(ee.Number(val).subtract(minv).floor().divide(m).floor());
    return feature.set('style', color_codes.get(bucket));
  });
  
  colorCodedCollection = colorCodedCollection.style({
    styleProperty: 'style',
  });
  
  return colorCodedCollection;
}

var colorCodingWellDepth = function(loadedLayer,featureName){
  var colorCodedCollection = loadedLayer.map(function(feature){
    var val = ee.Number(feature.get(featureName));
    return ee.Algorithms.If(val.lt(ee.Number(-5)),setFeature(feature,"#FF0000"),
ee.Algorithms.If(val.lt(ee.Number(-1)),setFeature(feature,"#FFA500"),
ee.Algorithms.If(val.lt(ee.Number(1)),setFeature(feature,"#00FF00"),
ee.Algorithms.If(val.gte(ee.Number(1)),setFeature(feature,"#0000FF"),setFeature(feature,"#000000"))
) ) );
  });
  colorCodedCollection = colorCodedCollection.style({
    styleProperty: 'style',
  });

  return colorCodedCollection;
};

var setFeature = function(feature,color){
  return feature.set('style', {fillColor: color,lineType:'dashed'});
};


// ----------------x------------------x--------------------x----------------x----------------


ui.root.add(panel);
