import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", patients: 1850, newPatients: 120 },
  { month: "Feb", patients: 1980, newPatients: 145 },
  { month: "Mar", patients: 2150, newPatients: 180 },
  { month: "Apr", patients: 2280, newPatients: 140 },
  { month: "May", patients: 2450, newPatients: 185 },
  { month: "Jun", patients: 2620, newPatients: 175 },
  { month: "Jul", patients: 2847, newPatients: 230 },
];

const PatientStatsChart = () => {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="patientGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.4} />
              <stop offset="95%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="newPatientGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(35, 91%, 62%)" stopOpacity={0.4} />
              <stop offset="95%" stopColor="hsl(35, 91%, 62%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis dataKey="month" stroke="hsl(25, 20%, 45%)" fontSize={12} />
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
          <Area
            type="monotone"
            dataKey="patients"
            stroke="hsl(25, 95%, 53%)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#patientGradient)"
            name="Total Patients"
          />
          <Area
            type="monotone"
            dataKey="newPatients"
            stroke="hsl(35, 91%, 62%)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#newPatientGradient)"
            name="New Patients"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientStatsChart;
