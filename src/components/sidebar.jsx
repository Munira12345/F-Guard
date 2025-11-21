import React from "react";

const menuItems = [
  { name: "Home" },
  { name: "Live Map" },
  { name: "Alerts", badge: 3 },
  { name: "Reports" },
  { name: "Settings" },
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-6">
      <h1 className="text-xl font-bold mb-8">ForestGuard KE</h1>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActivePage(item.name)}
            className={`flex justify-between items-center px-4 py-2 rounded hover:bg-gray-700 ${
              activePage === item.name ? "bg-gray-700" : ""
            }`}
          >
            {item.name}
            {item.badge && (
              <span className="bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
