import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faMoneyBill,
  faIndustry,
  faLaptop,
  faCode,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import img from "../assets/img/row1img.png";
import "./Row1.scss";

export default () => {
  return (
    <Container className="row1-container">
      <Row>
        <Col md={6}>
          <h1 className="row1_heading1">
            <strong>Bespoke Software Development</strong>
          </h1>
          <h2 className="row1_heading2">
            <strong>For fast growing tech businesses​</strong>
          </h2>
          <div className="text">
            All tech-enabled businesses require a flexible partner to build,
            deploy, iterate and support their software systems, whether they
            are starting a new venture, finishing an existing project or
            supporting a legacy system. We are your long-term bespoke software
            development partners for scale.
          </div>
          <Button>Get Started</Button>
        </Col>
        <Col md={6}>
          <img src={img} alt="" />
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={4}>
          <div className="feature-item">
            <div className="saspot-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p>200+ software developers</p>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="feature-item">
            <div className="saspot-icon">
              <FontAwesomeIcon icon={faMoneyBill} />
            </div>
            <p>Competitive rates</p>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="feature-item">
            <div className="saspot-icon">
              <FontAwesomeIcon icon={faIndustry} />
            </div>
            <p>Flexible subscriptions</p>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="feature-item">
            <div className="saspot-icon">
              <FontAwesomeIcon icon={faLaptop} />
            </div>
            <p>Web, Mobile, Cloud</p>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="feature-item">
            <div className="saspot-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <p>5+ delivery centres</p>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="feature-item">
            <div className="saspot-icon">
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <p>Decade of success</p>
          </div>
        </Col>
      </Row>{" "}
      <Row>
        <h2 className="section-title">Our bespoke software services</h2>
        <p>
          We provide expert software development to our clients in order to
          suit your budgets and timelines.{" "}
        </p>
      </Row>
      <Row>
        <Col lg={4}>
          <div class="looking-item">
            <h3 class="looking-title">Bespoke software development </h3>
            <p>
              High-performance, resilient and scalable software solutions for
              your business. Built iteratively, using modern programming
              languages, proven tools and partners.{" "}
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div class="looking-item">
            <h3 class="looking-title">Mobile and web app development</h3>
            <p>
              Bespoke mobile and web application development with a focus on
              the user, user experience and functionality, design and built
              for your scaling user-base.{" "}
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div class="looking-item">
            <h3 class="looking-title">Professional team augmentation</h3>
            <p>
              Embed and intergrate a new, hand-crafted team into your
              development process or augment an existing team with
              highly-specialised, vetted engineers.{" "}
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div class="looking-item">
            <h3 class="looking-title">Software outsourcing </h3>
            <p>
              Dedicated and managed development teams act as a digital
              extension of your business. Increase your capacity to propel
              your business growth.{" "}
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div class="looking-item">
            <h3 class="looking-title">Software Support </h3>
            <p>
              Legacy software needs continuous support. Maintain and improve
              existing software to ensure optimal functionality and user
              experience.{" "}
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div class="looking-item">
            <h3 class="looking-title">Start a project</h3>
            <p>
              Got an exicting new project idea for your growing business? Need
              a bespoke solution to your software problem? Contact us and let
              us help{" "}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="success" style={{ color: "white" }}>
            {" "}
            Contact Us For Bespoke Software
          </Button>
        </div>
      </Row>
      <Row style={{ marginTop: "80px" }}>
        <Col md={5} lg={5}>
          <h2 className="row1_heading2">
            Why choose us for your bespoke software?
          </h2>
        </Col>
        <Col md={7} lg={7}>
          <p>
            With over a decade of experience, we understand how software works
            across a multitude of industries. We understand that platform
            growth and development capacity is a pain point for many of
            clients.
            <br></br>
            <br></br>Our multidisciplinary teams, comprising tech-enthusiasts
            with elite and varied development expertise, are geared towards
            building scalable products that service growth-focused businesses.
            We strive to deliver bespoke solutions that innovate using cutting
            edge technologies and cloud software at competitive and flexible
            rates.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
