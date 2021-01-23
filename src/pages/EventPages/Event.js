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
import { addEventDetails } from "../../actions/eventActions";
import ReservationStats from "./ReservationStats";
export const Event = ({
  EventList,
  DetailList,
  auth,
  match,
  addEventDetails,
}) => {
  const [details, setDetails] = useState({});
  const api = `https://ticketmaster-django.herokuapp.com/admin/events/${match.params.id}`;
  const token = "Token 654f6ac41de1b0f152e5cc36a3b6ce2c0b5350cb";
  useEffect(() => {
    Axios.get(api, {
      headers: { Authorization: `${token}` },
    })
      .then((res) => {
        console.log("res", res);
        addEventDetails(res.data);
        setDetails(res.data);
      })
      .catch((err) => {
         console.log(err);
      });
  }, []);
  return (
    <>
      <Col key={details.id} md={5} className="card m-1">
        <div>
          <h5>{details.name}</h5>
        </div>
        <div>data:{details.event_date}</div>
        <p>created_at:{details.created_at}</p>
        <p> description:{details.description}</p>
        <p>event_date:{details.event_date}</p>
        <p> id:{details.id}</p>
        <p>name:{details.name}</p>
        <p> place:{details.place} </p>
        <p> status:{details.status}</p>

        <div>
          <Link to={`${match.url}/reservation-stats/`}>status rezerwacji</Link>
          <Link to={`/events`}>cofnij</Link>
        </div>
      </Col>
      <Switch>
        <Route path={`${match.url}/reservation-stats/`}>
          <ReservationStats is={details.id} />
        </Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => ({
  EventList: state.events.EventList,
  DetailList: state.events.DetailList,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addEventDetails: (event) => dispatch(addEventDetails(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
