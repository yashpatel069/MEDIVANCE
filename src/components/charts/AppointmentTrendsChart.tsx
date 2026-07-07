import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { day: "Mon", completed: 18, scheduled: 22, cancelled: 2 },
  { day: "Tue", completed: 22, scheduled: 25, cancelled: 1 },
  { day: "Wed", completed: 20, scheduled: 24, cancelled: 3 },
  { day: "Thu", completed: 25, scheduled: 28, cancelled: 2 },
  { day: "Fri", completed: 24, scheduled: 26, cancelled: 1 },
  { day: "Sat", completed: 12, scheduled: 15, cancelled: 2 },
  { day: "Sun", completed: 8, scheduled: 10, cancelled: 1 },
];

const AppointmentTrendsChart = () => {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis dataKey="day" stroke="hsl(25, 20%, 45%)" fontSize={12} />
          <YAxis stroke="hsl(25, 20%, 45%)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 248, 240, 0.95)",
              border: "1px solid rgba(234, 88, 12, 0.2)",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
            labelStyle={{ color: "hsl(25, 50%, 25%)" }}
          />
          <Legend wrapperStyle={{ paddingTop: "10px" }} />
          <Bar dataKey="completed" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} name="Completed" />
          <Bar dataKey="scheduled" fill="hsl(25, 95%, 53%)" radius={[4, 4, 0, 0]} name="Scheduled" />
          <Bar dataKey="cancelled" fill="hsl(0, 84%, 60%)" radius={[4, 4, 0, 0]} name="Cancelled" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentTrendsChart;
