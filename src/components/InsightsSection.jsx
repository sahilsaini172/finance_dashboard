import { useMemo } from "react";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  BadgeDollarSign,
  Pizza,
  TrendingUp,
} from "lucide-react";
import { transactions } from "../data/ChartsData";
import { useUIStore } from "../store/useUIStore";

const InsightsSection = () => {
  const theme = useUIStore((state) => state.theme) === "dark";
  const insights = useMemo(() => {
    const expenses = transactions.filter((t) => t.type === "expense");
    const income = transactions.filter((t) => t.type === "income");

    const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
    const netBalance = totalIncome - totalExpenses;

    // Highest spending category
    const categoryTotals = {};
    expenses.forEach((item) => {
      if (!categoryTotals[item.category]) {
        categoryTotals[item.category] = 0;
      }
      categoryTotals[item.category] += item.amount;
    });

    const highestSpendingCategory = Object.entries(categoryTotals).sort(
      (a, b) => b[1] - a[1],
    )[0];

    // Most frequent expense category
    const categoryFrequency = {};
    expenses.forEach((item) => {
      if (!categoryFrequency[item.category]) {
        categoryFrequency[item.category] = 0;
      }
      categoryFrequency[item.category] += 1;
    });

    const mostFrequentCategory = Object.entries(categoryFrequency).sort(
      (a, b) => b[1] - a[1],
    )[0];

    // Largest single expense
    const largestExpense = [...expenses].sort((a, b) => b.amount - a.amount)[0];

    // Savings rate
    const savingsRate =
      totalIncome > 0 ? ((netBalance / totalIncome) * 100).toFixed(1) : 0;

    return {
      totalIncome,
      totalExpenses,
      netBalance,
      highestSpendingCategory,
      mostFrequentCategory,
      largestExpense,
      savingsRate,
    };
  }, []);

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div>
        <h2 className="text-xl font-bold text-foreground-100">Insights</h2>
        <p className="text-sm text-foreground-400 mt-1">
          Quick observations based on your current transaction data.
        </p>
      </div>

      {/* Monthly Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-background-100 rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground-200 ">Monthly Income</p>
            <div
              className={`p-2 rounded-full  ${theme ? "bg-background-900/5 text-green-400" : "bg-green-500/5 text-green-500"}`}
            >
              <ArrowUpCircle />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground-100 mt-2">
            ${insights.totalIncome.toLocaleString()}
          </h3>
        </div>

        <div className="bg-background-100 rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground-200 ">Monthly Expenses</p>
            <div
              className={`p-2 rounded-full  ${theme ? "bg-background-900/5 text-red-400" : "bg-red-500/5 text-red-500"}`}
            >
              <ArrowDownCircle />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground-100 mt-2">
            ${insights.totalExpenses.toLocaleString()}
          </h3>
        </div>

        <div className="bg-background-100 rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground-200 ">Net Savings</p>
            <div
              className={`p-2 rounded-full  ${theme ? "bg-background-900/5 text-primary-500" : "bg-primary-500/10 text-primary-500"}`}
            >
              <BadgeDollarSign />
            </div>
          </div>
          <h3
            className={`text-2xl font-bold mt-2 ${
              insights.netBalance >= 0
                ? theme
                  ? "text-green-500"
                  : "text-green-600"
                : theme
                  ? "text-red-500"
                  : "text-red-600"
            }`}
          >
            ${insights.netBalance.toLocaleString()}
          </h3>
        </div>
      </div>

      {/* Key Insight Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Highest Spending Category */}
        <div className="bg-background-100 rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`p-2 rounded-full ${theme ? "bg-background-900/5 text-red-400" : "bg-red-500/10 text-red-500"}`}
            >
              <TrendingUp />
            </div>
            <h3 className="text-lg font-semibold text-foreground-200">
              Highest Spending Category
            </h3>
          </div>

          <p className="text-3xl font-bold text-foreground-100">
            {insights.highestSpendingCategory?.[0]}
          </p>

          <p className="text-sm text-foreground-300 mt-2">
            You spent the most on{" "}
            <span className="font-medium text-foreground-100">
              {insights.highestSpendingCategory?.[0]}
            </span>{" "}
            this month.
          </p>

          <div
            className={`mt-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${theme ? "bg-background-900/5 text-red-400" : "bg-red-500/5 text-red-500"}`}
          >
            ${insights.highestSpendingCategory?.[1]?.toLocaleString()}
          </div>
        </div>

        {/* Most Frequent Category */}
        <div className="bg-background-100 rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`p-2 rounded-full ${theme ? "bg-background-900/5 text-yellow-400" : "bg-yellow-500/10 text-yellow-500"}`}
            >
              <Pizza />
            </div>
            <h3 className="text-lg font-semibold text-foreground-200">
              Most Frequent Expense Category
            </h3>
          </div>

          <p className="text-3xl font-bold text-foreground-100">
            {insights.mostFrequentCategory?.[0]}
          </p>

          <p className="text-sm text-foreground-300 mt-2">
            This category appeared the most often in your expense history.
          </p>

          <div
            className={`mt-5 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${theme ? "bg-background-900/5 text-yellow-400" : "bg-yellow-500/10 text-yellow-500"}`}
          >
            {insights.mostFrequentCategory?.[1]} transaction
            {insights.mostFrequentCategory?.[1] > 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* Useful Observations */}
      <div className="bg-background-100 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-foreground-200 mb-4">
          Useful Observations
        </h3>

        <div className="space-y-4">
          <div className="rounded-xl bg-background-200 p-4">
            <p className="text-sm text-foreground-100">
              Your <span className="font-semibold">largest single expense</span>{" "}
              was{" "}
              <span className="font-semibold">
                {insights.largestExpense?.name}
              </span>{" "}
              under{" "}
              <span className="font-semibold">
                {insights.largestExpense?.category}
              </span>{" "}
              for{" "}
              <span className="font-semibold text-red-500">
                ${insights.largestExpense?.amount?.toLocaleString()}
              </span>
              .
            </p>
          </div>

          <div className="rounded-xl bg-background-200 p-4">
            <p className="text-sm text-foreground-100">
              Your estimated <span className="font-semibold">savings rate</span>{" "}
              this month is{" "}
              <span className="font-semibold text-green-500">
                {insights.savingsRate}%
              </span>
              .
            </p>
          </div>

          <div className="rounded-xl bg-background-200 p-4">
            <p className="text-sm text-foreground-100">
              Overall, your spending pattern suggests that{" "}
              <span className="font-semibold">
                essential categories like housing and utilities
              </span>{" "}
              make up a significant share of your expenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
