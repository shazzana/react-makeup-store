import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './LipstickDisplay.css';

function LipstickDisplay() {

  const [lipstickSrc, setLipstickSrc] = useState([])

  const makeLipstickAPICall = async () => {
    const lipstickUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`
    console.log(lipstickUrl);
    const lipstickResult = await fetch(lipstickUrl)
    const lipstickJson = await lipstickResult.json();
    console.log('Lipstick Array: ', lipstickJson);
    setLipstickSrc(lipstickJson);
  }

  useEffect(() => {
    makeLipstickAPICall();
  }, [])

  const lipsticks = lipstickSrc.map((el) => {

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
        <h1>Lipstick</h1>
        <div>{lipsticks}</div>
      </Container>
    );
  }
  
  export default LipstickDisplay;