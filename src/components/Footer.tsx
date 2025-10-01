import { Heart, Github, Twitter, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FT</span>
                </div>
                <h3 className="text-lg font-bold text-primary">FitMate</h3>
              </div>
              <p className="text-gray-600 text-sm max-w-md">
                Your complete fitness companion. Track workouts, monitor nutrition, 
                connect with your community, and achieve your wellness goals with AI-powered insights.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">Workout Tracking</a></li>
                <li><a href="#" className="hover:text-primary">Nutrition Scanner</a></li>
                <li><a href="#" className="hover:text-primary">Progress Analytics</a></li>
                <li><a href="#" className="hover:text-primary">Community</a></li>
                <li><a href="#" className="hover:text-primary">Wellness AI</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 FitMate. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-500 mt-2 sm:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for your fitness journey
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}