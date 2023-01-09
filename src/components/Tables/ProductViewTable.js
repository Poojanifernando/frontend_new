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

function ProductViewTable() {
    const history = useHistory();


    const [Products, setpoducts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/product/getAllProducts').then((response) => {
            setpoducts(response.data.content);
        });
    }, [])

    //delete the specific column
    const deleteConference = (id) => {
        axios.delete('http://localhost:8081/api/v1/product/deleteRegisteredProduct/' + id).then(() => {
            alert("deleted successfully!!");
            history.push('/admin/ProductRegistration')
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

    console.log(JSON.stringify(Products))
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Header>
                                <Card.Title as="h4">Product Registration</Card.Title>
                                <p className="card-category">
                                    View all Product details
                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Id</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Name</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">description</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">date_and_time</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Products?.map((pro, index) => {
                                            return (
                                                <tr key={pro.productId}>
                                                    <td>{pro.productId}</td>
                                                    <td>{pro.productName}</td>
                                                    <td>{pro.description}</td>
                                                    <td>{pro.dateAndTime}</td>
                                                    <td>
                                                        <a className="btn btn-danger" id="icon"><em
                                                            className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(pro.productId) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        <Link  id="icon" className="btn btn-success" to={`/admin/updateProduct/${pro.productId}` }
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

export default ProductViewTable;
