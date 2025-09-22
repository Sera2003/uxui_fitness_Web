import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  User, 
  Camera, 
  Trophy, 
  Target, 
  Activity, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  Edit3,
  Save,
  X,
  Award,
  Flame,
  Zap,
  Heart,
  TrendingUp,
  Users,
  Clock,
  Shield
} from "lucide-react";

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate about fitness and healthy living. Always up for a challenge!",
    age: 28,
    height: "5'9\"",
    weight: 165,
    fitnessGoal: "muscle-gain",
    activityLevel: "active",
    workoutDays: 5
  });

  const achievements = [
    { 
      id: 1, 
      title: "First Workout", 
      description: "Completed your first workout session", 
      icon: Activity, 
      earned: true,
      date: "Jan 15, 2024"
    },
    { 
      id: 2, 
      title: "7-Day Streak", 
      description: "Worked out for 7 consecutive days", 
      icon: Flame, 
      earned: true,
      date: "Feb 2, 2024"
    },
    { 
      id: 3, 
      title: "Early Bird", 
      description: "Completed 5 morning workouts", 
      icon: Clock, 
      earned: true,
      date: "Feb 10, 2024"
    },
    { 
      id: 4, 
      title: "Strength Master", 
      description: "Lifted 10,000 lbs total weight", 
      icon: Trophy, 
      earned: false,
      progress: 75
    },
    { 
      id: 5, 
      title: "Cardio King", 
      description: "Run 100 miles total distance", 
      icon: Heart, 
      earned: false,
      progress: 45
    },
    { 
      id: 6, 
      title: "Social Butterfly", 
      description: "Join 10 community challenges", 
      icon: Users, 
      earned: false,
      progress: 30
    }
  ];

  const stats = [
    { label: "Total Workouts", value: 127, icon: Activity, color: "text-blue-600" },
    { label: "Streak Days", value: 12, icon: Flame, color: "text-red-600" },
    { label: "Calories Burned", value: "24.5K", icon: Zap, color: "text-yellow-600" },
    { label: "Personal Records", value: 8, icon: Trophy, color: "text-green-600" }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would save to your backend/Supabase
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Profile</h2>
        <Button 
          variant={isEditing ? "outline" : "default"}
          onClick={() => isEditing ? setIsEditing(false) : setIsEditing(true)}
        >
          {isEditing ? (
            <>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </>
          ) : (
            <>
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="fitness">Fitness Profile</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
                    <AvatarFallback className="text-2xl">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button 
                      size="sm" 
                      className="absolute -bottom-2 -right-2 rounded-full h-10 w-10 p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    {profileData.firstName} {profileData.lastName}
                  </h3>
                  <p className="text-gray-600 mb-4">{profileData.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {profileData.location}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Joined Jan 2024
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {profileData.fitnessGoal === 'muscle-gain' ? 'Muscle Gain' : 
                       profileData.fitnessGoal === 'weight-loss' ? 'Weight Loss' : 'Maintenance'}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className={`inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gray-100 mb-2`}>
                            <IconComponent className={`h-5 w-5 ${stat.color}`} />
                          </div>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Workouts</span>
                    <span className="font-semibold">18/20</span>
                  </div>
                  <Progress value={90} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Calories</span>
                    <span className="font-semibold">3,240 kcal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {achievements.filter(a => a.earned).slice(0, 3).map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">{achievement.title}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Goals Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Weekly Workouts</span>
                      <span className="text-sm font-semibold">4/5</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Target Weight</span>
                      <span className="text-sm font-semibold">170 lbs</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  disabled={!isEditing}
                  className="flex items-center"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  disabled={!isEditing}
                  rows={3}
                />
              </div>

              {isEditing && (
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fitness" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fitness Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={profileData.age}
                    onChange={(e) => setProfileData({...profileData, age: parseInt(e.target.value)})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    value={profileData.height}
                    onChange={(e) => setProfileData({...profileData, height: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (lbs)</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={profileData.weight}
                    onChange={(e) => setProfileData({...profileData, weight: parseInt(e.target.value)})}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fitnessGoal">Primary Fitness Goal</Label>
                  <Select 
                    value={profileData.fitnessGoal} 
                    onValueChange={(value) => setProfileData({...profileData, fitnessGoal: value})}
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="endurance">Endurance</SelectItem>
                      <SelectItem value="strength">Strength</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="activityLevel">Activity Level</Label>
                  <Select 
                    value={profileData.activityLevel} 
                    onValueChange={(value) => setProfileData({...profileData, activityLevel: value})}
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary</SelectItem>
                      <SelectItem value="lightly-active">Lightly Active</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="very-active">Very Active</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workoutDays">Preferred Workout Days per Week</Label>
                <Select 
                  value={profileData.workoutDays.toString()} 
                  onValueChange={(value) => setProfileData({...profileData, workoutDays: parseInt(value)})}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 days</SelectItem>
                    <SelectItem value="3">3 days</SelectItem>
                    <SelectItem value="4">4 days</SelectItem>
                    <SelectItem value="5">5 days</SelectItem>
                    <SelectItem value="6">6 days</SelectItem>
                    <SelectItem value="7">7 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {isEditing && (
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={achievement.id} className={`${achievement.earned ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' : 'bg-gray-50'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${achievement.earned ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-400'}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold mb-1 ${achievement.earned ? 'text-yellow-900' : 'text-gray-500'}`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm mb-2 ${achievement.earned ? 'text-yellow-700' : 'text-gray-400'}`}>
                          {achievement.description}
                        </p>
                        {achievement.earned ? (
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            Earned {achievement.date}
                          </Badge>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="text-gray-600">{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
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
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Profile Visibility</h4>
                  <p className="text-sm text-gray-600">Make your profile visible to other users</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Show Workout Stats</h4>
                  <p className="text-sm text-gray-600">Display your workout statistics publicly</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Show Achievements</h4>
                  <p className="text-sm text-gray-600">Display your earned badges and achievements</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Activity Feed</h4>
                  <p className="text-sm text-gray-600">Show your workouts in friends' activity feeds</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Location Sharing</h4>
                  <p className="text-sm text-gray-600">Share your location with workout check-ins</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}