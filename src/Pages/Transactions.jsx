import React from "react";
import RecentTransactions from "../components/RecentTransactions";

const Transactions = () => {
  return (
    <div className="p-4">
      <RecentTransactions counts={10} viewAll={false} />
    </div>
  );
};

export default Transactions;
