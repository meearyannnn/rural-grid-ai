export interface EnergyData {
  time: number;
  solar: number;
  wind: number;
  demand: number;
  battery: number;
  surplus: number;
  efficiency: number;
}

export interface SystemStatus {
  solarGeneration: number;
  windGeneration: number;
  batteryLevel: number;
  evDemand: number;
  gridStatus: 'Connected' | 'Importing' | 'Exporting' | 'Offline';
  totalGeneration: number;
  totalDemand: number;
  aiDecision?: AIDecision;
  efficiency: number;
  carbonSaved: number;
}

export interface AIDecision {
  batteryAction: 'charge' | 'discharge' | 'hold';
  gridAction: 'buy' | 'sell' | 'none';
  evChargingRate: 'fast' | 'normal' | 'slow';
  priority: 'storage' | 'demand' | 'grid' | 'balanced';
  confidence: number;
  reasoning: string;
}

export interface WeatherCondition {
  sunIntensity: number; // 0-1
  windSpeed: number; // m/s
  cloudCover: number; // 0-1
  temperature: number; // Celsius
}

export interface SimulationConfig {
  timeStep: number; // seconds
  batteryCapacity: number; // kWh
  solarCapacity: number; // kW
  windCapacity: number; // kW
  location: {
    latitude: number;
    longitude: number;
    name: string;
  };
}