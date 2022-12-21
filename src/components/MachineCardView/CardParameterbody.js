import React, { useState, useEffect } from "react"
import axios from "axios";
import CardInsideBody from "components/MachineCardView/CardInsideBody.js";

// import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function CardParameterbody() {
    const [Machins, setMachines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/MachineLineTest/getalltests').then((response) => {
            setMachines(response.data);
            // console.log(response.data)
        });
        // http://localhost:8081/api/v1/PDM/getalltestsdevices
    }, [])

    return (
        <Container fluid>
                <Card className="card-stats">
                   <CardInsideBody/>
                </Card>

        </Container>
    );
}

export default CardParameterbody;
