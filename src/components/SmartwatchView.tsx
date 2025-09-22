import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Heart, 
  Activity, 
  Flame, 
  Target,
  Play,
  Pause,
  RotateCcw,
  Timer,
  ArrowLeft,
  ArrowRight,
  Check,
  X
} from "lucide-react";

export function SmartwatchView() {
  const [currentScreen, setCurrentScreen] = useState("main");
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [workoutTime, setWorkoutTime] = useState(0);

  const screens = {
    main: "Main Dashboard",
    workout: "Workout",
    stats: "Today's Stats", 
    heart: "Heart Rate",
    nutrition: "Nutrition",
    wellness: "Wellness"
  };

  const navigateScreen = (direction: 'next' | 'prev') => {
    const screenKeys = Object.keys(screens);
    const currentIndex = screenKeys.indexOf(currentScreen);
    let nextIndex;
    
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % screenKeys.length;
    } else {
      nextIndex = currentIndex === 0 ? screenKeys.length - 1 : currentIndex - 1;
    }
    
    setCurrentScreen(screenKeys[nextIndex]);
  };

  const renderMainScreen = () => (
    <div className="space-y-3">
      <div className="text-center mb-4">
        <div className="text-3xl font-bold text-primary mb-1">2:47</div>
        <div className="text-sm text-gray-600">PM</div>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-red-50 rounded-lg p-3 text-center">
          <Heart className="h-6 w-6 text-red-600 mx-auto mb-1" />
          <div className="text-lg font-bold text-red-900">72</div>
          <div className="text-xs text-red-700">BPM</div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <Activity className="h-6 w-6 text-blue-600 mx-auto mb-1" />
          <div className="text-lg font-bold text-blue-900">8,430</div>
          <div className="text-xs text-blue-700">Steps</div>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-3 text-center">
          <Flame className="h-6 w-6 text-orange-600 mx-auto mb-1" />
          <div className="text-lg font-bold text-orange-900">340</div>
          <div className="text-xs text-orange-700">Calories</div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-3 text-center">
          <Target className="h-6 w-6 text-green-600 mx-auto mb-1" />
          <div className="text-lg font-bold text-green-900">75%</div>
          <div className="text-xs text-green-700">Goals</div>
        </div>
      </div>
    </div>
  );

  const renderWorkoutScreen = () => (
    <div className="space-y-4 text-center">
      <div className="mb-4">
        <div className="text-2xl font-bold mb-1">
          {isWorkoutActive ? "Active Workout" : "Start Workout"}
        </div>
        {isWorkoutActive && (
          <div className="text-lg text-gray-600">
            {Math.floor(workoutTime / 60)}:{String(workoutTime % 60).padStart(2, '0')}
          </div>
        )}
      </div>
      
      {isWorkoutActive ? (
        <div className="space-y-3">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-lg font-bold text-green-900 mb-1">Push-ups</div>
            <div className="text-sm text-green-700">Set 2 of 3</div>
            <div className="text-2xl font-bold text-green-900 mt-2">12 reps</div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsWorkoutActive(false)}
            >
              <Pause className="h-4 w-4 mr-1" />
              Pause
            </Button>
            <Button 
              variant="default" 
              size="sm"
            >
              <Check className="h-4 w-4 mr-1" />
              Complete
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-lg font-bold text-blue-900 mb-1">Quick Workout</div>
            <div className="text-sm text-blue-700">15 min upper body</div>
          </div>
          
          <Button 
            variant="default" 
            className="w-full"
            onClick={() => setIsWorkoutActive(true)}
          >
            <Play className="h-4 w-4 mr-2" />
            Start Workout
          </Button>
        </div>
      )}
    </div>
  );

  const renderStatsScreen = () => (
    <div className="space-y-3">
      <div className="text-center mb-3">
        <div className="text-xl font-bold">Today's Progress</div>
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Steps Goal</span>
            <span className="text-sm font-semibold">8,430/10,000</span>
          </div>
          <Progress value={84} className="h-2" />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Calories</span>
            <span className="text-sm font-semibold">340/500</span>
          </div>
          <Progress value={68} className="h-2" />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Active Minutes</span>
            <span className="text-sm font-semibold">23/30</span>
          </div>
          <Progress value={77} className="h-2" />
        </div>
      </div>
      
      <div className="bg-primary/10 rounded-lg p-3 text-center">
        <div className="text-sm text-primary font-semibold">Great progress!</div>
        <div className="text-xs text-primary/80">Keep it up to reach your goals</div>
      </div>
    </div>
  );

  const renderHeartScreen = () => (
    <div className="space-y-4 text-center">
      <div className="text-xl font-bold mb-3">Heart Rate</div>
      
      <div className="bg-red-50 rounded-lg p-6">
        <Heart className="h-12 w-12 text-red-600 mx-auto mb-2" />
        <div className="text-4xl font-bold text-red-900 mb-1">72</div>
        <div className="text-sm text-red-700">BPM</div>
        <Badge variant="secondary" className="mt-2 bg-red-100 text-red-800">
          Resting
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-gray-50 rounded p-2">
          <div className="font-semibold">Today's Avg</div>
          <div className="text-gray-600">75 BPM</div>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <div className="font-semibold">Max Today</div>
          <div className="text-gray-600">142 BPM</div>
        </div>
      </div>
    </div>
  );

  const renderNutritionScreen = () => (
    <div className="space-y-3">
      <div className="text-center">
        <div className="text-xl font-bold mb-3">Nutrition</div>
      </div>
      
      <div className="bg-green-50 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-green-900 mb-1">1,340</div>
        <div className="text-sm text-green-700">Calories today</div>
        <div className="text-xs text-green-600 mt-1">660 remaining</div>
      </div>
      
      <div className="grid grid-cols-3 gap-1 text-xs">
        <div className="bg-blue-50 rounded p-2 text-center">
          <div className="font-semibold text-blue-900">45g</div>
          <div className="text-blue-700">Protein</div>
        </div>
        <div className="bg-yellow-50 rounded p-2 text-center">
          <div className="font-semibold text-yellow-900">120g</div>
          <div className="text-yellow-700">Carbs</div>
        </div>
        <div className="bg-purple-50 rounded p-2 text-center">
          <div className="font-semibold text-purple-900">35g</div>
          <div className="text-purple-700">Fat</div>
        </div>
      </div>
      
      <Button variant="outline" size="sm" className="w-full">
        Scan Food
      </Button>
    </div>
  );

  const renderWellnessScreen = () => (
    <div className="space-y-3">
      <div className="text-center">
        <div className="text-xl font-bold mb-3">Wellness</div>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-4 text-center">
        <div className="text-lg font-bold text-purple-900 mb-1">Good</div>
        <div className="text-sm text-purple-700">Today's mood</div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-blue-50 rounded p-2 text-center">
          <div className="font-semibold text-blue-900">7h 24m</div>
          <div className="text-blue-700">Sleep</div>
        </div>
        <div className="bg-green-50 rounded p-2 text-center">
          <div className="font-semibold text-green-900">Low</div>
          <div className="text-green-700">Stress</div>
        </div>
      </div>
      
      <Button variant="outline" size="sm" className="w-full">
        Talk to Zen
      </Button>
    </div>
  );

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "main": return renderMainScreen();
      case "workout": return renderWorkoutScreen();
      case "stats": return renderStatsScreen();
      case "heart": return renderHeartScreen();
      case "nutrition": return renderNutritionScreen();
      case "wellness": return renderWellnessScreen();
      default: return renderMainScreen();
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      {/* Smartwatch Frame */}
      <div className="relative mx-auto w-80 h-80 bg-gray-900 rounded-full p-8 shadow-2xl">
        <div className="w-full h-full bg-black rounded-full p-6 relative overflow-hidden">
          {/* Watch Content */}
          <Card className="h-full bg-white">
            <CardContent className="p-4 h-full flex flex-col">
              {/* Screen Indicator */}
              <div className="text-center mb-2">
                <div className="text-xs text-gray-500 font-medium">
                  {screens[currentScreen as keyof typeof screens]}
                </div>
                <div className="flex justify-center gap-1 mt-1">
                  {Object.keys(screens).map((screen, index) => (
                    <div 
                      key={screen}
                      className={`w-1 h-1 rounded-full ${
                        screen === currentScreen ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-hidden">
                {renderCurrentScreen()}
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigateScreen('prev')}
                  className="p-1 h-8 w-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex gap-1">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="p-1 h-8 w-8"
                  >
                    <RotateCcw className="h-3 w-3" />
                  </Button>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigateScreen('next')}
                  className="p-1 h-8 w-8"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Digital Crown */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-gray-700 rounded-l-sm"></div>
        
        {/* Side Button */}
        <div className="absolute right-0 top-1/3 w-2 h-6 bg-gray-700 rounded-l-sm"></div>
      </div>

      {/* Instructions */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <p>Use the arrow buttons to navigate between screens</p>
        <p className="text-xs mt-1">This simulates the smartwatch interface</p>
      </div>
    </div>
  );
}