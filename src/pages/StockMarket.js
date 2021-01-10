import React from "react";
const finnhub = require("finnhub");

export default function StockMarket() {
  const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  api_key.apiKey = "bvsu6ov48v6rku8bemsg"; // Replace this
  const finnhubClient = new finnhub.DefaultApi();

  // Stock candles
  finnhubClient.stockCandles(
    "AAPL",
    "D",
    1590988249,
    1591852249,
    {},
    (error, data, response) => {
      console.log("aplle?", data);
    }
  );

  finnhubClient.country((error, data, response) => {
    console.log("countries", data);
    data.map((data) => {
      if (data.country === "Poland") {
        console.log("Pol", data);
      }
    });
  });

  return <div>Into StockMarket</div>;
}
