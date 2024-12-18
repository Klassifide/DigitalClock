import React from "react";
import CityTime from "./CityTime";

export default function ClockDashboard() {
  const cities = [
    { name: "Auckland" , timezone: "Pacific/Auckland" },
    { name: "New York", timezone: "America/New_York" },
    { name: "London", timezone: "Europe/London" },
    { name: "Frankfurt", timezone: "Europe/Berlin" },
    { name: "Tokyo", timezone: "Asia/Tokyo" },
    { name: "BOMB!@#$", timezone: "Australia/Sydney" },
    
  ];

  return (
    <div className="world-clock">
      
      <h2>Klassifides Clocks</h2>
      <ul className="cities">
        {cities.map((city, index) => (
          <CityTime city={city} key={index} />
        ))}
      </ul>
    </div>
  );
}