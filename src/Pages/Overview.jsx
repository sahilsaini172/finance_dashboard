import { Wallet } from "lucide-react";
import React from "react";

const Overview = () => {
  return (
    <div className="p-4 flex flex-col">
      <h1 className="mb-4 text-xl font-medium">Good morning, Sahil</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <div className="p-4 bg-linear-to-b from-primary/75 to-primary rounded-xl shadow/1 flex flex-col text-background">
          <div className="flex items-center justify-between">
            <p className="text-sm">Total Balance</p>
            <div className="p-2 bg-white/10 rounded-full">
              <Wallet />
            </div>
          </div>
          <p className="font-black text-xl mt-4">$3,415.00</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow/1 flex flex-col text-foreground">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground/75 font-light">
              Total Balance
            </p>
            <div className="p-2 bg-white/10 rounded-full">
              <Wallet />
            </div>
          </div>
          <p className="font-black text-xl mt-4">$3,415.00</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow/1 flex flex-col text-foreground">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground/75 font-light">
              Total Balance
            </p>
            <div className="p-2 bg-white/10 rounded-full">
              <Wallet />
            </div>
          </div>
          <p className="font-black text-xl mt-4">$3,415.00</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow/1 flex flex-col text-foreground">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground/75 font-light">
              Total Balance
            </p>
            <div className="p-2 bg-white/10 rounded-full">
              <Wallet />
            </div>
          </div>
          <p className="font-black text-xl mt-4">$3,415.00</p>
        </div>
      </div>
      
    </div>
  );
};

export default Overview;
