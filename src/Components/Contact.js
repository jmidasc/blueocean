import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./Contact.scss";
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default () => {
  return (
    <Container className="contactContainer" fluid>
      <Container>
        <Row>
          <h2 className="title"> Get Your Bespoke Software Quote </h2>
        </Row>
        <Row>
          <Col md={7}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="E.g. John Doe" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Work Email</Form.Label>
                <Form.Control type="email" placeholder="E.g. john.blue.ocean@gmail.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Company Size</Form.Label>
                <Form.Select>
                  <option> Select One</option>
                  <option> 1-5</option>
                  <option> 5-25</option>
                  <option> 25-50</option>
                  <option> 50-100</option>
                  <option> 100-500</option>
                  <option> 500-1000</option>
                  <option> 1000+</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>How can we help?</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={1}>

          </Col>
          <Col md={4} className="contactinfo">
            <h2>Contact Info</h2>
            <Container>
              <Row className="contactdetail">
                <Col>
                  <strong>BLUE OCEAN STAR GENERAL TRADING LLC</strong>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <strong>Owner:</strong>
                </Col>
                <Col>
                  ABUDUREHEIMU AOBULIKASI
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <strong>Mail:</strong>
                </Col>
                <Col>
                  blue.ocean.gentrade@gmail.com
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <strong>Address:</strong>
                </Col>
                <Col>
                  Office No.101,<br /> Al Matrooshi Shopping Center,<br /> Al Musalla Road,<br /> Naif, Deira,<br /> Dubai, UAE
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <strong>Tel: </strong>
                </Col>
                <Col>
                  +97 150 725 9840
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}