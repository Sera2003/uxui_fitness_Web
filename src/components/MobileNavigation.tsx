import { Button } from "./ui/button";
import { 
  Home, 
  Dumbbell, 
  TrendingUp, 
  Apple, 
  Users, 
  Heart, 
  Watch,
  User,
  Settings,
  Menu
} from "lucide-react";

interface MobileNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onMenuToggle: () => void;
}

export function MobileNavigation({ activeSection, onSectionChange, onMenuToggle }: MobileNavigationProps) {
  const primaryNavItems = [
    { id: "dashboard", label: "Home", icon: Home },
    { id: "workouts", label: "Workouts", icon: Dumbbell },
    { id: "nutrition", label: "Nutrition", icon: Apple },
    { id: "wellness", label: "Wellness", icon: Heart },
    { id: "profile", label: "Profile", icon: User }
  ];

  return (
    <>
      {/* Top Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center shadow-md">
              <Dumbbell className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">FitMate</h1>
              <p className="text-xs text-gray-500">Stay fit, stay strong</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onMenuToggle}
            className="h-10 w-10 rounded-full hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Bottom Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
        <div className="safe-area-pb">
          <div className="grid grid-cols-5 px-2 py-1">
            {primaryNavItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onSectionChange(item.id)}
                  className={`flex flex-col items-center gap-1 h-auto py-3 px-2 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'text-primary bg-primary/10 shadow-sm' 
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <div className={`relative ${isActive ? 'scale-110' : ''} transition-transform duration-200`}>
                    <IconComponent className="h-5 w-5" />
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                    )}
                  </div>
                  <span className={`text-xs font-medium ${isActive ? 'text-primary' : 'text-gray-600'}`}>
                    {item.label}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}