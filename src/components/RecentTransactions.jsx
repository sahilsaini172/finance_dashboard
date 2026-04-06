import { transactions } from "../data/ChartsData";
import { format, parseISO } from "date-fns";

const RecentTransactions = () => {
  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
  return (
    <div className="p-4 rounded-xl bg-background-100 flex flex-col">
      <h3 className="text-lg font-semibold text-foreground-500">
        Recent Transactions
      </h3>
      <div className="overflow-x-auto h-full">
        <table className="w-full min-h-160">
          <thead>
            <tr>
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
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <td className="px-5 py-4 text-sm text-gray-600">
                  {format(parseISO(item.date), "MMM dd, yyyy")}
                </td>

                <td className="px-5 py-4 text-sm font-medium text-gray-900">
                  {item.name}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {item.category}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      item.type === "income"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>

                <td
                  className={`px-5 py-4 text-sm font-semibold text-right ${
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
