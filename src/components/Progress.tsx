import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Progress as ProgressBar } from "./ui/progress";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  TrendingUp, 
  Award, 
  Target, 
  Calendar,
  Flame,
  Activity,
  Timer
} from "lucide-react";

export function Progress() {
  const weeklyData = [
    { day: 'Mon', calories: 2100, workouts: 1, minutes: 45 },
    { day: 'Tue', calories: 2300, workouts: 1, minutes: 60 },
    { day: 'Wed', calories: 1800, workouts: 0, minutes: 0 },
    { day: 'Thu', calories: 2500, workouts: 2, minutes: 90 },
    { day: 'Fri', calories: 2200, workouts: 1, minutes: 30 },
    { day: 'Sat', calories: 2800, workouts: 1, minutes: 75 },
    { day: 'Sun', calories: 2400, workouts: 1, minutes: 50 },
  ];

  const monthlyData = [
    { month: 'Jan', weight: 185, bodyFat: 18 },
    { month: 'Feb', weight: 183, bodyFat: 17.5 },
    { month: 'Mar', weight: 181, bodyFat: 17 },
    { month: 'Apr', weight: 179, bodyFat: 16.5 },
    { month: 'May', weight: 177, bodyFat: 16 },
    { month: 'Jun', weight: 175, bodyFat: 15.5 },
  ];

  const workoutDistribution = [
    { name: 'Strength', value: 40, color: '#0d9488' },
    { name: 'Cardio', value: 30, color: '#06b6d4' },
    { name: 'Yoga', value: 20, color: '#8b5cf6' },
    { name: 'Sports', value: 10, color: '#f59e0b' },
  ];

  const achievements = [
    { 
      title: "Consistency Champion", 
      description: "30 days workout streak", 
      progress: 85, 
      icon: Calendar,
      type: "gold"
    },
    { 
      title: "Calorie Crusher", 
      description: "Burn 1000 calories in a day", 
      progress: 73, 
      icon: Flame,
      type: "silver"
    },
    { 
      title: "Time Master", 
      description: "Complete 60 min workout", 
      progress: 100, 
      icon: Timer,
      type: "gold"
    },
    { 
      title: "Active Legend", 
      description: "10,000 steps daily for a week", 
      progress: 60, 
      icon: Activity,
      type: "bronze"
    },
  ];

  const personalRecords = [
    { exercise: "Bench Press", weight: "185 lbs", date: "2 days ago", improvement: "+5 lbs" },
    { exercise: "Squat", weight: "225 lbs", date: "1 week ago", improvement: "+10 lbs" },
    { exercise: "Deadlift", weight: "275 lbs", date: "3 days ago", improvement: "+15 lbs" },
    { exercise: "5K Run", time: "22:45", date: "5 days ago", improvement: "-30s" },
  ];

  const weeklyGoals = [
    { goal: "Complete 5 workouts", current: 4, target: 5 },
    { goal: "Burn 2000 calories", current: 1640, target: 2000 },
    { goal: "60 min daily activity", current: 350, target: 420 },
    { goal: "Drink 56 glasses water", current: 42, target: 56 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Progress Tracking</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <TrendingUp className="h-3 w-3 mr-1" />
            +15% this month
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="body">Body Metrics</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Weekly Activity Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="calories" fill="#0d9488" name="Calories Burned" />
                  <Bar dataKey="minutes" fill="#06b6d4" name="Active Minutes" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Workout Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Workout Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={workoutDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {workoutDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Personal Records */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Personal Records
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {personalRecords.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{record.exercise}</p>
                      <p className="text-sm text-gray-600">{record.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{record.weight || record.time}</p>
                      <p className="text-sm text-green-600">{record.improvement}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="body" className="space-y-6">
          {/* Body Metrics Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Body Composition Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="#0d9488" 
                    strokeWidth={3}
                    name="Weight (lbs)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="bodyFat" 
                    stroke="#06b6d4" 
                    strokeWidth={3}
                    name="Body Fat %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Current Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">Current Weight</p>
                <p className="text-2xl font-bold">175 lbs</p>
                <p className="text-xs text-green-600">-2 lbs this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">Body Fat</p>
                <p className="text-2xl font-bold">15.5%</p>
                <p className="text-xs text-green-600">-0.5% this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">Muscle Mass</p>
                <p className="text-2xl font-bold">148 lbs</p>
                <p className="text-xs text-green-600">+1 lb this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">BMI</p>
                <p className="text-2xl font-bold">23.1</p>
                <p className="text-xs text-gray-600">Normal range</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                        achievement.type === 'gold' ? 'bg-yellow-100' :
                        achievement.type === 'silver' ? 'bg-gray-100' : 'bg-orange-100'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          achievement.type === 'gold' ? 'text-yellow-600' :
                          achievement.type === 'silver' ? 'text-gray-600' : 'text-orange-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <ProgressBar value={achievement.progress} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weeklyGoals.map((goal, index) => {
              const percentage = (goal.current / goal.target) * 100;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">{goal.goal}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{goal.current} / {goal.target}</span>
                        <span>{Math.round(percentage)}%</span>
                      </div>
                      <ProgressBar value={percentage} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}