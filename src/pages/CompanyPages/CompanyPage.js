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

import { connect } from 'react-redux'

export const CompanyPage = ({ marketIndices, match }) => {

  const [index] = marketIndices.filter(index => index.symbol == match.params.id
  )

  let companies = index.constituents.map(company => {
    return (
      <Col xs={4}>
        <div><h5><Link to={`${match.url}/${company}`}> {company}</Link></h5></div>

      </Col>
    )
  })

  console.log(marketIndices)

  return (
    <>
      <Row><h2>{index.name}</h2></Row>
      <Row>
        {companies}
      </Row>
      <Row >
        <div>
          <Link to="/stock-market">Cofnij</Link>
        </div>
      </Row>
    </>
  )
}

const mapStateToProps = (state) => ({
  marketIndices: state.stock.marketIndices
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage)

