import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from '../NavBar/NavBar';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
// import SearchResultDisplay from '../SearchResultDisplay/SearchResultDisplay';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ItemSearchForm from '../ItemSearchForm/ItemSearchForm';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Route, Link } from "react-router-dom";
import FoundationDisplay from '../FoundationDisplay/FoundationDisplay';
import BronzerDisplay from '../BronzerDisplay';
import BlusherDisplay from '../BlusherDisplay';
import EyebrowDisplay from '../EyebrowDisplay';
import EyelinerDisplay from '../EyelinerDisplay';
import EyeshadowDisplay from '../EyeshadowDisplay';
import LipstickDisplay from '../LipstickDisplay';
import LiplinerDisplay from '../LiplinerDisplay';
import SearchResultDisplay from '../SearchResultDisplay/SearchResultDisplay';

function App() {
  
  const [cat, setCat] = useState("name");
  const [searchResultSrc, setSearchResultSrc] = useState([])

  const makeSearchableAPICall = async (val) => {
    const makeupUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?${cat}=${val}`
    console.log(makeupUrl);
    const result = await fetch(makeupUrl)
    const json = await result.json();
    console.log(json);
    setSearchResultSrc(json);
}

const handleSubmitFromChild = (val) => {
    console.log('This is from parent:' + val);
    makeSearchableAPICall(val);
    // Here we receive "val"
    // We want to make API call that will fetch search results
}

  return (
    <div>
      <nav>
      <Navbar bg="dark" variant="dark">

        <Container>
          <Link to="/">
          <Navbar.Brand>
             Color Me Pretty
          </Navbar.Brand>
          </Link>
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
                    <strong>Foundation</strong>
                  </Link>
                  <br/>
                  <Link to="/blusher">
                    <strong>Blusher</strong>
                  </Link>
                  <br/>
                  <Link to="/bronzer">
                    <strong>Bronzer</strong>
                  </Link>
                </Popover.Body>
              </Popover>
            }>
              <Nav.Link>
                Face
              </Nav.Link>
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
                  <Link to="/eyeshadow">
                    <strong>Eyeshadow</strong>
                  </Link>
                  <br/>
                  <Link to="/eyebrow">
                    <strong>Eyebrow</strong>
                  </Link>
                  <br/>
                  <Link to="/eyeliner">
                    <strong>Eyeliner</strong>
                  </Link>
                </Popover.Body>
              </Popover>
            }>
              <Nav.Link>Eyes</Nav.Link>
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
                  <Link to="/lipstick">
                    <strong>Lipstick</strong>
                  </Link>
                  <br/>
                  <Link to="/lipliner">
                    <strong>Lipliner</strong>
                  </Link>
                </Popover.Body>
              </Popover>
            }>
              <Nav.Link>Lips</Nav.Link>
            </OverlayTrigger>
            
          </Nav>
          <ItemSearchForm setCategory={setCat} onHandleSubmit={handleSubmitFromChild}/>
        </Container>
      </Navbar>
      </nav>
      <br/>
      <br/>
      <br/>
      <main>
        <SearchResultDisplay resultSrc={searchResultSrc}/>
        {/* <FoundationDisplay /> */}
        <Route exact path="/">
          <HomeCarousel/>
        </Route>
        <Route path="/foundation">
          <FoundationDisplay />
        </Route>
        <Route path="/blusher">
          <BlusherDisplay />
        </Route>
        <Route path="/bronzer">
          <BronzerDisplay />
        </Route>
        <Route path="/eyeshadow">
          <EyeshadowDisplay />
        </Route>
        <Route path="/eyebrow">
          <EyebrowDisplay />
        </Route>
        <Route path="/eyeliner">
          <EyelinerDisplay />
        </Route>
        <Route path="/lipstick">
          <LipstickDisplay />
        </Route>
        <Route path="/lipliner">
          <LiplinerDisplay />
        </Route>
        <Route path="/search">
          <ItemSearchForm setCategory={setCat} onHandleSubmit={handleSubmitFromChild}/>
        </Route>
        {/* <Route path="/searchresults">
          <ItemSearchForm resultSrc={searchResultSrc}/>
        </Route> */}
      </main>
    </div>
  );
}

export default App;
