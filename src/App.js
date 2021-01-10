import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Aside from "./components/aside/Aside";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/globalStyles";
import Theme from "./theme/theme";
import { Row, Col, Container } from "react-bootstrap";
const StyledAside = styled.div`
  margin: 50px;
  color: red;
  background-color: blue;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Container>
          <StyledAside>
            <Aside />
          </StyledAside>
        </Container>
      </ThemeProvider>
      <Container>
        <Row>
          <Col xs>First, but unordered</Col>
          <Col xs={{ order: 12 }}>Second, but last</Col>
          <Col xs={{ order: 1 }}>Third, but second</Col>
        </Row>
      </Container>
    </>
  );
}
