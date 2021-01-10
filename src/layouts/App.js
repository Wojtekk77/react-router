import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { Container, Col, Row } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <main>
            <Container>
              <Row>
                <Col xs={3}>
                  <aside>{<Navigation />}</aside>
                </Col>
                <Col xs={9}>
                  <section className="page">{<Page />}</section>
                </Col>
              </Row>
            </Container>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
