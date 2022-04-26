import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NotTakeOutWord.scss";

export default () => {
  return (
    <Container className="notTakeOutWordContainer">
      <Row className="m-5">
        <Col md={12} >
          <h2 className="section-title">
            Don't just take our word for it
          </h2>
        </Col>
      </Row>
      <Row>
        <Container>
          <Row className="info-row">
            <Col md={3} className="image-wrapper p-3">
              <img src="https://17yy713v5uns344y173csoha-wpengine.netdna-ssl.com/wp-content/uploads/sites/11/2022/03/FINCHECK-2-150x150.png" class="attachment-thumbnail size-thumbnail" alt="FINCHECK" />
            </Col>
            <Col md={9}>
              <h2> “</h2>
              <p className="content">BlueOcean is a highly recommended and innovative partner.</p>
              <p className="wrap">FINCHECK, CEO</p>
            </Col>
          </Row>
          <Row className="info-row">
            <Col md={3} className="image-wrapper p-3">
              <img class="attachment-large size-large" alt="etischool" src="https://17yy713v5uns344y173csoha-wpengine.netdna-ssl.com/wp-content/uploads/sites/11/2021/08/round-eiti-school-05-1.png" />
            </Col>
            <Col md={9}>
              <h2> “</h2>
              <p className="content">
                BlueOcean has been extremely efficient right from the start. <br />
                I've been more than please with the service.</p>
              <p className="wrap">FINCHECK, CEO</p>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  )
}