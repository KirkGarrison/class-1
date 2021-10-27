import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';


export default class App extends Component {
  render() {
    return (
      <div class="container">
        <Container>
          <Row>
            <Col><Header /></Col>
            <Col><Main /></Col>
            <Col><Footer /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}