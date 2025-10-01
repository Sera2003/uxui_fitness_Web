import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { 
  Heart, 
  Brain, 
  Moon, 
  Wind, 
  Smile, 
  Frown, 
  Meh,
  Play,
  Pause,
  RotateCcw,
  Timer,
  Award,
  TrendingUp,
  MessageCircle,
  Send,
  Bot,
  Mic,
  Volume2
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

export function Wellness() {
  const [moodRating, setMoodRating] = useState([7]);
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathingTimer, setBreathingTimer] = useState(0);
  const [chatInput, setChatInput] = useState("");
  const [isRobotTyping, setIsRobotTyping] = useState(false);

  const moodData = [
    { day: 'Mon', mood: 8, energy: 7, stress: 3 },
    { day: 'Tue', mood: 6, energy: 6, stress: 5 },
    { day: 'Wed', mood: 9, energy: 8, stress: 2 },
    { day: 'Thu', mood: 7, energy: 7, stress: 4 },
    { day: 'Fri', mood: 8, energy: 9, stress: 2 },
    { day: 'Sat', mood: 9, energy: 8, stress: 1 },
    { day: 'Sun', mood: 7, energy: 6, stress: 3 },
  ];

  const sleepData = [
    { day: 'Mon', hours: 7.5, quality: 8 },
    { day: 'Tue', hours: 6.8, quality: 6 },
    { day: 'Wed', hours: 8.2, quality: 9 },
    { day: 'Thu', hours: 7.1, quality: 7 },
    { day: 'Fri', hours: 7.8, quality: 8 },
    { day: 'Sat', hours: 8.5, quality: 9 },
    { day: 'Sun', hours: 7.2, quality: 7 },
  ];

  const meditationSessions = [
    { name: "Morning Mindfulness", duration: "10 min", category: "Focus", completed: true },
    { name: "Stress Relief", duration: "15 min", category: "Relaxation", completed: false },
    { name: "Sleep Stories", duration: "20 min", category: "Sleep", completed: false },
    { name: "Breathing Exercise", duration: "5 min", category: "Anxiety", completed: true },
  ];

  const wellnessMetrics = [
    { label: "Stress Level", value: 3, max: 10, color: "bg-red-500", status: "Low" },
    { label: "Energy Level", value: 8, max: 10, color: "bg-green-500", status: "High" },
    { label: "Sleep Quality", value: 7, max: 10, color: "bg-blue-500", status: "Good" },
    { label: "Mood", value: 8, max: 10, color: "bg-yellow-500", status: "Great" },
  ];

  const achievements = [
    { title: "Mindful Week", description: "7 days of meditation", icon: Brain, unlocked: true },
    { title: "Sleep Champion", description: "8+ hours for 5 nights", icon: Moon, unlocked: true },
    { title: "Stress Buster", description: "Keep stress below 4 for a week", icon: Heart, unlocked: false },
    { title: "Zen Master", description: "30 minutes of meditation", icon: Wind, unlocked: false },
  ];

  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      message: "Hi there! I'm Zen, your wellness companion. 🤖✨ How are you feeling today?",
      time: "9:00 AM"
    },
    {
      type: "user", 
      message: "I'm feeling a bit stressed about work lately",
      time: "9:05 AM"
    },
    {
      type: "bot",
      message: "I understand work stress can be overwhelming. Let's take this step by step. What specifically is causing you the most stress right now? Sometimes talking about it helps put things in perspective. 💙",
      time: "9:05 AM"
    },
    {
      type: "user",
      message: "I have a big presentation tomorrow and I don't feel prepared",
      time: "9:10 AM"
    },
    {
      type: "bot",
      message: "That's completely normal! Pre-presentation nerves show you care about doing well. Here's what I suggest: 1) Do a quick 5-minute breathing exercise with me, 2) Break down what you still need to prepare, 3) Remember past successes you've had. Would you like to start with some deep breathing? 🌬️",
      time: "9:12 AM"
    }
  ]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const newMessage = {
      type: "user" as const,
      message: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatHistory(prev => [...prev, newMessage]);
    setChatInput("");
    setIsRobotTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "That's really insightful. How does that make you feel physically? Sometimes our body tells us a lot about our emotional state. 🤗",
        "I hear you. It sounds like you're being really self-aware, which is a great first step. What would help you feel more grounded right now? 🌱",
        "Thank you for sharing that with me. I can sense you're working through something important. Would you like to try a quick mindfulness exercise together? 🧘‍♀️",
        "It's wonderful that you're taking time to check in with yourself. Based on what you're telling me, I think some gentle movement or breathing might help. What sounds good to you? 💫",
        "You're doing great by talking about this. Sometimes just expressing our feelings can be really healing. How can I best support you right now? 💚"
      ];
      
      const botResponse = {
        type: "bot" as const,
        message: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatHistory(prev => [...prev, botResponse]);
      setIsRobotTyping(false);
    }, 2000);
  };

  const getMoodIcon = (rating: number) => {
    if (rating >= 8) return <Smile className="h-6 w-6 text-green-500" />;
    if (rating >= 6) return <Meh className="h-6 w-6 text-yellow-500" />;
    return <Frown className="h-6 w-6 text-red-500" />;
  };

  const getMoodColor = (rating: number) => {
    if (rating >= 8) return "text-green-600 bg-green-50";
    if (rating >= 6) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Wellness Hub</h2>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Brain className="h-4 w-4 mr-2" />
            Quick Meditation
          </Button>
          <Button size="sm">
            <Bot className="h-4 w-4 mr-2" />
            Talk to Zen
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="assistant">AI Wellness Coach</TabsTrigger>
          <TabsTrigger value="mood">Mood Tracking</TabsTrigger>
          <TabsTrigger value="meditation">Meditation</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
        </TabsList>

        <TabsContent value="assistant" className="space-y-6">
          {/* AI Wellness Assistant */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Chat Interface */}
            <Card className="lg:col-span-2">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Zen - Your Wellness Coach</p>
                    <p className="text-sm text-gray-600 font-normal">Online • Always here to help</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Button variant="outline" size="sm">
                      <Mic className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col h-80 md:h-96">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {chatHistory.map((chat, index) => (
                      <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-lg p-3 ${
                          chat.type === 'user' 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm">{chat.message}</p>
                          <p className={`text-xs mt-1 ${
                            chat.type === 'user' ? 'text-white/70' : 'text-gray-500'
                          }`}>
                            {chat.time}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isRobotTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="How are you feeling today? Tell Zen what's on your mind..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!chatInput.trim() || isRobotTyping}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Zen's Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Zen's Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Brain className="h-3 w-3 text-blue-600" />
                    </div>
                    <p className="font-medium text-blue-900">Stress Pattern</p>
                  </div>
                  <p className="text-sm text-blue-700">I notice you mentioned work stress. Let's work on some coping strategies together.</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Heart className="h-3 w-3 text-green-600" />
                    </div>
                    <p className="font-medium text-green-900">Self-Care Reminder</p>
                  </div>
                  <p className="text-sm text-green-700">You've been doing great with your wellness journey. Remember to celebrate small wins!</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                      <Moon className="h-3 w-3 text-purple-600" />
                    </div>
                    <p className="font-medium text-purple-900">Sleep Suggestion</p>
                  </div>
                  <p className="text-sm text-purple-700">Based on our conversation, a wind-down routine might help with your stress levels.</p>
                </div>

                <Button className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Quick Check-in
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions from Zen */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended by Zen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                  <Wind className="h-8 w-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-blue-900 mb-1">Breathing Exercise</h4>
                  <p className="text-sm text-blue-700 mb-3">5-minute guided breathing for stress relief</p>
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Now
                  </Button>
                </div>
                
                <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                  <Brain className="h-8 w-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-green-900 mb-1">Mini Meditation</h4>
                  <p className="text-sm text-green-700 mb-3">Quick mindfulness session to reset</p>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    Begin Session
                  </Button>
                </div>
                
                <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
                  <Heart className="h-8 w-8 text-purple-600 mb-3" />
                  <h4 className="font-semibold text-purple-900 mb-1">Mood Check</h4>
                  <p className="text-sm text-purple-700 mb-3">Quick mood tracking with insights</p>
                  <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                    Log Mood
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overview" className="space-y-6">
          {/* Daily Wellness Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wellnessMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    <Badge variant="outline" className={getMoodColor(metric.value)}>
                      {metric.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <Progress value={(metric.value / metric.max) * 100} className="h-2" />
                    </div>
                    <span className="font-bold text-lg">{metric.value}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Weekly Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Mood & Energy Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={moodData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="mood" stroke="#0d9488" strokeWidth={2} name="Mood" />
                    <Line type="monotone" dataKey="energy" stroke="#06b6d4" strokeWidth={2} name="Energy" />
                    <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={2} name="Stress" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Moon className="h-5 w-5" />
                  Sleep Patterns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={sleepData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#0d9488" name="Hours Slept" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Wellness Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className={`p-4 rounded-lg border-2 text-center ${
                      achievement.unlocked 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}>
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                        achievement.unlocked ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mood" className="space-y-6">
          {/* Mood Logger */}
          <Card>
            <CardHeader>
              <CardTitle>How are you feeling today?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-8">
                {getMoodIcon(moodRating[0])}
                <div className="flex-1 max-w-md">
                  <Slider
                    value={moodRating}
                    onValueChange={setMoodRating}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Poor</span>
                    <span>Okay</span>
                    <span>Great</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{moodRating[0]}</div>
                  <div className="text-sm text-gray-600">out of 10</div>
                </div>
              </div>
              <Button className="w-full">Log Today's Mood</Button>
            </CardContent>
          </Card>

          {/* Mood History */}
          <Card>
            <CardHeader>
              <CardTitle>Mood History</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis domain={[1, 10]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="mood" stroke="#0d9488" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meditation" className="space-y-6">
          {/* Breathing Exercise */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Breathing Exercise</h3>
                <p className="text-gray-600 mb-6">Take a moment to focus on your breath</p>
                
                <div className="relative h-32 w-32 mx-auto mb-6">
                  <div className={`h-full w-full rounded-full border-4 border-primary/30 flex items-center justify-center transition-all duration-4000 ${
                    isBreathingActive ? 'scale-125 border-primary' : 'scale-100'
                  }`}>
                    <Wind className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <Button 
                    onClick={() => setIsBreathingActive(!isBreathingActive)}
                    className={isBreathingActive ? 'bg-red-500 hover:bg-red-600' : ''}
                  >
                    {isBreathingActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {isBreathingActive ? 'Pause' : 'Start'}
                  </Button>
                  <Button variant="outline" onClick={() => setBreathingTimer(0)}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
                
                <p className="text-sm text-gray-600 mt-4">
                  {isBreathingActive ? 'Breathe in... and out...' : 'Click start to begin your breathing exercise'}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Meditation Sessions */}
          <Card>
            <CardHeader>
              <CardTitle>Guided Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {meditationSessions.map((session, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${
                    session.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{session.name}</h4>
                      {session.completed && (
                        <Badge className="bg-green-100 text-green-700">Completed</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Timer className="h-3 w-3" />
                        {session.duration}
                      </div>
                      <Badge variant="outline">{session.category}</Badge>
                    </div>
                    <Button size="sm" className="w-full" disabled={session.completed}>
                      {session.completed ? 'Completed' : 'Start Session'}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Meditation Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Total Sessions</p>
                <p className="text-2xl font-bold">24</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                  <Timer className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Time Meditated</p>
                <p className="text-2xl font-bold">6.2h</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Current Streak</p>
                <p className="text-2xl font-bold">5 days</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sleep" className="space-y-6">
          {/* Sleep Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                  <Moon className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Last Night</p>
                <p className="text-2xl font-bold">7.2h</p>
                <p className="text-xs text-green-600">Good quality</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">Bedtime</p>
                <p className="text-2xl font-bold">10:45 PM</p>
                <p className="text-xs text-gray-500">Average</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">Wake Time</p>
                <p className="text-2xl font-bold">6:15 AM</p>
                <p className="text-xs text-gray-500">Average</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">Sleep Debt</p>
                <p className="text-2xl font-bold">-0.5h</p>
                <p className="text-xs text-orange-600">Slight deficit</p>
              </CardContent>
            </Card>
          </div>

          {/* Sleep Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Sleep Pattern</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sleepData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#0d9488" name="Hours Slept" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Sleep Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Sleep Improvement Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">Maintain Consistency</p>
                  <p className="text-sm text-blue-700">Try to go to bed and wake up at the same time every day</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900">Create a Bedtime Routine</p>
                  <p className="text-sm text-green-700">Establish calming activities before sleep like reading or meditation</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-900">Optimize Environment</p>
                  <p className="text-sm text-purple-700">Keep your bedroom cool, dark, and quiet for better sleep quality</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}