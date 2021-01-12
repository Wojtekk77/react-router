import React, { useEffect } from "react";
import Axios from "axios";

import { connect } from "react-redux";
import { addCompanyToMarket } from "../actions/stockActions";
import { Col, Row } from "react-bootstrap";

const finnhub = require("finnhub");

function StockMarket({ addCompanyToStore, marketIndices }) {
  const apiKey = "bvsu6ov48v6rku8bemsg";
  const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  api_key.apiKey = "bvsu6ov48v6rku8bemsg"; // Replace this
  const finnhubClient = new finnhub.DefaultApi();

  // // Stock candles
  // finnhubClient.stockCandles(
  //   "AAPL",
  //   "D",
  //   1590988249,
  //   1591852249,
  //   {},
  //   (error, data, response) => {
  //     // console.log("aplle?", data);
  //   }
  // );

  const getDataFromApi = () => {
    marketIndices.map(index => {
      Axios.get(
        `https://finnhub.io/api/v1/index/constituents?symbol=${index.symbol}&token=${apiKey}`
      ).then((res, err) => {
        console.log(res.data.symbol, res.data.constituents);
        addCompanyToStore(marketIndices, res.data.constituents, res.data.symbol)
      });
    })
  };

  getDataFromApi();

  // // console.log("market", marketIndices)
  // finnhubClient.country((error, data, response) => {
  //   // console.log("countries", data);
  //   data.map((data) => {
  //     if (data.country === "Poland") {
  //       // console.log("Pol", data);
  //     }
  //   });
  // });

  // const handleClickAddCompanyToIndex = () => {
  //   addCompanyToStore(
  //     marketIndices,
  //     ["-wiem,ze nic nie wiem-", "drugi raz"],
  //     "WIG"
  //   );
  // };

  // const getCompaniesWithIndex = () => {
  //   const companiesBoxes = marketIndices.map((indexData) => {
  //     const companyBox = indexData.companies.map(company => {
  //       return (
  //         <Col>
  //           <div>Company: {company}</div>
  //           <div>Index: {indexData.id}</div>
  //           <div>Link: </div>
  //         </Col>
  //       );
  //     })
  //     return companyBox;
  //   });
  //   return companiesBoxes;
  // }

  // let companies = getCompaniesWithIndex();

  // useEffect(() => {
  //   companies = getCompaniesWithIndex();
  // }, [marketIndices]);



  return (
    <>
      <div>Into StockMarket</div>
      {/* <button onClick={handleClickAddCompanyToIndex}>BUTTON</button> */}
      {/* <Row>{companies}</Row> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  marketIndices: state.stock.marketIndices,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCompanyToStore: (marketIndices, companies, index) =>
      dispatch(addCompanyToMarket(marketIndices, companies, index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockMarket);
