import { Play, Pause, RotateCcw, Leaf, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEnergySimulation } from '@/hooks/useEnergySimulation';
import { EnergyStatusCard } from '@/components/EnergyStatusCard';
import { AIDecisionPanel } from '@/components/AIDecisionPanel';
import { EnergyCharts } from '@/components/EnergyCharts';
import { SystemFeatures } from '@/components/SystemFeatures';
import { Battery, Sun, Wind, Activity } from 'lucide-react';

export const HybridEnergyDashboard = () => {
  const {
    currentTime,
    isRunning,
    energyData,
    systemStatus,
    toggleSimulation,
    resetSimulation
  } = useEnergySimulation();

  const formatTime = (time: number) => {
    const days = Math.floor(time / 24);
    const hours = time % 24;
    return `${days}d ${hours.toString().padStart(2, '0')}:00h`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-green-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-green-500/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-blue-500/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto p-6 space-y-8">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 animate-slide-down">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative p-4 bg-gradient-to-br from-primary via-green-600 to-emerald-600 rounded-2xl shadow-lg animate-pulse-glow">
              <Leaf className="h-10 w-10 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-green-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-sm">
                Smart Rural EV Charging
              </h1>
              <div className="text-2xl font-semibold text-muted-foreground mt-1">
                AI-Powered Energy Management
              </div>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Intelligent hybrid energy system combining solar, wind, and battery storage with 
            AI-driven optimization for sustainable rural mobility infrastructure
          </p>
          
          {/* Enhanced Control Panel */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
            <Button 
              onClick={toggleSimulation}
              variant={isRunning ? "destructive" : "default"}
              size="lg"
              className={`min-w-[180px] h-12 text-base font-semibold transition-all duration-300 ${
                isRunning 
                  ? 'hover:scale-105 shadow-lg hover:shadow-xl' 
                  : 'hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-green-600'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="mr-3 h-5 w-5" />
                  Pause Simulation
                </>
              ) : (
                <>
                  <Play className="mr-3 h-5 w-5" />
                  Start Simulation
                </>
              )}
            </Button>
            
            <Button 
              onClick={resetSimulation}
              variant="outline"
              size="lg"
              className="min-w-[120px] h-12 text-base font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <RotateCcw className="mr-3 h-5 w-5" />
              Reset
            </Button>
            
            <Badge variant="outline" className="px-6 py-3 text-base font-medium bg-white/10 backdrop-blur-sm border-white/20">
              <Activity className="mr-2 h-5 w-5" />
              Runtime: {formatTime(currentTime)}
            </Badge>
            
            <Badge 
              variant={isRunning ? "default" : "secondary"}
              className={`px-6 py-3 text-base font-medium transition-all duration-300 ${
                isRunning 
                  ? 'bg-green-500 text-white animate-pulse-glow' 
                  : 'bg-gray-500 text-white'
              }`}
            >
              {isRunning ? '🟢 Active' : '🔴 Stopped'}
            </Badge>
          </div>
        </div>

        {/* Energy Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          <EnergyStatusCard
            title="Solar Generation"
            value={systemStatus.solarGeneration.toFixed(1)}
            unit="kW"
            icon={Sun}
            color="text-energy-solar"
          />
          <EnergyStatusCard
            title="Wind Generation"
            value={systemStatus.windGeneration.toFixed(1)}
            unit="kW"
            icon={Wind}
            color="text-energy-wind"
          />
          <EnergyStatusCard
            title="Battery Level"
            value={systemStatus.batteryLevel.toFixed(0)}
            unit="%"
            icon={Battery}
            color="text-energy-battery"
          />
          <EnergyStatusCard
            title="EV Demand"
            value={systemStatus.evDemand.toFixed(1)}
            unit="kW"
            icon={Zap}
            color="text-energy-demand"
          />
        </div>

        {/* Enhanced Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-zoom-in">
          <div className="group relative bg-gradient-to-br from-card to-card/80 p-6 rounded-2xl shadow-lg border-0 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                  System Efficiency
                </p>
                <p className="text-3xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                  {systemStatus.efficiency.toFixed(1)}%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${systemStatus.efficiency}%` }}
                  />
                </div>
              </div>
              <div className="relative p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 group-hover:scale-110 transition-transform duration-300">
                <Activity className="h-8 w-8 text-primary animate-pulse" />
              </div>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-card to-card/80 p-6 rounded-2xl shadow-lg border-0 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                  Carbon Saved
                </p>
                <p className="text-3xl font-bold text-green-600 group-hover:scale-105 transition-transform duration-300">
                  {systemStatus.carbonSaved.toFixed(1)} kg
                </p>
                <div className="text-xs text-green-600 mt-1 font-medium">
                  ≈ {(systemStatus.carbonSaved * 2.2).toFixed(1)} lbs CO₂
                </div>
              </div>
              <div className="relative p-3 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Leaf className="h-8 w-8 text-green-600 animate-float" />
              </div>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-card to-card/80 p-6 rounded-2xl shadow-lg border-0 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                  Grid Status
                </p>
                <p className="text-2xl font-bold text-blue-600 group-hover:scale-105 transition-transform duration-300">
                  {systemStatus.gridStatus}
                </p>
                <div className="flex items-center mt-2 space-x-2">
                  <div className={`h-3 w-3 rounded-full animate-pulse ${
                    systemStatus.gridStatus === 'Exporting' ? 'bg-green-500' :
                    systemStatus.gridStatus === 'Importing' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <span className="text-xs text-muted-foreground">
                    {systemStatus.gridStatus === 'Exporting' ? 'Selling Energy' :
                     systemStatus.gridStatus === 'Importing' ? 'Buying Energy' : 'Standby'}
                  </span>
                </div>
              </div>
              <div className="relative p-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Decision Panel */}
        {systemStatus.aiDecision && (
          <AIDecisionPanel decision={systemStatus.aiDecision} />
        )}

        {/* Charts */}
        <EnergyCharts energyData={energyData} systemStatus={systemStatus} />

        {/* System Features */}
        <SystemFeatures />

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>
            🌱 Sustainable Energy Solutions for Rural India | 
            AI-Powered Smart Grid Technology | 
            Carbon Neutral EV Charging Infrastructure
          </p>
        </div>
      </div>
    </div>
  );
};