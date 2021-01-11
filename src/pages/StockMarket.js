import React from "react";
import Axios from "axios";

import { connect } from 'react-redux';
import { addCompanyToMarket } from "../actions/stockActions";

const finnhub = require("finnhub");


function StockMarket({ addCompanyToStore, marketIndices }) {
  const apiKey = "bvsu6ov48v6rku8bemsg"
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
      // console.log("aplle?", data);
    }
  );


  const getDataFromApi = () => {
    Axios.get(`https://finnhub.io/api/v1/index/constituents?symbol=^GSPC&token=${apiKey}`).then((res, err) => {
      // console.log("res", res.data.constituents);
    });
  };

  getDataFromApi()

  // console.log("market", marketIndices)
  finnhubClient.country((error, data, response) => {
    // console.log("countries", data);
    data.map((data) => {
      if (data.country === "Poland") {
        // console.log("Pol", data);
      }
    });
  });

  const handleClickAddCompanyToIndex = () => {
    // console.log("dwa dwa")
    addCompanyToStore(marketIndices, ["KKK", "DDD"], "WIG");
  }

  return <><div>Into StockMarket</div>
    <button onClick={handleClickAddCompanyToIndex}>BUTTON</button>
    <p>{marketIndices.SP500}</p>
    <p>{marketIndices.WIG}</p>
  </>;
}


const mapStateToProps = (state) => ({
  marketIndices: state.stock.marketIndices
})

const mapDispatchToProps = (dispatch) => {
  return {
    addCompanyToStore: (marketIndices, companies, index) => dispatch(addCompanyToMarket(marketIndices, companies, index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockMarket)
