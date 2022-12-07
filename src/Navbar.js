import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'react-router-dom'
import About from './About';


function Navbar2() {
  return (
    <Navbar collapseOnSelect expand="lg" bg = 'light' variant="white" >
      <Container>
        <Navbar.Brand href="/">박성범의 포트폴리오</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/timeline">Timeline</Nav.Link>
            <Nav.Link href="/act">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

         
                          
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;