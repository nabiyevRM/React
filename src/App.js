import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import RightContainer from './components/RightContainer';
import LeftContainer from './components/LeftContainer';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={3} sm={12}>
            <LeftContainer />
          </Col>
          <Col md={8} sm={12}>
            <RightContainer />
          </Col>  
        </Row>
      </Container>
    </div>
  );
}

export default App;
