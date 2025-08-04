import { useState, useEffect, useCallback } from 'react';
import { EnergyData, SystemStatus, AIDecision, WeatherCondition } from '@/types/energy';

export const useEnergySimulation = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [energyData, setEnergyData] = useState<EnergyData[]>([]);
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    solarGeneration: 0,
    windGeneration: 0,
    batteryLevel: 75,
    evDemand: 0,
    gridStatus: 'Connected',
    totalGeneration: 0,
    totalDemand: 0,
    efficiency: 85,
    carbonSaved: 0
  });

  // AI Prediction Model for EV demand
  const predictEnergyDemand = useCallback((hour: number): number => {
    const baseLoad = 2;
    const peakHours = [17, 18, 19, 20]; // Evening peak
    const morningRush = [7, 8, 9]; // Morning commute
    
    let demand = baseLoad;
    if (peakHours.includes(hour)) {
      demand += 8 + Math.random() * 4;
    } else if (morningRush.includes(hour)) {
      demand += 4 + Math.random() * 2;
    } else {
      demand += Math.random() * 2;
    }
    
    return Math.max(0, demand);
  }, []);

  // Solar generation with weather simulation
  const calculateSolarGeneration = useCallback((hour: number): number => {
    if (hour < 6 || hour > 18) return 0;
    
    const solarCurve = Math.sin(((hour - 6) / 12) * Math.PI);
    const cloudFactor = 0.7 + Math.random() * 0.3; // Weather variability
    const peakCapacity = 10; // 10kW peak
    
    return solarCurve * peakCapacity * cloudFactor;
  }, []);

  // Wind generation with realistic variability
  const calculateWindGeneration = useCallback((): number => {
    const baseWind = 3;
    const variability = Math.sin(Date.now() / 10000) * 2; // Slow variation
    const randomFactor = Math.random() * 1.5;
    
    return Math.max(0, baseWind + variability + randomFactor);
  }, []);

  // Advanced AI Decision Making
  const aiEnergyManagement = useCallback((
    solar: number, 
    wind: number, 
    demand: number, 
    batteryLevel: number
  ): AIDecision => {
    const totalGeneration = solar + wind;
    const surplus = totalGeneration - demand;
    const batteryCapacity = 100; // 100kWh battery
    
    let decision: AIDecision = {
      batteryAction: 'hold',
      gridAction: 'none',
      evChargingRate: 'normal',
      priority: 'balanced',
      confidence: 0.8,
      reasoning: 'Maintaining system balance'
    };

    // Smart battery management
    if (surplus > 3 && batteryLevel < 90) {
      decision.batteryAction = 'charge';
      decision.priority = 'storage';
      decision.reasoning = 'Storing excess renewable energy';
      decision.confidence = 0.95;
    } else if (surplus < -3 && batteryLevel > 25) {
      decision.batteryAction = 'discharge';
      decision.priority = 'demand';
      decision.reasoning = 'Supporting demand with stored energy';
      decision.confidence = 0.9;
    }

    // Dynamic EV charging optimization
    if (surplus > 6) {
      decision.evChargingRate = 'fast';
      decision.reasoning = 'High renewable surplus - maximizing charging';
    } else if (surplus < -2 && batteryLevel < 30) {
      decision.evChargingRate = 'slow';
      decision.reasoning = 'Low energy availability - reducing charging rate';
    }

    // Grid interaction strategy
    if (surplus > 8 && batteryLevel > 80) {
      decision.gridAction = 'sell';
      decision.reasoning = 'Selling excess to grid - battery near full';
    } else if (surplus < -4 && batteryLevel < 20) {
      decision.gridAction = 'buy';
      decision.reasoning = 'Importing from grid - low battery reserve';
    }

    return decision;
  }, []);

  // Main simulation step
  const runSimulation = useCallback(() => {
    const hour = currentTime % 24;
    const solar = calculateSolarGeneration(hour);
    const wind = calculateWindGeneration();
    const evDemand = predictEnergyDemand(hour);
    
    const aiDecision = aiEnergyManagement(solar, wind, evDemand, systemStatus.batteryLevel);
    
    // Battery level calculation
    let newBatteryLevel = systemStatus.batteryLevel;
    const surplus = solar + wind - evDemand;
    const efficiency = 0.85; // Battery efficiency
    
    if (aiDecision.batteryAction === 'charge' && surplus > 0) {
      const chargeRate = Math.min(surplus * 0.1 * efficiency, 5); // Max 5% per hour
      newBatteryLevel = Math.min(100, newBatteryLevel + chargeRate);
    } else if (aiDecision.batteryAction === 'discharge' && surplus < 0) {
      const dischargeRate = Math.min(Math.abs(surplus) * 0.1, 8); // Max 8% per hour
      newBatteryLevel = Math.max(0, newBatteryLevel - dischargeRate);
    }

    // Carbon savings calculation (kg CO2)
    const renewableGeneration = solar + wind;
    const carbonSavedPerKWh = 0.5; // kg CO2 per kWh
    const newCarbonSaved = systemStatus.carbonSaved + (renewableGeneration * carbonSavedPerKWh / 24);

    const newStatus: SystemStatus = {
      solarGeneration: solar,
      windGeneration: wind,
      batteryLevel: newBatteryLevel,
      evDemand: evDemand,
      gridStatus: aiDecision.gridAction === 'buy' ? 'Importing' : 
                 aiDecision.gridAction === 'sell' ? 'Exporting' : 'Connected',
      totalGeneration: solar + wind,
      totalDemand: evDemand,
      efficiency: 82 + Math.random() * 6, // 82-88% efficiency
      carbonSaved: newCarbonSaved,
      aiDecision: aiDecision
    };

    setSystemStatus(newStatus);

    // Store historical data
    const dataPoint: EnergyData = {
      time: hour,
      solar: Math.round(solar * 10) / 10,
      wind: Math.round(wind * 10) / 10,
      demand: Math.round(evDemand * 10) / 10,
      battery: Math.round(newBatteryLevel),
      surplus: Math.round(surplus * 10) / 10,
      efficiency: Math.round(newStatus.efficiency)
    };

    setEnergyData(prev => {
      const newData = [...prev, dataPoint];
      return newData.slice(-48); // Keep last 48 hours
    });

    setCurrentTime(prev => prev + 1);
  }, [currentTime, systemStatus, calculateSolarGeneration, calculateWindGeneration, predictEnergyDemand, aiEnergyManagement]);

  // Simulation control
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(runSimulation, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, runSimulation]);

  const toggleSimulation = () => setIsRunning(!isRunning);
  
  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentTime(0);
    setEnergyData([]);
    setSystemStatus({
      solarGeneration: 0,
      windGeneration: 0,
      batteryLevel: 75,
      evDemand: 0,
      gridStatus: 'Connected',
      totalGeneration: 0,
      totalDemand: 0,
      efficiency: 85,
      carbonSaved: 0
    });
  };

  return {
    currentTime,
    isRunning,
    energyData,
    systemStatus,
    toggleSimulation,
    resetSimulation
  };
};