import React from "react";
import { Route, Switch } from "react-router-dom";

// import HomePage from "../pages/HomePage";
// import ProductPage from "../pages/ProductPage";
// import ProductListPage from "../pages/ProductListPage";
// import ContactPage from "../pages/ContactPage";
// import AdminPage from "../pages/AdminPage";
// import ErrorPage from "../pages/ErrorPage";
// import LoginPage from "../pages/LoginPage";

import About from "../pages/About";
import Home from "../pages/Home";
import Numerology from "../pages/Numerology";
import MovieReviews from "../pages/MovieReviews";
import Topics from "../pages/Topics";
import Events from "../pages/Events";
import StockMarket from "../pages/StockMarket";
import Event from "../pages/EventPages/Event";
const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/numerology" component={Numerology} />
        <Route path="/movie-reviews" component={MovieReviews} />
        <Route path="/topics" component={Topics} />
        <Route path="/events" exact component={Events} />
        <Route path="/events/:id" component={Event} />
        <Route path="/stock-market" component={StockMarket} />

        {/* <Route path="/login" component={LoginPage} /> */}
        {/* <Route component={ErrorPage} /> */}
      </Switch>
    </>
  );
};

export default Page;
