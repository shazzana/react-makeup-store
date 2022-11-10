import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function EyeshadowDisplay() {

  const [eyeshadowSrc, setEyeshadowSrc] = useState([])

  const makeEyeshadowAPICall = async () => {
    const eyeshadowUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow`
    console.log(eyeshadowUrl);
    const eyeshadowResult = await fetch(eyeshadowUrl)
    const eyeshadowJson = await eyeshadowResult.json();
    console.log('Eyeshadow Array: ', eyeshadowJson);
    setEyeshadowSrc(eyeshadowJson);
  }

  useEffect(() => {
    makeEyeshadowAPICall();
  }, [])

  const eyeshadows = eyeshadowSrc.slice(12,86).map((el) => {

    return (
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.image_link} />
        <Card.Body>
          <Card.Title>{el.brand}</Card.Title>
          <Card.Text>{el.name}</Card.Text>
          <Card.Text>SGD{el.price}0</Card.Text>
          <Button variant="dark" href={el.product_link}>Buy now</Button>
        </Card.Body>
      </Card>
    )
  })

    return (
      <Container fluid="true">
        <h1>Eyeshadow</h1>
        <div>{eyeshadows}</div>
      </Container>
    );
  }
  
  export default EyeshadowDisplay;