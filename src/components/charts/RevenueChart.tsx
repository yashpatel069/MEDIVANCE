import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", revenue: 42000, expenses: 28000 },
  { month: "Feb", revenue: 48000, expenses: 30000 },
  { month: "Mar", revenue: 52000, expenses: 32000 },
  { month: "Apr", revenue: 58000, expenses: 35000 },
  { month: "May", revenue: 62000, expenses: 38000 },
  { month: "Jun", revenue: 68000, expenses: 40000 },
  { month: "Jul", revenue: 75000, expenses: 42000 },
];

const RevenueChart = () => {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis dataKey="month" stroke="hsl(25, 20%, 45%)" fontSize={12} />
          <YAxis stroke="hsl(25, 20%, 45%)" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 248, 240, 0.95)",
              border: "1px solid rgba(234, 88, 12, 0.2)",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
            labelStyle={{ color: "hsl(25, 50%, 25%)" }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
          />
          <Legend wrapperStyle={{ paddingTop: "10px" }} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="hsl(142, 71%, 45%)"
            strokeWidth={3}
            dot={{ fill: "hsl(142, 71%, 45%)", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
            name="Revenue"
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="hsl(25, 95%, 53%)"
            strokeWidth={3}
            dot={{ fill: "hsl(25, 95%, 53%)", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
            name="Expenses"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
