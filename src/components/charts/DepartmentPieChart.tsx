import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Cardiology", value: 28 },
  { name: "General", value: 35 },
  { name: "Pediatrics", value: 18 },
  { name: "Orthopedics", value: 12 },
  { name: "Dermatology", value: 7 },
];

const COLORS = [
  "hsl(25, 95%, 53%)",
  "hsl(35, 91%, 62%)",
  "hsl(142, 71%, 45%)",
  "hsl(199, 89%, 48%)",
  "hsl(280, 65%, 60%)",
];

const DepartmentPieChart = () => {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 248, 240, 0.95)",
              border: "1px solid rgba(234, 88, 12, 0.2)",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
            formatter={(value: number) => [`${value}%`, "Appointments"]}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentPieChart;
