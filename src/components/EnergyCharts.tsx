import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnergyData, SystemStatus } from '@/types/energy';

interface EnergyChartsProps {
  energyData: EnergyData[];
  systemStatus: SystemStatus;
}

export const EnergyCharts = ({ energyData, systemStatus }: EnergyChartsProps) => {
  const energyMix = [
    { 
      name: 'Solar', 
      value: systemStatus.solarGeneration, 
      color: 'hsl(var(--solar))' 
    },
    { 
      name: 'Wind', 
      value: systemStatus.windGeneration, 
      color: 'hsl(var(--wind))' 
    },
    { 
      name: 'Battery', 
      value: systemStatus.batteryLevel > 50 ? 2 : 0, 
      color: 'hsl(var(--battery))' 
    }
  ].filter(item => item.value > 0);

  const efficiencyData = energyData.slice(-12).map(data => ({
    time: data.time,
    efficiency: data.efficiency,
    generation: data.solar + data.wind,
    demand: data.demand
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Energy Generation vs Demand */}
      <Card>
        <CardHeader>
          <CardTitle>24-Hour Energy Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
                label={{ value: 'Power (kW)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="solar" 
                stroke="hsl(var(--solar))" 
                strokeWidth={3}
                name="Solar Generation"
              />
              <Line 
                type="monotone" 
                dataKey="wind" 
                stroke="hsl(var(--wind))" 
                strokeWidth={3}
                name="Wind Generation"
              />
              <Line 
                type="monotone" 
                dataKey="demand" 
                stroke="hsl(var(--demand))" 
                strokeWidth={3}
                name="EV Demand"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Current Energy Mix */}
      <Card>
        <CardHeader>
          <CardTitle>Current Energy Mix</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={energyMix}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value.toFixed(1)}kW`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {energyMix.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* System Efficiency */}
      <Card>
        <CardHeader>
          <CardTitle>System Efficiency & Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={efficiencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar 
                dataKey="efficiency" 
                fill="hsl(var(--primary))" 
                name="Efficiency (%)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Energy Balance */}
      <Card>
        <CardHeader>
          <CardTitle>Energy Balance (Surplus/Deficit)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
                label={{ value: 'Energy (kW)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar 
                dataKey="surplus" 
                fill="hsl(var(--primary))"
                name="Energy Balance"
                radius={[2, 2, 2, 2]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};