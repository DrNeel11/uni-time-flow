import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User } from "lucide-react";

const ScheduleDemo = () => {
  const schedule = [
    {
      time: "09:00 - 10:30",
      subject: "Advanced Mathematics",
      teacher: "Dr. Sarah Johnson",
      room: "Room A-101",
      type: "Lecture",
      color: "bg-blue-100 border-blue-300 text-blue-800"
    },
    {
      time: "10:45 - 12:15",
      subject: "Computer Science Lab",
      teacher: "Prof. Michael Chen",
      room: "Lab B-205",
      type: "Practical",
      color: "bg-green-100 border-green-300 text-green-800"
    },
    {
      time: "13:00 - 14:30",
      subject: "Physics Theory",
      teacher: "Dr. Emily Davis",
      room: "Room C-302",
      type: "Lecture",
      color: "bg-purple-100 border-purple-300 text-purple-800"
    },
    {
      time: "14:45 - 16:15",
      subject: "Chemistry Practical",
      teacher: "Prof. Robert Wilson",
      room: "Lab D-110",
      type: "Practical",
      color: "bg-orange-100 border-orange-300 text-orange-800"
    }
  ];

  const upcomingExams = [
    { subject: "Mathematics", date: "March 15, 2024", time: "10:00 AM", room: "Hall A" },
    { subject: "Physics", date: "March 18, 2024", time: "2:00 PM", room: "Hall B" },
    { subject: "Chemistry", date: "March 22, 2024", time: "9:00 AM", room: "Hall C" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Live Schedule Preview</h2>
          <p className="text-xl text-muted-foreground">
            See how your schedules will look in the system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Daily Schedule */}
          <Card className="shadow-card border-0">
            <CardHeader className="bg-gradient-card">
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Today's Schedule - March 12, 2024</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {schedule.map((item, index) => (
                  <div 
                    key={index} 
                    className="p-4 border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className={item.color}>
                            {item.type}
                          </Badge>
                          <span className="text-sm font-medium text-muted-foreground">
                            {item.time}
                          </span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{item.subject}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{item.teacher}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{item.room}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Exams */}
          <Card className="shadow-card border-0">
            <CardHeader className="bg-gradient-card">
              <CardTitle className="flex items-center space-x-2">
                <Badge className="bg-accent text-accent-foreground">
                  Exams
                </Badge>
                <span>Upcoming Examinations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {upcomingExams.map((exam, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-academic-gray rounded-lg border border-border hover:shadow-card transition-all duration-300"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{exam.subject}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Date:</span> {exam.date}
                      </div>
                      <div>
                        <span className="font-medium">Time:</span> {exam.time}
                      </div>
                      <div className="col-span-2">
                        <span className="font-medium">Venue:</span> {exam.room}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Active Students</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">25</div>
            <div className="text-sm text-muted-foreground">Faculty Members</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <div className="text-sm text-muted-foreground">Departments</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Efficiency Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemo;