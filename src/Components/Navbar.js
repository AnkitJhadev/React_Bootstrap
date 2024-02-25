// Navbar.js
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const CustomNavbar = () => { // Rename the component here
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar; // Export with the new name
