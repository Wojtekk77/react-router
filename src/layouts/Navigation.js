import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "Home", path: "/", exact: true },
  { name: "About", path: "/about" },
  { name: "Topics", path: "/topics" },
  { name: "Numerology", path: "/numerology" },
  { name: "Movie-Reviews", path: "/movie-reviews" },
  { name: "Events", path: "/events" },
  { name: "StockMarket", path: "/stock-market" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
