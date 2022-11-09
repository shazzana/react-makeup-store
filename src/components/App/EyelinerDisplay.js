import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import './EyelinerDisplay.css';

function EyelinerDisplay() {

  const [eyelinerSrc, setEyelinerSrc] = useState([])

  const makeEyelinerAPICall = async () => {
    const eyelinerUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner`
    console.log(eyelinerUrl);
    const eyelinerResult = await fetch(eyelinerUrl)
    const eyelinerJson = await eyelinerResult.json();
    console.log('Eyeliner Array: ', eyelinerJson);
    setEyelinerSrc(eyelinerJson);
  }

  useEffect(() => {
    makeEyelinerAPICall();
  }, [])

  const eyeliners = eyelinerSrc.slice(6,50).map((el) => {

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
        <h1>Eyeliner</h1>
        <div>{eyeliners}</div>
      </Container>
    );
  }
  
  export default EyelinerDisplay;