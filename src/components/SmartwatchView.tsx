import { useState, useEffect } from "react";
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
  X,
  Clock,
  Navigation,
  Sun,
  Moon,
  Zap,
  Droplets,
  MoreHorizontal
} from "lucide-react";

export function SmartwatchView() {
  const [currentScreen, setCurrentScreen] = useState("watchface");
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let workoutTimer: NodeJS.Timeout;
    if (isWorkoutActive) {
      workoutTimer = setInterval(() => {
        setWorkoutTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(workoutTimer);
  }, [isWorkoutActive]);

  const screens = {
    watchface: "Watch Face",
    workout: "Workout",
    stats: "Activity", 
    heart: "Heart Rate",
    nutrition: "Nutrition",
    wellness: "Wellness",
    apps: "Apps"
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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const renderWatchFace = () => (
    <div className="h-full flex flex-col justify-between relative">
      {/* Time Display */}
      <div className="text-center pt-4">
        <div className="text-4xl font-bold text-gray-900 mb-1 tracking-tight">
          {formatTime(currentTime)}
        </div>
        <div className="text-sm text-gray-600 font-medium">
          {formatDate(currentTime)}
        </div>
      </div>
      
      {/* Activity Rings */}
      <div className="flex justify-center my-4">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            {/* Move Ring */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#FF0000"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${84 * 2.51} 251`}
              className="opacity-30"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#FF0000"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${(84 * 0.75) * 2.51} 251`}
              strokeLinecap="round"
            />
            
            {/* Exercise Ring */}
            <circle
              cx="50"
              cy="50"
              r="32"
              stroke="#00FF00"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${68 * 2.01} 201`}
              className="opacity-30"
            />
            <circle
              cx="50"
              cy="50"
              r="32"
              stroke="#00FF00"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${(68 * 0.45) * 2.01} 201`}
              strokeLinecap="round"
            />
            
            {/* Stand Ring */}
            <circle
              cx="50"
              cy="50"
              r="24"
              stroke="#0099FF"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${77 * 1.51} 151`}
              className="opacity-30"
            />
            <circle
              cx="50"
              cy="50"
              r="24"
              stroke="#0099FF"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${(77 * 0.60) * 1.51} 151`}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-1 text-center text-xs pb-2">
        <div>
          <Heart className="h-3 w-3 mx-auto mb-1 text-red-600" />
          <div className="font-bold text-red-900">72</div>
        </div>
        <div>
          <Activity className="h-3 w-3 mx-auto mb-1 text-blue-600" />
          <div className="font-bold text-blue-900">8.4k</div>
        </div>
        <div>
          <Flame className="h-3 w-3 mx-auto mb-1 text-orange-600" />
          <div className="font-bold text-orange-900">340</div>
        </div>
      </div>
    </div>
  );

  const renderWorkoutScreen = () => (
    <div className="h-full flex flex-col justify-between p-2">
      <div className="text-center">
        <div className="text-lg font-bold mb-2">
          {isWorkoutActive ? "Workout Active" : "Start Workout"}
        </div>
        {isWorkoutActive && (
          <div className="text-2xl font-bold text-primary mb-2">
            {Math.floor(workoutTime / 60)}:{String(workoutTime % 60).padStart(2, '0')}
          </div>
        )}
      </div>
      
      {isWorkoutActive ? (
        <div className="space-y-3">
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <div className="font-bold text-green-900 mb-1">Push-ups</div>
            <div className="text-xs text-green-700">Set 2 of 3</div>
            <div className="text-xl font-bold text-green-900 mt-1">12 reps</div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setIsWorkoutActive(false);
                setWorkoutTime(0);
              }}
              className="text-xs"
            >
              <Pause className="h-3 w-3 mr-1" />
              End
            </Button>
            <Button 
              variant="default" 
              size="sm"
              className="text-xs bg-green-600 hover:bg-green-700"
            >
              <Check className="h-3 w-3 mr-1" />
              Next
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <div className="font-bold text-blue-900 mb-1">Quick Workout</div>
            <div className="text-xs text-blue-700">15 min routine</div>
          </div>
          
          <Button 
            variant="default" 
            size="sm"
            className="w-full text-xs"
            onClick={() => setIsWorkoutActive(true)}
          >
            <Play className="h-3 w-3 mr-1" />
            Start
          </Button>
        </div>
      )}
    </div>
  );

  const renderStatsScreen = () => (
    <div className="h-full flex flex-col p-2">
      <div className="text-center mb-3">
        <div className="text-lg font-bold">Activity</div>
        <div className="text-xs text-gray-600">Today</div>
      </div>
      
      <div className="space-y-3 flex-1">
        <div className="bg-red-50 rounded-lg p-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              <Flame className="h-3 w-3 text-red-600" />
              <span className="text-xs font-medium">Calories</span>
            </div>
            <span className="text-sm font-bold text-red-900">340/500</span>
          </div>
          <Progress value={68} className="h-1" />
        </div>
        
        <div className="bg-blue-50 rounded-lg p-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              <Activity className="h-3 w-3 text-blue-600" />
              <span className="text-xs font-medium">Steps</span>
            </div>
            <span className="text-sm font-bold text-blue-900">8.4k/10k</span>
          </div>
          <Progress value={84} className="h-1" />
        </div>
        
        <div className="bg-green-50 rounded-lg p-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              <Target className="h-3 w-3 text-green-600" />
              <span className="text-xs font-medium">Active</span>
            </div>
            <span className="text-sm font-bold text-green-900">23/30min</span>
          </div>
          <Progress value={77} className="h-1" />
        </div>
      </div>
      
      <div className="bg-primary/10 rounded-lg p-2 text-center">
        <div className="text-xs text-primary font-medium">Great progress!</div>
      </div>
    </div>
  );

  const renderHeartScreen = () => (
    <div className="h-full flex flex-col justify-between p-2">
      <div className="text-center">
        <div className="text-lg font-bold mb-2">Heart Rate</div>
        <div className="text-xs text-gray-600">Current</div>
      </div>
      
      <div className="text-center">
        <Heart className="h-8 w-8 text-red-600 mx-auto mb-2 animate-pulse" />
        <div className="text-3xl font-bold text-red-900 mb-1">72</div>
        <div className="text-sm text-red-700 mb-2">BPM</div>
        <Badge variant="secondary" className="text-xs bg-red-100 text-red-800">
          Resting
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-gray-50 rounded p-2 text-center">
          <div className="font-medium">Avg</div>
          <div className="text-gray-600">75</div>
        </div>
        <div className="bg-gray-50 rounded p-2 text-center">
          <div className="font-medium">Max</div>
          <div className="text-gray-600">142</div>
        </div>
      </div>
    </div>
  );

  const renderNutritionScreen = () => (
    <div className="h-full flex flex-col p-2">
      <div className="text-center mb-3">
        <div className="text-lg font-bold">Nutrition</div>
        <div className="text-xs text-gray-600">Today</div>
      </div>
      
      <div className="bg-green-50 rounded-lg p-3 text-center mb-3">
        <div className="text-2xl font-bold text-green-900 mb-1">1,340</div>
        <div className="text-xs text-green-700">Calories consumed</div>
        <div className="text-xs text-green-600 mt-1">660 remaining</div>
      </div>
      
      <div className="grid grid-cols-3 gap-1 text-xs mb-3">
        <div className="bg-blue-50 rounded p-2 text-center">
          <div className="font-bold text-blue-900">45g</div>
          <div className="text-blue-700">Protein</div>
        </div>
        <div className="bg-yellow-50 rounded p-2 text-center">
          <div className="font-bold text-yellow-900">120g</div>
          <div className="text-yellow-700">Carbs</div>
        </div>
        <div className="bg-purple-50 rounded p-2 text-center">
          <div className="font-bold text-purple-900">35g</div>
          <div className="text-purple-700">Fat</div>
        </div>
      </div>
      
      <Button variant="outline" size="sm" className="text-xs">
        Log Food
      </Button>
    </div>
  );

  const renderWellnessScreen = () => (
    <div className="h-full flex flex-col p-2">
      <div className="text-center mb-3">
        <div className="text-lg font-bold">Wellness</div>
        <div className="text-xs text-gray-600">Today</div>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-3 text-center mb-3">
        <div className="text-lg font-bold text-purple-900 mb-1">Good</div>
        <div className="text-xs text-purple-700">Current mood</div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
        <div className="bg-blue-50 rounded p-2 text-center">
          <Moon className="h-3 w-3 mx-auto mb-1 text-blue-600" />
          <div className="font-bold text-blue-900">7h 24m</div>
          <div className="text-blue-700">Sleep</div>
        </div>
        <div className="bg-green-50 rounded p-2 text-center">
          <Zap className="h-3 w-3 mx-auto mb-1 text-green-600" />
          <div className="font-bold text-green-900">Low</div>
          <div className="text-green-700">Stress</div>
        </div>
      </div>
      
      <Button variant="outline" size="sm" className="text-xs">
        Talk to Zen
      </Button>
    </div>
  );

  const renderAppsScreen = () => (
    <div className="h-full flex flex-col p-2">
      <div className="text-center mb-3">
        <div className="text-lg font-bold">Apps</div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 flex-1">
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-12 flex flex-col p-1"
          onClick={() => setCurrentScreen('workout')}
        >
          <Activity className="h-4 w-4 text-blue-600 mb-1" />
          <span className="text-xs">Workout</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-12 flex flex-col p-1"
          onClick={() => setCurrentScreen('heart')}
        >
          <Heart className="h-4 w-4 text-red-600 mb-1" />
          <span className="text-xs">Heart</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-12 flex flex-col p-1"
          onClick={() => setCurrentScreen('nutrition')}
        >
          <Flame className="h-4 w-4 text-orange-600 mb-1" />
          <span className="text-xs">Food</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-12 flex flex-col p-1"
          onClick={() => setCurrentScreen('wellness')}
        >
          <Moon className="h-4 w-4 text-purple-600 mb-1" />
          <span className="text-xs">Sleep</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-12 flex flex-col p-1"
          onClick={() => setCurrentScreen('stats')}
        >
          <Target className="h-4 w-4 text-green-600 mb-1" />
          <span className="text-xs">Activity</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-12 flex flex-col p-1"
        >
          <MoreHorizontal className="h-4 w-4 text-gray-600 mb-1" />
          <span className="text-xs">More</span>
        </Button>
      </div>
    </div>
  );

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "watchface": return renderWatchFace();
      case "workout": return renderWorkoutScreen();
      case "stats": return renderStatsScreen();
      case "heart": return renderHeartScreen();
      case "nutrition": return renderNutritionScreen();
      case "wellness": return renderWellnessScreen();
      case "apps": return renderAppsScreen();
      default: return renderWatchFace();
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      {/* Smartwatch Container */}
      <div className="relative mx-auto w-96 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-8 shadow-2xl">
        {/* Watch Bezel */}
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-full p-4 relative">
          {/* Screen */}
          <div className="w-full h-full bg-black rounded-full p-6 relative overflow-hidden">
            <Card className="h-full bg-white rounded-full border-0 shadow-inner">
              <CardContent className="p-3 h-full flex flex-col relative">
                {/* Screen Content */}
                <div className="flex-1 relative">
                  {renderCurrentScreen()}
                </div>

                {/* Screen Indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-1">
                    {Object.keys(screens).map((screen, index) => (
                      <div 
                        key={screen}
                        className={`w-1 h-1 rounded-full transition-all duration-200 ${
                          screen === currentScreen ? 'bg-primary w-2' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Digital Crown */}
        <div 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-10 bg-gradient-to-r from-gray-600 to-gray-800 rounded-l-lg shadow-lg cursor-pointer hover:from-gray-500 hover:to-gray-700 transition-colors"
          onClick={() => navigateScreen('next')}
        >
          <div className="w-full h-full bg-gradient-to-r from-gray-500 to-gray-700 rounded-l-lg flex items-center justify-center">
            <div className="w-1 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
        
        {/* Side Button */}
        <div 
          className="absolute right-2 top-1/3 w-3 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-l-md shadow-md cursor-pointer hover:from-gray-500 hover:to-gray-700 transition-colors"
          onClick={() => setCurrentScreen('apps')}
        ></div>
      </div>

      {/* Control Instructions */}
      <div className="text-center mt-8 space-y-2">
        <div className="flex justify-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigateScreen('prev')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentScreen('watchface')}
            className="flex items-center gap-2"
          >
            <Clock className="h-4 w-4" />
            Home
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigateScreen('next')}
            className="flex items-center gap-2"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-gray-600">
          Use controls below or click the digital crown to navigate
        </p>
        <p className="text-xs text-gray-500">
          Click the side button to access apps
        </p>
      </div>
    </div>
  );
}