
import React, { useState, useEffect } from "react"
import "../../assets/css/LineHeader.css"
import { getLocalhostUrl } from 'components/url/Url.js'
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
    const [test, settest] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [url, seturl] = useState('');
    
    useEffect(() => {
         const myurl = getLocalhostUrl();
         seturl(myurl)
         console.log("urlurlurlurlurlurlurlurlurlurlurl", myurl)
        axios.get(myurl+'/api/v1/admin/GetDetailsByDateAndLineId/' + current_date + '/' + current_Line).then((response) => {
            setlineCustomerDetails(response.data);

        });

        //initial value setter
        axios.get(myurl+'/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
            settest(response.data);
        });

        //initial value setter
        axios.get(myurl+'/api/v1/admin/ButtonOnorNot/' + current_Line + '/' + current_date).then((response) => {
            setIsRunning(response.data.result);
        });


        //loop
        setInterval(() => (new axios.get(myurl+'/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
            settest(response.data);


        })), 5000);
    }, []);



    let firstWarm = true;
    let firstOnline = true;
    // let buttontruefalse = true;

    //button change
   
    const handleClick = async (id) => {
        if (!isRunning) {
            if (confirm("Are you want to start this?")) {
                setIsRunning(true);
                try {
                    console.log("Are you want to start this?", current_date, current_Line, id);
                    axios.get(url+'/api/v1/admin/AddStartTime/' + current_Line + '/' + current_date + '/' + id).then(() => {
                    }).catch((err) => {
                        alert(err);
                    })
                } catch (error) {
                    console.error(error);
                }
            }
        } else {
            if (confirm("Are you want to stop this?")) {
                setIsRunning(false);
                try {
                    console.log("Are you want to stop this", current_date, current_Line, id);
                    axios.get(url+'/api/v1/admin/DeleteValuesByEndTime/' + current_Line + '/' + current_date + '/' + id).then(() => {
                        window.location.reload(false);
                    }).catch((err) => {
                        alert(err);
                    })
                } catch (error) {
                    console.error(error);
                }
            }
        }
    };
    const style = {
        backgroundColor: isRunning  ? 'red' : 'green',
        color: 'white'
    };

    return (

        <div >
            {/* <h3 className="title">Line - line 1</h3> */}
            {lineCustomerDetails.length !== 0 ?
            lineCustomerDetails.map((cusDetails, index) => {
                return (
                    <>
                        <div class="row1">

                            {test.map((Value, index) => {
                                if (Value.t_warmup === 'Warming Up' && firstWarm) {
                                    firstWarm = false;
                                    return (
                                        <div class="columnrow rightrow"
                                            style={{ backgroundColor: Value.t_color }}
                                        >{Value.t_warmup}
                                        </div>
                                    );
                                }
                                if (Value.t_warmup === 'Online' && firstOnline) {
                                    firstOnline = false;
                                    // buttontruefalse = false;

                                    return (
                                        <div class="columnrow rightrow"
                                            style={{ backgroundColor: "#027739", textShadow: "2px -1px 0 #000" }}
                                        >{Value.t_warmup}
                                        </div>
                                    );
                                }
                                // return <>sss</>
                            })}
                            <div class="columnrow leftrow fontsize">
                                <button onClick={() => handleClick(cusDetails.production_order)} className='btn btntest' style={style}
                                //  disabled={buttontruefalse}
                                 >
                                    {isRunning  ? 'Stop' : 'Start'}
                                </button>
                                &nbsp;&nbsp;&nbsp;
                                LINE - {current_Line_name}
                            </div>
                            {/* <div class="columnrow rightrow"
                                style={{ backgroundColor: test.color_code_st_out , textShadow:"2px -1px 0 #000" }}
                            > {test.t_warmup}</div> */}

                        </div>
                        <div class="row1">
                            <div class="column1"><p className="linetitle">Job no :<p className="ptagRemove"> {cusDetails.job_id_ad}</p></p></div>
                            <div class="column1"><p className="linetitle" >Product :<p className="ptagRemove">  {cusDetails.product_name}</p></p> </div>
                            <div class="column1"><p className="linetitle">Quantity : <p className="ptagRemove"> {cusDetails.count_reg_bch}</p></p>  </div>
                            <div class="column1"><p className="linetitle">Batch : <p className="ptagRemove"> {cusDetails.batchid_reg_bch}</p></p> </div>
                            <div class="column1"><p className="linetitle">Customer : <p className="ptagRemove"> {cusDetails.customer_name}</p></p> </div>
                            {/* <div class="column1"><p className="linetitle">Done :</p></div> */}
                        </div>
                        <ScrollMenuMachines date={current_date} line={current_Line} pOrder={cusDetails.production_order} />
                    </> )
            }) : <p className="no-data-msg">Enter new production to  <b>{current_Line_name}</b></p>
        }

        </div>

    );
}

export default LineHeader;
