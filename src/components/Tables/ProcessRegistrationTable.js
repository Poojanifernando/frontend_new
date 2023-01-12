import React, { useState, useEffect } from "react"
import axios from "axios";
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

function ProcessRegistrationTable() {

    const userid = localStorage.getItem("userId");

    const [progerss, setProgerss] = useState([]);

    console.log(progerss)
    useEffect(() => {
        // axios.get('http://localhost:8081/api/v1/admin/getAllAdmins').then((response) => {
        //     setProgerss(response.data.content);
        // });

        axios.get('http://localhost:8081/api/v1/admin/postcurrentdata/JOB_101/MY JOB/BCH_101/12:00:00/12:00:00/PRD_0056/800/LID_1001/2023-01-03/1/1/2/' + userid).then((response) => {
            setProgerss(response.data);
        });

    }, [])

    //delete the specific column
    const deleteConference = (id) => {
        console.log(id)
        //axios.get('http://localhost:8081/api/v1/admin/postcurrentdata/JOB_101/MYJOB/BCH_101/12:00:00/12:00:00/PRD_0056/800/LID_1001/2023-01-03/1/1/4/' + id).then(() => {
            alert("You cant delete Process");
            window.location.reload(false);
        //}).catch((err) => {
         //   alert(err);
        //x})
    };

    //Edit the specific column
    const editConference = (id) => {
        console.log(id)
        // axios.delete('' + id).then(() => {
        //     alert("Edit successfully!!");
        // }).catch((err) => {
        //     alert(err);
        // })

    };

    // console.log(JSON.stringify(progerss))
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Header>
                                <Card.Title as="h4">Production Registration</Card.Title>
                                <p className="card-category">
                                    View all Process details
                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">JOB ID</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Batch Id</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Batch Start Time</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Batch End Time</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Count</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Line Id</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Date</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">ORDER</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Customer ID</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {progerss?.map((progers, index) => {
                                            return (
                                                <tr>
                                                    <td>{progers.job_id_ad}</td>
                                                    <td>{progers.batchid_ad}</td>
                                                    <td>{progers.batch_start_time}</td>
                                                    <td>{progers.batch_end_time}</td>
                                                    <td>{progers.count_reg_bch}</td>
                                                    <td>{progers.product_lineid_ad}</td>
                                                    <td>{progers.predicted_date}</td>
                                                    <td>{progers.production_order}</td>
                                                    <td>{progers.customer_id}</td>
                                                    <td>
                                                        <a className="btn btn-danger" id="icon">
                                                            <em className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(progers.admin_id) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        <Link id="icon" className="btn btn-success" to={`/admin/CurrentProcessUpdate/${progers.admin_id}`}
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

export default ProcessRegistrationTable;
