import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
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

function LineViewTable() {
    const history = useHistory();


    const [lines, setLines] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/line/getAllLines').then((response) => {
            setLines(response.data.content);
        });
    }, [])

    //delete the specific column
    const deleteConference = (id) => {
        axios.delete('http://localhost:8081/api/v1/line/deleteRegisteredLine/' + id).then(() => {
            alert("deleted successfully!!");
            setLines([...lines, { }]);
            history.push('/admin/ProductLineRegistration')
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    };

    // //Edit the specific column
    // const editConference = (id) => {
    //     console.log(id)
    //     // axios.delete('' + id).then(() => {
    //     //     alert("Edit successfully!!");
    //     // }).catch((err) => {
    //     //     alert(err);
    //     // })

    // };

    console.log(JSON.stringify(lines))
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Header>
                                <Card.Title as="h4">Line Registration</Card.Title>
                                <p className="card-category">
                                    View all Line details
                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th className="border-0">line_id</th>
                                            <th className="border-0">line_name</th>
                                            <th className="border-0">description</th>
                                            <th className="border-0">start_time</th>
                                            <th className="border-0">end_time</th>
                                            <th className="border-0">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lines?.map((line, index) => {
                                            return (
                                                <tr>
                                                    <td>{line.lineId}</td>
                                                    <td>{line.lineName}</td>
                                                    <td>{line.description}</td>
                                                    <td>{line.startTime}</td>
                                                    <td>{line.endTime}</td>
                                                    <td>
                                                        <a className="btn btn-danger" id="icon"><em
                                                            className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(line.lineId) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        <Link  id="icon" className="btn btn-success" to={`/admin/updateLine/${line.lineId}` }
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

export default LineViewTable;
