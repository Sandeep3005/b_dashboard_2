import React, { Component } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import APIStatus from "./APIStatus/APIStatus";

class APIDetails extends Component {
  handleGetStatusClicked = () => {
    console.log("Hi");
  };

  handleAChanged = event => {
    console.log(
      "TCL: APIDetails -> handleAChanged -> value",
      event.target.value
    );
  };

  handleBChanged = event => {
    console.log(
      "TCL: APIDetails -> handleAChanged -> value",
      event.target.value
    );
  };

  render() {
    return (
      <Container style={{ marginTop: "8em" }}>
        <Row>
          <Col md="1" />
          <Col md="4">
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" onChange={this.handleAChanged}>
                  <option>Select API(Required)</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col md="4">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select" onChange={this.handleBChanged}>
                <option>Select TestBed(Required)</option>
                <option>TB5</option>
                <option>TBP</option>
                <option>TB9</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md="2">
            <Button
              onClick={this.handleGetStatusClicked}
              variant="outline-primary"
            >
              Get Status
            </Button>
          </Col>
        </Row>
        <Row>
          <APIStatus />
        </Row>
      </Container>
    );
  }
}

export default APIDetails;
