import Navbar from "./components/Appbar";
import Overview from "./Pages/Overview";

const App = () => {
  return (
    <div className="bg-background text-foreground h-screen flex flex-col">
      <Navbar />
      <Overview />
    </div>
  );
};

export default App;
