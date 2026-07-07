import { useState } from "react";
import { Calendar, Clock, User, FileText, Plus, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import GlassCard from "@/components/GlassCard";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const sidebarItems = [
    { name: "Dashboard", path: "/patient-dashboard", icon: <Calendar size={20} /> },
    { name: "Book Appointment", path: "/appointment", icon: <Plus size={20} /> },
    { name: "Emergency Help", path: "/emergency", icon: <AlertTriangle size={20} /> },
    { name: "My Appointments", path: "/patient-dashboard/appointments", icon: <Clock size={20} /> },
    { name: "My Profile", path: "/patient-dashboard/profile", icon: <User size={20} /> },
  ];

  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Emily Johnson", specialty: "Cardiology", date: "Dec 20, 2024", time: "10:00 AM", status: "Confirmed" },
    { id: 2, doctor: "Dr. Michael Chen", specialty: "General Medicine", date: "Dec 22, 2024", time: "02:30 PM", status: "Pending" },
    { id: 3, doctor: "Dr. Sarah Williams", specialty: "Dermatology", date: "Dec 28, 2024", time: "11:00 AM", status: "Confirmed" },
  ];

  const pastAppointments = [
    { id: 4, doctor: "Dr. John Smith", specialty: "Orthopedics", date: "Dec 10, 2024", time: "09:00 AM", status: "Completed" },
    { id: 5, doctor: "Dr. Lisa Brown", specialty: "ENT", date: "Dec 05, 2024", time: "03:00 PM", status: "Completed" },
  ];

  const appointments = activeTab === "upcoming" ? upcomingAppointments : pastAppointments;

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Patient Dashboard">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Link to="/appointment">
          <GlassCard className="text-center py-8 cursor-pointer group">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Plus className="w-8 h-8" />
            </div>
            <p className="font-semibold text-foreground">Book Appointment</p>
            <p className="text-sm text-muted-foreground">Schedule a new visit</p>
          </GlassCard>
        </Link>

        <GlassCard className="text-center py-8">
          <div className="inline-flex p-4 rounded-2xl bg-accent/20 text-accent-foreground mb-4">
            <Calendar className="w-8 h-8" />
          </div>
          <p className="font-semibold text-foreground">Upcoming</p>
          <p className="text-2xl font-bold text-primary">{upcomingAppointments.length}</p>
        </GlassCard>

        <GlassCard className="text-center py-8">
          <div className="inline-flex p-4 rounded-2xl bg-green-100 text-green-700 mb-4">
            <FileText className="w-8 h-8" />
          </div>
          <p className="font-semibold text-foreground">Completed</p>
          <p className="text-2xl font-bold text-green-600">{pastAppointments.length}</p>
        </GlassCard>
      </div>

      {/* Appointments */}
      <GlassCard hover={false}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold text-foreground">My Appointments</h2>
          
          {/* Tab Switcher */}
          <div className="flex p-1 bg-white/30 rounded-xl">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "text-foreground/70 hover:bg-white/40"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "past"
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "text-foreground/70 hover:bg-white/40"
              }`}
            >
              Past
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {appointments.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">No appointments found</p>
            </div>
          ) : (
            appointments.map((apt) => (
              <div
                key={apt.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/30 hover:bg-white/50 transition-all duration-200 gap-4 animate-slide-in"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{apt.doctor}</p>
                    <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                  <div className="text-sm">
                    <p className="text-muted-foreground">Date</p>
                    <p className="font-medium text-foreground">{apt.date}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground">Time</p>
                    <p className="font-medium text-foreground">{apt.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    apt.status === "Confirmed" ? "bg-green-100 text-green-700" :
                    apt.status === "Pending" ? "bg-orange-100 text-orange-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {apt.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </GlassCard>
    </DashboardLayout>
  );
};

export default PatientDashboard;
