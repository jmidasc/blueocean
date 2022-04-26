import logo from './logo.svg';
import './App.css';
import Features from './Components/Features';

import "./assets/css/dynamic-style.css";
import { Container, Row, Col } from 'react-bootstrap';
import TrustedBand from './Components/TrustedBand';
import NotTakeOutWord from './Components/NotTakeOutWord';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Headers from './Components/Header';
import Row1 from './Components/Row1';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Headers />
          <Col md={12} className="containerCol">
            <Row1 />
            <Features />
            <TrustedBand />
            <NotTakeOutWord />
            <Contact />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
