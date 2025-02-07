import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const SideBar = () => {
  return (
    <>
        <Container>
            <Row>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Region</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Region</option>
                            <option value="1">R1</option>
                            <option value="2">R2</option>
                            <option value="3">R3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Select Sub-Region</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Sub-Region</option>
                            <option value="1">SR1</option>
                            <option value="2">SR2</option>
                            <option value="3">SR3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Select Country</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Country</option>
                            <option value="1">C1</option>
                            <option value="2">C2</option>
                            <option value="3">C3</option>
                        </Form.Select>
                    </Form.Group>
                </Form>

                {/* <Col>
                    <Form.Select aria-label="Default select example">
                        <option>Select Region</option>
                        <option value="1">R1</option>
                        <option value="2">R2</option>
                        <option value="3">R3</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select aria-label="Default select example">
                        <option>Select Sub-Region</option>
                        <option value="1">SR1</option>
                        <option value="2">SR2</option>
                        <option value="3">SR3</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select aria-label="Default select example">
                        <option>Select Country</option>
                        <option value="1">C1</option>
                        <option value="2">C2</option>
                        <option value="3">C3</option>
                    </Form.Select>
                </Col> */}
            </Row>
        </Container>
    </>
  );
}

export default SideBar;