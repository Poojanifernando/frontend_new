import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
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

function MachineRegistrationForm() {
    const userId = "userLocaleStorage"
    const [url, seturl] = useState('');

    // const [MachineDetails, setMachines] = useState([]);

    //Hook
    const machDetails = useFormik({
        initialValues: {
            user_id_para: 'userId From LocaleStorage',
            machine_id: '',
            machine_name: '',
            machine_description: '',
            machine_image: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(machDetails.values))

            axios.post(url+'/api/v1/machine/saveMachine', machDetails.values).then(() => {
                alert("Machine added successfully!!!");

            }).catch((err) => {
                alert(err);
            })
        }
    })
    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
    }, []);

    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Machine Registration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Machine ID</label>
                                                <Form.Control
                                                    placeholder="Machine ID"
                                                    type="text"
                                                    name="machine_id"
                                                    onChange={machDetails.handleChange}
                                                    value={machDetails.values.machine_id}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Machine Description</label>
                                                <Form.Control
                                                    placeholder="Machine Description"
                                                    type="text"
                                                    name="machine_description"
                                                    onChange={machDetails.handleChange}
                                                    value={machDetails.values.machine_description}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Machine Name</label>
                                                <Form.Control
                                                    placeholder="Machine Name"
                                                    type="text"
                                                    name="machine_name"
                                                    onChange={machDetails.handleChange}
                                                    value={machDetails.values.machine_name}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Machine Image</label>
                                                <Form.Control
                                                    placeholder="Machine Image"
                                                    type="file"
                                                    name="machine_image"
                                                    onChange={machDetails.handleChange}
                                                    value={machDetails.values.machine_image}
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
                                            onClick={machDetails.handleSubmit}
                                        >
                                            Add New     Machine
                                        </Button>
                                        {/* &nbsp;&nbsp;
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="success"
                                        >
                                            Update Machine
                                        </Button> */}
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

export default MachineRegistrationForm;
