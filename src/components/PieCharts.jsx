import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { transactions } from "../data/ChartsData";

const PieCharts = () => {
  // Categorical chart data (expenses grouped by category)
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

    return (
      minOpacity + ((amount / maxAmount) * (maxOpacity - minOpacity))
    );
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Spending Breakdown by Category
      </h3>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={categoryData}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="category"
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              formatter={(value) => [`₹${value}`, "Expense"]}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
              }}
            />

            <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="#1e5b94"
                  fillOpacity={getOpacity(entry.amount)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieCharts;