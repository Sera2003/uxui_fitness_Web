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
    { id: "progress", label: "Progress", icon: TrendingUp },
    { id: "social", label: "Social", icon: Users },
    { id: "smartwatch", label: "Smartwatch", icon: Watch },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  const stats = [
    { label: "Streak", value: "12", icon: Flame, color: "text-red-600" },
    { label: "Workouts", value: "127", icon: Activity, color: "text-blue-600" },
    { label: "Achievements", value: "8", icon: Trophy, color: "text-yellow-600" }
  ];

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={onClose}>
      <div 
        className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Profile Section */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Alex Johnson</p>
                  <p className="text-sm text-gray-600">Fitness Enthusiast</p>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 text-center">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="p-2 rounded-lg bg-gray-50">
                      <IconComponent className={`h-4 w-4 mx-auto mb-1 ${stat.color}`} />
                      <p className="text-lg font-bold">{stat.value}</p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Items */}
          <div className="space-y-2 mb-6">
            {secondaryNavItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    onSectionChange(item.id);
                    onClose();
                  }}
                >
                  <IconComponent className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Activity className="h-4 w-4 mr-2" />
                Start Quick Workout
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                View Notifications
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}