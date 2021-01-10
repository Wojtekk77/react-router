import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const EventPage = (props) => {
  const event = useSelector((state) =>
    state.events.EventList.find(
      (element) => toString(element.id) === toString(props.match.params.id)
    )
  );

  console.log("[props id", props);
  console.log("state", event);

  return (
    <Col key={event.id} md={5} lg={3} className="box card m-1 py-2">
      <div className="boxHeader">
        <h3>{event.name} </h3>
      </div>
      <div className="boxMain">
        <p>data: {event.event_date}</p>
        <p>dosptępność: {event.status}</p>
      </div>
      <div className="boxFooter">
        <p>
          <Link to={"/events"}>Powrót do listy:</Link>
        </p>
      </div>
    </Col>
  );
};

export default EventPage;
