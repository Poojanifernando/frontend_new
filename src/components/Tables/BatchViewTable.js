import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
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

function BatchViewTable() {
    const history = useHistory();


    const [Batches, setBatches] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/batch/getAllBatches').then((response) => {
            setBatches(response.data.content);
        });
    }, [])

    //delete the specific column
    const deleteConference = (id) => {
        axios.delete('http://localhost:8081/api/v1/batch/deleteBatch/' + id).then(() => {
            alert("deleted successfully!!");
            setBatches([...Batches, {}]);
            history.push('/admin/BatchRegistration')
        }).catch((err) => {
            alert(err);
        })
    };

    // //Edit the specific column
    // const editConference = (id) => {
    //     console.log(id)


    // };

    console.log(JSON.stringify(Batches))
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Header>
                                <Card.Title as="h4">Batch Registration</Card.Title>
                                <p className="card-category">
                                    View all Batch details
                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Id</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Name</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Count</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Product Category</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Product Id</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Batches?.map((Batch, index) => {
                                            return (
                                                <tr>
                                                    <td>{Batch.batchID_regBch}</td>
                                                    <td>{Batch.batchName_regBch}</td>
                                                    <td>{Batch.count_regBch}</td>
                                                    <td>{Batch.productCategory}</td>
                                                    <td>{Batch.product_id}</td>
                                                    <td>
                                                        <a className="btn btn-danger" id="icon"><em
                                                            className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(Batch.batchID_regBch) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        {/* <a className="btn btn-success" id="icon"><em
                                                            className="far fa-edit"
                                                            onClick={() => { if (window.confirm("Are you sure you want to Edit this ?")) { editConference(Batch.batchID_regBch) }; }} /></a> */}
                                                        <Link  id="icon" className="btn btn-success" to={`/admin/updateBatch/${Batch.batchID_regBch}` }
                                                           >
                                                            <em
                                                            className="far fa-edit"/>
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

export default BatchViewTable;
