import React, { useState, useEffect } from "react"
import axios from "axios";
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

function LineUpdate({ match }) {
    const userId = localStorage.getItem("userId");
    const history = useHistory();

    const [line_id, setline_id] = useState("");
    const [line_name, setline_name] = useState("");
    const [description, setdescription] = useState("");
    const [start_time, setstart_time] = useState("");
    const [endtime, setendtime] = useState("");
    const [image, setimage] = useState("");

    const [LineDetails] = useState({
        userID_line: userId,
        lineId: '',
        lineName: '',
        description: '',
        startTime: '',
        endTime: '',
        image: ''
    })


    useEffect(() => {
        axios.get('http://localhost:8082/api/v1/line/searchRegisteredLine/' + match.params.id).then((response) => {
            // setBatchdetails(response.data.content);

            setline_id(response.data.content.lineId);
            setline_name(response.data.content.lineName);
            setdescription(response.data.content.description);
            setstart_time(response.data.content.startTime);
            setendtime(response.data.content.endTime);
            // setimage(response.data.content.image);
        });
    }, [])


    const ChangeOnClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("line_id", line_id);
        formData.append("line_name", line_name);
        formData.append("description", description);
        formData.append("start_time", start_time);
        formData.append("end_time", endtime);
        formData.append("image", image);


        // LineDetails.userid_line=formData.get('userid_reg_bch');
        LineDetails.lineId = formData.get('line_id');
        LineDetails.lineName = formData.get('line_name');
        LineDetails.description = formData.get('description');
        LineDetails.startTime = formData.get('start_time');
        LineDetails.endTime = formData.get('end_time');
        LineDetails.image = formData.get('image');
        console.log(LineDetails);

        await axios.put(`http://localhost:8082/api/v1/line/updateRegisteredLine/${match.params.id}`, LineDetails)
            .then(res => {
                console.log("Return Data", res);
                alert("Update Success!!");
                history.push('/admin/ProductLineRegistration')
            })
            .catch(err => {
                alert("Update Failed!!");
                console.log(err);
            });
    }
    const CancelOnClick = async (e) => {
        e.preventDefault();
        history.push('/admin/ProductLineRegistration')
    }

    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Product Line Update</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Line  ID</label>
                                                <Form.Control
                                                    placeholder="Line ID"
                                                    type="text"
                                                    name="line_id"
                                                    value={line_id}
                                                    onChange={e => setline_id(e.target.value)}
                                                    disabled={true}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Line Description</label>
                                                <Form.Control
                                                    placeholder="Line Description"
                                                    type="text"
                                                    name="line_name"
                                                    value={description}
                                                    onChange={e => setdescription(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Line Name</label>
                                                <Form.Control
                                                    placeholder="Line Name"
                                                    type="text"
                                                    name="description"
                                                    value={line_name}
                                                    onChange={e => setline_name(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Line Image</label>
                                                <Form.Control
                                                    placeholder="Line Image"
                                                    type="file"
                                                    name="image"
                                                    value={image}
                                                    onChange={e => setimage(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product Line Start Time</label>
                                                <Form.Control
                                                    placeholder="Line Start"
                                                    type="time"
                                                    name="start_time"
                                                    value={start_time}
                                                    onChange={e => setstart_time(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Product Line End Time</label>
                                                <Form.Control
                                                    placeholder="Line End"
                                                    type="time"
                                                    name="end_time"
                                                    value={endtime}
                                                    onChange={e => setendtime(e.target.value)}
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
                                            Update Line
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

export default LineUpdate;
