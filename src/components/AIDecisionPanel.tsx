import { Activity, Brain, Zap, Battery, Grid, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AIDecision } from '@/types/energy';

interface AIDecisionPanelProps {
  decision: AIDecision;
}

export const AIDecisionPanel = ({ decision }: AIDecisionPanelProps) => {
  const getActionColor = (action: string) => {
    switch (action.toLowerCase()) {
      case 'charge': return 'text-green-600 bg-green-50';
      case 'discharge': return 'text-orange-600 bg-orange-50';
      case 'buy': return 'text-red-600 bg-red-50';
      case 'sell': return 'text-blue-600 bg-blue-50';
      case 'fast': return 'text-purple-600 bg-purple-50';
      case 'slow': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return 'text-green-600';
    if (confidence >= 0.7) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <span>AI Energy Management Decision</span>
          <Badge variant="outline" className={getConfidenceColor(decision.confidence)}>
            {(decision.confidence * 100).toFixed(0)}% Confidence
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className={`text-center p-4 rounded-lg border-2 border-dashed ${getActionColor(decision.batteryAction)}`}>
            <Battery className="h-6 w-6 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Battery Action</p>
            <p className="font-bold text-lg">
              {decision.batteryAction.toUpperCase()}
            </p>
          </div>
          
          <div className={`text-center p-4 rounded-lg border-2 border-dashed ${getActionColor(decision.gridAction)}`}>
            <Grid className="h-6 w-6 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Grid Action</p>
            <p className="font-bold text-lg">
              {decision.gridAction.toUpperCase()}
            </p>
          </div>
          
          <div className={`text-center p-4 rounded-lg border-2 border-dashed ${getActionColor(decision.evChargingRate)}`}>
            <Zap className="h-6 w-6 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">EV Charging</p>
            <p className="font-bold text-lg">
              {decision.evChargingRate.toUpperCase()}
            </p>
          </div>
          
          <div className={`text-center p-4 rounded-lg border-2 border-dashed ${getActionColor(decision.priority)}`}>
            <Activity className="h-6 w-6 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Priority</p>
            <p className="font-bold text-lg">
              {decision.priority.toUpperCase()}
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-blue-800">AI Reasoning</p>
              <p className="text-blue-700 text-sm mt-1">{decision.reasoning}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};