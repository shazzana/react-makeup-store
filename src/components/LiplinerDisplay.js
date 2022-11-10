import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import './LiplinerDisplay.css';

function LiplinerDisplay() {

  const [liplinerSrc, setLiplinerSrc] = useState([])

  const makeLiplinerAPICall = async () => {
    const liplinerUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip liner`
    console.log(liplinerUrl);
    const liplinerResult = await fetch(liplinerUrl)
    const liplinerJson = await liplinerResult.json();
    console.log('Lipliner Array: ', liplinerJson);
    setLiplinerSrc(liplinerJson);
  }

  useEffect(() => {
    makeLiplinerAPICall();
  }, [])

  const lipliners = liplinerSrc.slice(2,29).map((el) => {

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
        <h1>Lipliner</h1>
        <div>{lipliners}</div>
      </Container>
    );
  }
  
  export default LiplinerDisplay;