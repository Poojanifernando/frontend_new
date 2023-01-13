import React, { useState, useEffect } from "react"
import axios from "axios";
import { useFormik } from 'formik';
// import "assets/css/Popup.css";

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

function LineMachineDeviceForm() {
    const userId = localStorage.getItem("userId");
    const [lineDetails, setLineDetails] = useState([]);

    //Hook
    const batchDetails = useFormik({
        initialValues: {
            userid_reg_bch: userId,
            LineID: '',
            MachineId: '',
            DeviceId: '',
           
        },
        onSubmit: values => {
            console.log(JSON.stringify(batchDetails.values))
            

            // axios.post('http://localhost:8082/api/v1/batch/saveBatch', batchDetails.values).then(() => {
            //     alert("Batch added successfully!!!");

            // }).catch((err) => {
            //     alert(err);
            // })
        }
    })

    useEffect(() => {
        axios.get('http://localhost:8082/api/v1/line/getAllLines').then((response) => {
            setLineDetails(response.data.content);
        });
    }, []);
    
    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Line Machine Device Form</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form >
                                    <Row>
                                        <Col className="pr-1" md="6">
                                        <Form.Group>
                                                <label>Production Line Name</label>
                                                <Form.Select size="lg" className="form-control" name="product_lineid_ad" value={batchDetails.values.LineID} onChange={batchDetails.handleChange}>
                                                    {lineDetails.map(item => {
                                                        return (<option key={item.lineId} value={item.lineId}>{item.lineName}</option>);
                                                    })}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Machine Id</label>
                                                <Form.Control
                                                    placeholder="Machine Id"
                                                    type="text"
                                                    name="MachineId"
                                                    onChange={batchDetails.handleChange}
                                                    value={batchDetails.values.MachineId}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Device Id</label>
                                                <Form.Control
                                                    placeholder="Device Id"
                                                    type="text"
                                                    name="DeviceId"
                                                    onChange={batchDetails.handleChange}
                                                    value={batchDetails.values.DeviceId}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center ">
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="primary"
                                            onClick={batchDetails.handleSubmit}
                                        >
                                            Save details
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

export default LineMachineDeviceForm;
