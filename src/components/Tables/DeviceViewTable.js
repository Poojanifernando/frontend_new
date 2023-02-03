import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { Link } from "react-router-dom";
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
     const [url, seturl] = useState('');
    const [Batches, setBatches] = useState([]);

    useEffect(() => {
        const myurl = getLocalhostUrl();
         seturl(myurl)
        axios.get(myurl+'/api/v1/admin/DeviceRegistration/{lineId}/{machineId_2}/{machineName}/{machineDescription}/{deviceId}/{parameterId}/{des}/1/1/1/20/25/{mesuringUnit}/{massage}/{deviceLocation}/{deviceIpAddress}/{deviceName}/'+2).then((response) => {
            setBatches(response.data);
        });
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            {/* <Card.Header>
                                <Card.Title as="h4">Device Registration</Card.Title>
                                <p className="card-category">
                                    View all Device details
                                </p>
                            </Card.Header> */}
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>

                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Line ID</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Machine ID</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Device ID</th>
                                            {/* <th style={{color:'black'}} className="border-0 font-weight-bold">Parameter ID</th> */}
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Alarm</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Starter</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">MIN</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">MAX</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Unit</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Batches?.map((Batch, index) => {
                                            return (
                                                <tr>
                                                    <td>{Batch.line_id}</td>
                                                    <td>{Batch.machine_name}</td>
                                                    <td>{Batch.deviceid_dvc_reg}</td>
                                                    {/* <td>{Batch.parameter_id}</td> */}
                                                    <td>{Batch.is_it_alarm_parameter}</td>
                                                    <td>{Batch.is_it_starter_value}</td>
                                                    <td>{Batch.min_value}</td>
                                                    <td>{Batch.max_value}</td>
                                                    <td>{Batch.measuring_unit}</td>
                                                    <td>
                                                        <a className="btn btn-danger" id="icon" ><em
                                                            className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(Batch.batchID_regBch) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        {/* <a className="btn btn-success" id="icon">
                                                            <em
                                                            className="far fa-edit"
                                                            onClick={() => { if (window.confirm("Are you sure you want to Edit this ?")) { editConference(Batch.batchID_regBch) }; }} /></a> */}

                                                            <Link id="icon" className="btn btn-success" to={`/admin/DeviceUpdate/${Batch.deviceid_dvc_reg}`}
                                                            >
                                                                <em
                                                                    className="far fa-edit" />
                                                            </Link>
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
