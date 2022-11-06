import React from 'react';

function FoundationDisplay() {

  const makeFoundationAPICall = async () => {
    const foundationUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${val}&limit=10`
    console.log(foundationUrl);
    const foundationResult = await fetch(foundationUrl)
    const foundationJson = await foundationResult.json();
    console.log(foundationJson);
  }


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
  
  export default FoundationDisplay;