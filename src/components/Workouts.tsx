import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Play, 
  Clock, 
  Flame, 
  Target,
  Search,
  Filter,
  Star,
  RotateCcw,
  Zap
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Workouts() {
  const [selectedWorkout, setSelectedWorkout] = useState<any>(null);

  const workoutCategories = [
    { id: 'strength', name: 'Strength Training', count: 24 },
    { id: 'cardio', name: 'Cardio', count: 18 },
    { id: 'yoga', name: 'Yoga & Flexibility', count: 15 },
    { id: 'hiit', name: 'HIIT', count: 12 },
    { id: 'sports', name: 'Sports', count: 8 },
  ];

  const featuredWorkouts = [
    {
      id: 1,
      title: "Upper Body Power",
      duration: "45 min",
      difficulty: "Intermediate",
      calories: 380,
      equipment: "Dumbbells",
      rating: 4.8,
      exercises: 8,
      category: "strength"
    },
    {
      id: 2,
      title: "HIIT Cardio Blast",
      duration: "20 min",
      difficulty: "Advanced",
      calories: 280,
      equipment: "None",
      rating: 4.9,
      exercises: 6,
      category: "hiit"
    },
    {
      id: 3,
      title: "Morning Yoga Flow",
      duration: "30 min",
      difficulty: "Beginner",
      calories: 120,
      equipment: "Yoga Mat",
      rating: 4.7,
      exercises: 12,
      category: "yoga"
    },
    {
      id: 4,
      title: "Core Crusher",
      duration: "25 min",
      difficulty: "Intermediate",
      calories: 200,
      equipment: "None",
      rating: 4.6,
      exercises: 10,
      category: "strength"
    }
  ];

  const recentWorkouts = [
    { name: "Full Body Strength", date: "Yesterday", duration: "50 min", calories: 420 },
    { name: "Evening Yoga", date: "2 days ago", duration: "35 min", calories: 150 },
    { name: "Cardio Intervals", date: "3 days ago", duration: "25 min", calories: 310 },
  ];

  const exercises = [
    { name: "Push-ups", sets: 3, reps: "12-15", type: "Bodyweight" },
    { name: "Dumbbell Press", sets: 3, reps: "8-10", type: "Strength" },
    { name: "Plank", sets: 3, reps: "30-60s", type: "Core" },
    { name: "Squats", sets: 3, reps: "15-20", type: "Bodyweight" },
    { name: "Mountain Climbers", sets: 3, reps: "20", type: "Cardio" },
    { name: "Deadlifts", sets: 3, reps: "6-8", type: "Strength" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Workouts</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search workouts..."
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="workouts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="workouts">All Workouts</TabsTrigger>
          <TabsTrigger value="exercises">Exercise Library</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="workouts" className="space-y-6">
          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {workoutCategories.map((category) => (
              <Card key={category.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} workouts</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Workouts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Featured Workouts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredWorkouts.map((workout) => (
                <Card key={workout.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1647098697024-42b1999f04e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTg1MjEwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt={workout.title}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-black/50 text-white">
                          {workout.difficulty}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Button size="sm" className="h-8 w-8 rounded-full p-0">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">{workout.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {workout.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame className="h-3 w-3" />
                          {workout.calories}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{workout.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">{workout.exercises} exercises</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Start */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-primary to-teal-600 text-white">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Quick Workout</h3>
                <p className="text-sm opacity-90 mb-4">Start a 15-minute express session</p>
                <Button variant="secondary" size="sm">
                  Start Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white">
              <CardContent className="p-6">
                <Target className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Custom Workout</h3>
                <p className="text-sm opacity-90 mb-4">Build your own routine</p>
                <Button variant="secondary" size="sm">
                  Create
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <CardContent className="p-6">
                <RotateCcw className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Repeat Last</h3>
                <p className="text-sm opacity-90 mb-4">Full Body Strength (50 min)</p>
                <Button variant="secondary" size="sm">
                  Repeat
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="exercises" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercises.map((exercise, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{exercise.name}</h4>
                    <Badge variant="outline">{exercise.type}</Badge>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Sets: {exercise.sets}</p>
                    <p>Reps: {exercise.reps}</p>
                  </div>
                  <Button size="sm" className="w-full mt-3">
                    View Instructions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <div className="space-y-4">
            {recentWorkouts.map((workout, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{workout.name}</h4>
                      <p className="text-sm text-gray-600">{workout.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {workout.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame className="h-3 w-3" />
                          {workout.calories} cal
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}