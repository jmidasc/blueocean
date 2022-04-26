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
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="E.g. Erlich Bachman" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Work Email</Form.Label>
                <Form.Control type="email" placeholder="E.g. erlich@aviato.co.uk" />
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
          <Col md={1}></Col>
          <Col md={3} className="contactinfo">
            <Row>
              <h2>Contact Info</h2>
              <p>
                Need help? Feel free to contact us and we’ll respond as soon as possible.
                <br />
                <br />
                hello@sovtech.co.uk
                <br />
                <strong>
                  +44 20 3998 9611
                </strong>
              </p>
            </Row>
            <Row>
              <h2>Follow Us</h2>
              <Container>
                <Row>
                  <Col className="linkes">
                    <div className="icon-label">
                      <FontAwesomeIcon icon={faFacebookF} size="lg" />
                    </div>
                    <div className="icon-label">
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </div>
                    <div className="icon-label">
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </div>
                    <div className="icon-label">
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}