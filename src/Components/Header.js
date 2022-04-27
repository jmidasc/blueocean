import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

import Logo from "../assets/img/logo.png";

export default () => {
  return (
    <>
      <header className="saspot-header saspot-sticky fixed-top">
        <Row className="align-items-center">
          <Col xl={5} lg={4} md={6} sm={10}>
            <div className="saspot-brand" style={{ paddingBottom: "-10px" }}>
              <img
                src={Logo}
                alt=" blue.ocean.gentrade | BLUE OCEAN STAR GENERAL TRADING LLC | Dubai"
                class="default-logo normal-logo"
                width="220"
                height=""
              ></img>
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
            <Button className="header-button" href="#contact">Start a Project</Button>
          </Col>
        </Row>
      </header>
    </>
  );
};
