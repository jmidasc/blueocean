import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

import "./TrustedBand.scss";

export default () => {
  return (
    <Container className="trustedBandContainer p-5" fluid>
      <Container>
        <Row>
          <Col sm={6} className="step-info">
            <h2 className="step-title">A few of our trusted brands</h2>
            <p>Made up of a dynamic and passionate team of tech enthusiasts we continuously strive to implement the very best software innovations, adapting cutting-edge technologies to suit our clients’ unique business needs.</p><div className="saspot-link-wrap link-wrap-style-two">
              <a href="/clients/" className="saspot-link">
                SEE OUR CLIENTS  <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
          </Col>
          <Col sm={6} >
            <div className="elementor-image">
              <img className="attachment-large size-large" alt="SovTech-UK-Clients" style={{ maxWidth: "100%" }} src="https://17yy713v5uns344y173csoha-wpengine.netdna-ssl.com/wp-content/uploads/sites/11/2022/03/SovTech-UK-Clients-1-1024x736.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}