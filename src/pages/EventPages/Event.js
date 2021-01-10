import React from "react";
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

export const Event = ({ EventList, match }) => {
  const [event] = EventList.filter((ev) => ev.id === match.params.id);
  return (
    <Col key={event.id} md={5} className="card m-1">
      <div>
        <h5>{event.name}</h5>
      </div>
      <div>data:{event.event_date}</div>
      <div>
        <Link to={`/events`}>cofnij</Link>
      </div>
    </Col>
  );
};

const mapStateToProps = (state) => ({
  EventList: state.events.EventList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
