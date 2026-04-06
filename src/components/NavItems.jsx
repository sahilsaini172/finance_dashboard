import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavItems = ({ navbarState, toggleState }) => {
  const location = useLocation();

  const navLinks = [
    { label: "Overview", path: "/" },
    { label: "Transactions", path: "/transactions" },
    { label: "Analytics", path: "/analytics" },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        navbarState
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={toggleState}
      />

      {/* Menu Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-72 bg-background-100 shadow-xl transition-transform duration-300 ${
          navbarState ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-2 flex items-center justify-end ">
          <button
            onClick={toggleState}
            className="p-2 rounded-lg hover:bg-background-300 transition-colors"
          >
            <X />
          </button>
        </div>

        <div className="p-4 space-y-2">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleState}
                className={`block w-full p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary-100 text-primary-700 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavItems;
