import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-schedule.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Streamline Your College
            <span className="block text-primary-glow">Schedule Management</span>
          </h2>
          
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Effortlessly manage teacher schedules, student timetables, and exam scheduling 
            all in one comprehensive academic platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-primary font-semibold hover:shadow-hover transition-all duration-300">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-all duration-300">
              View Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-white/80">Intelligent conflict detection and automatic optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-white/80">Instant notifications for schedule changes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Role Access</h3>
              <p className="text-white/80">Separate dashboards for students, teachers, and admins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;