import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Dashboard } from "./components/Dashboard";
import { Workouts } from "./components/Workouts";
import { Progress } from "./components/Progress";
import { Nutrition } from "./components/Nutrition";
import { Social } from "./components/Social";
import { Wellness } from "./components/Wellness";
import { Smartwatch } from "./components/Smartwatch";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import { MobileNavigation } from "./components/MobileNavigation";
import { MobileMenu } from "./components/MobileMenu";
import { SmartwatchView } from "./components/SmartwatchView";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Monitor, Smartphone, Watch } from "lucide-react";

type DeviceType = 'web' | 'mobile' | 'smartwatch';

export default function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [deviceType, setDeviceType] = useState<DeviceType>('web');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      
      // Auto-detect device type based on screen width
      if (width < 500) {
        setDeviceType('mobile');
      } else if (width >= 500 && width < 1024) {
        setDeviceType('mobile');
      } else {
        setDeviceType('web');
      }
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  const renderContent = () => {
    // Special handling for smartwatch view
    if (deviceType === 'smartwatch') {
      return <SmartwatchView />;
    }

    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "workouts":
        return <Workouts />;
      case "progress":
        return <Progress />;
      case "nutrition":
        return <Nutrition />;
      case "social":
        return <Social />;
      case "wellness":
        return <Wellness />;
      case "smartwatch":
        return <Smartwatch />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  // Device Type Selector (for demo purposes)
  const DeviceSelector = () => (
    <div className="fixed top-20 right-4 z-[60] shadow-lg">
      <Card className="p-1 bg-white border border-gray-200">
        <CardContent className="p-0">
          <div className="flex gap-1">
            <Button
              variant={deviceType === 'web' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setDeviceType('web')}
              className="flex items-center gap-1 text-xs px-2 py-1 h-8"
            >
              <Monitor className="h-3 w-3" />
              Web
            </Button>
            <Button
              variant={deviceType === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setDeviceType('mobile')}
              className="flex items-center gap-1 text-xs px-2 py-1 h-8"
            >
              <Smartphone className="h-3 w-3" />
              Mobile
            </Button>
            <Button
              variant={deviceType === 'smartwatch' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setDeviceType('smartwatch')}
              className="flex items-center gap-1 text-xs px-2 py-1 h-8"
            >
              <Watch className="h-3 w-3" />
              Watch
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Smartwatch Layout
  if (deviceType === 'smartwatch') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-8">
        <DeviceSelector />
        <div className="text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20">
              Apple Watch Series 9
            </Badge>
            <p className="text-white/70 text-sm">FitMate Smartwatch Experience</p>
          </div>
          {renderContent()}
        </div>
      </div>
    );
  }

  // Mobile Layout
  if (deviceType === 'mobile') {
    return (
      <div className="min-h-screen bg-white">
        <DeviceSelector />
        <MobileNavigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          onMenuToggle={() => setIsMobileMenuOpen(true)}
        />
        <MobileMenu
          isOpen={isMobileMenuOpen}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        
        <main className="pt-20 pb-24 px-4">
          <div className="max-w-lg mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    );
  }

  // Web/Desktop Layout
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <DeviceSelector />
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="flex-1 pt-16">
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}