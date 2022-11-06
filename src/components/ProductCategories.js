import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function ProductCategories() {
  return (
    <Container fluid="true">
      <Row>
        <Col>
            <Card className="category-card">
                <Card.Img 
                variant="bottom" 
                src={require("../images/blusher.jpg")}
                width="400"
                height="400" />
            </Card>
        </Col>
        <Col>
            <Card className="category-card">
                <Card.Img 
                variant="bottom" 
                src={require("../images/eyeshadow.jpg")}
                width="400" 
                height="400"/>
            </Card>
        </Col>
        <Col>
            <Card className="category-card">
                <Card.Img 
                variant="bottom" 
                src={require("../images/lipstick.jpg")}
                width="400"
                height="400" />
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCategories;