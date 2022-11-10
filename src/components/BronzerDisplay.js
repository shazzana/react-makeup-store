import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import './BronzerDisplay.css';

function BronzerDisplay() {

  const [bronzerSrc, setBronzerSrc] = useState([])

  const makeBronzerAPICall = async () => {
    const bronzerUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer`
    console.log(bronzerUrl);
    const bronzerResult = await fetch(bronzerUrl)
    const bronzerJson = await bronzerResult.json();
    console.log('Bronzer Array: ', bronzerJson);
    setBronzerSrc(bronzerJson);
  }

  useEffect(() => {
    makeBronzerAPICall();
  }, [])

  const bronzers = bronzerSrc.slice(2,69).map((el) => {

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
        <h1>Bronzer</h1>
        <div>{bronzers}</div>
      </Container>
    );
  }
  
  export default BronzerDisplay;