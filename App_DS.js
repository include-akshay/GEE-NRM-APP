// WHOLE DATA, Any New layer

/* Add any layer here.
  For a new block copy the below code and add to the dicionay "layers" 

  "Block_Name" : {
     "Administrative Boundaries" : [],
      "Hydrological Lyers" : [],
      "Climate Variables " : [],
      "NREGA welfare expenditure:" : [],
      "Landscape variables:" : [],
      "Socio - Economic Variables " : [],
      "Site suitability variables for RWH structures" : []
  },
   For existing blocks, just add, if not available set label as the name you'd want to have, and values should be set to url and '0' indicates that the 
   layer 
   
*/

exports.hydroPanel = {"Precipitation":{},"Evapotranspiration":{},"Runoff":{},"Change in Groundwater":{},"Change in Well Depth":{}};
exports.climatePanel = {"Drought Intensity":{}, "Drought Frequency":{}};
exports.lulcPanel={};
exports.climateYears = ["2016","2017","2018","2019","2020","2021","2022"]
exports.lulcYears = ["2015","2016","2017","2018","2019","2020","2021","2022"]
exports.lulcLevels = ["Level 1", "Level 2","Level 3"]
exports.wellDepthLevels = ["2017-2022","2018-2023"]
exports.layer = {
  "Mohanpur": {
    "Administrative Boundaries": [
      {
        label: "State",
        value: ["projects/ee-jamuidemo/assets/All_All_State_Boundary", 0, {"lat" :24.5559, "long" : 84.67395}],
      },
      {
        label: "Block",
        value: ["projects/ee-anz208490/assets/mohanpur_block_boundary", 0, {"lat" :24.5559, "long" : 84.67395}],
      },
      {
        label: "Panchayat",
        value: ["projects/ee-anz208490/assets/mohanpur_panchayats", 0, {"lat" :24.5559, "long" : 84.67395}],
      },
      {
        label: "Village",
        value: ["projects/ee-akshay-jaskaran/assets/BiharVillageBoundaries", 0, {"lat" :24.5559, "long" : 84.67395}],
      },
    ],
    "Hydrological Layers": [
      {
        label: "Precipitation",
        value: ["projects/ee-dharmisha-siddharth/assets/new_mohanpur_DG", 0, {"lat" :24.5559, "long" : 84.67395}],
      },
      {
        label: "Evapotranspiration",
        value: ["projects/ee-dharmisha-siddharth/assets/new_mohanpur_DG", 0, {"lat" :24.5559, "long" : 84.67395}],
      },
      {
        label: "Runoff",
        value: ["projects/ee-dharmisha-siddharth/assets/new_mohanpur_DG", 0,{"lat" :24.5559, "long" : 84.67395}],
      },
      {
        label: "Change in Groundwater",
        value: ["projects/ee-dharmisha-siddharth/assets/new_mohanpur_DG", 0,{"lat" :24.5559, "long" : 84.67395}],
      },
      {
        label : "Change in Well Depth",
        value : ["projects/ee-dharmisha-siddharth/assets/WellDepths_Mohanpur", 0, {"lat" :24.5559, "long" : 84.67395}],
      },
      ],
    "Climate Variables": [
      {
        label: "Drought Intensity",
        value: ["projects/ee-rittwick-n-tirumal/assets/Mohanpur_kharif_drought_frequency_intensity_2016_2022", 0, {"lat" :24.5559, "long" : 84.67395}],
      },
      {
        label: "Drought Frequency",
        value: ["projects/ee-rittwick-n-tirumal/assets/Mohanpur_kharif_drought_frequency_intensity_2016_2022", 0, {"lat" :24.5559, "long" : 84.67395}],
      },
    ],
    "NREGA welfare expenditure:" : [],
    "Landscape variables:" : [
      {
        label: "Land Use Land Cover",
        value: ["projects/ee-rittwick-n-tirumal/assets/Mohanpur_2016-07-01_2017-06-30_LULCmap_30m",0, {"lat" :24.5559, "long" : 84.67395}],
      },
    ],
    "Socio - Economic Variables" : [],
    "Site suitability variables for RWH structures": [
      {
        label: "Clart",
        value: ["projects/ee-priyadarshini/assets/clart_mohanpur", 0, {"lat" :24.5559, "long" : 84.67395}],
      },
    ],
  },



  "Masalia": {
    "Administrative Boundaries": [
      {
        label: "State",
        value: ["projects/ee-jamuidemo/assets/All_All_State_Boundary", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
      {
        label: "Block",
        value: ["projects/ee-anz208490/assets/masalia_block_boundary", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
      {
        label: "Panchayat",
        value: ["projects/ee-anz208490/assets/masalia_panchayats", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
      {
        label: "Village",
        value: ["projects/ee-akshay-jaskaran/assets/JharkhandVillageBoundaries", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
    ],
    "Hydrological Layers": [
      {
        label: "Precipitation",
        value: ["projects/ee-dharmisha-siddharth/assets/new_masalia_DG", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
      {
        label: "Evapotranspiration",
        value: ["projects/ee-dharmisha-siddharth/assets/new_masalia_DG", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
      {
        label: "Runoff",
        value: ["projects/ee-dharmisha-siddharth/assets/new_masalia_DG", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
      {
        label: "Change in Groundwater",
        value: ["projects/ee-dharmisha-siddharth/assets/new_masalia_DG", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
      {
        label : "Change in Well Depth",
        value : ["projects/ee-dharmisha-siddharth/assets/WellDepths_Masalia", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
    ],
    "Climate Variables": [
      {
        label: "Drought Intensity",
        value: ["projects/ee-rittwick-n-tirumal/assets/Masalia_kharif_drought_frequency_intensity_2016_2022", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
      {
        label: "Drought Frequency",
        value: ["projects/ee-rittwick-n-tirumal/assets/Masalia_kharif_drought_frequency_intensity_2016_2022", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
    ],
    "NREGA welfare expenditure:" : [],
    "Landscape variables:" : [
      {
        label: "Land Use Land Cover",
        value:["projects/ee-rittwick-n-tirumal/assets/Masalia_2016-07-01_2017-06-30_LULCmap_30m",0, {"lat" :24.155945, "long" : 87.177757}],
      },
    ],
    "Socio - Economic Variables" : [],
    "Site suitability variables for RWH structures": [
      {
        label: "Clart",
        value: ["projects/ee-priyadarshini/assets/clart_masalia", 0, {"lat" :24.155945, "long" : 87.177757}],
      },
    ],
  },
  
  
  
  "Angul": {
    "Administrative Boundaries": [
      {
        label: "State",
        value: ["projects/ee-jamuidemo/assets/All_All_State_Boundary", 0, {"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
      {
        label: "Block",
        value: ["projects/ee-anz208490/assets/angul_block_boundary", 0, {"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
      {
        label: "Panchayat",
        value: ["projects/ee-anz208490/assets/angul_panchayats", 0,{"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
      {
        label: "Village",
        value: ["projects/ee-akshay-jaskaran/assets/OdishaVillageBoundaries", 0, {"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
    ],
    "Hydrological Layers": [
      {
        label: "Precipitation",
        value: ["projects/ee-dharmisha-siddharth/assets/new_angul_DG", 0, {"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
      {
        label: "Evapotranspiration",
        value: ["projects/ee-dharmisha-siddharth/assets/new_angul_DG", 0, {"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
      {
        label: "Runoff",
        value: ["projects/ee-dharmisha-siddharth/assets/new_angul_DG", 0,{"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
      {
        label: "Change in Groundwater",
        value: ["projects/ee-dharmisha-siddharth/assets/new_angul_DG", 0,{"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
      {
        label : "Change in Well Depth",
        value : ["projects/ee-dharmisha-siddharth/assets/WellDepths_Angul", 0, {"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
    ],
    "Climate Variables": [
      {
        label: "Drought Intensity",
        value: ["projects/ee-rittwick-n-tirumal/assets/Angul_kharif_drought_frequency_intensity_2016_2022", 0,  {"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
      {
        label: "Drought Frequency",
        value: ["projects/ee-rittwick-n-tirumal/assets/Angul_kharif_drought_frequency_intensity_2016_2022", 0,  {"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
    ],
    "NREGA welfare expenditure:" : [],
    "Landscape variables:" : [
      {
        label: "Land Use Land Cover",
        value:["projects/ee-rittwick-n-tirumal/assets/Angul_2016-07-01_2017-06-30_LULCmap_30m",0, {"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
    ],
    "Socio - Economic Variables" : [],
    "Site suitability variables for RWH structures": [
      {
        label: "Clart",
        value: ["projects/ee-priyadarshini/assets/clart_angul", 0,{"lat" : 20.8444033, "long" : 85.15108179999993}],
      },
    ],
  },
  
  
  "Pindwara": {
    "Administrative Boundaries": [
      {
        label: "State",
        value: ["projects/ee-jamuidemo/assets/All_All_State_Boundary", 0, {"lat" : 24.84166, "long" : 73.08755}],
      },
      {
        label: "Block",
        value: ["projects/ee-anz208490/assets/pindwara_block_boundary", 0 , {"lat" : 24.84166, "long" : 73.08755}],
      },
      {
        label: "Panchayat",
        value: ["projects/ee-anz208490/assets/pindwara_panchayats", 0, {"lat" : 24.84166, "long" : 73.08755}],
      },
      {
        label: "Village",
        value: ["projects/ee-akshay-jaskaran/assets/RajasthanVillageBoundaries", 0, {"lat" : 24.84166, "long" : 73.08755}],
      },
    ],
    "Hydrological Layers": [
      {
        label: "Precipitation",
        value: ["projects/ee-dharmisha-siddharth/assets/new_pindwara_DG", 0, {"lat" : 24.84166, "long" : 73.08755}],
      },
      {
        label: "Evapotranspiration",
        value: ["projects/ee-dharmisha-siddharth/assets/new_pindwara_DG", 0, {"lat" : 24.84166, "long" : 73.08755}],
      },
      {
        label: "Runoff",
        value: ["projects/ee-dharmisha-siddharth/assets/new_pindwara_DG", 0, {"lat" : 24.84166, "long" : 73.08755}],
      },
      {
        label: "Change in Groundwater",
        value: ["projects/ee-dharmisha-siddharth/assets/new_pindwara_DG", 0, {"lat" : 24.84166, "long" : 73.08755}],
      },
      {
        label : "Change in Well Depth",
        value : ["projects/ee-dharmisha-siddharth/assets/WellDepths_Pindwara", 0, {"lat" : 24.84166, "long" : 73.08755}],
      },
      ],
    "Climate Variables": [
      {
        label: "Drought Intensity",
        value: ["projects/ee-rittwick-n-tirumal/assets/Pindwara_kharif_drought_frequency_intensity_2016_2022", 0, {"lat" : 24.84166, "long" : 73.08755}],
      },
      {
        label: "Drought Frequency",
        value: ["projects/ee-rittwick-n-tirumal/assets/Pindwara_kharif_drought_frequency_intensity_2016_2022", 0, {"lat" : 24.84166, "long" : 73.08755}],
      },
    ],
    
    "NREGA welfare expenditure:" : [],
    "Landscape variables:" : [
      {
        label: "Land Use Land Cover",
        value:["projects/ee-rittwick-n-tirumal/assets/Pindwara_2016-07-01_2017-06-30_LULCmap_30m",0, {"lat" : 24.84166, "long" : 73.08755}],
      },
    ],
    "Socio - Economic Variables" : [],
    "Site suitability variables for RWH structures": [
      {
        label: "Clart",
        value: ["projects/ee-priyadarshini/assets/clart_pindwara", 0,{"lat" : 24.84166, "long" : 73.08755}],
      },
    ],
  },
  
  
  "Mandalgarh": {
    "Administrative Boundaries": [
      {
        label: "State",
        value: ["projects/ee-jamuidemo/assets/All_All_State_Boundary", 0,  {"lat" : 25.22583, "long" : 75.11423}],
      },
      {
        label: "Block",
        value: ["projects/ee-anz208490/assets/mandalgarh_block_boundary", 0, {"lat" : 25.22583, "long" : 75.11423}],
      },
      {
        label: "Panchayat",
        value: ["projects/ee-anz208490/assets/mandalgarh_panchayats", 0, {"lat" : 25.22583, "long" : 75.11423}],
      },
      {
        label: "Village",
        value: ["projects/ee-akshay-jaskaran/assets/RajasthanVillageBoundaries", 0, {"lat" : 25.22583, "long" : 75.11423}],
      },
    ],
    "Hydrological Layers": [
      {
        label: "Precipitation",
        value: ["projects/ee-dharmisha-siddharth/assets/new_mandalgarh_DG", 0,{"lat" : 25.22583, "long" : 75.11423}],
      },
      {
        label: "Evapotranspiration",
        value: ["projects/ee-dharmisha-siddharth/assets/new_mandalgarh_DG", 0, {"lat" : 25.22583, "long" : 75.11423}],
      },
      {
        label: "Runoff",
        value: ["projects/ee-dharmisha-siddharth/assets/new_mandalgarh_DG", 0, {"lat" : 25.22583, "long" : 75.11423}],
      },
      {
        label: "Change in Groundwater",
        value: ["projects/ee-dharmisha-siddharth/assets/new_mandalgarh_DG", 0,{"lat" : 25.22583, "long" : 75.11423}],
      },
      {
        label : "Change in Well Depth",
        value : ["projects/ee-dharmisha-siddharth/assets/WellDepths_Mandalgarh", 0, {"lat" : 25.22583, "long" : 75.11423}],
      },
      ],
    "Climate Variables": [
      {
        label: "Drought Intensity",
        value: ["projects/ee-rittwick-n-tirumal/assets/Mandalgarh_kharif_drought_frequency_intensity_2016_2022", 0, {"lat" : 25.22583, "long" : 75.11423}],
      },
      {
        label: "Drought Frequency",
        value: ["projects/ee-rittwick-n-tirumal/assets/Mandalgarh_kharif_drought_frequency_intensity_2016_2022", 0, {"lat" : 25.22583, "long" : 75.11423}],
      },
    ],
    "NREGA welfare expenditure:" : [],
    "Landscape variables:" : [
      {
        label: "Land Use Land Cover",
        value:["projects/ee-rittwick-n-tirumal/assets/Mandalgarh_2016-07-01_2017-06-30_LULCmap_30m",0,  {"lat" : 25.22583, "long" : 75.11423}],
      },
    ],
    "Socio - Economic Variables" : [],
    "Site suitability variables for RWH structures": [
      {
        label: "Clart",
        value: ["projects/ee-priyadarshini/assets/clart_mandalgarh", 0, {"lat" : 25.22583, "long" : 75.11423}],
      },
    ],
  },
};


exports.layerCategory = [
  "Administrative Boundaries",
  "Hydrological Layers",
  "Climate Variables",
  "NREGA welfare expenditure:",
  "Landscape variables:",
  "Socio - Economic Variables",
  "Site suitability variables for RWH structures",
];



exports.seasonDates = {
  'Kharif':{'2016-2017' : [],
  '2017-2018' : ["2017-07-01","2017-07-15","2017-07-29","2017-08-12","2017-08-26","2017-09-09","2017-09-23", "2017-10-07","2017-10-21" ],
  '2018-2019': ["2018-07-01","2018-07-15", "2018-07-29","2018-08-12","2018-08-26","2018-09-09","2018-09-23","2018-10-07","2018-10-21" ], 
  '2019-2020': ["2019-07-01","2019-07-15","2019-07-29","2019-08-12","2019-08-26","2019-09-09","2019-09-23","2019-10-07","2019-10-21"], 
  '2020-2021':["2020-07-01","2020-07-15","2020-07-29","2020-08-12","2020-08-26","2020-09-09","2020-09-23","2020-10-07","2020-10-21"],
  '2021-2022' : ["2021-07-01","2021-07-15","2021-07-29","2021-08-12","2021-08-26","2021-09-09","2021-09-23","2021-10-07","2021-10-21"],
  '2022-2023':["2022-07-01","2022-07-15","2022-07-29","2022-08-12","2022-08-26","2022-09-09","2022-09-23","2022-10-07","2022-10-21"],
  '2023-2024':[]},
  
  
  'Rabi':{'2016-2017' : [],
  '2017-2018' : ["2017-11-04","2017-11-18","2017-12-02","2017-12-16","2017-12-30","2018-01-13", "2018-01-27","2018-02-10","2018-02-24"], 
  '2018-2019':["2018-11-04","2018-11-18","2018-12-02","2018-12-16","2018-12-30","2019-01-13","2019-01-27","2019-02-10","2019-02-24"], 
  '2019-2020' : ["2019-11-04", "2019-11-18","2019-12-02","2019-12-16","2019-12-30","2020-01-13","2020-01-27","2020-02-10","2020-02-24"], 
  '2020-2021':["2020-11-04","2020-11-18","2020-12-02","2020-12-16","2020-12-30","2021-01-13","2021-01-27","2021-02-10","2021-02-24"],
  '2021-2022' : ["2021-11-04","2021-11-18","2021-12-02","2021-12-16","2021-12-30", "2022-01-13","2022-01-27","2022-02-10","2022-02-24"],
  '2022-2023':["2022-11-04","2022-11-18","2022-12-02","2022-12-16","2022-12-30","2023-01-13","2023-01-27","2023-02-10","2023-02-24"],
  '2023-2024':[]},
  
  
  'Zaid':{'2016-2017' : [],
  '2017-2018' : ["2018-03-10","2018-03-24","2018-04-07","2018-04-21","2018-05-05","2018-05-19","2018-06-02","2018-06-16"], 
  '2018-2019':["2019-03-10","2019-03-24","2019-04-07","2019-04-21","2019-05-05","2019-05-19","2019-06-02","2019-06-16"], 
  '2019-2020' : ["2020-03-09","2020-03-23","2020-04-06","2020-04-20","2020-05-04","2020-05-18","2020-06-01","2020-06-15"], 
  '2020-2021':["2021-03-10","2021-03-24","2021-04-07","2021-04-21","2021-05-05","2021-05-19","2021-06-02","2021-06-16"],
  '2021-2022' : ["2022-03-10","2022-03-24","2022-04-07","2022-04-21","2022-05-05","2022-05-19","2022-06-02","2022-06-16"], 
  '2022-2023':["2023-03-10","2023-03-24","2023-04-07","2023-04-21","2023-05-05","2023-05-19","2023-06-02","2023-06-16"],
  '2023-2024':[]}
};



