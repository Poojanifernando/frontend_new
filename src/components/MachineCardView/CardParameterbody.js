import React, { useState, useEffect } from "react"
import axios from "axios";
import CardInsideBody from "components/MachineCardView/CardInsideBody.js";
import PerameterValueView from "components/MachineCardView/PerameterValueView.js";
import "../../assets/css/CardInsideBody.css";

// import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function CardParameterbody(props) {

    const current_date = props.date;
    const current_Line = props.line;
    const current_pOrder = props.POrder;
    const current_Machine = props.MachineId;
    // console.log("current_date " + current_date + "and line id " + current_Line +"current_pOrder "+current_pOrder+" current_Machine "+current_Machine)

    const [machinePerameters, setMachinePerameters] = useState([]);
    const [linecolors, setlinecolor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/admin/GetDetailsByDateAndLineIdAndPOrder/' + current_date + '/' + current_Line + '/' + current_pOrder + '/' + current_Machine).then((response) => {
            setMachinePerameters(response.data);
        });

        // axios.get('http://localhost:8081/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
        //     setlinecolor(response.data);
        // });

        // setInterval(() => (new axios.get('http://localhost:8081/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
        //     setlinecolor(response.data);
        //     // console.log('Interval triggered '+JSON. stringify(response.data));
        // })), 7000);

    }, [])


    return (
        <Container style={{ paddingBottom: "10px", minHeight: "140px", minWidth: "100px" }}>
            < >

            {machinePerameters?.map((machineperameter, index) => {
                    return (
                        <>
                                        <Row className="rowstest " style={{ backgroundColor: "" }}>
                                        <Col xs="6 ab">
                                            {/* <div className="numbers"> */}
                                            <p className="card-category">
                                                {machineperameter.device_name_dvc_reg}
                                                {/* {Parameters?.paraId_PDM} */}
                                            </p>


                                            {/* <Card.Title className="h3">150 C</Card.Title> */}
                                            {/* </div> */}
                                        </Col>
                                        <Col xs="6 abc">
                                            {/* <div className="numbers"> */}
                                            {/* <p className="card-category">Device Name  - {Parameters?.paraId_PDM}</p> */}
                                            {/* <Card.Title className="h3">150 C</Card.Title> */}
                                            <PerameterValueView job={machineperameter.job_id_ad} batch={machineperameter.batchid_ad} lid={current_Line} proOder={current_pOrder} machine={current_Machine} deviceId={machineperameter.device_id} pID={machineperameter.parameter_id} date={current_date} />
                                            {/* </div> */}
                                        </Col>
                                        {/* <Col xs="2 a"> */}
                                        {/* <div className="icon-big text-center icon-warning" > */}
                                        {/* <img src={lenth} alt="horse" style={{ maxHeight: "50px" }} /> */}
                                        {/* <i class="fa-solid fa-temperature-quarter"></i> */}
                                        {/* <FontAwesomeIcon icon="fa-thin fa-ruler" /> */}
                                        {/* </div> */}
                                        {/* </Col> */}
                                    </Row>

                        </>
                    )
                })}

            </>

        </Container>
    );
}

export default CardParameterbody;
