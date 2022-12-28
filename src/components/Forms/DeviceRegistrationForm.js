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

function DeviceRegistrationForm() {



    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Device Registration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label><b>Device ID</b></label>
                                                <Form.Control
                                                    placeholder="Device ID"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Device Name</label>
                                                <Form.Control
                                                    placeholder="Device Name"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Device Description</label>
                                                <Form.Control
                                                    placeholder="Device Description"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Device Location</label>
                                                <Form.Control
                                                    placeholder="Device Location"
                                                    type="text"

                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Device IP Address</label>
                                                <Form.Control
                                                    placeholder="Device IP Address"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Parameter ID</label>
                                                <Form.Control
                                                    placeholder="Parameter ID"
                                                    type="text"

                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Max Value</label>
                                                <Form.Control
                                                    placeholder="Max value"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Min Value</label>
                                                <Form.Control
                                                    placeholder="Min value"
                                                    type="text"

                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Measuring Unit</label>
                                                <Form.Control
                                                    placeholder="Mesuring Unit"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Start-up Parameter/Not</label>
                                                <Form.Control
                                                    placeholder="Start-up parameter"
                                                    type="text"

                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Alarm Alert Type</label>
                                                <Form.Control
                                                    placeholder="Alert Type"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Message</label>
                                                <Form.Control
                                                    placeholder="message"
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
                                            Add New Device
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="success"
                                        >
                                            Update Device
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

export default DeviceRegistrationForm;
