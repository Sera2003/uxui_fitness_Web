import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  TrendingUp, 
  Users, 
  Watch,
  Settings,
  X,
  Activity,
  Flame,
  Trophy,
  Bell
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onSectionChange: (section: string) => void;
  onClose: () => void;
}

export function MobileMenu({ isOpen, activeSection, onSectionChange, onClose }: MobileMenuProps) {
  const secondaryNavItems = [
    { id: "progress", label: "Progress", icon: TrendingUp, description: "Track your fitness journey" },
    { id: "social", label: "Social", icon: Users, description: "Connect with friends" },
    { id: "smartwatch", label: "Smartwatch", icon: Watch, description: "Sync your devices" },
    { id: "settings", label: "Settings", icon: Settings, description: "Customize your app" }
  ];

  const stats = [
    { label: "Streak", value: "12", icon: Flame, color: "text-orange-600", bgColor: "bg-orange-50" },
    { label: "Workouts", value: "127", icon: Activity, color: "text-blue-600", bgColor: "bg-blue-50" },
    { label: "Achievements", value: "8", icon: Trophy, color: "text-yellow-600", bgColor: "bg-yellow-50" }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-primary/5 to-teal-50">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <p className="text-sm text-gray-600">Explore more features</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="h-10 w-10 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Profile Section */}
            <Card className="border-0 bg-gradient-to-r from-primary/10 to-teal-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-14 w-14 ring-2 ring-primary/20">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=56&h=56&fit=crop&crop=face" />
                    <AvatarFallback className="bg-primary text-white">AJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-gray-900">Alex Johnson</p>
                    <p className="text-sm text-gray-600">Fitness Enthusiast</p>
                    <Badge variant="secondary" className="mt-1 text-xs">Level 12</Badge>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="flex gap-2">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className={`flex-1 p-3 rounded-xl ${stat.bgColor}`}>
                        <IconComponent className={`h-4 w-4 mx-auto mb-1 ${stat.color}`} />
                        <p className="text-lg font-bold text-center text-gray-900">{stat.value}</p>
                        <p className="text-xs text-center text-gray-600">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Navigation Items */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">More Features</h3>
              {secondaryNavItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start h-auto p-4 ${
                      isActive ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      onSectionChange(item.id);
                      onClose();
                    }}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        <IconComponent className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div className="text-left">
                        <p className={`font-medium ${isActive ? 'text-white' : 'text-gray-900'}`}>
                          {item.label}
                        </p>
                        <p className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card className="border border-gray-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start h-12 border-primary/20 hover:bg-primary/5">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Start Quick Workout</p>
                    <p className="text-xs text-gray-500">15 min routine</p>
                  </div>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start h-12 border-primary/20 hover:bg-primary/5">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <Bell className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">View Notifications</p>
                    <p className="text-xs text-gray-500">3 new updates</p>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}