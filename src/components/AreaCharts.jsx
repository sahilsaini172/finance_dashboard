import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format, parseISO } from "date-fns";
import { transactions } from "../data/ChartsData";
import { useUIStore } from "../store/useUIStore";

const AreaCharts = () => {
  const theme = useUIStore((state) => state.theme);
  const textColor = theme == "dark" ? "#c6c6c6" : "#555555";
  const areaData = useMemo(() => {
    const sorted = [...transactions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    let currentBalance = 0;
    const groupByDate = {};

    sorted.forEach((t) => {
      if (t.type === "income") {
        currentBalance += t.amount;
      } else {
        currentBalance -= t.amount;
      }

      groupByDate[t.date] = currentBalance;
    });

    return Object.keys(groupByDate).map((date) => ({
      date,
      balance: groupByDate[date],
      displayDate: format(parseISO(date), "MMM dd"),
    }));
  }, []);

  return (
    <div className="bg-background-100 p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold text-foreground-100 mb-4">Balance Trend</h3>

      <div className="h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={areaData}>
            <defs>
              <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1e5b94" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#1e5b94" stopOpacity={0.03} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={theme == "dark" ? "#333333" : "#c6c6c6"}
            />

            <XAxis
              dataKey="displayDate"
              tick={{
                fontSize: 12,
                fill: textColor,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12, fill: textColor }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={true}
              formatter={(value) => [`₹${value}`, "Balance"]}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
              }}
            />

            <Area
              type="monotone"
              dataKey="balance"
              stroke="#1e5b94"
              strokeWidth={3}
              fill="url(#balanceGradient)"
              dot={false}
              activeDot={{ r: 5, stroke: "none", strokeWidth: 0 }}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaCharts;
