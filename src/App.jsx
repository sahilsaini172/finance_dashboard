import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavItems from "./components/NavItems";

import Overview from "./Pages/Overview";
import Transactions from "./Pages/Transactions";
import Insights from "./Pages/Insights";

const App = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <div className="bg-background-500 text-foreground-500 min-h-screen flex flex-col">
      <Navbar navbarState={navbar} toggleState={toggleNavbar} />
      <NavItems navbarState={navbar} toggleState={toggleNavbar} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/analytics" element={<Insights />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;