import React from "react";
import { faCheck, faCopy, faRocket, faCode, faComment, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";

import "./Features.scss";

export default () => {
  return (
    <Container className="feature-container mb-5">
      <div className="saspot-features">
        <Row className="justify-content-center">
          <Col lg={4} md={6}>

            <div className="feature-item">
              <div className="saspot-icon"> <FontAwesomeIcon icon={faCheck} size="xl" fontWeight={900} /></div>
              <h3 className="feature-title">Project delivery</h3><p>Successful project delivery owing to dedicated project managers</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="feature-item">
              <div className="saspot-icon"> <FontAwesomeIcon icon={faCopy} size="xl" /></div>
              <h3 className="feature-title">Multi-industry experience</h3><p>We are experts at understanding software development processes in a variety of sectors</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="feature-item">
              <div className="saspot-icon"> <FontAwesomeIcon icon={faRocket} size="xl" /></div>
              <h3 className="feature-title"><a href="#0">Global deployments</a></h3><p>Deploy your product locally or to a global audience</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="feature-item">
              <div className="saspot-icon"> <FontAwesomeIcon icon={faCode} size="xl" /></div>
              <h3 className="feature-title">Product innovation</h3><p>Cutting-edge innovation in AI, IOT, AR/VR, Blockchain, SaaS, ML and Cloud</p>
            </div>

          </Col>
          <Col lg={4} md={6}>
            <div className="feature-item">
              <div className="saspot-icon"> <FontAwesomeIcon icon={faComment} size="xl" /></div>
              <h3 className="feature-title">Transparent service</h3><p>Keep track of your project’s progress with open and continuous communication</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="feature-item">
              <div className="saspot-icon"> <FontAwesomeIcon icon={faGear} size="xl" /></div>
              <h3 className="feature-title">Global delivery centres</h3><p>Geared towards scale and capacity. We have a global pool of the best tech talent</p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}