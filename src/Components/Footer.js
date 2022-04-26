import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import "./Footer.scss";

export default () => {
  return (
    <Container as="footer" className="footerContainer p-4" fluid>
      <Container>

        <Row>
          <Col>
            <h2>
              <img alt="dfsfds" />
            </h2>
            <br />
            hello@sovtech.co.uk
            <br />
            SovTech UK Ltd. is a limited company registered in England and Wales. Registered number: 12000792.  VAT reg no: 325287693
          </Col>
          <Col>
            <h2>
              Bespoke Services
            </h2>
            <div>
              <Stack>
                <a>App Development</a>
                <a>Software Development</a>
                <a>Website Development</a>
                <a>Software Development</a>
              </Stack>
            </div>
          </Col>
          <Col>
            <h2>Solutions</h2>
            <div>
              <Stack>
                <a>Agile Development</a>
                <a>Hire Development Teams</a>
                <a>Cloud Software</a>
              </Stack>
            </div>
          </Col>
          <Col>
            <h2>
              About us
            </h2>
            <div>
              <Stack>
                <a>About us</a>
                <a> Clients</a>
                <a>FAQs</a>
                <a>Services</a>
                <a>Blog</a>
              </Stack>
            </div>
          </Col>
          <Col>
            <h2>Contact Us</h2>
            <div>
              <Stack>
                <a>Contact Us</a>
                <a>Live Chat</a>
                <a>Careers</a>
                <a>Legal Policies</a>
                <a>Sitemap</a>
              </Stack>
            </div>
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