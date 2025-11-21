import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import LiveMap from "./pages/LiveMap";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home": return <Home />;
      case "Live Map": return <LiveMap />;
      case "Alerts": return <Alerts />;
      case "Reports": return <Reports />;
      case "Settings": return <Settings />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex h-screen font-sans">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 bg-gray-100 overflow-auto p-6">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
