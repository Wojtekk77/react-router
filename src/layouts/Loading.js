import React from "react";
import { connect } from "react-redux";
import "../styles/Loading.css";

export const Loading = (props) => {
  return <div className="yin-yang"></div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
