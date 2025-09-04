import { Button } from "@/components/ui/button";
import { Calendar, Users, BookOpen, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">EduSchedule</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Users className="h-4 w-4" />
              <span>Dashboard</span>
            </a>
            <a href="#timetables" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Calendar className="h-4 w-4" />
              <span>Timetables</span>
            </a>
            <a href="#subjects" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>Subjects</span>
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:bg-gradient-hero transition-all duration-300">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;