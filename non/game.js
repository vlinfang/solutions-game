let solutions = ["Reduced Food Waste", "Health and Education", "Plant-Rich Diets", "Refrigerant Management", "Tropical Forest Restoration", "Onshore Wind Turbines", "Alternative Refrigerants", "Solar Farms", "Clean Cookstoves", "Rooftop Solar", "Silvopasture", "Peatlands", "Tree Plantation (on degraded land)", "Temperate Forest Restoration", "Concentrated Solar Power", "Insulation", "Managed Grazing", "LED Lighting", "Perennial Staple Crops", "Tree Intercropping", "Regenerative Annual Crops", "Conservation Agriculture", "Farmland Restoration", "Electric Cars", "Multistrata Agroforestry", "Offshore Wind Turbines", "High-Performance Glass", "Methane Digesters", "Improved Rice Production", "Indigenous Forest Tenure", "Bamboo", "Alternative Cement", "Hybrid Cars", "Carpooling", "Public Transit", "Smart Thermostats", "Building Automation", "District Heating", "Efficient Aviation", "Geothermal Power", "Forest Protection", "Recycling", "Biogas for Cooking", "Efficient Trucks", "Efficient Ocean Shipping", "Heat Pumps", "Perennial Biocrops", "Solar Hot Water", "Grassland Protection", "System of Rice Intensification", "Nuclear Power", "Bike Infrastructure", "Biomass Power", "Nutrient Management", "Biochar Production", "Landfill Methane Capture", "Composting", "Waste-to-Energy", "Small Hydropower", "Walkable Cities", "Ocean Power", "Empowering Smallholders", "Electric Bikes", "High-Speed Rail", "Farm Irrigation Efficiency", "Recycled Paper", "Telepresence", "Coastal Wetland Protection", "Bioplastics", "Low-Flow Fixtures", "Coastal Wetland Restoration", "Water Distribution Efficiency", "Green and Cool Roofs", "Dynamic Glass", "Electric Freight Trains", "Micro Wind Turbines"];

let q1 = Math.floor(Math.random() * 76 + 1);
let q2 = Math.floor(Math.random() * 76 + 1);
let q3 = Math.floor(Math.random() * 76 + 1);
let q4 = Math.floor(Math.random() * 76 + 1);

let answer = 0;

function solve() {
  if (q1 > answer) {
    answer = q1;
  }
  if (q2 > answer) {
    answer = q2;
  }
  if (q3 > answer) {
    answer = q3;
  }
  if (q4 > answer) {
    answer = q4;
  }
}