import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ItemSearchForm from '../ItemSearchForm';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Route, Link } from "react-router-dom";

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
            <OverlayTrigger
            rootClose="false"
            rootCloseEvent="click"
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                  <Link to="/foundation">
                    <h1>Foundation</h1>
                  </Link>
                <br/>
                <strong>Blusher</strong>
                <br/>
                <strong>Bronzer</strong>
                </Popover.Body>
              </Popover>
            }>
              <Nav.Link href="#face">Face</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
            rootClose="false"
            rootCloseEvent="click"
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                <strong>Eyeshadow</strong>
                <br/>
                <strong>Eyebrow</strong>
                <br/>
                <strong>Eyeliner</strong>
                </Popover.Body>
              </Popover>
            }>
              <Nav.Link href="#eyes">Eyes</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
            rootClose="false"
            rootCloseEvent="click"
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                <strong>Lipstick</strong>
                <br/>
                <strong>Lipliner</strong>
                </Popover.Body>
              </Popover>
            }>
              <Nav.Link href="#lips">Lips</Nav.Link>
            </OverlayTrigger>
          </Nav>
          <ItemSearchForm onHandleSubmit={handleSubmitFromChild}/>
        </Container>
      </Navbar>
  );
}



export default NavBar;