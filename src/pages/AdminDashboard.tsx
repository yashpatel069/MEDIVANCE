import { Users, Stethoscope, Calendar, Activity, TrendingUp, Clock } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import GlassCard from "@/components/GlassCard";
import PatientStatsChart from "@/components/charts/PatientStatsChart";
import AppointmentTrendsChart from "@/components/charts/AppointmentTrendsChart";
import RevenueChart from "@/components/charts/RevenueChart";
import DepartmentPieChart from "@/components/charts/DepartmentPieChart";

const AdminDashboard = () => {
  const sidebarItems = [
    { name: "Dashboard", path: "/admin-dashboard", icon: <Activity size={20} /> },
    { name: "Patients", path: "/admin-dashboard/patients", icon: <Users size={20} /> },
    { name: "Doctors", path: "/admin-dashboard/doctors", icon: <Stethoscope size={20} /> },
    { name: "Appointments", path: "/admin-dashboard/appointments", icon: <Calendar size={20} /> },
  ];

  const stats = [
    { label: "Total Patients", value: "2,847", icon: <Users className="w-6 h-6" />, trend: "+12%" },
    { label: "Total Doctors", value: "156", icon: <Stethoscope className="w-6 h-6" />, trend: "+3%" },
    { label: "Appointments Today", value: "89", icon: <Calendar className="w-6 h-6" />, trend: "+8%" },
    { label: "Active Cases", value: "432", icon: <Activity className="w-6 h-6" />, trend: "-5%" },
  ];

  const recentActivities = [
    { id: 1, type: "Patient", action: "New patient registered", name: "John Smith", time: "5 min ago" },
    { id: 2, type: "Appointment", action: "Appointment completed", name: "Dr. Emily Johnson", time: "15 min ago" },
    { id: 3, type: "Doctor", action: "New doctor onboarded", name: "Dr. Michael Chen", time: "1 hour ago" },
    { id: 4, type: "Patient", action: "Patient discharged", name: "Sarah Williams", time: "2 hours ago" },
    { id: 5, type: "Appointment", action: "Appointment scheduled", name: "Dr. Lisa Brown", time: "3 hours ago" },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Admin Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat, index) => (
          <GlassCard key={index} className="stat-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                {stat.icon}
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4 text-sm">
              <TrendingUp className={`w-4 h-4 ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-500'}`} />
              <span className={stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-500'}>
                {stat.trend}
              </span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <GlassCard hover={false}>
          <h3 className="text-lg font-semibold text-foreground mb-4">Patient Growth</h3>
          <PatientStatsChart />
        </GlassCard>

        <GlassCard hover={false}>
          <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Appointments</h3>
          <AppointmentTrendsChart />
        </GlassCard>

        <GlassCard hover={false}>
          <h3 className="text-lg font-semibold text-foreground mb-4">Revenue & Expenses</h3>
          <RevenueChart />
        </GlassCard>

        <GlassCard hover={false}>
          <h3 className="text-lg font-semibold text-foreground mb-4">Appointments by Department</h3>
          <DepartmentPieChart />
        </GlassCard>
      </div>

      {/* Recent Activities */}
      <GlassCard hover={false} className="overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Recent Activities</h2>
          <button className="text-sm text-primary hover:underline">View All</button>
        </div>

        <div className="overflow-x-auto -mx-6">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Type</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Activity</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr
                  key={activity.id}
                  className="border-b border-white/10 hover:bg-white/20 transition-colors duration-200"
                >
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      activity.type === 'Patient' ? 'bg-blue-100 text-blue-700' :
                      activity.type === 'Doctor' ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {activity.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-foreground">{activity.action}</td>
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{activity.name}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {activity.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </DashboardLayout>
  );
};

export default AdminDashboard;
