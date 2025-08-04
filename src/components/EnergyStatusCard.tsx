import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface EnergyStatusCardProps {
  title: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  color: string;
  trend?: number;
}

export const EnergyStatusCard = ({ 
  title, 
  value, 
  unit, 
  icon: Icon, 
  color,
  trend 
}: EnergyStatusCardProps) => {
  return (
    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 border-0 shadow-lg animate-slide-up backdrop-blur-sm">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <CardContent className="relative p-6 z-10">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
              {title}
            </p>
            <div className="flex items-baseline space-x-2">
              <p className={`text-3xl font-bold transition-all duration-300 group-hover:scale-105 ${color}`}>
                {value}
              </p>
              <span className="text-sm text-muted-foreground font-medium">{unit}</span>
            </div>
            {trend !== undefined && (
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                trend > 0 
                  ? 'text-green-700 bg-green-100 group-hover:bg-green-200' 
                  : trend < 0 
                  ? 'text-red-700 bg-red-100 group-hover:bg-red-200' 
                  : 'text-gray-700 bg-gray-100 group-hover:bg-gray-200'
              }`}>
                <span className="mr-1">
                  {trend > 0 ? '↗' : trend < 0 ? '↘' : '→'}
                </span>
                {Math.abs(trend).toFixed(1)}%
              </div>
            )}
          </div>
          <div className={`relative p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-float`}>
            <Icon className={`h-7 w-7 ${color} transition-all duration-300 group-hover:drop-shadow-lg`} />
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color.replace('text-', 'from-')} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};