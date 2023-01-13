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

function MachineViewTable() {
    const history = useHistory();


    const [machines, setMachines] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8082/api/v1/machine/getAllMachines').then((response) => {
            setMachines(response.data.content);
        });
    }, [])

    //delete the specific column
    const deleteConference = (id) => {
        axios.delete('http://localhost:8082/api/v1/machine/deleteRegisteredMachine/' + id).then(() => {
            alert("deleted successfully!!");
            setBatches([...machines, { }]);
            history.push('/admin/MachineRegistration')
        }).catch((err) => {
            alert(err);
        })
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

    console.log(JSON.stringify(machines))
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
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Discription</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {machines?.map((mach, index) => {
                                            return (
                                                <tr>
                                                    <td>{mach.machineId}</td>
                                                    <td>{mach.machineName}</td>
                                                    <td>{mach.machineDescription}</td>
                                                    <td>
                                                        <a className="btn btn-danger" id="icon"><em
                                                            className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(mach.machineId) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        <a className="btn btn-success" id="icon"><em
                                                            className="far fa-edit"
                                                            onClick={() => { if (window.confirm("Are you sure you want to Edit this ?")) { editConference(mach.machineId) }; }} /></a>
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

export default MachineViewTable;
