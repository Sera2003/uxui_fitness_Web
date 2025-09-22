import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Users, 
  Trophy, 
  MessageCircle, 
  Heart, 
  Share2,
  Target,
  Calendar,
  Flame,
  Timer,
  Medal,
  TrendingUp
} from "lucide-react";

export function Social() {
  const friends = [
    {
      name: "Sarah Johnson",
      avatar: "SJ",
      level: 15,
      streak: 12,
      lastWorkout: "2 hours ago",
      status: "online"
    },
    {
      name: "Mike Chen",
      avatar: "MC",
      level: 8,
      streak: 5,
      lastWorkout: "Yesterday",
      status: "offline"
    },
    {
      name: "Emma Wilson",
      avatar: "EW",
      level: 22,
      streak: 28,
      lastWorkout: "1 hour ago",
      status: "online"
    },
    {
      name: "David Rodriguez",
      avatar: "DR",
      level: 11,
      streak: 7,
      lastWorkout: "3 hours ago",
      status: "online"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Emma Wilson", points: 2840, streak: 28, avatar: "EW" },
    { rank: 2, name: "Alex Thompson", points: 2650, streak: 21, avatar: "AT", isMe: true },
    { rank: 3, name: "Sarah Johnson", points: 2420, streak: 12, avatar: "SJ" },
    { rank: 4, name: "Mike Chen", points: 2100, streak: 5, avatar: "MC" },
    { rank: 5, name: "David Rodriguez", points: 1980, streak: 7, avatar: "DR" },
  ];

  const challenges = [
    {
      title: "30-Day Push-up Challenge",
      description: "Complete 100 push-ups in 30 days",
      participants: 156,
      daysLeft: 12,
      progress: 65,
      type: "strength"
    },
    {
      title: "Weekly Distance Goal",
      description: "Run 25 miles this week",
      participants: 89,
      daysLeft: 3,
      progress: 78,
      type: "cardio"
    },
    {
      title: "Mindful March",
      description: "10 minutes of meditation daily",
      participants: 234,
      daysLeft: 18,
      progress: 40,
      type: "wellness"
    },
    {
      title: "Hydration Hero",
      description: "Drink 8 glasses of water daily",
      participants: 412,
      daysLeft: 25,
      progress: 85,
      type: "nutrition"
    }
  ];

  const feed = [
    {
      user: "Sarah Johnson",
      avatar: "SJ",
      action: "completed a workout",
      workout: "Upper Body Strength",
      time: "2 hours ago",
      likes: 12,
      comments: 3,
      achievement: "Personal Best"
    },
    {
      user: "Mike Chen",
      avatar: "MC",
      action: "reached a milestone",
      milestone: "50 workouts completed",
      time: "4 hours ago",
      likes: 24,
      comments: 8
    },
    {
      user: "Emma Wilson",
      avatar: "EW",
      action: "started a challenge",
      challenge: "30-Day Core Challenge",
      time: "6 hours ago",
      likes: 18,
      comments: 5
    },
    {
      user: "David Rodriguez",
      avatar: "DR",
      action: "shared a tip",
      tip: "Pre-workout stretching routine",
      time: "1 day ago",
      likes: 31,
      comments: 12
    }
  ];

  const groupChallenges = [
    {
      name: "Fitness Warriors",
      members: 24,
      challenge: "March Madness Workout",
      progress: 72,
      rank: 2
    },
    {
      name: "Morning Movers",
      members: 18,
      challenge: "Early Bird Challenge",
      progress: 89,
      rank: 1
    },
    {
      name: "Strength Squad",
      members: 31,
      challenge: "Lift Heavy March",
      progress: 45,
      rank: 4
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Community</h2>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Users className="h-4 w-4 mr-2" />
            Find Friends
          </Button>
          <Button size="sm">
            <Target className="h-4 w-4 mr-2" />
            Create Challenge
          </Button>
        </div>
      </div>

      <Tabs defaultValue="feed" className="space-y-6">
        <TabsList>
          <TabsTrigger value="feed">Activity Feed</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Activity Feed */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xl font-semibold">Recent Activity</h3>
              {feed.map((post, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback>{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{post.user}</span>
                          <span className="text-gray-600">{post.action}</span>
                          {post.achievement && (
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                              <Trophy className="h-3 w-3 mr-1" />
                              {post.achievement}
                            </Badge>
                          )}
                        </div>
                        {post.workout && (
                          <p className="font-medium text-primary">{post.workout}</p>
                        )}
                        {post.milestone && (
                          <p className="font-medium text-green-600">{post.milestone}</p>
                        )}
                        {post.challenge && (
                          <p className="font-medium text-purple-600">{post.challenge}</p>
                        )}
                        {post.tip && (
                          <p className="font-medium text-blue-600">{post.tip}</p>
                        )}
                        <p className="text-sm text-gray-500 mt-1">{post.time}</p>
                        
                        <div className="flex items-center gap-4 mt-3">
                          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                            <Heart className="h-4 w-4 mr-1" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-600">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-600">
                            <Share2 className="h-4 w-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* My Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Current Rank</span>
                    <Badge className="bg-primary">#2</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Points</span>
                    <span className="font-semibold">2,650</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Streak</span>
                    <span className="font-semibold">21 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-semibold">12</span>
                  </div>
                </CardContent>
              </Card>

              {/* Group Challenges */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Group Challenges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {groupChallenges.map((group, index) => (
                    <div key={index} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{group.name}</span>
                        <Badge variant="outline">#{group.rank}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{group.challenge}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span>{group.members} members</span>
                        <span>{group.progress}% complete</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Weekly Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div key={index} className={`flex items-center gap-4 p-3 rounded-lg ${
                    user.isMe ? 'bg-primary/10 border border-primary/20' : 'bg-gray-50'
                  }`}>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      user.rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                      user.rank === 2 ? 'bg-gray-100 text-gray-600' :
                      user.rank === 3 ? 'bg-orange-100 text-orange-600' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {user.rank <= 3 ? <Medal className="h-4 w-4" /> : user.rank}
                    </div>
                    <Avatar>
                      <AvatarFallback>{user.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{user.name}</span>
                        {user.isMe && <Badge variant="secondary">You</Badge>}
                      </div>
                      <p className="text-sm text-gray-600">{user.streak} day streak</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{user.points}</p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">{challenge.title}</h3>
                      <p className="text-sm text-gray-600">{challenge.description}</p>
                    </div>
                    <Badge variant="outline" className={
                      challenge.type === 'strength' ? 'bg-green-50 text-green-700' :
                      challenge.type === 'cardio' ? 'bg-blue-50 text-blue-700' :
                      challenge.type === 'wellness' ? 'bg-purple-50 text-purple-700' :
                      'bg-orange-50 text-orange-700'
                    }>
                      {challenge.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>{challenge.participants} participants</span>
                      <span>{challenge.daysLeft} days left</span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all" 
                          style={{ width: `${challenge.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4">
                      Join Challenge
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="friends" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {friends.map((friend, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback>{friend.avatar}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white ${
                        friend.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{friend.name}</span>
                        <Badge variant="outline" size="sm">Level {friend.level}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Flame className="h-3 w-3" />
                          {friend.streak} day streak
                        </div>
                        <span>{friend.lastWorkout}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
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