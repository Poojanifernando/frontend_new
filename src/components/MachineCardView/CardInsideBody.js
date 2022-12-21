import React, { useState, useEffect } from "react"
import axios from "axios";
// import "assert/style.css"
// import ChartistGraph from "react-chartist";
// react-bootstrap components
import temp from '../../assets/img/temp.png';
import lenth from '../../assets/img/length.png';
import power from '../../assets/img/power.png';

import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function CardInsideBody() {
    const [Parameters, setParameters] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/PDM/getalltestsdevices').then((response) => {
            setParameters(response.data);
            console.log(response.data)
        });
    }, [])
    return (

        <div>
            {Parameters?.map((Parameters, index) => {

                if ("temp" == Parameters.paraId_PDM) {
                    return (
                        <Card.Body>
                            <Row>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category">Device Name - {Parameters?.paraId_PDM}</p>
                                        <Card.Title as="h4">150 C</Card.Title>
                                    </div>
                                </Col>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        {/* <i class="fas fa-temperature-low" style={{color:"red"}}></i> */}
                                        <img src={temp} alt="horse" style={{ maxHeight: "40px" }} />
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </Card.Body>
                    )
                }
                else if ("lenth" == Parameters.paraId_PDM) {
                    return (
                        <Card.Body>
                            <Row>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category">Device Name - {Parameters?.paraId_PDM}</p>
                                        <Card.Title as="h4">150 C</Card.Title>
                                    </div>
                                </Col>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <img src={lenth} alt="horse" style={{ maxHeight: "50px" }} />
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </Card.Body>
                    )
                }
                else if ("power" == Parameters.paraId_PDM) {
                    return (
                        <Card.Body>
                            <Row>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category">Device Name - {Parameters?.paraId_PDM}</p>
                                        <Card.Title as="h4">150 C</Card.Title>
                                    </div>
                                </Col>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <img src={power} alt="horse" style={{ maxHeight: "50px" }} />
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </Card.Body>
                    )
                }
                else {
                    return (
                        <Card.Body>
                            <Row>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category">Device Name - {Parameters?.paraId_PDM}</p>
                                        <Card.Title as="h4">150 C</Card.Title>
                                    </div>
                                </Col>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <i class="fa-solid fa-sensor"></i>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </Card.Body>

                    )
                }

            })}

        </div >
    );
}

export default CardInsideBody;
