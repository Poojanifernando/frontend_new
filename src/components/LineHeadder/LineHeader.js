
import React, { useState, useEffect } from "react"
import "../../assets/css/LineHeader.css"
import axios from "axios";


import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import ScrollMenuMachines from "components/MachineCardView/ScrollMenuMachines.js";

function LineHeader(props) {
    const current_date = props.date;
    const current_Line = props.line;
    const current_Line_name = props.lineName;



    const [lineCustomerDetails, setlineCustomerDetails] = useState([]);

    const [test, settest] = useState('green');

    useEffect(() => {

        axios.get('http://localhost:8081/api/v1/admin/GetDetailsByDateAndLineId/' + current_date + '/' + current_Line).then((response) => {
            setlineCustomerDetails(response.data);
        });

        //initial value setter
        axios.get('http://localhost:8081/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
            settest(response.data[0]);
        });
        //loop
        setInterval(() => (new axios.get('http://localhost:8081/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
            settest(response.data[0]);
        })), 5000);
    }, []);

    console.log(lineCustomerDetails)
    return (

        <div >
            {/* <h3 className="title">Line - line 1</h3> */}
            {lineCustomerDetails?.map((cusDetails, index) => {
                return (
                    <>
                        <div class="row1"   >
                            <div class="columnrow leftrow fontsize">LINE - {current_Line_name}</div>
                            <div class="columnrow rightrow"
                                style={{ backgroundColor: test.t_color , textShadow:"2px -1px 0 #000" }}
                            > {test.t_warmup} </div>
                        </div>
                        <div class="row1">
                            <div class="column1"><p className="linetitle">Job no :<p className="ptagRemove"> {cusDetails.job_id_ad}</p></p></div>
                            <div class="column1"><p className="linetitle" >Product :<p className="ptagRemove">  {cusDetails.product_name}</p></p> </div>
                            <div class="column1"><p className="linetitle">Quantity : <p className="ptagRemove"> {cusDetails.count_reg_bch}</p></p>  </div>
                            <div class="column1"><p className="linetitle">Batch : <p className="ptagRemove"> {cusDetails.batch_name_reg_bch}</p></p> </div>
                            <div class="column1"><p className="linetitle">Customer : <p className="ptagRemove"> {cusDetails.customer_name}</p></p> </div>
                            {/* <div class="column1"><p className="linetitle">Done :</p></div> */}
                        </div>
                        <ScrollMenuMachines date={current_date} line={current_Line} pOrder={cusDetails.production_order} />
                    </>)
            })}

        </div>

    );
}

export default LineHeader;
