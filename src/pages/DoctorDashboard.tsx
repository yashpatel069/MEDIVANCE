import { useState } from "react";
import { Calendar, Users, Clock, FileText, User, X, Phone, Mail } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import GlassCard from "@/components/GlassCard";
import WeeklyScheduleChart from "@/components/charts/WeeklyScheduleChart";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  condition: string;
  lastVisit: string;
}

const DoctorDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const sidebarItems = [
    { name: "Dashboard", path: "/doctor-dashboard", icon: <Calendar size={20} /> },
    { name: "My Patients", path: "/doctor-dashboard/patients", icon: <Users size={20} /> },
    { name: "Schedule", path: "/doctor-dashboard/schedule", icon: <Clock size={20} /> },
    { name: "Reports", path: "/doctor-dashboard/reports", icon: <FileText size={20} /> },
  ];

  const todaySchedule = [
    { id: 1, time: "09:00 AM", patient: { id: 1, name: "John Smith", age: 45, gender: "Male", phone: "+1 555-123-4567", email: "john@email.com", condition: "Regular Checkup", lastVisit: "2024-01-15" }, status: "Completed" },
    { id: 2, time: "10:30 AM", patient: { id: 2, name: "Emily Johnson", age: 32, gender: "Female", phone: "+1 555-234-5678", email: "emily@email.com", condition: "Follow-up", lastVisit: "2024-01-10" }, status: "In Progress" },
    { id: 3, time: "11:30 AM", patient: { id: 3, name: "Michael Chen", age: 28, gender: "Male", phone: "+1 555-345-6789", email: "michael@email.com", condition: "Consultation", lastVisit: "New Patient" }, status: "Upcoming" },
    { id: 4, time: "02:00 PM", patient: { id: 4, name: "Sarah Williams", age: 55, gender: "Female", phone: "+1 555-456-7890", email: "sarah@email.com", condition: "Blood Pressure", lastVisit: "2024-01-20" }, status: "Upcoming" },
    { id: 5, time: "03:30 PM", patient: { id: 5, name: "David Brown", age: 38, gender: "Male", phone: "+1 555-567-8901", email: "david@email.com", condition: "Diabetes Review", lastVisit: "2024-01-05" }, status: "Upcoming" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700";
      case "In Progress": return "bg-blue-100 text-blue-700";
      default: return "bg-orange-100 text-orange-700";
    }
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Doctor Dashboard">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Today's Appointments", value: "8", icon: <Calendar className="w-5 h-5" /> },
          { label: "Patients Seen", value: "2", icon: <Users className="w-5 h-5" /> },
          { label: "Pending", value: "6", icon: <Clock className="w-5 h-5" /> },
          { label: "Reports Due", value: "3", icon: <FileText className="w-5 h-5" /> },
        ].map((stat, index) => (
          <GlassCard key={index} className="text-center py-4">
            <div className="inline-flex p-2 rounded-lg bg-primary/10 text-primary mb-2">
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </GlassCard>
        ))}
      </div>

      {/* Weekly Schedule Chart */}
      <GlassCard hover={false} className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">This Week's Schedule</h3>
        <WeeklyScheduleChart />
      </GlassCard>

      {/* Today's Schedule */}
      <GlassCard hover={false}>
        <h2 className="text-xl font-semibold text-foreground mb-6">Today's Schedule</h2>
        <div className="space-y-4">
          {todaySchedule.map((appointment) => (
            <div
              key={appointment.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/30 hover:bg-white/50 transition-all duration-200 gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="text-center min-w-[80px]">
                  <p className="font-semibold text-foreground">{appointment.time}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{appointment.patient.name}</p>
                  <p className="text-sm text-muted-foreground">{appointment.patient.condition}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:ml-auto">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
                <button
                  onClick={() => setSelectedPatient(appointment.patient)}
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm animate-fade-in">
          <GlassCard hover={false} className="w-full max-w-md relative animate-scale-in">
            <button
              onClick={() => setSelectedPatient(null)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{selectedPatient.name}</h3>
              <p className="text-muted-foreground">{selectedPatient.condition}</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-white/20">
                <span className="text-muted-foreground">Age</span>
                <span className="font-medium text-foreground">{selectedPatient.age} years</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/20">
                <span className="text-muted-foreground">Gender</span>
                <span className="font-medium text-foreground">{selectedPatient.gender}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/20">
                <span className="text-muted-foreground">Phone</span>
                <span className="font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  {selectedPatient.phone}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/20">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  {selectedPatient.email}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Last Visit</span>
                <span className="font-medium text-foreground">{selectedPatient.lastVisit}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedPatient(null)}
              className="btn-warm w-full mt-6"
            >
              Close
            </button>
          </GlassCard>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DoctorDashboard;
