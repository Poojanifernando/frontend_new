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

function CustomerViewTable() {
    
    const history = useHistory();
    const [Customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/api/v1/customerRegistration/getAllCustomerRegistration').then((response) => {
            setCustomers(response.data.content);
        });
    }, [])

    //delete the specific column
    const deleteConference = (id) => {
        axios.delete('http://localhost:8082/api/v1/customerRegistration/deleteCustomerRegistration/' + id).then(() => {
            alert("deleted successfully!!");
            setCustomers([...Customers, id]);
            history.push('/admin/CustomerRegister')
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

    console.log(JSON.stringify(Customers))
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Header>
                                <Card.Title as="h4">Customer Registration</Card.Title>
                                <p className="card-category">
                                    View all Customer details
                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">ID</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Name</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">NIC</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Contact Person</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Number</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Email</th>
                                            <th style={{color:'black'}} className="border-0 font-weight-bold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Customers?.map((customer, index)  => {
                                            return (
                                                <tr key={customer.cus_id}>
                                                    <td>{customer.cus_id}</td>
                                                    <td>{customer.customer_name}</td>
                                                    <td>{customer.customer_NIC}</td>
                                                    <td>{customer.contact_person}</td>
                                                    <td>{customer.customer_contact_number}</td>
                                                    <td>{customer.customer_email}</td>
                                                    <td>
                                                        <a className="btn btn-danger" id="icon"><em
                                                            className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(customer.cus_id) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        <Link  id="icon" className="btn btn-success" to={`/admin/updateCustomer/${customer.cus_id}` }
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

export default CustomerViewTable;
