import React from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Dropdown
} from "react-bootstrap";
import { DropdownItem } from "reactstrap";

function BatchRegistrationForm() {



    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Batch Registration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Batch ID</label>
                                                <Form.Control
                                                    placeholder="Batch ID"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Batch Name</label>
                                                <Form.Control
                                                    placeholder="Batch Name"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Batch Count</label>
                                                <Form.Control
                                                    placeholder="Batch Count"
                                                    type="number"
                                                    
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                              
                                            <label>Product Category</label>
                                                <Form.Select size="lg" className="form-control">
                                                    <option>Select type</option>
                                                    <option>Semi Auto</option>
                                                    <option>Fully Auto</option>
                                                    <option>Hands Strapping </option>
                                                    <option>High Thickness</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                  
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product ID</label>
                                                <Form.Control
                                                    placeholder="Product ID"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                    </Row>

                                    {/* <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}

                                    <Row className="justify-content-center ">
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="primary"
                                        >
                                            Add Customer
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="success"
                                        >
                                            Update Customer
                                        </Button>
                                    </Row>
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default BatchRegistrationForm;
