import { useMemo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { transactions } from "../data/ChartsData";
import { useUIStore } from "../store/useUIStore";

const PieCharts = () => {
  const theme = useUIStore((state) => state.theme);
  const textColor = theme == "dark" ? "#c6c6c6" : "#555555";
  const amountColor =theme == "dark" ? "#fff" : "#000";
  const categoryData = useMemo(() => {
    const expenses = transactions.filter((t) => t.type === "expense");
    const grouped = {};

    expenses.forEach((item) => {
      if (!grouped[item.category]) {
        grouped[item.category] = 0;
      }
      grouped[item.category] += item.amount;
    });

    return Object.keys(grouped).map((category) => ({
      category,
      amount: grouped[category],
    }));
  }, []);

  const maxAmount = Math.max(...categoryData.map((item) => item.amount));

  const getOpacity = (amount) => {
    const minOpacity = 0.35;
    const maxOpacity = 1;

    return minOpacity + (amount / maxAmount) * (maxOpacity - minOpacity);
  };

  return (
    <div className="bg-background-100 p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold text-foreground-100">
        Breakdown by Category
      </h3>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
              rootTabIndex={-1}
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="#1e5b94"
                  fillOpacity={getOpacity(entry.amount)}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value, name) => [`₹${value}`, name]}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {categoryData.map((item, index) => (
          <div key={item.category} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: "#1e5b94",
                opacity: getOpacity(item.amount),
              }}
            />
            <div className="flex items-center justify-between w-full text-sm">
              <span style={{ color: textColor }}>{item.category}</span>
              <span className="font-medium" style={{color:amountColor}}>${item.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharts;
