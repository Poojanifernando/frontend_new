import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { Link } from "react-router-dom";
import "../../assets/css/allForms.css"
// react-bootstrap components
import {
    Card,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function CustomerViewTable() {

    const [sortOrder, setSortOrder] = useState('desc');

    const sortData = (key) => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
        data.sort((a, b) => {
            if (newSortOrder === 'asc') {
                return a[key] > b[key] ? 1 : -1;
            } else {
                return b[key] > a[key] ? 1 : -1;
            }
        });
    };

    const history = useHistory();
    const [Customers, setCustomers] = useState([]);
    const [url, seturl] = useState('');

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/customerRegistration/getAllCustomerRegistration').then((response) => {
            setCustomers(response.data.content);
        });
    }, [])

    //delete the specific column
    const deleteConference = (id) => {
        axios.delete(url + '/api/v1/customerRegistration/deleteCustomerRegistration/' + id).then(() => {
            alert("deleted successfully!!");
            setCustomers([...Customers, id]);
            history.push('/admin/CustomerRegister')
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    };

    console.log(JSON.stringify(Customers))
    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{ color: 'black' }} className="font-weight-bold" textAlign="center">ID</th>
                                            <th style={{ color: 'black' }} className="font-weight-bold" textAlign="center">Name</th>
                                            <th style={{ color: 'black' }} className="font-weight-bold" textAlign="center">NIC</th>
                                            <th style={{ color: 'black' }} className="font-weight-bold" textAlign="center">Contact Person</th>
                                            <th style={{ color: 'black' }} className="font-weight-bold" textAlign="center">Number</th>
                                            <th style={{ color: 'black' }} className="font-weight-bold" textAlign="center">Email</th>
                                            <th style={{ color: 'black' }} className="font-weight-bold" textAlign="center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Customers?.map((customer, index) => {
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
                                                        <Link id="icon" className="btn btn-success" to={`/admin/updateCustomer/${customer.cus_id}`}
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

export default CustomerViewTable;

