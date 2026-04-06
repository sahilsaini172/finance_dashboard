import { Link } from "react-router-dom";
import { transactions } from "../data/ChartsData";
import { format, parseISO } from "date-fns";

const RecentTransactions = ({ counts = 5, viewAll = true }) => {
  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, counts);
  return (
    <div className="bg-background-100 p-4 rounded-xl shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground-100">
          Recent Transactions
        </h3>

        {viewAll && <Link key={"/transactions"} to={"/transactions"}>
          <button className="text-sm bg-primary-400 font-medium py-2 px-4 rounded-md text-white">
            View All
          </button>
        </Link>}
      </div>
      <div className="overflow-x-auto h-full">
        <table className="w-full min-h-160">
          <thead>
            <tr className="*:p-2 border-b border-background-300">
              <th>Date</th>
              <th>Name</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((item) => (
              <tr
                key={item.id}
                className="border-b border-background-200 last:border-b-0  transition-colors"
              >
                <td className="px-6 py-4 text-sm text-foreground-300 w-fit shrink-0">
                  {format(parseISO(item.date), "MMM dd, yyyy")}
                </td>

                <td className="px-5 py-4 text-sm font-medium text-foreground-100">
                  {item.name}
                </td>

                <td className="px-5 py-4 text-sm text-foreground-300">
                  {item.category}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      item.type === "income"
                        ? "bg-green-500/5 text-green-500"
                        : "bg-red-500/5 text-red-500"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>

                <td
                  className={`px-5 py-4 shrink-0 text-sm font-semibold text-right ${
                    item.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.type === "income" ? "+" : "-"}₹
                  {item.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
