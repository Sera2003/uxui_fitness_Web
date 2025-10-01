import { 
  Home, 
  Dumbbell, 
  TrendingUp, 
  Utensils, 
  Users, 
  Heart, 
  Watch, 
  User,
  Settings,
  X
} from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ activeSection, onSectionChange, isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'workouts', label: 'Workouts', icon: Dumbbell },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'nutrition', label: 'Nutrition', icon: Utensils },
    { id: 'social', label: 'Community', icon: Users },
    { id: 'wellness', label: 'Wellness', icon: Heart },
    { id: 'smartwatch', label: 'Smartwatch', icon: Watch },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 w-64 bg-white border-r border-gray-200 h-screen flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-primary">FitMate</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600">Your complete fitness companion</p>
        </div>
      
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  activeSection === item.id 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => handleSectionChange(item.id)}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm font-medium text-gray-900">Daily Goal</p>
            <p className="text-xs text-gray-600 mt-1">Complete 3 workouts this week</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}