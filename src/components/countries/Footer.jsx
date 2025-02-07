import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <>
        <Container>
            <Navbar fixed="bottom" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Footer</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    </>
  );
}

export default Footer;