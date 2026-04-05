import { Wallet } from "lucide-react";
import AreaCharts from "../components/AreaCharts";
import PieCharts from "../components/PieCharts";
import Card from "../components/Card";

const Overview = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="mb-4 text-xl font-medium">Good morning, Sahil</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <Card primary={true} title="Total Balance">
          <Wallet />
        </Card>
        <Card primary={false} title="Total Balance">
          <Wallet />
        </Card>
        <Card primary={false} title="Total Balance">
          <Wallet />
        </Card>
        <Card primary={false} title="Total Balance">
          <Wallet />
        </Card>
      </div>
      <AreaCharts />
      <PieCharts />
    </div>
  );
};

export default Overview;
