import React from 'react';
import Card from 'react-bootstrap/Card';


function FaceBlusherDisplay() {

const makeBlusherAPICall = async (val) => {
    const blusherUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${val}&limit=10`
    console.log(blusherUrl);
    const result = await fetch(blusherUrl)
    const json = await result.json();
    console.log(json);
}

    return (
        <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    )
}

export default FaceBlusherDisplay
