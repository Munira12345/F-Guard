import React from "react";
import MapBox from "../components/MapBox";
import DashboardCard from "../components/DashboardCard";
import AlertItem from "../components/AlertItem";

function Home() {
  return (
    <div className="space-y-6">
      {/* Map */}
      <MapBox />

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <DashboardCard title="New Alerts Today" value="7" subtitle="+2 from yesterday" />
        <DashboardCard title="Total Hectares Saved" value="1,247" subtitle="+89 this month" />
        <DashboardCard title="Response Time (avg)" value="23 min" subtitle="-5 min improvement" />
        <DashboardCard title="Partners Notified" value="34" subtitle="KWS, NGOs, Communities" />
      </div>

      {/* Latest Alerts */}
      <div>
        <h2 className="text-xl font-bold mb-2">Latest Alerts</h2>
        <AlertItem location="Mau Complex, Nakuru County" date="2025-11-17" time="09:23 AM" status="New" confidence="94" area="12.4" />
        <AlertItem location="Aberdare Range, Nyandarua County" date="2025-11-17" time="07:15 AM" status="Investigating" confidence="87" area="8.2" />
        <AlertItem location="Kakamega Forest, Kakamega County" date="2025-11-16" time="03:42 PM" status="New" confidence="91" area="15.6" />
        <AlertItem location="Mount Kenya Forest, Kirinyaga County" date="2025-11-16" time="11:08 AM" status="Resolved" confidence="78" area="5.3" />
        <AlertItem location="Arabuko Sokoke Forest, Kilifi County" date="2025-11-15" time="02:30 PM" status="False Positive" confidence="68" area="5.3" />
      </div>
    </div>
  );
}

export default Home;
