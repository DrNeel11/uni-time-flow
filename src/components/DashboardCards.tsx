import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  Shield, 
  Calendar,
  Clock,
  BookOpen,
  TrendingUp,
  Settings
} from "lucide-react";

const DashboardCards = () => {
  const roles = [
    {
      title: "Student Portal",
      description: "Access your class schedules, exam timetables, and academic calendar",
      icon: GraduationCap,
      features: ["View Class Timetables", "Exam Schedules", "Assignment Deadlines", "Academic Calendar"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Teacher Dashboard",
      description: "Manage your teaching schedule, classes, and student assessments",
      icon: Users,
      features: ["Teaching Schedule", "Class Management", "Grade Submission", "Office Hours"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Admin Panel",
      description: "Complete control over institutional scheduling and management",
      icon: Shield,
      features: ["Master Schedule", "Resource Allocation", "User Management", "Analytics"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: "Advanced Calendar",
      description: "Interactive calendar with drag-and-drop scheduling"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Efficient time slot allocation and conflict resolution"
    },
    {
      icon: BookOpen,
      title: "Subject Management",
      description: "Comprehensive course and subject organization"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reports",
      description: "Detailed insights into scheduling efficiency"
    }
  ];

  return (
    <section className="py-16 bg-academic-gray">
      <div className="container mx-auto px-6">
        {/* Role-based Dashboards */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Dashboard</h2>
          <p className="text-xl text-muted-foreground">
            Tailored experiences for every role in your institution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => (
            <Card 
              key={index} 
              className="hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card"
            >
              <CardHeader className={`${role.bgColor} rounded-t-lg`}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <role.icon className={`h-6 w-6 ${role.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl text-academic-text">{role.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">{role.description}</p>
                
                <div className="space-y-3 mb-6">
                  {role.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${role.color} text-white hover:shadow-glow transition-all duration-300`}
                >
                  Access Dashboard
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Powerful Features</h3>
          <p className="text-lg text-muted-foreground">
            Everything you need for comprehensive schedule management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-hover transition-all duration-300 border-0 shadow-card">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardCards;