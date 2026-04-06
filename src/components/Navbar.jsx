import { Moon, Sun } from "lucide-react";
import { useUIStore } from "../store/useUIStore";

const Navbar = () => {
  const theme = useUIStore((state) => state.theme);
  const toggleTheme = useUIStore((state) => state.toggleTheme);
  return (
    <div className="p-2 z-10 bg-background-100 flex items-center w-full justify-end">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        {theme=='dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default Navbar;
