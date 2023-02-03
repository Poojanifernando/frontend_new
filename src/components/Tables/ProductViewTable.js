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

function ProductViewTable() {

    const history = useHistory();
    const [Products, setpoducts] = useState([]);
    const [url, seturl] = useState('');


    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/product/getAllProducts').then((response) => {
            setpoducts(response.data.content);
        });
    }, [])

    //delete the specific column
    const deleteConference = (id) => {
        axios.delete(url + '/api/v1/product/deleteRegisteredProduct/' + id).then(() => {
            alert("deleted successfully!!");
            history.push('/admin/ProductRegistration')
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    };

    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            {/* <Card.Header>
                                <Card.Title as="h4">Product Registration</Card.Title>
                                <p className="card-category">
                                    View all Product details
                                </p>
                            </Card.Header> */}
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead style={{backgroundColor:"#EFEFEF"}}>
                                        <tr>
                                            <th style={{ color: 'black', fontSize:"1.0rem", fontWeight: "bold", lineHeight: "24px", textAlign:"flex-start", borderRadius:"24px 0 0 0"}}>Id</th>
                                            <th style={{ color: 'black', fontSize:"1.0rem", fontWeight: "bold", lineHeight: "24px", textAlign:"flex-start", borderRadius:"0 0 0 0"}}>Name</th>
                                            <th style={{ color: 'black', fontSize:"1.0rem", fontWeight: "bold", lineHeight: "24px", textAlign:"flex-start", borderRadius:"0 0 0 0"}}>description</th>
                                            <th style={{ color: 'black', fontSize:"1.0rem", fontWeight: "bold", lineHeight: "24px", textAlign:"flex-start", borderRadius:"0 0 0 0"}}>date_and_time</th>
                                            <th style={{ color: 'black', fontSize:"1.0rem", fontWeight: "bold", lineHeight: "24px", textAlign:"flex-start", borderRadius:"0 24px 0 0"}}>Action</th>
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
                                                        <Link id="icon" className="btn btn-success" to={`/admin/updateProduct/${pro.productId}`}
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

export default ProductViewTable;
