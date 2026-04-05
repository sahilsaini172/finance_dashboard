import { Menu, X } from "lucide-react";

const Navbar = ({ navbarState, toggleState }) => {
  return (
    <div className="p-2 z-10 bg-white flex items-center w-full justify-end">
      <button
        onClick={toggleState}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Menu />
      </button>
    </div>
  );
};

export default Navbar;
