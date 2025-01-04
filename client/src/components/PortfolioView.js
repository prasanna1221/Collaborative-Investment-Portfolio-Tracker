import React, { useState, useEffect } from "react";
import axios from "axios";

function PortfolioView() {
  const [portfolio, setPortfolio] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/portfolio/${userId}`);
        setPortfolio(response.data.assets);
      } catch (error) {
        alert("Error fetching portfolio");
      }
    };

    fetchPortfolio();
  }, [userId]);

  return (
    <div>
      <h1>Your Portfolio</h1>
      <ul>
        {portfolio.map((asset, index) => (
          <li key={index}>
            {asset.ticker} - {asset.quantity} shares at ${asset.currentPrice.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioView;
