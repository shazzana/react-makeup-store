import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function SearchResultDisplay (props) {

    console.log("result prop passed down")

    const resultArr = props.resultSrc

    const results = resultArr.map((el) => {

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
          <div>{results}</div>
        </Container>
      );
}

export default SearchResultDisplay