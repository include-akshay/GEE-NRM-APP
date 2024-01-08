exports.hydroColorCoding = {
  'Precipitation': {
    '0.0' : {fillColor: '#9bb7ff',lineType:'dashed'},
    '1.0' : {fillColor: '#82a4ff',lineType:'dashed'},
    '2.0' : {fillColor: '#6892ff',lineType:'dashed'},
    '3.0' : {fillColor: '#356dff',lineType:'dashed'},
    '4.0' : {fillColor: '#0248ff',lineType:'dashed'},
  },
}


exports.lulc_levelI =
'<RasterSymbolizer>' +
  '<ColorMap type="intervals" extended="false">' +
  '<ColorMapEntry color="#000000" quantity="0" label="background"/>' +
  '<ColorMapEntry color="#ff0000" quantity="1" label="Built up"/>' +
    '<ColorMapEntry color="#74ccf4" quantity="2" label="Water"/>' +
    '<ColorMapEntry color="#74ccf4" quantity="3" label="Water"/>' +
    '<ColorMapEntry color="#74ccf4" quantity="4" label="Water"/>' +
    '<ColorMapEntry color="#00A300" quantity="5" label="Croplands"/>' +
    '<ColorMapEntry color="#00A300" quantity="6" label="Non - Croplands"/>' +
    '<ColorMapEntry color="#A9A9A9" quantity="7" label="Barren"/>' +
    '<ColorMapEntry color="#00A300" quantity="8" label="Single Kharif Cropping"/>' +
    '<ColorMapEntry color="#00A300" quantity="9" label="Single Non Kharif Cropping"/>' +
    '<ColorMapEntry color="#00A300" quantity="10" label="Double Cropping"/>' +
    '<ColorMapEntry color="#00A300" quantity="11" label="Triple Cropping"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';


exports.lulc_levelII =
'<RasterSymbolizer>' +
  '<ColorMap type="intervals" extended="false">' +
  '<ColorMapEntry color="#000000" quantity="0" label="background"/>' +
  '<ColorMapEntry color="#000000" quantity="1" label="Built up"/>' +
    '<ColorMapEntry color="#000000" quantity="2" label="Water"/>' +
    '<ColorMapEntry color="#000000" quantity="3" label="Water"/>' +
    '<ColorMapEntry color="#000000" quantity="4" label="Water"/>' +
    '<ColorMapEntry color="#f1c232" quantity="5" label="Croplands"/>' +
    '<ColorMapEntry color="#38761d" quantity="6" label="Forest"/>' +
    '<ColorMapEntry color="#000000" quantity="7" label="Barren"/>' +
    '<ColorMapEntry color="#000000" quantity="8" label="Single Kharif Cropping"/>' +
    '<ColorMapEntry color="#000000" quantity="9" label="Single Non Kharif Cropping"/>' +
    '<ColorMapEntry color="#000000" quantity="10" label="Double Cropping"/>' +
    '<ColorMapEntry color="#000000" quantity="11" label="Triple Cropping"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';


exports.lulc_levelIII =
'<RasterSymbolizer>' +
  '<ColorMap type="intervals" extended="false">' +
  '<ColorMapEntry color="#000000" quantity="0" label="background"/>' +
  '<ColorMapEntry color="#000000" quantity="1" label="Built up"/>' +
    '<ColorMapEntry color="#000000" quantity="2" label="Water"/>' +
    '<ColorMapEntry color="#000000" quantity="3" label="Water"/>' +
    '<ColorMapEntry color="#000000" quantity="4" label="Water"/>' +
    '<ColorMapEntry color="#000000" quantity="5" label="Croplands"/>' +
    '<ColorMapEntry color="#000000" quantity="6" label="Non - Croplands"/>' +
    '<ColorMapEntry color="#000000" quantity="7" label="Barren"/>' +
    '<ColorMapEntry color="#f1c232" quantity="8" label="Single Kharif Cropping"/>' +
    '<ColorMapEntry color="#f59d22" quantity="9" label="Single Non Kharif Cropping"/>' +
    '<ColorMapEntry color="#e68600" quantity="10" label="Double Cropping"/>' +
    '<ColorMapEntry color="#b3561d" quantity="11" label="Triple Cropping"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';


exports.lithology_colors =
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


exports.lineaments_colors =
'<RasterSymbolizer>' +
  '<ColorMap type="intervals" extended="false">' +
    '<ColorMapEntry color="#0000FF" quantity="0" label="No Lineament"/>' +
    '<ColorMapEntry color="#FFFFFF" quantity="1" label="Lineament"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';


exports.clart_colors =
'<RasterSymbolizer>' +
  '<ColorMap type="intervals" extended="false">' +
    '<ColorMapEntry color="#5dca21" quantity="1" label="High Recharge Area"/>' +
    '<ColorMapEntry color="#e0ef23" quantity="2" label="Moderate Recharge Structure"/>' +
    '<ColorMapEntry color="#f44336" quantity="3" label="Low Recharge Areas"/>' +
    '<ColorMapEntry color="#b313a7" quantity="4" label="Areas suitable for regeneration"/>' +
    '<ColorMapEntry color="#0000FF" quantity="5" label="High Run off zone"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';
