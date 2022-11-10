import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import './EyebrowDisplay.css';

function EyebrowDisplay() {

  const [eyebrowSrc, setEyebrowSrc] = useState([])

  const makeEyebrowAPICall = async () => {
    const eyebrowUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow`
    console.log(eyebrowUrl);
    const eyebrowResult = await fetch(eyebrowUrl)
    const eyebrowJson = await eyebrowResult.json();
    console.log('Eyebrow Array: ', eyebrowJson);
    setEyebrowSrc(eyebrowJson);
  }

  useEffect(() => {
    makeEyebrowAPICall();
  }, [])

  const eyebrows = eyebrowSrc.slice(1,49).map((el) => {

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
        <h1>Eyebrow</h1>
        <div>{eyebrows}</div>
      </Container>
    );
  }
  
  export default EyebrowDisplay;