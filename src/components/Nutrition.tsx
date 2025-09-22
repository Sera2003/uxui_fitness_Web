import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { 
  Plus, 
  Camera, 
  Search,
  Apple,
  Droplets,
  Target,
  TrendingUp,
  Clock,
  Utensils,
  Scan,
  Zap,
  CheckCircle,
  RotateCcw
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export function Nutrition() {
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<any>(null);

  const dailyGoals = {
    calories: { current: 1640, target: 2200 },
    protein: { current: 85, target: 120 },
    carbs: { current: 180, target: 250 },
    fat: { current: 45, target: 70 },
    water: { current: 6, target: 8 }
  };

  const macroData = [
    { name: 'Protein', value: dailyGoals.protein.current, color: '#0d9488', total: dailyGoals.protein.target },
    { name: 'Carbs', value: dailyGoals.carbs.current, color: '#06b6d4', total: dailyGoals.carbs.target },
    { name: 'Fat', value: dailyGoals.fat.current, color: '#8b5cf6', total: dailyGoals.fat.target },
  ];

  const weeklyCalories = [
    { day: 'Mon', calories: 2100, target: 2200 },
    { day: 'Tue', calories: 2300, target: 2200 },
    { day: 'Wed', calories: 1800, target: 2200 },
    { day: 'Thu', calories: 2500, target: 2200 },
    { day: 'Fri', calories: 2200, target: 2200 },
    { day: 'Sat', calories: 1950, target: 2200 },
    { day: 'Sun', calories: 1640, target: 2200 },
  ];

  const todaysMeals = [
    {
      type: "Breakfast",
      time: "8:00 AM",
      calories: 420,
      items: [
        { name: "Greek Yogurt with Berries", calories: 180, protein: 15 },
        { name: "Granola", calories: 140, protein: 4 },
        { name: "Banana", calories: 100, protein: 1 }
      ]
    },
    {
      type: "Lunch",
      time: "12:30 PM",
      calories: 580,
      items: [
        { name: "Grilled Chicken Salad", calories: 380, protein: 35 },
        { name: "Quinoa", calories: 120, protein: 4 },
        { name: "Avocado", calories: 80, protein: 1 }
      ]
    },
    {
      type: "Snack",
      time: "3:00 PM",
      calories: 210,
      items: [
        { name: "Protein Smoothie", calories: 180, protein: 20 },
        { name: "Almonds", calories: 30, protein: 1 }
      ]
    },
    {
      type: "Dinner",
      time: "7:00 PM",
      calories: 430,
      items: [
        { name: "Salmon Fillet", calories: 280, protein: 25 },
        { name: "Sweet Potato", calories: 100, protein: 2 },
        { name: "Steamed Broccoli", calories: 50, protein: 3 }
      ]
    }
  ];

  const mealSuggestions = [
    {
      name: "High-Protein Breakfast Bowl",
      calories: 380,
      protein: 28,
      prepTime: "10 min",
      ingredients: ["Eggs", "Quinoa", "Spinach", "Avocado"]
    },
    {
      name: "Post-Workout Smoothie",
      calories: 250,
      protein: 25,
      prepTime: "5 min",
      ingredients: ["Protein Powder", "Banana", "Almond Milk", "Berries"]
    },
    {
      name: "Lean Turkey Wrap",
      calories: 420,
      protein: 32,
      prepTime: "8 min",
      ingredients: ["Turkey Breast", "Whole Wheat Wrap", "Vegetables", "Hummus"]
    }
  ];

  const healthTips = [
    "Drink water 30 minutes before meals to aid digestion",
    "Include protein in every meal to maintain muscle mass",
    "Eat colorful vegetables for diverse micronutrients",
    "Time your carbs around workouts for optimal energy"
  ];

  const recentScans = [
    {
      food: "Grilled Chicken Breast",
      time: "Just now",
      calories: 165,
      protein: 31,
      confidence: 95,
      image: "🍗"
    },
    {
      food: "Greek Yogurt with Berries",
      time: "2 hours ago", 
      calories: 180,
      protein: 15,
      confidence: 88,
      image: "🥣"
    },
    {
      food: "Avocado Toast",
      time: "This morning",
      calories: 320,
      protein: 8,
      confidence: 92,
      image: "🥑"
    }
  ];

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setScanResults({
        food: "Grilled Salmon with Vegetables",
        calories: 285,
        protein: 25,
        carbs: 12,
        fat: 18,
        confidence: 94
      });
      setIsScanning(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Nutrition Tracking</h2>
        <div className="flex items-center gap-3">
          <Button size="sm" onClick={handleScan} disabled={isScanning}>
            <Camera className="h-4 w-4 mr-2" />
            {isScanning ? "Scanning..." : "Quick Scan"}
          </Button>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Manual Entry
          </Button>
        </div>
      </div>

      <Tabs defaultValue="today" className="space-y-6">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="meals">Meal Plans</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="tips">Health Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-6">
          {/* Food Scanner - Main Feature */}
          <Card className="bg-gradient-to-br from-primary to-teal-600 text-white">
            <CardContent className="p-4 md:p-8">
              <div className="text-center">
                <div className="relative mx-auto mb-6">
                  {isScanning ? (
                    <div className="h-32 w-32 mx-auto rounded-full border-4 border-white/30 flex items-center justify-center animate-pulse">
                      <Scan className="h-12 w-12 animate-spin" />
                    </div>
                  ) : scanResults ? (
                    <div className="h-32 w-32 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="h-12 w-12" />
                    </div>
                  ) : (
                    <div className="h-32 w-32 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                      <Camera className="h-12 w-12" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {isScanning ? "Scanning your food..." : 
                   scanResults ? "Food identified!" : 
                   "Scan your meal"}
                </h3>
                
                <p className="opacity-90 mb-6">
                  {isScanning ? "Hold your camera steady while we analyze your food" :
                   scanResults ? `${scanResults.food} (${scanResults.confidence}% confidence)` :
                   "Point your camera at your food and we'll automatically detect calories and nutrition"}
                </p>
                
                {scanResults ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 text-center">
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-2xl font-bold">{scanResults.calories}</p>
                      <p className="text-sm opacity-75">Calories</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-2xl font-bold">{scanResults.protein}g</p>
                      <p className="text-sm opacity-75">Protein</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-2xl font-bold">{scanResults.carbs}g</p>
                      <p className="text-sm opacity-75">Carbs</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-2xl font-bold">{scanResults.fat}g</p>
                      <p className="text-sm opacity-75">Fat</p>
                    </div>
                  </div>
                ) : null}
                
                <div className="flex gap-3 justify-center">
                  {scanResults ? (
                    <>
                      <Button variant="secondary" size="lg" className="text-primary">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Add to Today
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-white text-white hover:bg-white hover:text-primary"
                        onClick={() => setScanResults(null)}
                      >
                        <RotateCcw className="h-5 w-5 mr-2" />
                        Scan Again
                      </Button>
                    </>
                  ) : (
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="text-primary"
                      onClick={handleScan}
                      disabled={isScanning}
                    >
                      <Camera className="h-5 w-5 mr-2" />
                      {isScanning ? "Scanning..." : "Start Food Scan"}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Scans */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scan className="h-5 w-5" />
                Recent Scans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentScans.map((scan, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{scan.image}</div>
                    <div className="flex-1">
                      <p className="font-medium">{scan.food}</p>
                      <p className="text-sm text-gray-600">{scan.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{scan.calories} cal</p>
                      <p className="text-sm text-gray-600">{scan.protein}g protein</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      {scan.confidence}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-gray-600">Calories</p>
                <p className="text-xl font-bold">{dailyGoals.calories.current}</p>
                <p className="text-xs text-gray-500">of {dailyGoals.calories.target}</p>
                <Progress value={(dailyGoals.calories.current / dailyGoals.calories.target) * 100} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                  <Apple className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Protein</p>
                <p className="text-xl font-bold">{dailyGoals.protein.current}g</p>
                <p className="text-xs text-gray-500">of {dailyGoals.protein.target}g</p>
                <Progress value={(dailyGoals.protein.current / dailyGoals.protein.target) * 100} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                  <Utensils className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Carbs</p>
                <p className="text-xl font-bold">{dailyGoals.carbs.current}g</p>
                <p className="text-xs text-gray-500">of {dailyGoals.carbs.target}g</p>
                <Progress value={(dailyGoals.carbs.current / dailyGoals.carbs.target) * 100} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2">
                  <div className="h-3 w-3 rounded-full bg-purple-600"></div>
                </div>
                <p className="text-sm text-gray-600">Fat</p>
                <p className="text-xl font-bold">{dailyGoals.fat.current}g</p>
                <p className="text-xs text-gray-500">of {dailyGoals.fat.target}g</p>
                <Progress value={(dailyGoals.fat.current / dailyGoals.fat.target) * 100} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-2">
                  <Droplets className="h-5 w-5 text-cyan-600" />
                </div>
                <p className="text-sm text-gray-600">Water</p>
                <p className="text-xl font-bold">{dailyGoals.water.current}</p>
                <p className="text-xs text-gray-500">of {dailyGoals.water.target} glasses</p>
                <Progress value={(dailyGoals.water.current / dailyGoals.water.target) * 100} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Macro Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Macro Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={macroData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}g`}
                    >
                      {macroData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Today's Meals */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Today's Meals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {todaysMeals.map((meal, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{meal.type}</h4>
                        <p className="text-sm text-gray-600">{meal.time}</p>
                      </div>
                      <Badge variant="outline">{meal.calories} cal</Badge>
                    </div>
                    <div className="space-y-1">
                      {meal.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span className="text-gray-600">{item.calories} cal</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="meals" className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search meals and recipes..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Recommended for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mealSuggestions.map((meal, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1494113311000-c3bb3bae119b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwbWVhbCUyMHByZXB8ZW58MXx8fHwxNzU4NDI5MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={meal.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">{meal.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{meal.calories} cal</span>
                        <span>{meal.protein}g protein</span>
                        <span>{meal.prepTime}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {meal.ingredients.map((ingredient, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" className="w-full">
                        Add to Meal Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Weekly Calorie Intake
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyCalories}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="calories" fill="#0d9488" name="Actual Calories" />
                  <Bar dataKey="target" fill="#e5e7eb" name="Target Calories" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthTips.map((tip, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Daily Tip */}
          <Card className="bg-gradient-to-r from-primary to-teal-600 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Today's AI Tip</h3>
              <p className="opacity-90 mb-4">
                Based on your workout schedule and current nutrition, consider adding a post-workout meal 
                with 20-30g of protein within 2 hours of your evening session to optimize recovery.
              </p>
              <Button variant="secondary" size="sm">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}