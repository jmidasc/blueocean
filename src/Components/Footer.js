import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import "./Footer.scss";

import logo from '../assets/img/logo.png';

export default () => {
  return (
    <Container as="footer" className="footerContainer p-4" fluid>
      <Container className="pt-5">
        <Row className="mb-5">
          <Col md={4}>
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
          <Col>
            <h2>
              About us
            </h2>
            <Stack className="linkes">
              <a>About us</a>
              <a> Clients</a>
              <a>FAQs</a>
              <a>Services</a>
              <a>Blog</a>
            </Stack>
          </Col>
          <Col>
            <h2>Contact Us</h2>
            <Stack className="linkes">
              <a>Contact Us</a>
              <a>Live Chat</a>
              <a>Careers</a>
              <a>Legal Policies</a>
              <a>Sitemap</a>
            </Stack>
          </Col>
        </Row>
        <Row className="copyright">
          <Container>
            <div className="seofooter">
              <h4>Top Software Companies |&nbsp; Software Development Services | Software Solutions | App Development</h4>
            </div>
            <Row className="align-items-center">
              <Col md={4}>
                <div className="saspot-social rounded">
                  <a href="https://www.facebook.com/sovtech.uk" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="https://twitter.com/SovTech_uk" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.linkedin.com/company/sovtech/" className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://www.instagram.com/humans_of_sovtech/" className="instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://github.com/SovTech" className="github">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </Col>
              <Col md={4} className="textcenter">
                <p>© 2012 - 2022</p>
              </Col>
              <Col md={4} className="textright">
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </Container>
  )
}