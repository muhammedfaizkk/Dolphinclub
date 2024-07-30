import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/navsec.css'

function Navbardol() {
  return (
    <>

      <div style={{ backgroundColor: '#f5f5f5', padding: '10px 0' }}>
        <Container>

          <p style={{ margin: 0, textAlign: 'center', fontSize: '14px', color: '#333' }}>Welcome to our kids' wear store!</p>
        </Container>
      </div>


      <Navbar expand="lg" >
        <Container >
          <Navbar.Brand href="#">
            <img className='navlogo' src="./assets/logo/logoblack.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Products</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Tops</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Bottoms</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Accessories</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbardol;
