import React, { useState, useEffect } from "react"
import axios from "axios";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "../../assets/css/ScrollView.css"



import CardParameterbody from "components/MachineCardView/CardParameterbody.js";

import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function ScrollMenuMachines(props) {


    const current_date = props.date;
    const current_Line = props.line;
    const current_pOrder = props.pOrder;
    console.log("current_date " + current_date + "and line id " + current_Line +"current_pOrder "+current_pOrder)

    const [AllMachines, setAllMachines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/admin/GetDetailsByDateAndLineIdAndPOrder/'+current_date+'/'+current_Line+'/'+current_pOrder).then((response) => {
            setAllMachines(response.data);
        });

    }, [])

    return (
        <div>
            <br/>
            {/* <Row > */}
                <div class="scrollmenu">
                    {/* <a href="#work">Work</a> */}
                    {AllMachines?.map((Machins, index) => {
                        return (
                            <Col 
                            lg="3" 
                            // sm="12"
                             className="aa">
                                <Card className="card-stats">
                                    <Card.Header>
                                        {/* <div className="stats"> */}
                                        {/* <i className="fas fa-redo mr-1"></i> */}
                                        {Machins.machine_name}
                                        {/* {Machins?.machineID} */}
                                        {/* </div> */}
                                    </Card.Header>
                                    <CardParameterbody date={current_date} line={current_Line} POrder={current_pOrder} MachineId={Machins.machine_id}/>
                                </Card>
                            </Col>
                        )
                    })} 
                </div>
            {/* </Row> */}
        </div>
    );
}

export default ScrollMenuMachines;
