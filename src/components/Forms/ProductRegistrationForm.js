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

function ProductRegistrationForm() {



    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Product Registration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product ID</label>
                                                <Form.Control
                                                    placeholder="Batch ID"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Name</label>
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
                                                <label>Product Description</label>
                                                <Form.Control
                                                    placeholder="Product Description"
                                                    type="text"
                                                    
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        
                                    </Row>
                                  
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Image</label>
                                                <Form.Control
                                                    placeholder="Product Image"
                                                    type="file"
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
                                            Add New Product
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="success"
                                        >
                                            Update Product
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

export default ProductRegistrationForm;
