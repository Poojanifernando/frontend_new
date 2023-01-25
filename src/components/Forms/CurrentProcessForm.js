import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { useFormik } from 'formik';
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
    Col,
    Dropdown
} from "react-bootstrap";


function CurrentProcessForm() {

    const iserId = localStorage.getItem("userId");

    //use states
    const [jobids, setjobids] = useState([]);
    const [productTable, setProductDetails] = useState([]);
    const [lineDetails, setLineDetails] = useState([]);
    const [cusDetails, setcusDetails] = useState([]);
    const [url, seturl] = useState('');

    //Hook
    const processDetails = useFormik({
        initialValues: {
            job_id_ad: '',
            userid_ad: iserId,
            batchid_ad: '',
            product_lineid_ad: '',
            batch_start_time: '',
            batch_end_time: '',
            predicted_date: '',
            production_order: 1,
            count_reg_bch:'',
            product: '',
            job_description: '',
            Customer_id: '',
            Curd: '1',
        },
        validate: values => {
            const errors = {};
            if (!values.batchid_ad) {
                errors.batchid_ad = 'Batch id is required';
            }
            if (!values.product_lineid_ad) {
                errors.product_lineid_ad = 'Product line id is required';
            }
            if (!values.batch_start_time) {
                errors.batch_start_time = 'Start time is required';
            }
            if (!values.batch_end_time) {
                errors.batch_end_time = 'End time is required';
            }
            if (!values.predicted_date) {
                errors.predicted_date = 'Date is required';
            }
            // if (!values.production_order) {
            //     errors.production_order = 'Order is required';
            // }
            if (!values.product) {
                errors.product = 'product is required';
            }
            if (!values.job_description) {
                errors.job_description = 'Description is required';
            }
            if (!values.Customer_id) {
                errors.Customer_id = 'Customer id is required';
            }
            return errors;
        },
        onSubmit: values => {
            if (processDetails.isValid) {
            // console.log("test", 'http://localhost:8081/api/v1/admin/postcurrentdata/' + text + '/' + processDetails.values.job_description + '/' + processDetails.values.batchid_ad + '/' + processDetails.values.batch_start_time + ':00/' + processDetails.values.batch_end_time + ':00/' + processDetails.values.product + '/' + processDetails.values.product + '/' + processDetails.values.product_lineid_ad + '/' + processDetails.values.predicted_date + '/' + processDetails.values.production_order + '/' + processDetails.values.Customer_id + '/' + processDetails.values.Curd + '/' + processDetails.values.userid_ad)
            // console.log(processDetails.values.product)
            // console.log(JSON.stringify(processDetails.values.product))
            // console.log(JSON.stringify(processDetails.values.product_lineid_ad))  
    
            axios.get(url+'/api/v1/admin/postcurrentdata/' + text + '/' + processDetails.values.job_description + '/' + processDetails.values.batchid_ad + '/' + processDetails.values.batch_start_time + '/' + processDetails.values.batch_end_time + '/' + processDetails.values.product + '/' + processDetails.values.count_reg_bch + '/' + processDetails.values.product_lineid_ad + '/' + processDetails.values.predicted_date + '/' + processDetails.values.production_order + '/' + processDetails.values.Customer_id + '/' + processDetails.values.Curd + '/' + processDetails.values.userid_ad).then(() => {
                alert("Current Process added successfully!!!");
                window.location.reload();
            }).catch((err) => {
                alert(err);
            })
        } else {
            console.log('Not all fields are filled in');
          }
        }
    })

    // console.log(JSON.stringify(productTable));

    useEffect(() => {
        const myurl = getLocalhostUrl();
         seturl(myurl)
        axios.get(myurl+'/api/v1/job/getAllJobs').then((response) => {
            setjobids(response.data.content);
        });
        axios.get(myurl+'/api/v1/product/getAllProductsNameAndIds').then((response) => {
            setProductDetails(response.data);
        });
        axios.get(myurl+'/api/v1/line/getAllLineAndId').then((response) => {
            setLineDetails(response.data);
        });

        axios.get(myurl+'/api/v1/customerRegistration/getAllCustomerRegistration').then((response) => {
            setcusDetails(response.data.content);
        });


    }, []);

    const [text, setText] = React.useState('');

    const onChange = (event) => {
        setText(event.target.value);

    }

    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Production Registration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form >
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Job ID</label>
                                                <div>
                                                    <input type="search" list="list" autoComplete="on" value={text} onChange={onChange} className="form-control" placeholder="Job ID" />
                                                    <datalist id="list">
                                                        <option value="">Choose</option>
                                                        {jobids.map(item => {
                                                            return (<option key={item.jobId} value={item.jobId}>{item.jobId}</option>);
                                                        })}
                                                    </datalist>
                                                </div>
                                               
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Job Discription</label>
                                                <Form.Control
                                                    placeholder="Job Discription"
                                                    type="text"
                                                    name="job_description"
                                                    onChange={processDetails.handleChange}
                                                    value={processDetails.values.job_description}
                                                ></Form.Control>
                                                 {processDetails.errors.job_description && (
                                                    <div className="text-danger">{processDetails.errors.job_description}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>BATCH ID</label>
                                                <Form.Control
                                                    placeholder="BATCH ID"
                                                    type="text"
                                                    name="batchid_ad"
                                                    onChange={processDetails.handleChange}
                                                    value={processDetails.values.batchid_ad}
                                                ></Form.Control>
                                                {processDetails.errors.batchid_ad && (
                                                    <div className="text-danger">{processDetails.errors.batchid_ad}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Batch Start Time</label>
                                                <Form.Control
                                                    placeholder="Start Time"
                                                    type="time"
                                                    name="batch_start_time"
                                                    onChange={processDetails.handleChange}
                                                    value={processDetails.values.batch_start_time}
                                                ></Form.Control>
                                                 {processDetails.errors.batch_start_time && (
                                                    <div className="text-danger">{processDetails.errors.batch_start_time}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Batch End Time</label>
                                                <Form.Control
                                                    placeholder="End Time"
                                                    type="time"
                                                    name="batch_end_time"
                                                    onChange={processDetails.handleChange}
                                                    value={processDetails.values.batch_end_time}
                                                ></Form.Control>
                                                {processDetails.errors.batch_end_time && (
                                                    <div className="text-danger">{processDetails.errors.batch_end_time}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>

                                                <label>Product</label>
                                                <Form.Select
                                                    size="lg"
                                                    className="form-control"
                                                    name="product"
                                                    value={processDetails.values.product}
                                                    onChange={processDetails.handleChange}>
                                                    <option value="">Choose</option>
                                                    {productTable.map(item => {
                                                        return (<option key={item.productId} value={item.productId}>{item.productId} - {item.productname}</option>);
                                                    })}
                                                </Form.Select>
                                                {processDetails.errors.product && (
                                                    <div className="text-danger">{processDetails.errors.product}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Count</label>
                                                <Form.Control
                                                    placeholder="Count"
                                                    type="number"
                                                    min="0"
                                                    name="count_reg_bch"
                                                    onChange={processDetails.handleChange}
                                                    value={processDetails.values.count_reg_bch}
                                                ></Form.Control>
                                                 {processDetails.errors.count_reg_bch && (
                                                    <div className="text-danger">{processDetails.errors.count_reg_bch}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Production Line Name</label>
                                                <Form.Select size="lg" className="form-control" name="product_lineid_ad" value={processDetails.values.product_lineid_ad} onChange={processDetails.handleChange}>
                                                    <option value="">Choose</option>
                                                    {lineDetails.map(item => {
                                                        return (<option key={item.lineId} value={item.lineId}>{item.lineName}</option>);
                                                    })}
                                                </Form.Select>
                                                {processDetails.errors.product_lineid_ad && (
                                                    <div className="text-danger">{processDetails.errors.product_lineid_ad}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Predicted Date</label>
                                                <Form.Control
                                                    placeholder="Date"
                                                    type="date"
                                                    name="predicted_date"
                                                    onChange={processDetails.handleChange}
                                                    value={processDetails.values.predicted_date}
                                                ></Form.Control>
                                                {processDetails.errors.predicted_date && (
                                                    <div className="text-danger">{processDetails.errors.predicted_date}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Production Order</label>
                                                <Form.Control
                                                    placeholder="Production Order"
                                                    type="number"
                                                    name="production_order"
                                                    onChange={processDetails.handleChange}
                                                    value={processDetails.values.production_order}
                                                    disabled={true}
                                                ></Form.Control>
                                                {processDetails.errors.production_order && (
                                                    <div className="text-danger">{processDetails.errors.production_order}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Customer Id</label>
                                                <Form.Select size="lg" className="form-control" name="Customer_id" value={processDetails.values.Customer_id} onChange={processDetails.handleChange}>
                                                    <option value="">Choose</option>
                                                    {cusDetails.map(item => {
                                                        return (<option key={item.cus_id} value={item.cus_id}>{item.customer_name} - {item.cus_id}</option>);
                                                    })}
                                                </Form.Select>
                                                {processDetails.errors.Customer_id && (
                                                    <div className="text-danger">{processDetails.errors.Customer_id}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center ">
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="primary"
                                            onClick={processDetails.handleSubmit}
                                        >
                                            Add Process
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
export default CurrentProcessForm;
