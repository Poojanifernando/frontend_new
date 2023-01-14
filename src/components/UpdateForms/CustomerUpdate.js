import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { useHistory } from 'react-router-dom';
// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col
} from "react-bootstrap";

function CustomerUpdate({ match }) {
    const history = useHistory();
    const userId = "UID_005";
    const cusid = match.params.id;
    const [url, seturl] = useState('');

    const [user_id, setuser_id] = useState('userId From LocaleStorage');
    const [customer_name, setcustomer_name] = useState('userId From LocaleStorage');
    const [customer_NIC, setcustomer_NIC] = useState('userId From LocaleStorage');
    const [contact_person, setcontact_person] = useState('userId From LocaleStorage');
    const [customer_contact_number, setcustomer_contact_number] = useState('userId From LocaleStorage');
    const [customer_email, setcustomer_email] = useState('userId From LocaleStorage');



    const [CustomerDetails] = useState({
        cus_id: '',
        user_id: '',
        customer_name: '',
        customer_NIC: '',
        contact_person: '',
        customer_contact_number: '',
        customer_email: ''

    })

    useEffect(() => {
        const myurl = getLocalhostUrl();
         seturl(myurl)

        axios.get(myurl+'/api/v1/customerRegistration/searchCustomerRegistration/' + match.params.id).then((response) => {

            setuser_id(response.data.content.cus_id);
            setcustomer_name(response.data.content.customer_name);
            setcustomer_NIC(response.data.content.customer_NIC);
            setcontact_person(response.data.content.contact_person);
            setcustomer_contact_number(response.data.content.customer_contact_number);
            setcustomer_email(response.data.content.customer_email);


        });
    }, [])


    const ChangeOnClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("cus_id", cusid);
        formData.append("user_id", userId);
        formData.append("customer_name", customer_name);
        formData.append("customer_NIC", customer_NIC);
        formData.append("contact_person", contact_person);
        formData.append("customer_contact_number", customer_contact_number);
        formData.append("customer_email", customer_email);

        CustomerDetails.cus_id = formData.get('cus_id');
        CustomerDetails.user_id = formData.get('user_id');
        CustomerDetails.customer_name = formData.get('customer_name');
        CustomerDetails.customer_NIC = formData.get('customer_NIC');
        CustomerDetails.contact_person = formData.get('contact_person');
        CustomerDetails.customer_contact_number = formData.get('customer_contact_number');
        CustomerDetails.customer_email = formData.get('customer_email');
        console.log(CustomerDetails);

        await axios.put(url+`/api/v1/customerRegistration/updateCustomerRegistration/${match.params.id}`, CustomerDetails)
            .then(res => {
                console.log("Return Data", res);
                alert("Update Success!!");
                history.push('/admin/CustomerRegister')

            })
            .catch(err => {
                alert("Update Failed!!");
                console.log(err);
            });

    }

    
    const CancelOnClick = async (e) => {
        e.preventDefault();
        history.push('/admin/CustomerRegister')
    }

    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Customer Registration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Customer Name</label>
                                                <Form.Control
                                                    placeholder="Customer Name"
                                                    type="text"
                                                    name="customer_name"
                                                    value={customer_name}
                                                    onChange={e => setcustomer_name(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>NIC / Registration Number</label>
                                                <Form.Control
                                                    placeholder="NIC or Registration Number"
                                                    type="text"
                                                    name="customer_NIC"
                                                    value={customer_NIC}
                                                    onChange={e => setcustomer_NIC(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Contact Person</label>
                                                <Form.Control
                                                    placeholder="Contact Person"
                                                    type="text"
                                                    name="contact_person"
                                                    value={contact_person}
                                                    onChange={e => setcontact_person(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Contact Number</label>
                                                <Form.Control
                                                    placeholder="Contact Number"
                                                    type="tel"
                                                    maxlength="10"  
                                                    name="customer_contact_number"
                                                    value={customer_contact_number}
                                                    onChange={e => setcustomer_contact_number(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Email</label>
                                                <Form.Control
                                                    placeholder="Email"
                                                    type="text"
                                                    name="customer_email"
                                                    value={customer_email}
                                                    onChange={e => setcustomer_email(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center ">
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="success"
                                            onClick={(e) => ChangeOnClick(e)}
                                        >
                                            Update Customer
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="danger"
                                            onClick={(e) => CancelOnClick(e)}

                                        >
                                           Cancel 
                                        </Button>
                                        
                                    </Row>
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CustomerUpdate;
