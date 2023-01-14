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
    Col,
    Dropdown
} from "react-bootstrap";
import { DropdownItem } from "reactstrap";

function ProductUpdate({ match }) {
    const history = useHistory();
    const userid_pro = localStorage.getItem('userId');
    const [url, seturl] = useState('');
    const [product_id, setproduct_id] = useState('');
    const [product_name, setproduct_name] = useState("");
    const [description, setdescription] = useState("");
    const [image, setimage] = useState("");

    const [ProductDetails] = useState({
        userID_pro: userid_pro,
        productId: '',
        productName: '',
        description: '',
        image: '',
    })


    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/product/searchRegisteredProduct/' + match.params.id).then((response) => {

            // setBatchdetails(response.data.content);
            setproduct_id(response.data.content.productId);
            setproduct_name(response.data.content.productName);
            setdescription(response.data.content.description);

        });
    }, [])

    const ChangeOnClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("product_id", product_id);
        formData.append("product_name", product_name);
        formData.append("description", description);
        formData.append("image", image);


        ProductDetails.userID_pro = userid_pro;
        ProductDetails.productId = formData.get('product_id');
        ProductDetails.productName = formData.get('product_name');
        ProductDetails.description = formData.get('description');
        ProductDetails.image = formData.get('image');
        console.log(ProductDetails);

        await axios.put(url + `/api/v1/product/updateRegisteredProduct/${match.params.id}`, ProductDetails)
            .then(res => {
                console.log("Return Data", res);
                alert("Update Success!!");
                history.push('/admin/ProductRegistration')

            })
            .catch(err => {
                alert("Update Failed!!");
                console.log(err);
            });

    }
    const CancelOnClick = async (e) => {
        e.preventDefault();
        history.push('/admin/ProductRegistration')
    }


    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Product Update</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product ID</label>
                                                <Form.Control
                                                    placeholder="Product ID"
                                                    type="text"
                                                    name="product_id"
                                                    value={product_id}
                                                    onChange={e => setproduct_id(e.target.value)}
                                                    disabled={true}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Name</label>
                                                <Form.Control
                                                    placeholder="Product Name"
                                                    type="text"
                                                    name="product_name"
                                                    value={product_name}
                                                    onChange={e => setproduct_name(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Description</label>
                                                <Form.Control
                                                    placeholder="Product Description"
                                                    type="text"
                                                    name="description"
                                                    value={description}
                                                    onChange={e => setdescription(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Image</label>
                                                <Form.Control
                                                    placeholder="Product Image"
                                                    type="file"
                                                    name="image"
                                                    value={image}
                                                    onChange={e => setimage(e.target.value)}
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
                                            Update Product
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

export default ProductUpdate;
