import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Dashboard() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    socket.on("portfolio-updated", (data) => {
      setPortfolio(data);
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {portfolio.map((asset, index) => (
          <li key={index}>
            {asset.ticker}: {asset.quantity} shares at ${asset.currentPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
