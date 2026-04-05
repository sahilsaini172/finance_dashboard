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

const AreaCharts = () => {
  

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
    <div className="grid grid-cols-1">
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-medium text-gray-900 mb-4">Balance Trend</h3>

        <div className="h-75 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <defs>
                <linearGradient
                  id="balanceGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#1e5b94" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#1e5b94" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />

              <XAxis
                dataKey="displayDate"
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
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AreaCharts;
