import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import EventPage from "./EventPages/EventPage";

const StyledHeaderBox = styled.div`
  color: palevioletred;
  min-height: 65px;
`;

const StyledH4 = styled.h4`
  font-size: 1.1rem;
`;

function Events({ EventList }) {
  let match = useRouteMatch();
  console.log("im in events", EventList);

  const events = EventList.map((event) => {
    return (
      <Col key={event.id} md={5} lg={3} className="box card m-1 py-2">
        <StyledHeaderBox className="boxHeader">
          <StyledH4>{event.name} </StyledH4>
        </StyledHeaderBox>
        <div className="boxMain">
          <p>data: {event.event_date}</p>
          <p>dosptępność: {event.status}</p>
        </div>
        <div className="boxFooter">
          <p>
            <Link to={`${match.url}/${event.id}`}>Zobacz Event:</Link>
          </p>
        </div>
      </Col>
    );
  });

  return (
    <>
      <Container>
        <Row>{events}</Row>
      </Container>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <EventPage />
        </Route>
      </Switch>
    </>
  );
}
function mapStateToProps(state) {
  return { EventList: state.events.EventList };
}
function mapDispatchToProps() {}
export default connect(mapStateToProps)(Events);
