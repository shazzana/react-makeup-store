import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './FoundationDisplay.css';

function FoundationDisplay() {

  const [foundationSrc, setFoundationSrc] = useState([])

  const makeFoundationAPICall = async () => {
    const foundationUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation`
    console.log(foundationUrl);
    const foundationResult = await fetch(foundationUrl)
    const foundationJson = await foundationResult.json();
    console.log('Foundation Array: ', foundationJson);
    setFoundationSrc(foundationJson);
  }

  useEffect(() => {
    makeFoundationAPICall();
  }, [])

  const foundations = foundationSrc.slice(6,50).map((el) => {

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


  // const foundations = () => {
  //   return (
  //     <Card style={{ width: '18rem' }}>
  //       <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076" />
  //       <Card.Body>
  //         <Card.Title>Brand</Card.Title>
  //         <Card.Text>Name</Card.Text>
  //         <br/>
  //         <Card.Text>SGD10.99</Card.Text>
  //         <Button variant="dark" href="https://www.sephora.sg/">Buy now</Button>
  //       </Card.Body>
  //     </Card>
  //   )
  // }


    return (
      <Container fluid="true">
        <h1>Foundation</h1>
        <div>{foundations}</div>
      </Container>
    );
  }
  
  export default FoundationDisplay;