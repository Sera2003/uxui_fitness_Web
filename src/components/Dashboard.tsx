import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { 
  Activity, 
  Trophy, 
  Flame, 
  Target, 
  TrendingUp,
  Heart,
  Droplets,
  Clock
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Dashboard() {
  const stats = [
    { label: "Today's Calories", value: "2,340", target: "2,500", icon: Flame },
    { label: "Active Minutes", value: "45", target: "60", icon: Activity },
    { label: "Heart Rate", value: "72 bpm", status: "Normal", icon: Heart },
    { label: "Water Intake", value: "6", target: "8 glasses", icon: Droplets },
  ];

  const recentAchievements = [
    { title: "Weekly Warrior", description: "Completed 5 workouts this week", type: "gold" },
    { title: "Cardio King", description: "30 minutes of cardio daily", type: "silver" },
    { title: "Hydration Hero", description: "Met water goal 7 days straight", type: "bronze" },
  ];

  const upcomingWorkouts = [
    { name: "Upper Body Strength", time: "6:00 PM", duration: "45 min" },
    { name: "Yoga Flow", time: "Tomorrow 8:00 AM", duration: "30 min" },
    { name: "HIIT Cardio", time: "Tomorrow 6:00 PM", duration: "20 min" },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-teal-600 rounded-xl p-4 md:p-6 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Alex!</h2>
        <p className="text-teal-100 mb-4 text-sm md:text-base">You're crushing your fitness goals! Keep up the amazing work.</p>
        <div className="flex items-center gap-2 md:gap-4 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 md:h-5 md:w-5" />
            <span>Level 12 Athlete</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 md:h-5 md:w-5" />
            <span>2,840 XP</span>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    {stat.target && (
                      <p className="text-xs text-gray-500">Goal: {stat.target}</p>
                    )}
                    {stat.status && (
                      <p className="text-xs text-green-600">{stat.status}</p>
                    )}
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Progress Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Weekly Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Workout Streak</span>
                <span>5/7 days</span>
              </div>
              <Progress value={71} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Calories Burned</span>
                <span>3,240/4,000</span>
              </div>
              <Progress value={81} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Steps Goal</span>
                <span>8,450/10,000</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Sleep Quality</span>
                <span>7.5/8 hours</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  achievement.type === 'gold' ? 'bg-yellow-100' :
                  achievement.type === 'silver' ? 'bg-gray-100' : 'bg-orange-100'
                }`}>
                  <Trophy className={`h-4 w-4 ${
                    achievement.type === 'gold' ? 'text-yellow-600' :
                    achievement.type === 'silver' ? 'text-gray-600' : 'text-orange-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{achievement.title}</p>
                  <p className="text-xs text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Upcoming Workouts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Upcoming Workouts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingWorkouts.map((workout, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium">{workout.name}</p>
                  <p className="text-sm text-gray-600">{workout.time} • {workout.duration}</p>
                </div>
                <Button size="sm" variant="outline">
                  Start
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Recommendation */}
        <Card>
          <CardHeader>
            <CardTitle>AI Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647098697024-42b1999f04e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTg1MjEwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Recommended workout"
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Badge className="bg-white text-black">Recommended for you</Badge>
              </div>
            </div>
            <h3 className="font-semibold mb-2">High-Intensity Interval Training</h3>
            <p className="text-sm text-gray-600 mb-4">
              Based on your recent performance and goals, this HIIT workout will help boost your cardiovascular endurance.
            </p>
            <Button className="w-full">
              Try This Workout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}