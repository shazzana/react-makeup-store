import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Color Me Pretty
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#face">Face</Nav.Link>
            <Nav.Link href="#eyes">Eyes</Nav.Link>
            <Nav.Link href="#lips">Lips</Nav.Link>
            <Nav.Link href="#lips">Nails</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;