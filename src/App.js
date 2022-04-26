import logo from './logo.svg';
import './App.css';
import Features from './Components/Features';

import "./assets/css/dynamic-style.css";
import { Container, Row, Col } from 'react-bootstrap';
import TrustedBand from './Components/TrustedBand';
import NotTakeOutWord from './Components/NotTakeOutWord';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={12} className="containerCol">
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
