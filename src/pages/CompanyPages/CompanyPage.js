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
      <Col xs={4}><h4>{index.name}</h4>
        <Link to={`${match.url}/${company}`}> {company}</Link>
        <Link to="/stock-market">Cofnij</Link>
      </Col>
    )
  })

  console.log(marketIndices)

  return (
    <Row>
      {companies}
    </Row>
  )
}

const mapStateToProps = (state) => ({
  marketIndices: state.stock.marketIndices
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage)

