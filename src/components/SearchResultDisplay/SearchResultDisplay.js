import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {useParams} from "react-router-dom";

function SearchResultDisplay(props) {

  console.log("result prop passed down")

  // States
  const [searchResultSrc, setSearchResultSrc] = useState([]);

  // useParams
  const {cat, val} = useParams();
  
  // On load
  useEffect(()=>{
    makeSearchableAPICall();
  }, [cat, val]);

  const makeSearchableAPICall = async () => {
    const makeupUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?${cat}=${val}`
    console.log(makeupUrl);
    const result = await fetch(makeupUrl)
    const json = await result.json();
    console.log(json);
    setSearchResultSrc(json);
  }

  const results = searchResultSrc.map((el, i) => {

    return (
      <Card key={i} className="card" style={{ width: '18rem' }}>
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
      <h1>Search Results</h1>
      <div>{results}</div>
    </Container>
  );
}

export default SearchResultDisplay