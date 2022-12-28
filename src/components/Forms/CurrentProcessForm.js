import axios from "axios";
import React, { useEffect } from "react";

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

function CurrentProcessForm() {

    // useEffect(() =>{
    //     axios.get('')
    // }, []);



    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Current Process Registration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Job ID</label>
                                                <Form.Control
                                                    placeholder="Job ID"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Job Description</label>
                                                <Form.Control
                                                    placeholder="Description"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>

                                                <label>Customer Name</label>
                                                <Form.Select size="lg" className="form-control">
                                                    <option>Select</option>
                                                    <option>Name 2 </option>
                                                    <option>Name 3 </option>
                                                    <option>Name 4 </option>
                                                </Form.Select>


                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Customer ID </label>
                                                <Form.Control
                                                    placeholder="AUTO"
                                                    type="text"
                                                    disabled
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Batch Name</label>
                                                <Form.Control
                                                    placeholder="Batch Name"
                                                    type="text"
                                                    
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Batch ID</label>
                                                <Form.Control
                                                    placeholder="AUTO"
                                                    type="text"
                                                    disabled
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Batch Start Time</label>
                                                <Form.Control
                                                    placeholder="Start Time"
                                                    type="time"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Batch End Time</label>
                                                <Form.Control
                                                    placeholder="End Time"
                                                    type="time"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>

                                                <label>Product Name</label>
                                                <Form.Select size="lg" className="form-control">
                                                    <option>Select</option>
                                                    <option>Name 2 </option>
                                                    <option>Name 3 </option>
                                                    <option>Name 4 </option>
                                                </Form.Select>


                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product ID</label>
                                                <Form.Control
                                                    placeholder="AUTO"
                                                    type="text"
                                                    disabled
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Count</label>
                                                <Form.Control
                                                    placeholder="Count"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>

                                                <label>Production Line Name</label>
                                                <Form.Select size="lg" className="form-control">
                                                    <option>Select</option>
                                                    <option>Name 2 </option>
                                                    <option>Name 3 </option>
                                                    <option>Name 4 </option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Production Line ID</label>
                                                <Form.Control
                                                    placeholder="AUTO"
                                                    type="text"
                                                    disabled
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Predicted Date</label>
                                                <Form.Control
                                                    placeholder="Date"
                                                    type="date"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Production Order</label>
                                                <Form.Control
                                                    placeholder="AUTO"
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

export default CurrentProcessForm;
