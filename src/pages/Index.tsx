import Header from "../components/Header";
import Hero from "../components/Hero";
import DashboardCards from "../components/DashboardCards";
import ScheduleDemo from "../components/ScheduleDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DashboardCards />
      <ScheduleDemo />
      
      {/* Footer */}
      <footer className="bg-academic-text text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduSchedule</h3>
              <p className="text-white/80">
                Streamlining academic scheduling for educational institutions worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <div className="space-y-2 text-white/80">
                <div>Features</div>
                <div>Pricing</div>
                <div>Documentation</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <div className="space-y-2 text-white/80">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>Status</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <div className="space-y-2 text-white/80">
                <div>About</div>
                <div>Careers</div>
                <div>Privacy</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 EduSchedule. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
