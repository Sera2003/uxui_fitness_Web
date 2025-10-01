import { useState } from "react";
import { 
  User, 
  Home, 
  Info, 
  Menu, 
  X, 
  Search, 
  Bell, 
  Plus, 
  Settings, 
  LogOut,
  Dumbbell,
  Utensils,
  Droplet
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export function Header({ activeSection, onSectionChange, isSidebarOpen, onSidebarToggle }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);

  // Mock search results
  const searchResults = [
    { type: "Workout", title: "Push-up Challenge", category: "Strength" },
    { type: "Exercise", title: "Bench Press", category: "Chest" },
    { type: "Food", title: "Chicken Breast", category: "Protein" },
    { type: "Recipe", title: "Protein Smoothie", category: "Nutrition" },
    { type: "Achievement", title: "7-Day Streak", category: "Milestone" },
  ].filter(item => 
    item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.category.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Mock notifications
  const notifications = [
    { id: 1, type: "achievement", title: "New Badge Earned!", message: "You've completed 7 days in a row!", time: "2m ago", unread: true },
    { id: 2, type: "reminder", title: "Workout Reminder", message: "Time for your afternoon workout", time: "1h ago", unread: true },
    { id: 3, type: "social", title: "Friend Challenge", message: "Sarah challenged you to a 5K run", time: "3h ago", unread: false },
    { id: 4, type: "nutrition", title: "Meal Log", message: "Don't forget to log your lunch", time: "5h ago", unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleQuickAdd = (type: string) => {
    setIsQuickAddOpen(false);
    // Handle quick add functionality
    console.log(`Quick adding: ${type}`);
  };

  const handleLogout = () => {
    // Handle logout functionality
    console.log("Logging out...");
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchValue("");
    }
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 h-16 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-40">
        {/* Left side - Menu */}
        <div className="flex items-center w-1/4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSidebarToggle}
            className="hover:bg-gray-100"
          >
            {isSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Center - Logo */}
        <div className="flex items-center justify-center w-1/2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FT</span>
            </div>
            <h1 className="text-xl font-bold text-primary">FitMate</h1>
          </div>
        </div>

        {/* Right side - Search + Actions */}
        <div className="flex items-center justify-end gap-2 w-1/4">
          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search workouts, nutrition..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="pl-10 w-80 bg-gray-50 border-gray-200 focus:bg-white"
                    autoFocus
                  />
                  {searchValue && (
                    <div className="absolute top-full right-0 w-80 bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-64 overflow-y-auto z-50">
                      {searchResults.length > 0 ? (
                        searchResults.map((result, index) => (
                          <div
                            key={index}
                            className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                            onClick={() => {
                              setSearchValue("");
                              setIsSearchOpen(false);
                            }}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-sm">{result.title}</p>
                                <p className="text-xs text-gray-500">{result.category}</p>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {result.type}
                              </Badge>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-3 text-center text-gray-500 text-sm">
                          No results found
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSearchToggle}
                  className="hover:bg-gray-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSearchToggle}
                className="hover:bg-gray-100"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Quick Add Button */}
          <DropdownMenu open={isQuickAddOpen} onOpenChange={setIsQuickAddOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100 relative"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => handleQuickAdd('workout')} className="cursor-pointer">
                <Dumbbell className="h-4 w-4 mr-2" />
                Log Workout
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleQuickAdd('meal')} className="cursor-pointer">
                <Utensils className="h-4 w-4 mr-2" />
                Log Meal
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleQuickAdd('water')} className="cursor-pointer">
                <Droplet className="h-4 w-4 mr-2" />
                Log Water
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100 relative"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-3 border-b border-gray-200">
                <h4 className="font-semibold text-sm">Notifications</h4>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="p-3 cursor-pointer">
                    <div className="flex items-start gap-3 w-full">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        notification.unread ? 'bg-primary' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{notification.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 hover:bg-gray-100"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.jpg" alt="Profile" />
                  <AvatarFallback className="bg-primary text-white text-sm">
                    SA
                  </AvatarFallback>
                </Avatar>
                <span className="hidden lg:inline text-sm">Sam Ahmed</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem 
                onClick={() => onSectionChange('profile')} 
                className="cursor-pointer"
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onSectionChange('settings')} 
                className="cursor-pointer"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Search backdrop to close search when clicking outside */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setIsSearchOpen(false);
            setSearchValue("");
          }}
        />
      )}
    </>
  );
}