import React from "react";

function DashboardCard({ title, value, subtitle }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
      <h3 className="text-gray-500">{title}</h3>
      <h2 className="text-2xl font-bold my-2">{value}</h2>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
  );
}

export default DashboardCard;
