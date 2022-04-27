import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import "./Footer.scss";

import logo from '../assets/img/logo1.png';

export default () => {
  return (
    <Container as="footer" className="footerContainer p-4" fluid>
      <Container className="pt-5">
        <Row className="mb-5">
          <Col md={5}>
            <h2>
              <img src={logo} />
            </h2>
            <br />
            blue.ocean.gentrade@gmail.com
            <br />
            <strong>BLUE OCEAN STAR GENERAL TRADING LLC</strong> is a limited company registered in UAE. <br />
            Owner: ABUDUREHEIMU AOBULIKASI
          </Col>
          <Col>
            <h2>
              Bespoke Services
            </h2>
            <Stack className="linkes">
              <a>App Development</a>
              <a>Software Development</a>
              <a>Website Development</a>
              <a>Software Development</a>
            </Stack>
          </Col>
          <Col>
            <h2>Solutions</h2>
            <Stack className="linkes">
              <a>Agile Development</a>
              <a>Hire Development Teams</a>
              <a>Cloud Software</a>
            </Stack>
          </Col>
        </Row>
        <Row className="copyright align-items-center">
          <Col md={4}>
          </Col>
          <Col md={4} className="textcenter">
            <p><strong> @ 2012 - 2022 </strong></p>
          </Col>
          <Col md={4} className="textright">
          </Col>
        </Row>
      </Container>
    </Container>
  )
}