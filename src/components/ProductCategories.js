import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function ProductCategories() {
  return (
    <Container fluid="true">
      <Row>
        <Col>
            <Image 
            src={require("../images/blusher.jpg")}
            width="400"
            />
        </Col>
        <Col>
            <Image 
            src={require("../images/eyeshadow.jpg")}
            width="400"
            />
        </Col>
        <Col>
            <Image 
            src={require("../images/lipstick.jpg")}
            width="400"
            />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCategories;