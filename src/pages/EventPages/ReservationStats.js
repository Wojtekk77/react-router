import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Axios from "axios";
import { addEventReservationStats } from "../../actions/eventActions";

export const ReservationStats = (props, { EventList }) => {
  let match = useRouteMatch();
  const [reservationStats, setReservationtats] = useState({});
  const api = `https://ticketmaster-django.herokuapp.com/admin${match.url}`;
  const token = "Token 654f6ac41de1b0f152e5cc36a3b6ce2c0b5350cb";

  console.log("api", api);
  console.log("match in ReservationStats", match);
  console.log("props id", props.id);

  useEffect(() => {
    Axios.get(api, {
      headers: { Authorization: `${token}` },
    })
      .then((res) => {
        console.log("res", res.data, typeof res.data);
        addEventReservationStats(res.data);
        setReservationtats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <p>{reservationStats.id}</p>
        <p>ilość zarezerwowanych: {reservationStats.quantity_reserved}</p>
      </div>
      <button>wdawioauhduioawhduiowhauiodhwaoijda</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  EventList: state.events.EventList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addEventReservationStats: (event) =>
      dispatch(addEventReservationStats(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationStats);
