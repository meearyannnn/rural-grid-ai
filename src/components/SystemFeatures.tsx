import { 
  Brain, 
  Zap, 
  Battery, 
  Grid, 
  TrendingUp, 
  Leaf,
  MapPin,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const SystemFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Demand Prediction",
      description: "Advanced machine learning algorithms predict EV charging patterns based on rural usage data and time-of-day analysis",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Zap,
      title: "Smart Charging",
      description: "Dynamic charging rate adjustment based on renewable energy availability and grid conditions",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Battery,
      title: "Battery Optimization",
      description: "Intelligent battery management system maximizing efficiency, longevity, and energy storage capacity",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Grid,
      title: "Grid Integration",
      description: "Bi-directional grid interaction - buy energy when cheap, sell excess renewable generation when profitable",
      color: "text-orange-600 bg-orange-50"
    },
    {
      icon: TrendingUp,
      title: "Real-time Optimization",
      description: "Continuous AI-powered energy management decisions every second with 85%+ system efficiency",
      color: "text-red-600 bg-red-50"
    },
    {
      icon: Leaf,
      title: "Carbon Reduction",
      description: "Tracks and maximizes carbon savings through renewable energy utilization and smart grid management",
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      icon: MapPin,
      title: "Rural Optimization",
      description: "Specifically designed for rural India's energy patterns, infrastructure constraints, and usage behaviors",
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      icon: Clock,
      title: "Predictive Analytics",
      description: "24/7 monitoring with predictive maintenance and energy forecasting for optimal system performance",
      color: "text-cyan-600 bg-cyan-50"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <span>AI System Features & Capabilities</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border-2 border-dashed ${feature.color} hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start space-x-3">
                <feature.icon className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm mb-2">{feature.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};