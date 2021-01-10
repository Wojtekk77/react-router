import React from "react";
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

function Events({ EventList }) {
  let match = useRouteMatch();
  const events = EventList.map((event) => {
    return (
      <Col key={event.id} md={5} className="card m-1">
        <div>
          <h5>{event.name}</h5>
        </div>
        <div>data:{event.event_date}</div>
        <div>
          Zobacz szczegóły:
          <Link to={`${match.url}/${event.id}`}>event:id{event.id}</Link>
        </div>
      </Col>
    );
  });
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:eventId`}>
          <Event />
        </Route>
      </Switch>
      <h2>Events</h2>
      <Row>{events}</Row>
    </div>
  );
}

function mapStateToProps(state) {
  return { EventList: state.events.EventList };
}
function mapDispatchToProps() {}
export default connect(mapStateToProps)(Events);
