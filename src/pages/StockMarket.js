import React, { useEffect } from "react";
import Axios from "axios";

import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import CompanyPage from "./CompanyPages/CompanyPage"
import { addCompanyToMarket } from "../actions/stockActions";
import { Col, Row } from "react-bootstrap";

const finnhub = require("finnhub");

function StockMarket({ addCompanyToStore, marketIndices, match }) {
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
      ).then((res) => {
        console.log(res.data.symbol, res.data.constituents);
        addCompanyToStore(marketIndices, res.data.constituents, res.data.symbol)
      }).catch(err => console.log(err));;
    })
  };


  useEffect(() => {
    getDataFromApi()
    return () => {
    }
  }, [])

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

  const getCompaniesWithIndex = () => {
    const companiesBoxes = marketIndices.map((indexData) => {
      const companyBox = indexData.constituents.map(company => {
        return (
          <Col xs={4} className="card p-1">
            <div>Company: {company}</div>
            <div>Index: {indexData.name}</div>
            <div>Index symbol: {indexData.symbol} </div>
          </Col>
        );
      })
      return <Row>{companyBox}</Row>;
    });
    return companiesBoxes;
  }



  const indices = marketIndices.map(index => {
    if (index.constituents.length > 0) {
      return (<Col key={index.symbol} xs={3} className="card">
        <Link to={`${match.url}/${index.symbol}`}>{index.name}
        </Link>
      </Col>)
    }
  })


  return (
    <>
      <div>Into StockMarket</div>
      <Row>{indices}</Row>
      {/* <Row>{companies}</Row> */}
      {/* <button onClick={handleClickAddCompanyToIndex}>BUTTON</button> */}

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
