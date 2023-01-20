import React, { useState, useEffect } from "react"
import axios from "axios";
import CardInsideBody from "components/MachineCardView/CardInsideBody.js";
import PerameterValueView from "components/MachineCardView/PerameterValueView.js";
import { getLocalhostUrl } from 'components/url/Url.js'
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
    const [url, seturl] = useState('');


    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/admin/GetDetailsByDateAndLineIdAndPOrder/' + current_date + '/' + current_Line + '/' + current_pOrder + '/' + current_Machine).then((response) => {
            setMachinePerameters(response.data);
        });

        axios.get(myurl + '/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
            setlinecolor(response.data);
        });

        setInterval(() => (new axios.get(myurl + '/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
            setlinecolor(response.data);
        })), 7000);

    }, [])

//show only the machine names in page 1 by one
    return (
        <Container style={{ paddingBottom: "10px", minHeight: "140px", minWidth: "100px" }}>
            < >
                {machinePerameters?.map((machineperameter, index) => {
                    let color = "#72b592";
                    let name;
                    let msg123 = '';
                    let variable = false;
                    return (
                        <>
                            {linecolors?.map((linecolor, index) => {
                                if (variable == false) {
                                    if (machineperameter.device_id == linecolor.device_id) {
                                        name = machineperameter.device_id
                                        color = linecolor.t_color
                                        msg123 = linecolor.high_or_low
                                        variable = true;
                                    }
                                }
                            })}

                            <>
                                <Row className="rowstest " style={{ backgroundColor: "white" }}>
                                    <Col xs="6 ab">
                                        <p className=" textcolor">
                                            {machineperameter.device_name_dvc_reg}
                                        </p>
                                    </Col>
                                    <Col xs="6 abc">
                                        {/* to show the parameter values  */}
                                        <PerameterValueView job={machineperameter.job_id_ad} batch={machineperameter.batchid_ad} lid={current_Line} proOder={current_pOrder} machine={current_Machine} deviceId={machineperameter.device_id} pID={machineperameter.parameter_id} date={current_date} color={color} msg={msg123} />
                                    </Col>

                                </Row>

                            </>
                        </>
                    )
                })}

            </>

        </Container>
    );
}

export default CardParameterbody;
