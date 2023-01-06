import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import axios from "axios";
// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function DeviceViewTable() {
    const history = useHistory();


    const [Batches, setBatches] = useState([]);


    useEffect(() => {
        // axios.get('http://localhost:8081/api/v1/devices/getAllDevice').then((response) => {
        //     setBatches(response.data.content);
        // });
    }, [])

    // //delete the specific column
    // const deleteConference = (id) => {
    //     axios.delete('http://localhost:8081/api/v1/batch/deleteBatch/' + id).then(() => {
    //         alert("deleted successfully!!");
    //         setBatches([...Batches, { }]);
    //         history.push('/admin/BatchRegistration')
    //     }).catch((err) => {
    //         alert(err);
    //     })
    // };

    // //Edit the specific column
    // const editConference = (id) => {
    //     console.log(id)
    //     // axios.delete('' + id).then(() => {
    //     //     alert("Edit successfully!!");
    //     // }).catch((err) => {
    //     //     alert(err);
    //     // })

    // };

    console.log(JSON.stringify(Batches))
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Header>
                                <Card.Title as="h4">Device Registration</Card.Title>
                                <p className="card-category">
                                    View all Device details
                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th className="border-0">line_dvc_reg</th>
                                            <th className="border-0">ID</th>
                                            <th className="border-0">NAME</th>
                                            <th className="border-0">DESCRIPTION</th>
                                            <th className="border-0">LOCATION</th>
                                            <th className="border-0">IP</th>
                                            <th className="border-0">PARAMETER ID</th>
                                            <th className="border-0">MAX</th>
                                            <th className="border-0">MIN</th>
                                            <th className="border-0">UNIT</th>
                                            <th className="border-0">START-UP</th>
                                            <th className="border-0">ALARM</th>
                                            <th className="border-0">MESSAGE</th>
                                            <th className="border-0">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Batches?.map((Batch, index) => {
                                            return (
                                                <tr>
                                                    <td>{Batch.lineDvcReg}</td>
                                                    <td>{Batch.deviceID_dvcReg}</td>
                                                    <td>{Batch.device_name_dvc_reg}</td>
                                                    <td>{Batch.description}</td>
                                                    <td>{Batch.deviceGPSLocation}</td>
                                                    <td>{Batch.deviceIpAddress}</td>
                                                    <td>{Batch.parameterId}</td>
                                                    <td>{Batch.max_value}</td>
                                                    <td>{Batch.min_value}</td>
                                                    <td>{Batch.is_it_starter_value}</td>

                                                    <td>{Batch.alarm_alert_type}</td>
                                                    <td>{Batch.message}</td>
                                                    <td>
                                                        <a className="btn btn-danger" id="icon"><em
                                                            className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(Batch.batchID_regBch) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        <a className="btn btn-success" id="icon"><em
                                                            className="far fa-edit"
                                                            onClick={() => { if (window.confirm("Are you sure you want to Edit this ?")) { editConference(Batch.batchID_regBch) }; }} /></a>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DeviceViewTable;
