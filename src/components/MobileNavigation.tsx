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
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gradient-to-br from-primary to-teal-600 rounded-lg flex items-center justify-center">
              <Dumbbell className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-lg font-bold">FitTracker</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={onMenuToggle}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Bottom Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
        <div className="grid grid-cols-5 gap-1 p-2">
          {primaryNavItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => onSectionChange(item.id)}
                className={`flex flex-col items-center gap-1 h-auto py-2 px-1 ${
                  isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}