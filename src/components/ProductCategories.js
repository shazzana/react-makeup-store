import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductCategories() {
  return (
    <Container>
      <Row>
        <Col>
            <img 
            src={require("../images/foundation.jpg")}
            width="500"
            />
        </Col>
        <Col>
        <img 
            src={require("../images/blusher.jpg")}
            width="500"
            />
        </Col>
      </Row>
      <Row>
        <Col>
            <img 
            src={require("../images/eyeshadow.jpg")}
            width="500"
            />
        </Col>
        <Col>
        <img 
            src={require("../images/lipstick.jpg")}
            width="500"
            />
        </Col>
        <Col>
        <img 
            src={require("../images/nailpolish.jpg")}
            width="500"
            />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCategories;