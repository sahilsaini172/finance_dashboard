import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import AreaCharts from "../components/AreaCharts";
import PieCharts from "../components/PieCharts";
import Card from "../components/Card";
import RecentTransactions from "../components/RecentTransactions";
import InsightsSection from "../components/InsightsSection";

const Overview = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-medium text-foreground-200">
        Good morning, Sahil
      </h1>
      <div className="flex flex-wrap w-full gap-2">
        <Card primary={true} insight title="Total Balance" amount="3,415.00">
          <Wallet />
        </Card>
        <Card primary={false} title="Total Income" amount="5,300.00">
          <TrendingUp />
        </Card>
        <Card primary={false} title="Total Expense" amount="1,885.00">
          <TrendingDown />
        </Card>
      </div>
      <AreaCharts />
      <PieCharts />
      <RecentTransactions />
      <InsightsSection />
    </div>
  );
};

export default Overview;
