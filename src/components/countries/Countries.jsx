import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";

const Countries = () => {
  return (
    <>

        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Header></Header>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <br></br>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col lg="4">
                    <SideBar></SideBar>
                </Col>
                <Col lg="8">
                    <Body></Body>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <br></br>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <Footer></Footer>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Countries;