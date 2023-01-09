import React, { useState, useEffect } from "react"
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
    Col
} from "react-bootstrap";

function CustomerRegistraionForm() {

    const userId = localStorage.getItem("userId");
    const [productDetails, setProductDetails] = useState([]);

    //Hook
    const cus_reg = useFormik({
        initialValues: {
            user_id: userId,
            customer_name: '',
            customer_NIC: '',
            contact_person: '',
            customer_contact_number: '',
            customer_email: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(cus_reg.values))

            axios.post('http://localhost:8081/api/v1/customerRegistration/saveCustomerRegistration', cus_reg.values).then(() => {
                alert("Customer added successfully!!!");
                window.location.reload(false);

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
                                <Card.Title as="h4">Customer Registration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Customer Name</label>
                                                <Form.Control
                                                    placeholder="Company Name"
                                                    type="text"
                                                    name="customer_name"
                                                    onChange={cus_reg.handleChange}
                                                    value={cus_reg.values.customer_name}
                                                    required
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>NIC / Registration Number</label>
                                                <Form.Control
                                                    placeholder="NIC or Registration Number"
                                                    type="text"
                                                    name="customer_NIC"
                                                    maxlength="20"
                                                    onChange={cus_reg.handleChange}
                                                    value={cus_reg.values.customer_NIC}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Contact Person</label>
                                                <Form.Control
                                                    placeholder="Contact Person Name"
                                                    type="text"
                                                    name="contact_person"
                                                    onChange={cus_reg.handleChange}
                                                    value={cus_reg.values.contact_person}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Contact Number</label>
                                                <Form.Control
                                                    placeholder="0xx-xxxxxxxx"
                                                    type="tel"
                                                    maxlength="10"
                                                  
                                                    name="customer_contact_number"
                                                    onChange={cus_reg.handleChange}
                                                    value={cus_reg.values.customer_contact_number}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Email</label>
                                                <Form.Control
                                                    placeholder="example@email"
                                                    type="text"
                                                    name="customer_email"
                                                    onChange={cus_reg.handleChange}
                                                    value={cus_reg.values.customer_email}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center ">
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="primary"
                                            onClick={cus_reg.handleSubmit}
                                        >
                                            Add Customer
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

export default CustomerRegistraionForm;
