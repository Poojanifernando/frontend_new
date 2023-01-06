import React, { useState, useEffect } from "react"
import axios from "axios";
import { Field, useFormik } from 'formik';
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

function DeviceRegistrationForm() {

    const userId = localStorage.getItem("userId");

    //Hook
    const Devicereg = useFormik({
        initialValues: {
            user_id_para: userId,
            line_dvc_reg: '',
            deviceid_dvc_reg: '',
            device_name_dvc_reg: '',
            description: '',
            devicegpslocation: '',
            device_ip_address: '',
            parameter_id: '',
            max_value: '',
            min_value: '',
            measuring_unit: '',
            is_it_starter_value: '',
            alarm_alert_type: '',
            message: '',

        },
        onSubmit: values => {
            console.log(JSON.stringify(Devicereg.values))

            // axios.post('http://localhost:8081/api/v1/batch/saveBatch', batchDetails.values).then(() => {
            //     alert("Batch added successfully!!!");

            // }).catch((err) => {
            //     alert(err);
            // })
        }
    })


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
                                                <label><b>Line Id</b></label>
                                                <Form.Control
                                                    placeholder="Line Id"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Machine ID</label>
                                                <Form.Control
                                                    placeholder="Machine ID"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label><b>Device ID</b></label>
                                                <Form.Control
                                                    placeholder="Device ID"
                                                    type="text"
                                                    name="deviceid_dvc_reg"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.deviceid_dvc_reg}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Device Name</label>
                                                <Form.Control
                                                    placeholder="Device Name"
                                                    type="text"
                                                    name="device_name_dvc_reg"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.device_name_dvc_reg}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Device Description</label>
                                                <Form.Control
                                                    placeholder="Device Description"
                                                    type="text"
                                                    name="description"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.description}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Device Location</label>
                                                <Form.Control
                                                    placeholder="Device Location"
                                                    type="text"
                                                    name="devicegpslocation"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.devicegpslocation}

                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Device IP Address</label>
                                                <Form.Control
                                                    placeholder="Device IP Address"
                                                    type="text"
                                                    name="device_ip_address"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.device_ip_address}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Parameter ID</label>
                                                <Form.Control
                                                    placeholder="Parameter ID"
                                                    type="text"
                                                    name="parameter_id"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.parameter_id}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Max Value</label>
                                                <Form.Control
                                                    placeholder="Max value"
                                                    type="number"
                                                    name="max_value"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.max_value}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Min Value</label>
                                                <Form.Control
                                                    placeholder="Min value"
                                                    type="number"
                                                    name="min_value"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.min_value}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Measuring Unit</label>
                                                <Form.Control
                                                    placeholder="Mesuring Unit"
                                                    type="text"
                                                    name="measuring_unit"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.measuring_unit}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">

                                            <label>Start-up Parameter/Not</label>
                                            <Form.Group>

                                                <Form.Check
                                                    label="Yes"
                                                    type="radio"
                                                    id="option1"
                                                    name="is_it_starter_value"
                                                    value={1}
                                                    onChange={Devicereg.handleChange}
                                                    onBlur={Devicereg.handleBlur}
                                                />
                                                <Form.Check
                                                    label="No"
                                                    type="radio"
                                                    id="option2"
                                                    name="is_it_starter_value"
                                                    value={0}
                                                    onChange={Devicereg.handleChange}
                                                    onBlur={Devicereg.handleBlur}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <label>Alarm Alert Type</label>
                                            <Form.Group>

                                                <Form.Check
                                                    label="yes"
                                                    type="radio"
                                                    id="option1"
                                                    name="alarm_alert_type"
                                                    value={1}
                                                    onChange={Devicereg.handleChange}
                                                    onBlur={Devicereg.handleBlur}
                                                />
                                                <Form.Check type="radio"
                                                    label="no"
                                                    id="option2"
                                                    name="alarm_alert_type"
                                                    value={0}
                                                    onChange={Devicereg.handleChange}
                                                    onBlur={Devicereg.handleBlur}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Message</label>
                                                <Form.Control
                                                    placeholder="message"
                                                    type="text"
                                                    name="message"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.message}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center ">
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="primary"
                                            onClick={Devicereg.handleSubmit}
                                        >
                                            Add New Device
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
