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
    Col,
    Dropdown
} from "react-bootstrap";
import { DropdownItem } from "reactstrap";

function ProductRegistrationForm() {
    const userid_pro = "UID_005"

    //Hook
    const ProDetails = useFormik({
        initialValues: {
            userID_pro: userid_pro,
            productId: '',
            productName: '',
            description: '',
            image: '',
        },


        validate: values => {
            const errors = {};
            if (!values.productId) {
                errors.productId = 'Product id is required';
            }
            if (!values.productName) {
                errors.productName = 'Product name is required';
            }
            if (!values.description) {
                errors.description = 'Description is required';
            }
            return errors;
        },
        onSubmit: values => {
            if (ProDetails.isValid) {
              
                axios.post('http://localhost:8082/api/v1/product/saveProduct', ProDetails.values).then(() => {
                    alert("Product added successfully!!!");
                    window.location.reload(false);

                }).catch((err) => {
                    alert(err);
                })

            } else {
                console.log('Not all fields are filled in');
            }
        }
    })

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
                                                    placeholder="Product ID"
                                                    type="text"
                                                    name="productId"
                                                    onChange={ProDetails.handleChange}
                                                    value={ProDetails.values.productId}
                                                ></Form.Control>
                                                {ProDetails.errors.productId && (
                                                    <div className="text-danger">{ProDetails.errors.productId}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Name</label>
                                                <Form.Control
                                                    placeholder="Product Name"
                                                    type="text"
                                                    name="productName"
                                                    onChange={ProDetails.handleChange}
                                                    value={ProDetails.values.productName}
                                                ></Form.Control>
                                                {ProDetails.errors.productName && (
                                                    <div className="text-danger">{ProDetails.errors.productName}</div>
                                                )}
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
                                                    name="description"
                                                    onChange={ProDetails.handleChange}
                                                    value={ProDetails.values.description}
                                                ></Form.Control>
                                                {ProDetails.errors.description && (
                                                    <div className="text-danger">{ProDetails.errors.description}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Image</label>
                                                <Form.Control
                                                    placeholder="Product Image"
                                                    type="file"
                                                    name="image"
                                                    onChange={ProDetails.handleChange}
                                                    value={ProDetails.values.image}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-center ">
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="primary"
                                            onClick={ProDetails.handleSubmit}
                                        >
                                            Add New Product
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
