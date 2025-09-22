import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { 
  Watch, 
  Smartphone, 
  Bluetooth, 
  Battery, 
  Wifi,
  Heart,
  Activity,
  Droplets,
  Timer,
  Flame,
  Bell,
  Volume2,
  VolumeX,
  Settings,
  Download,
  Zap,
  Play,
  Target
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Smartwatch() {
  const [isConnected, setIsConnected] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [hapticEnabled, setHapticEnabled] = useState(true);
  const [voiceAssistant, setVoiceAssistant] = useState(true);

  const watchStats = {
    battery: 78,
    heartRate: 72,
    steps: 8450,
    stepGoal: 10000,
    calories: 340,
    activeMinutes: 45,
    waterIntake: 6,
    lastSync: "2 minutes ago"
  };

  const workoutData = [
    { name: "Morning Run", duration: "32 min", calories: 285, heartRate: 145 },
    { name: "Strength Training", duration: "45 min", calories: 220, heartRate: 128 },
    { name: "Evening Walk", duration: "18 min", calories: 95, heartRate: 110 },
  ];

  const quickActions = [
    { label: "Start Workout", icon: Activity, action: "workout" },
    { label: "Log Water", icon: Droplets, action: "water" },
    { label: "Quick Timer", icon: Timer, action: "timer" },
    { label: "Heart Rate Check", icon: Heart, action: "heartrate" },
  ];

  const notifications = [
    { type: "reminder", message: "Time to drink water!", time: "10 mins ago" },
    { type: "workout", message: "Great job on your morning run!", time: "2 hours ago" },
    { type: "goal", message: "You're 75% to your step goal", time: "4 hours ago" },
    { type: "social", message: "Sarah completed a workout", time: "6 hours ago" },
  ];

  const watchApps = [
    { name: "Workout Tracker", icon: Activity, size: "2.1 MB", installed: true },
    { name: "Meditation Timer", icon: Timer, size: "1.8 MB", installed: true },
    { name: "Weather", icon: Zap, size: "1.2 MB", installed: false },
    { name: "Music Control", icon: Volume2, size: "950 KB", installed: true },
    { name: "Sleep Monitor", icon: Watch, size: "3.4 MB", installed: false },
    { name: "Voice Assistant", icon: Smartphone, size: "2.8 MB", installed: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Smartwatch Integration</h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
            <span className="text-sm">{isConnected ? 'Connected' : 'Disconnected'}</span>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="workouts">Workouts</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="apps">Watch Apps</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Watch Device */}
            <Card className="lg:col-span-1">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative mx-auto mb-4">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758348844371-dfbae2780bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZml0bmVzcyUyMHRyYWNraW5nfGVufDF8fHx8MTc1ODUyMTA5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Smartwatch"
                      className="w-32 h-32 object-cover rounded-2xl mx-auto"
                    />
                    <div className="absolute -top-2 -right-2">
                      <Badge className={isConnected ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                        {isConnected ? <Bluetooth className="h-3 w-3 mr-1" /> : <Wifi className="h-3 w-3 mr-1" />}
                        {isConnected ? 'Connected' : 'Offline'}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">FitWatch Pro</h3>
                  <p className="text-sm text-gray-600 mb-4">Model: FW-2024</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Battery className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Battery</span>
                      </div>
                      <span className="font-semibold">{watchStats.battery}%</span>
                    </div>
                    <Progress value={watchStats.battery} className="h-2" />
                    
                    <div className="text-xs text-gray-500 mt-2">
                      Last sync: {watchStats.lastSync}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Metrics */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Real-time Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-red-700">{watchStats.heartRate}</p>
                    <p className="text-xs text-red-600">BPM</p>
                  </div>
                  
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Activity className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-700">{watchStats.steps.toLocaleString()}</p>
                    <p className="text-xs text-blue-600">Steps</p>
                    <Progress value={(watchStats.steps / watchStats.stepGoal) * 100} className="h-1 mt-1" />
                  </div>
                  
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <Flame className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-orange-700">{watchStats.calories}</p>
                    <p className="text-xs text-orange-600">Calories</p>
                  </div>
                  
                  <div className="text-center p-3 bg-cyan-50 rounded-lg">
                    <Droplets className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-cyan-700">{watchStats.waterIntake}</p>
                    <p className="text-xs text-cyan-600">Glasses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="h-20 flex-col gap-2 hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon className="h-6 w-6" />
                      <span className="text-sm">{action.label}</span>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Watch Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {workoutData.map((workout, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{workout.name}</p>
                      <p className="text-sm text-gray-600">{workout.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Flame className="h-3 w-3 text-orange-500" />
                          {workout.calories} cal
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3 text-red-500" />
                          {workout.heartRate} bpm
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workouts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>On-Wrist Workout Guidance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-primary to-teal-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Current Workout</h3>
                <p className="opacity-90 mb-4">Upper Body Strength Training</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm opacity-75">Exercises</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">45</p>
                    <p className="text-sm opacity-75">Minutes</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">3/12</p>
                    <p className="text-sm opacity-75">Complete</p>
                  </div>
                </div>
                <Button variant="secondary" className="w-full mt-4">
                  <Play className="h-4 w-4 mr-2" />
                  Continue Workout
                </Button>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Exercise Animations Available</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 border border-gray-200 rounded-lg">
                    <p className="font-medium">Push-ups</p>
                    <p className="text-sm text-gray-600">3D animation with form guidance</p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg">
                    <p className="font-medium">Squats</p>
                    <p className="text-sm text-gray-600">Real-time form correction</p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg">
                    <p className="font-medium">Planks</p>
                    <p className="text-sm text-gray-600">Timer with breathing cues</p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg">
                    <p className="font-medium">Burpees</p>
                    <p className="text-sm text-gray-600">Step-by-step breakdown</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Offline Workout Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium">Quick HIIT (20 min)</p>
                    <p className="text-sm text-gray-600">Downloaded • Ready offline</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Synced</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium">Morning Yoga (30 min)</p>
                    <p className="text-sm text-gray-600">Downloaded • Ready offline</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Synced</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Strength Circuit (45 min)</p>
                    <p className="text-sm text-gray-600">Available for download</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Workout Reminders</p>
                  <p className="text-sm text-gray-600">Get notified about scheduled workouts</p>
                </div>
                <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Haptic Feedback</p>
                  <p className="text-sm text-gray-600">Vibration for reps and milestones</p>
                </div>
                <Switch checked={hapticEnabled} onCheckedChange={setHapticEnabled} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Hydration Reminders</p>
                  <p className="text-sm text-gray-600">Gentle reminders to drink water</p>
                </div>
                <Switch checked={true} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Achievement Alerts</p>
                  <p className="text-sm text-gray-600">Celebrate reaching your goals</p>
                </div>
                <Switch checked={true} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Recent Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      {notification.type === 'reminder' && <Droplets className="h-4 w-4 text-cyan-600" />}
                      {notification.type === 'workout' && <Activity className="h-4 w-4 text-green-600" />}
                      {notification.type === 'goal' && <Target className="h-4 w-4 text-primary" />}
                      {notification.type === 'social' && <Heart className="h-4 w-4 text-red-500" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{notification.message}</p>
                      <p className="text-sm text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="apps" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Watch Apps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {watchApps.map((app, index) => {
                  const Icon = app.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium">{app.name}</p>
                          <p className="text-sm text-gray-600">{app.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {app.installed ? (
                          <Badge className="bg-green-100 text-green-700">Installed</Badge>
                        ) : (
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Install
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Voice Assistant</p>
                    <p className="text-sm text-gray-600">Enable voice commands</p>
                  </div>
                  <Switch checked={voiceAssistant} onCheckedChange={setVoiceAssistant} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto Sync</p>
                    <p className="text-sm text-gray-600">Sync data automatically</p>
                  </div>
                  <Switch checked={true} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Display Always On</p>
                    <p className="text-sm text-gray-600">Keep screen always visible</p>
                  </div>
                  <Switch checked={false} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connection Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Bluetooth</span>
                  <Badge className="bg-green-100 text-green-700">
                    <Bluetooth className="h-3 w-3 mr-1" />
                    Connected
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>WiFi</span>
                  <Badge variant="outline">
                    <Wifi className="h-3 w-3 mr-1" />
                    Home Network
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>Firmware</span>
                  <span className="text-sm font-medium">v2.1.4</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>Storage Used</span>
                  <span className="text-sm font-medium">2.1 GB / 8 GB</span>
                </div>
                
                <Button className="w-full mt-4">
                  Check for Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}