import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { Field, useFormik } from 'formik';
import "../../assets/css/allForms.css"
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
    const [lineDetails, setLineDetails] = useState([]);
    const [url, seturl] = useState('');

    //Hook
    const Devicereg = useFormik({
        initialValues: {
            user_id_para: userId,
            LineId: '',
            MachineID: '',
            MachineName: '',
            MachineDiscription: '',
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
            completed_prod_count: '',
            message: '',

        },
        validate: values => {
            const errors = {};
            if (!values.LineId) {
                errors.LineId = 'Line id is required';
            }
            if (!values.MachineID) {
                errors.MachineID = 'Machine id is required';
            }
            if (!values.MachineName) {
                errors.MachineName = 'Machine name is required';
            }
            if (!values.MachineDiscription) {
                errors.MachineDiscription = 'Discription is required';
            }
            if (!values.deviceid_dvc_reg) {
                errors.deviceid_dvc_reg = 'Device id is required';
            }
            if (!values.device_name_dvc_reg) {
                errors.device_name_dvc_reg = 'Device name is required';
            }
            if (!values.description) {
                errors.description = 'description is required';
            }
            if (!values.devicegpslocation) {
                errors.devicegpslocation = 'GPS location is required';
            }
            // if (!values.device_ip_address) {
            //     errors.device_ip_address = 'Ip address is required';
            // }
            if (!values.parameter_id) {
                errors.parameter_id = 'Parameter id is required';
            }
            if (!values.max_value) {
                errors.max_value = 'Max value is required';
            }
            if (!values.min_value) {
                errors.min_value = 'Min value is required';
            }
            if (!values.measuring_unit) {
                errors.measuring_unit = 'Measuring unit is required';
            }
            if (!values.message) {
                errors.message = 'Message is required';
            }
            if (!values.device_ip_address) {
                values.device_ip_address = 'not assign';
            }
            return errors;
        },
        onSubmit: values => {
            if (Devicereg.isValid) {
                console.log(JSON.stringify(Devicereg.values))

                axios.get(url + '/api/v1/admin/DeviceRegistration/' + Devicereg.values.LineId + '/' + Devicereg.values.MachineID + '/' + Devicereg.values.MachineName + '/' + Devicereg.values.MachineDiscription + '/' + Devicereg.values.deviceid_dvc_reg + '/' + Devicereg.values.parameter_id + '/' + Devicereg.values.description + '/' + Devicereg.values.alarm_alert_type + '/' + Devicereg.values.completed_prod_count + '/' + Devicereg.values.is_it_starter_value + '/' + Devicereg.values.min_value + '/' + Devicereg.values.max_value + '/' + Devicereg.values.measuring_unit + '/' + Devicereg.values.message + '/' + Devicereg.values.devicegpslocation + '/' + Devicereg.values.device_ip_address + '/' + Devicereg.values.device_name_dvc_reg + '/1').then(() => {
                    alert("Device Added successfully!!!");
                    window.location.reload(false);
                }).catch((err) => {
                    alert(err);
                })
            } else {
                console.log('Not all fields are filled in');
            }
        }

    })


    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/line/getAllLineAndId').then((response) => {
            setLineDetails(response.data);
        });

    }, []);


    return (
        <>
            <Container >
                <div className="cardDesign ">
                    <Card.Header style={{ border: "none", backgroundColor: "white" }}>
                        <Card.Title style={{ color: "#3D3D3D", fontSize: "1.2rem", fontWeight: "500px", lineHeight: "32px" }}>Device Registration</Card.Title>
                        <hr style={{padding:"0", margin:"0" }} />
                    </Card.Header>
                    <Card.Body style={{paddingTop:"0"}}>
                        <Form>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Production Line Name</label>
                                        <Form.Select size="lg" className="form-control" name="LineId" value={Devicereg.values.LineId} onChange={Devicereg.handleChange} style={{ borderRadius: "10px" }}>
                                            <option value="">Choose</option>
                                            {lineDetails.map(item => {
                                                return (<option key={item.lineId} value={item.lineId}>{item.lineName}</option>);
                                            })}
                                        </Form.Select>
                                        {Devicereg.errors.LineId && (
                                            <div className="text-danger">{Devicereg.errors.LineId}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Machine ID</label>
                                        <Form.Control
                                            placeholder="Machine ID"
                                            type="text"
                                            name="MachineID"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.MachineID}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {Devicereg.errors.MachineID && (
                                            <div className="text-danger">{Devicereg.errors.MachineID}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Machine Name</label>
                                        <Form.Control
                                            placeholder="Machine Name"
                                            type="text"
                                            name="MachineName"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.MachineName}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {Devicereg.errors.MachineName && (
                                            <div className="text-danger">{Devicereg.errors.MachineName}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Machine Discription</label>
                                        <Form.Control
                                            placeholder="Machine Discription"
                                            type="text"
                                            name="MachineDiscription"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.MachineDiscription}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {Devicereg.errors.MachineDiscription && (
                                            <div className="text-danger">{Devicereg.errors.MachineDiscription}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Device ID</label>
                                        <Form.Control
                                            placeholder="Device ID"
                                            type="text"
                                            name="deviceid_dvc_reg"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.deviceid_dvc_reg}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {Devicereg.errors.deviceid_dvc_reg && (
                                            <div className="text-danger">{Devicereg.errors.deviceid_dvc_reg}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Device Name</label>
                                        <Form.Control
                                            placeholder="Device Name"
                                            type="text"
                                            name="device_name_dvc_reg"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.device_name_dvc_reg}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {Devicereg.errors.device_name_dvc_reg && (
                                            <div className="text-danger">{Devicereg.errors.device_name_dvc_reg}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Device Description</label>
                                        <Form.Control
                                            placeholder="Device Description"
                                            type="text"
                                            name="description"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.description}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {Devicereg.errors.description && (
                                            <div className="text-danger">{Devicereg.errors.description}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Device Location</label>
                                        <Form.Control
                                            placeholder="Device Location"
                                            type="text"
                                            name="devicegpslocation"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.devicegpslocation}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {Devicereg.errors.devicegpslocation && (
                                            <div className="text-danger">{Devicereg.errors.devicegpslocation}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Device IP Address</label>
                                        <Form.Control
                                            placeholder="Device IP Address"
                                            type="text"
                                            name="device_ip_address"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.device_ip_address}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>

                                        {/* {Devicereg.errors.device_ip_address && (
                                                    <div className="text-danger">{Devicereg.errors.device_ip_address}</div>
                                                )} */}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Parameter ID</label>
                                        {/* <Form.Control
                                                    placeholder="Parameter ID"
                                                    type="text"
                                                    name="parameter_id"
                                                    onChange={Devicereg.handleChange}
                                                    value={Devicereg.values.parameter_id}
                                                ></Form.Control> */}
                                        <Form.Select className="form-control" name="parameter_id" onChange={Devicereg.handleChange}
                                            value={Devicereg.values.parameter_id}>
                                            <option>Select</option>
                                            <option value="POWR">Power</option>
                                            <option value="LNTH">Length</option>
                                            <option value="TEMP">Temperature</option>
                                        </Form.Select>
                                        {Devicereg.errors.parameter_id && (
                                            <div className="text-danger">{Devicereg.errors.parameter_id}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr -1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Min Value</label>
                                        <Form.Control
                                            placeholder="Min value"
                                            type="number"
                                            min="0"
                                            name="min_value"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.min_value}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {Devicereg.errors.min_value && (
                                            <div className="text-danger">{Devicereg.errors.min_value}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Max Value</label>
                                        <Form.Control
                                            placeholder="Max value"
                                            type="number"
                                            min="0"
                                            name="max_value"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.max_value}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {Devicereg.errors.max_value && (
                                            <div className="text-danger">{Devicereg.errors.max_value}</div>
                                        )}
                                    </Form.Group>
                                </Col>

                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Measuring Unit</label>
                                        <Form.Control
                                            placeholder="Mesuring Unit"
                                            type="text"
                                            name="measuring_unit"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.measuring_unit}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {Devicereg.errors.measuring_unit && (
                                            <div className="text-danger">{Devicereg.errors.measuring_unit}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pr-1" md="6">

                                    <label>Start-up Parameter/Not</label>
                                    <Form.Group className="formDesign">
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
                            {/* <Row>
                                <Col className="pr-1" md="6">
                                    <label>Is Final Product</label>
                                    <Form.Group className="formDesign">

                                        <Form.Check
                                            label="yes"
                                            type="radio"
                                            id="option1"
                                            name="completed_prod_count"
                                            value={1}
                                            onChange={Devicereg.handleChange}
                                            onBlur={Devicereg.handleBlur}
                                        />
                                        <Form.Check type="radio"
                                            label="no"
                                            id="option2"
                                            name="completed_prod_count"
                                            value={0}
                                            onChange={Devicereg.handleChange}
                                            onBlur={Devicereg.handleBlur}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row> */}
                            <Row>
                                <Col className="pr-1" md="6">
                                    <label className="lblDesign">Alarm Alert Type</label>
                                    <Form.Group className="formDesign">
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
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">Message</label>
                                        <Form.Control
                                            placeholder="message"
                                            type="text"
                                            name="message"
                                            onChange={Devicereg.handleChange}
                                            value={Devicereg.values.message}
                                            onBlur={Devicereg.handleBlur}
                                            style={{ borderRadius: "10px" }}

                                        ></Form.Control>
                                        {Devicereg.errors.message && (
                                            <div className="text-danger">{Devicereg.errors.message}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="button">
                                <button
                                    className="btnSubmit"
                                    type="submit"
                                    variant="primary"
                                    onClick={Devicereg.handleSubmit}
                                >
                                    Add New Device
                                </button>
                            </div>
                            <div className="clearfix"></div>
                        </Form>
                    </Card.Body>
                    {/* </Card>
                    </Col> */}
                </div>
            </Container>
        </>
    );
}

export default DeviceRegistrationForm;
