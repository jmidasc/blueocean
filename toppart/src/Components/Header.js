import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

import Logo from "../assets/img/logo.png";

export default () => {
  return (
    <>
      <div>
        <header className="saspot-header saspot-sticky">
          <Row className="align-items-center">
            <Col xl={5} lg={4} md={6} sm={10}>
              <div className="saspot-brand" style={{ paddingBottom: "-10px" }}>
                <img
                  src={Logo}
                  alt="SovTech.co.uk | Bespoke Software Development | London"
                  class="default-logo normal-logo"
                  width="220"
                  height=""
                ></img>
              </div>
              <div className="header-contract">
                <div className="header-contact-link">
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                  &nbsp;&nbsp;&nbsp;+971507259840
                </div>
              </div>
            </Col>
            <Col
              xl={7}
              lg={8}
              md={6}
              sm={2}
              className="d-flex justify-content-center"
            >
              <div></div>
              <Button className="header-button">Start a Project</Button>
            </Col>
          </Row>
        </header>
      </div>
    </>
  );
};
