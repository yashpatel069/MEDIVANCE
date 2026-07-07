import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", appointments: 8 },
  { day: "Tue", appointments: 10 },
  { day: "Wed", appointments: 7 },
  { day: "Thu", appointments: 12 },
  { day: "Fri", appointments: 9 },
  { day: "Sat", appointments: 4 },
  { day: "Sun", appointments: 0 },
];

const WeeklyScheduleChart = () => {
  return (
    <div className="h-[200px] w-full">
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
          <Bar
            dataKey="appointments"
            fill="hsl(25, 95%, 53%)"
            radius={[6, 6, 0, 0]}
            name="Appointments"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyScheduleChart;
