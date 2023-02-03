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

function ParameterCodeForm() {



    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                        <Card.Header style={{ border:"none", backgroundColor: "white" }}>
                                <Card.Title style={{color:"#3D3D3D", fontSize:"1.2rem", fontWeight:"500px",lineHeight:"32px"}}>Customer Registration</Card.Title>
                                <hr style={{padding:"0", margin:"0" }}/>
                             </Card.Header>
                            <Card.Body style={{paddingTop:"0"}}>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Parameter ID</label>
                                                <Form.Control
                                                    placeholder="Parameter ID"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Parameter Name</label>
                                                <Form.Control
                                                    placeholder="Parameter Name"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Parameter Image</label>
                                                <Form.Control
                                                    placeholder="Parameter Image"
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
                                            Add New Parameter
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="success"
                                        >
                                            Update Parameter
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

export default ParameterCodeForm;
