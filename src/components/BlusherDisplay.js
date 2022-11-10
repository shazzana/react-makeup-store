import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import './BlusherDisplay.css';

function BlusherDisplay() {

  const [blusherSrc, setBlusherSrc] = useState([])

  const makeBlusherAPICall = async () => {
    const blusherUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`
    console.log(blusherUrl);
    const blusherResult = await fetch(blusherUrl)
    const blusherJson = await blusherResult.json();
    console.log('Blusher Array: ', blusherJson);
    setBlusherSrc(blusherJson);
  }

  useEffect(() => {
    makeBlusherAPICall();
  }, [])

  const blushers = blusherSrc.slice(4,78).map((el) => {

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
        <h1>Blusher</h1>
        <div>{blushers}</div>
      </Container>
    );
  }
  
  export default BlusherDisplay;