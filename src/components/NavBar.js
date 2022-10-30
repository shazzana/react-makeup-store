import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ItemSearchForm from './ItemSearchForm';

function NavBar() {
    
    const makeSearchableAPICall = async (val) => {
        const makeupUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${val}&limit=10`
        console.log(makeupUrl);
        const result = await fetch(makeupUrl)
        const json = await result.json();
        console.log(json);
    }

    const handleSubmitFromChild = (val) => {
        console.log('This is from parent:' + val);
        makeSearchableAPICall(val);
        // Here we receive "val"
        // We want to make API call that will fetch search results
    }

    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Color Me Pretty
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#face">Face</Nav.Link>
            <Nav.Link href="#eyes">Eyes</Nav.Link>
            <Nav.Link href="#lips">Lips</Nav.Link>
          </Nav>
          <ItemSearchForm onHandleSubmit={handleSubmitFromChild}/>
        </Container>
      </Navbar>
  );
}

export default NavBar;