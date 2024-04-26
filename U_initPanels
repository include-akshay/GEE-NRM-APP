exports.initLulcPanel = function(inputData,layer){
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
          
          //var layerCollection = getLayer(layerURL,selectedYear,selectedLevel);
          //var colorCodedCollection = colorCoding(layerCollection,inputData.label)
          Map.addLayer(layerURL.selfMask().sldStyle(intervals),{min:17, max : 242, gamma : 0.40}, inputData.label);
          //Map.setCenter(inputData.value[2].long, inputData.value[2].lat, 10);
          inputData.value[1] = 1;
        }
      });
      lulcPanel['panel'].add(lulcPanel['seasonPanel']);
    }
  });
  lulcPanel['panel'].add(lulcPanel['yearPanel']);
}
