import React from "react"
import axios from "axios";
import { useFormik } from 'formik';
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

function ProductLineRegistrationForm() {
    const userId = localStorage.getItem("userId");

    //Hook
    const LineDetails = useFormik({
        initialValues: {
            userID_line: userId,
            lineId: '',
            lineName: '',
            description: '',
            startTime: '',
            endTime: '',
            image: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(LineDetails.values))

            axios.post('http://localhost:8081/api/v1/line/saveLine', LineDetails.values).then(() => {
                alert("Line added successfully!!!");
                window.location.reload();
            }).catch((err) => {
                alert(err);
            })
        }
    })


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
                                                    name="lineId"
                                                    onChange={LineDetails.handleChange}
                                                    value={LineDetails.values.lineId}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Line Description</label>
                                                <Form.Control
                                                    placeholder="Line Description"
                                                    type="text"
                                                    name="description"
                                                    onChange={LineDetails.handleChange}
                                                    value={LineDetails.values.description}
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
                                                    name="lineName"
                                                    onChange={LineDetails.handleChange}
                                                    value={LineDetails.values.lineName}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Line Image</label>
                                                <Form.Control
                                                    placeholder="Line Image"
                                                    type="file"
                                                    name="image"
                                                    onChange={LineDetails.handleChange}
                                                    value={LineDetails.values.image}
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
                                                    name="startTime"
                                                    onChange={LineDetails.handleChange}
                                                    value={LineDetails.values.startTime}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Line End Time</label>
                                                <Form.Control
                                                    placeholder="Line End"
                                                    type="time"
                                                    name="endTime"
                                                    onChange={LineDetails.handleChange}
                                                    value={LineDetails.values.endTime}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center ">
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="primary"
                                            onClick={LineDetails.handleSubmit}
                                        >
                                            Add New Line
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
