import { ArrowUp } from "lucide-react";

const Card = ({
  primary = false,
  amount = "3,415.00",
  title = "Title",
  children,
  insight = false,
}) => {
  return (
    <div
      className={`p-4 rounded-xl shadow/10 grow flex flex-col justify-between text-background-500 ${primary ? "bg-linear-to-b from-[#4b7ca9] to-[#184976]" : "bg-background-100"}`}
    >
      <div className="flex items-center justify-between">
        <p
          className={`text-sm ${primary ? "text-white font-semibold" : "text-foreground-300 font-medium "}`}
        >
          {title}
        </p>
        {children && (
          <div
            className={`p-2 rounded-full ${primary ? "bg-white/10 text-white " : "bg-background-900/5 text-foreground-300"}`}
          >
            {children}
          </div>
        )}
      </div>
      <p
        className={`text-lg font-semibold mt-4 ${primary ? "text-white" : "text-foreground-100"}`}
      >
        ${amount}
      </p>
      {insight && (
        <div className="mt-2 flex items-center text-xs gap-2 text-white">
          <div className="flex items-center gap-1 font-medium px-2 py-1 bg-white/10 rounded-full">
            <ArrowUp size={12} />
            12%
          </div>
          This Month
        </div>
      )}
    </div>
  );
};

export default Card;
