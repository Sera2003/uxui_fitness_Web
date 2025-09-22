import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Palette, 
  Globe, 
  Shield, 
  Smartphone, 
  Cloud, 
  HelpCircle, 
  Info,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Download,
  Upload,
  Trash2,
  Key,
  Eye,
  EyeOff,
  Zap,
  Activity,
  Heart,
  Target,
  Users,
  Mail,
  MessageSquare,
  Calendar,
  Watch,
  Bluetooth,
  Wifi
} from "lucide-react";

export function Settings() {
  const [notifications, setNotifications] = useState({
    workoutReminders: true,
    achievements: true,
    socialActivity: false,
    weeklyProgress: true,
    appUpdates: false,
    marketing: false
  });

  const [preferences, setPreferences] = useState({
    theme: "system",
    language: "en",
    units: "imperial",
    startWeek: "monday",
    autoSync: true,
    offlineMode: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "friends",
    activitySharing: true,
    dataCollection: false,
    thirdPartyIntegration: true
  });

  const connectedDevices = [
    {
      name: "Apple Watch Series 9",
      type: "smartwatch",
      status: "connected",
      lastSync: "2 minutes ago",
      battery: 85
    },
    {
      name: "Polar H10 Heart Rate Monitor",
      type: "heart-rate",
      status: "connected", 
      lastSync: "5 minutes ago",
      battery: 92
    },
    {
      name: "Fitbit Charge 5",
      type: "fitness-tracker",
      status: "disconnected",
      lastSync: "2 days ago",
      battery: null
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Settings</h2>
        <Badge variant="outline">v2.1.3</Badge>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
          <TabsTrigger value="data">Data & Sync</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          {/* Appearance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Theme</Label>
                  <p className="text-sm text-gray-600">Choose your preferred color scheme</p>
                </div>
                <Select value={preferences.theme} onValueChange={(value) => setPreferences({...preferences, theme: value})}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4" />
                        Light
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        Dark
                      </div>
                    </SelectItem>
                    <SelectItem value="system">
                      <div className="flex items-center gap-2">
                        <SettingsIcon className="h-4 w-4" />
                        System
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Language & Region */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Language & Region
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select value={preferences.language} onValueChange={(value) => setPreferences({...preferences, language: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="it">Italiano</SelectItem>
                      <SelectItem value="pt">Português</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Units</Label>
                  <Select value={preferences.units} onValueChange={(value) => setPreferences({...preferences, units: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="imperial">Imperial (lb, ft, mi)</SelectItem>
                      <SelectItem value="metric">Metric (kg, m, km)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Week starts on</Label>
                <Select value={preferences.startWeek} onValueChange={(value) => setPreferences({...preferences, startWeek: value})}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sunday">Sunday</SelectItem>
                    <SelectItem value="monday">Monday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Audio */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Audio Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Sound Effects</Label>
                  <p className="text-sm text-gray-600">Play sounds for actions and achievements</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Voice Guidance</Label>
                  <p className="text-sm text-gray-600">Audio coaching during workouts</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Music Integration</Label>
                  <p className="text-sm text-gray-600">Connect with Spotify or Apple Music</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-blue-600" />
                  <div>
                    <Label className="font-medium">Workout Reminders</Label>
                    <p className="text-sm text-gray-600">Get reminded about scheduled workouts</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.workoutReminders} 
                  onCheckedChange={(checked) => setNotifications({...notifications, workoutReminders: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-green-600" />
                  <div>
                    <Label className="font-medium">Achievement Notifications</Label>
                    <p className="text-sm text-gray-600">Celebrate when you unlock new badges</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.achievements} 
                  onCheckedChange={(checked) => setNotifications({...notifications, achievements: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-purple-600" />
                  <div>
                    <Label className="font-medium">Social Activity</Label>
                    <p className="text-sm text-gray-600">Updates from friends and community</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.socialActivity} 
                  onCheckedChange={(checked) => setNotifications({...notifications, socialActivity: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <div>
                    <Label className="font-medium">Weekly Progress</Label>
                    <p className="text-sm text-gray-600">Weekly summary of your fitness journey</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.weeklyProgress} 
                  onCheckedChange={(checked) => setNotifications({...notifications, weeklyProgress: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <div>
                    <Label className="font-medium">App Updates</Label>
                    <p className="text-sm text-gray-600">New features and improvements</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.appUpdates} 
                  onCheckedChange={(checked) => setNotifications({...notifications, appUpdates: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <div>
                    <Label className="font-medium">Marketing & Tips</Label>
                    <p className="text-sm text-gray-600">Fitness tips and promotional content</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.marketing} 
                  onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Quiet Hours */}
          <Card>
            <CardHeader>
              <CardTitle>Quiet Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Enable Quiet Hours</Label>
                  <p className="text-sm text-gray-600">Pause non-urgent notifications during specified times</p>
                </div>
                <Switch />
              </div>
              
              <div className="grid grid-cols-2 gap-4 opacity-50">
                <div className="space-y-2">
                  <Label>From</Label>
                  <Input type="time" value="22:00" disabled />
                </div>
                <div className="space-y-2">
                  <Label>To</Label>
                  <Input type="time" value="07:00" disabled />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Connected Devices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {connectedDevices.map((device, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${device.status === 'connected' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                        {device.type === 'smartwatch' && <Watch className="h-5 w-5" />}
                        {device.type === 'heart-rate' && <Heart className="h-5 w-5" />}
                        {device.type === 'fitness-tracker' && <Activity className="h-5 w-5" />}
                      </div>
                      <div>
                        <h4 className="font-medium">{device.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Last sync: {device.lastSync}</span>
                          {device.battery && (
                            <span>Battery: {device.battery}%</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={device.status === 'connected' ? 'default' : 'secondary'}>
                        {device.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        {device.status === 'connected' ? 'Disconnect' : 'Connect'}
                      </Button>
                    </div>
                  </div>
                  {index < connectedDevices.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <Bluetooth className="h-4 w-4 mr-2" />
                Add New Device
              </Button>
            </CardContent>
          </Card>

          {/* Sync Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5" />
                Sync Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Auto Sync</Label>
                  <p className="text-sm text-gray-600">Automatically sync data when connected</p>
                </div>
                <Switch 
                  checked={preferences.autoSync} 
                  onCheckedChange={(checked) => setPreferences({...preferences, autoSync: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Sync on WiFi Only</Label>
                  <p className="text-sm text-gray-600">Only sync when connected to WiFi</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Offline Mode</Label>
                  <p className="text-sm text-gray-600">Continue tracking without internet connection</p>
                </div>
                <Switch 
                  checked={preferences.offlineMode} 
                  onCheckedChange={(checked) => setPreferences({...preferences, offlineMode: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Force Sync
                </Button>
                <Button variant="outline" className="flex-1">
                  <Wifi className="h-4 w-4 mr-2" />
                  Check Connection
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Profile Visibility</Label>
                <Select value={privacy.profileVisibility} onValueChange={(value) => setPrivacy({...privacy, profileVisibility: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public - Everyone can see</SelectItem>
                    <SelectItem value="friends">Friends Only</SelectItem>
                    <SelectItem value="private">Private - Only me</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Activity Sharing</Label>
                  <p className="text-sm text-gray-600">Share workout data with connected apps</p>
                </div>
                <Switch 
                  checked={privacy.activitySharing} 
                  onCheckedChange={(checked) => setPrivacy({...privacy, activitySharing: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Analytics & Crash Reports</Label>
                  <p className="text-sm text-gray-600">Help improve the app by sharing usage data</p>
                </div>
                <Switch 
                  checked={privacy.dataCollection} 
                  onCheckedChange={(checked) => setPrivacy({...privacy, dataCollection: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Third-party Integrations</Label>
                  <p className="text-sm text-gray-600">Allow connections to external fitness services</p>
                </div>
                <Switch 
                  checked={privacy.thirdPartyIntegration} 
                  onCheckedChange={(checked) => setPrivacy({...privacy, thirdPartyIntegration: checked})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Account Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Account Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Key className="h-4 w-4 mr-2" />
                Change Password
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Enable Two-Factor Authentication
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Eye className="h-4 w-4 mr-2" />
                View Login History
              </Button>
              
              <Separator />
              
              <Button variant="destructive" className="w-full">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5" />
                Data Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 border rounded-lg">
                  <Activity className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <p className="font-semibold">127</p>
                  <p className="text-sm text-gray-600">Workouts</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Heart className="h-8 w-8 mx-auto mb-2 text-red-600" />
                  <p className="font-semibold">2.1 MB</p>
                  <p className="text-sm text-gray-600">Health Data</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <p className="font-semibold">43</p>
                  <p className="text-sm text-gray-600">Social Connections</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export All Data
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="h-4 w-4 mr-2" />
                  Import Data from File
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Cloud className="h-4 w-4 mr-2" />
                  Backup to Cloud
                </Button>
              </div>
              
              <Separator />
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">Data Retention</h4>
                <p className="text-sm text-yellow-700">Your data is automatically backed up and kept secure. Workout data older than 2 years is archived but remains accessible.</p>
              </div>
            </CardContent>
          </Card>

          {/* Storage Usage */}
          <Card>
            <CardHeader>
              <CardTitle>Storage Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Workout Data</span>
                    <span className="text-sm">1.2 MB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Photos & Media</span>
                    <span className="text-sm">0.8 MB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Cache & Temp Files</span>
                    <span className="text-sm">0.1 MB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cache
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Help & Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help Center & FAQ
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Community Forums
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                Send Feedback
              </Button>
            </CardContent>
          </Card>

          {/* App Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                App Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Version</p>
                  <p className="font-medium">2.1.3</p>
                </div>
                <div>
                  <p className="text-gray-600">Build</p>
                  <p className="font-medium">2024.03.15</p>
                </div>
                <div>
                  <p className="text-gray-600">Platform</p>
                  <p className="font-medium">Web App</p>
                </div>
                <div>
                  <p className="text-gray-600">Last Updated</p>
                  <p className="font-medium">Mar 15, 2024</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Terms of Service
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Privacy Policy  
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Open Source Licenses
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Debug Options */}
          <Card>
            <CardHeader>
              <CardTitle>Debug Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Developer Mode</Label>
                  <p className="text-sm text-gray-600">Enable advanced debugging features</p>
                </div>
                <Switch />
              </div>
              
              <Button variant="outline" className="w-full opacity-50" disabled>
                <Activity className="h-4 w-4 mr-2" />
                View Debug Logs
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}