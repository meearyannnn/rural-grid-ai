import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  Brain, 
  TrendingUp, 
  Leaf, 
  Target,
  BarChart3,
  Shield,
  Lightbulb,
  DollarSign,
  Users
} from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  type: 'title' | 'content' | 'demo' | 'stats';
}

const PresentationSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "AI-Powered Hybrid Energy System",
      subtitle: "Revolutionizing Rural Energy Management",
      type: 'title',
      content: (
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-solar via-wind to-battery rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="flex justify-center space-x-6 mb-8">
                <div className="p-4 bg-solar/20 rounded-full">
                  <Zap className="w-8 h-8 text-solar" />
                </div>
                <div className="p-4 bg-wind/20 rounded-full">
                  <Brain className="w-8 h-8 text-wind" />
                </div>
                <div className="p-4 bg-battery/20 rounded-full">
                  <Leaf className="w-8 h-8 text-battery" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart • Sustainable • Scalable</h3>
              <p className="text-muted-foreground text-lg">
                Intelligent energy optimization for rural communities
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "The Challenge",
      type: 'content',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-500" />
                  Rural Energy Problems
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">High Costs</Badge>
                  <span className="text-sm">Grid extension expenses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Unreliable</Badge>
                  <span className="text-sm">Frequent power outages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Carbon Footprint</Badge>
                  <span className="text-sm">Fossil fuel dependency</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-green-500" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500/20 text-green-500">AI-Optimized</Badge>
                  <span className="text-sm">Smart energy management</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-500/20 text-blue-500">Hybrid Power</Badge>
                  <span className="text-sm">Solar + Wind + Battery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-500/20 text-purple-500">Cost Effective</Badge>
                  <span className="text-sm">40% efficiency improvement</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "How Our AI Makes Decisions",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <Brain className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
            <p className="text-lg text-muted-foreground">Multi-factor decision engine analyzing real-time data</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-solar/10 to-solar/5">
              <CardHeader>
                <CardTitle className="text-lg">Input Factors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-solar rounded-full animate-pulse"></div>
                  <span>Solar generation (time + weather)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-wind rounded-full animate-pulse"></div>
                  <span>Wind power output</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-battery rounded-full animate-pulse"></div>
                  <span>Battery state & capacity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-demand rounded-full animate-pulse"></div>
                  <span>EV demand prediction</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <CardTitle className="text-lg">Decision Priorities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-500/20 text-green-500">1</Badge>
                  <span>Energy surplus → Charge battery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-orange-500/20 text-orange-500">2</Badge>
                  <span>Energy deficit → Discharge battery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-500/20 text-blue-500">3</Badge>
                  <span>Grid interaction optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-purple-500/20 text-purple-500">4</Badge>
                  <span>EV charging rate adjustment</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Key Questions & Answers",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
              <CardHeader>
                <CardTitle className="text-lg">Extended Low Generation?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Battery reserves provide backup power</li>
                  <li>• Smart grid import when needed</li>
                  <li>• Reduced EV charging to 'slow' mode</li>
                  <li>• Critical loads get priority</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <CardHeader>
                <CardTitle className="text-lg">Peak Demand Handling?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Predictive battery pre-charging</li>
                  <li>• Dynamic load balancing</li>
                  <li>• Grid import when insufficient</li>
                  <li>• Time-shift energy usage</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <CardHeader>
                <CardTitle className="text-lg">Scalability?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Modular hardware design</li>
                  <li>• Configurable parameters</li>
                  <li>• Adaptive algorithms</li>
                  <li>• Remote monitoring system</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10">
              <CardHeader>
                <CardTitle className="text-lg">ROI vs Traditional?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 30-40% efficiency improvement</li>
                  <li>• 3-5 year payback period</li>
                  <li>• Revenue from grid sales</li>
                  <li>• Lower maintenance costs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Impact & Results",
      type: 'stats',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <TrendingUp className="w-12 h-12 text-green-500 mx-auto animate-float" />
                  <div>
                    <div className="text-3xl font-bold text-green-500">40%</div>
                    <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Leaf className="w-12 h-12 text-blue-500 mx-auto animate-float" />
                  <div>
                    <div className="text-3xl font-bold text-blue-500">85%</div>
                    <div className="text-sm text-muted-foreground">Carbon Reduction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <DollarSign className="w-12 h-12 text-purple-500 mx-auto animate-float" />
                  <div>
                    <div className="text-3xl font-bold text-purple-500">3-5</div>
                    <div className="text-sm text-muted-foreground">Years Payback</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
            <CardHeader>
              <CardTitle className="text-center">Real-World Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Community Benefits
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Reliable 24/7 power supply</li>
                    <li>• Reduced electricity costs</li>
                    <li>• Local job creation</li>
                    <li>• Energy independence</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Technical Advantages
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Predictive maintenance</li>
                    <li>• Real-time optimization</li>
                    <li>• Scalable architecture</li>
                    <li>• Remote monitoring</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 6,
      title: "Thank You",
      subtitle: "Questions & Discussion",
      type: 'title',
      content: (
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <BarChart3 className="w-16 h-16 text-primary animate-float" />
                </div>
                <h3 className="text-2xl font-bold">Ready for Demo & Questions</h3>
                <p className="text-muted-foreground text-lg">
                  Let's explore the future of rural energy together
                </p>
                <div className="flex justify-center space-x-4">
                  <Badge className="bg-solar/20 text-solar">Solar Optimized</Badge>
                  <Badge className="bg-wind/20 text-wind">Wind Powered</Badge>
                  <Badge className="bg-battery/20 text-battery">AI Managed</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Slide Content */}
        <div className="mb-8">
          <Card className="bg-card/80 backdrop-blur-sm border border-white/10 min-h-[600px]">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {currentSlideData.title}
              </CardTitle>
              {currentSlideData.subtitle && (
                <p className="text-xl text-muted-foreground mt-2">
                  {currentSlideData.subtitle}
                </p>
              )}
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="animate-fade-in">
                {currentSlideData.content}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="bg-card/80 backdrop-blur-sm border-white/10"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          <Button 
            variant="outline" 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="bg-card/80 backdrop-blur-sm border-white/10"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-muted-foreground">
            {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PresentationSlides;