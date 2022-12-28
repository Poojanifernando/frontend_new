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

function ProductLineRegistrationForm() {



    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Product Line Registration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Line  ID</label>
                                                <Form.Control
                                                    placeholder="Line ID"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Line Description</label>
                                                <Form.Control
                                                    placeholder="Line Description"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Line Name</label>
                                                <Form.Control
                                                    placeholder="Line Name"
                                                    type="text"

                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Line Image</label>
                                                <Form.Control
                                                    placeholder="Line Image"
                                                    type="file"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Line Start Time</label>
                                                <Form.Control
                                                    placeholder="Line Start"
                                                    type="time"

                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Line End Time</label>
                                                <Form.Control
                                                    placeholder="Line End"
                                                    type="time"
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
                                            Add New Line
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="success"
                                        >
                                            Update Line
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

export default ProductLineRegistrationForm;
