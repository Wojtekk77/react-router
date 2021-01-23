import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Event from "./EventPages/Event";
import { Col, Row } from "react-bootstrap";
import Axios from "axios";
import { addEventsAction } from "../actions/eventActions";

function Events({ EventList, auth, addEvents }) {
  let match = useRouteMatch();
  const [eList, setEList] = useState([]);

  const api = "https://ticketmaster-django.herokuapp.com/admin/events";
  const token = "Token 654f6ac41de1b0f152e5cc36a3b6ce2c0b5350cb";

  useEffect(() => {
    Axios.get(api, {
      headers: { Authorization: `${token}` },
    }).then((res) => {
      let uniqueEvents = true;
      let eventToSend = [];
      res.data.results.map((event) => {
        uniqueEvents = true;
        EventList.map((e) => {
          if (e.id === event.id) {
            uniqueEvents = false;
          }
        });
        if (uniqueEvents) {
          eventToSend = eventToSend.concat(event);
        }
      });
      addEvents(eventToSend);
    });
  }, []);

  const events = EventList.map((event) => {
    return (
      <Col key={event.id} md={5} className="card m-1">
        <div>
          <h5>{event.name}</h5>
        </div>
        <div>data:{event.event_date}</div>
        <div>
          Zobacz szczegóły:
          <Link to={`${match.url}/${event.id}`}>event:id {event.id}</Link>
        </div>
      </Col>
    );
  });
  return (
    <div>
      <h2>Events</h2>
      <Row>{events}</Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  EventList: state.events.EventList,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addEvents: (events) => dispatch(addEventsAction(events)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
