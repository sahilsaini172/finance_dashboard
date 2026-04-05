import { Wallet } from "lucide-react";
import React from "react";

const Card = ({
  primary = false,
  amount = `$` + "3,415.00",
  title = "Title",
  children,
}) => {
  return (
    <div
      className={`p-4 rounded-xl shadow/10  flex flex-col text-background-500 ${primary ? "bg-linear-to-b from-primary-400 to-primary-600" : "bg-background-100"}`}
    >
      <div className="flex items-center justify-between">
        <p
          className={`text-sm ${primary ? "text-background-100 font-medium" : "text-foreground-300"}`}
        >
          {title}
        </p>
        {children && (
          <div
            className={`p-2 rounded-full ${primary ? "bg-background-100/10 " : "bg-background-500 text-foreground-400"}`}
          >
            {children}
          </div>
        )}
      </div>
      <p
        className={`text-lg font-semibold mt-4 ${primary ? "text-background-100 font-medium" : "text-foreground-500"}`}
      >
        {amount}
      </p>
    </div>
  );
};

export default Card;
