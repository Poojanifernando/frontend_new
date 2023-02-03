import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import "../../assets/css/ScrollView.css"
import CardParameterbody from "components/MachineCardView/CardParameterbody.js";
import {
    Card,
    Col,
    Container
} from "react-bootstrap";
function ScrollMenuMachines(props) {

    const current_date = props.date;
    const current_Line = props.line;
    const current_pOrder = props.pOrder;
    const [AllMachines, setAllMachines] = useState([]);
    const [url, seturl] = useState('');

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/admin/GetDetailsByDateAndLineIdAndPOrder/' + current_date + '/' + current_Line + '/' + current_pOrder).then((response) => {
            setAllMachines(response.data);
        });
    }, [])

    //scroll view in the machines
    return (
        <div>
            <br />
            <div class="scrollmenu">
                {AllMachines?.map((Machins, index) => {
                    return (
                        <Col
                            // lg="test"
                            // sm="12"
                            className="aa test"
                            >
                            <Card className="card-stats" style={{ borderShadow:'#555' }}>
                                <Card.Header style={{ fontWeight: "bold", fontSize: '1.0rem' }}>
                                    {Machins.machine_name}
                                </Card.Header>
                                {/* <br /> */}
                                <CardParameterbody date={current_date} line={current_Line} POrder={current_pOrder} MachineId={Machins.machine_id} />
                            </Card>
                        </Col>
                    )
                })}
            </div>
        </div>
    );
}

export default ScrollMenuMachines;
