
import React, { useState, useEffect } from "react"
import "../../assets/css/LineHeader.css"
import { getLocalhostUrl } from 'components/url/Url.js'
import axios from "axios";
import ScrollMenuMachines from "components/MachineCardView/ScrollMenuMachines.js";

function LineHeader(props) {


    const UserId = localStorage.getItem("userId");
    const current_date = props.date;
    const current_Line = props.line;
    const current_Line_name = props.lineName;
    const [lineCustomerDetails, setlineCustomerDetails] = useState([]);
    const [test, settest] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [url, seturl] = useState('');
    const [Wastage, setWastage] = useState();

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)

        axios.get(myurl + '/api/v1/admin/GetDetailsByDateAndLineId/' + current_date + '/' + current_Line).then((response) => {
            setlineCustomerDetails(response.data);
            // console.log(response.data[0].batchid_ad)
        });

        //initial value setter
        axios.get(myurl + '/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
            settest(response.data);
        });

        //initial value setter
        axios.get(myurl + '/api/v1/admin/ButtonOnorNot/' + current_Line + '/' + current_date).then((response) => {
            setIsRunning(response.data.ReturnVal);
            // console.log(response.data.ReturnVal)
            // setIsRunning(1);
        });
        //westage
        axios.get(myurl + '/api/v1/admin/getSumOfProductWastage/' + current_Line).then((response) => {
            setWastage(response.data.IOT);
        });

        //loop
        setInterval(() => (
            new axios.get(myurl + '/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
                settest(response.data);
                //westage
                axios.get(myurl + '/api/v1/admin/getSumOfProductWastage/' + current_Line).then((response) => {
                    setWastage(response.data.IOT);
                });

            }))
            , 5000);
    }, []);

    let firstWarm = true;
    let firstOnline = true;
    // let startbuttonhold =false;
    
    let startbuttonhold = localStorage.getItem("testbuton");
    const boolValue = JSON.parse(startbuttonhold);
    console.log(boolValue)
    // let buttontruefalse = true;

    //stop button disable or not
    let stopbutton = true;
    if (isRunning == 1) {
        localStorage.setItem("testbuton" , false);
        stopbutton = true
    }
    else if (isRunning == 2) {
        stopbutton = true
    }
    else if (isRunning == 3) {
        stopbutton = false
    }
    else if (isRunning == 4) {
        stopbutton = false
    }

    //click event in 4 button
    const handleClick1 = async (id) => {
        //warmup
       
        if (isRunning == 1) {
            console.log("1", id)
            if (confirm("Are you want to start warmup this?")) {
                // setIsRunning(true);
                try {
                    
                    axios.get(url + '/api/v1/admin/AddStartTime/' + current_Line + '/' + current_date + '/' + id + '/1').then(() => {
                        localStorage.setItem("testbuton" , true);
                        window.location.reload(false);
                    }).catch((err) => {
                        alert(err);
                    })
                } catch (error) {
                    console.error(error);
                }
            }
        }
        //start
        else if (isRunning == 2) {
            console.log("2")
            if (confirm("Are you want to start this?")) {
                // setIsRunning(true);
                try {
                    console.log("Are you want to start this?", current_date, current_Line, id);
                    axios.get(url + '/api/v1/admin/AddStartTime/' + current_Line + '/' + current_date + '/' + id + '/2').then(() => {
                        window.location.reload(false);
                    }).catch((err) => {
                        alert(err);
                    })
                } catch (error) {
                    console.error(error);
                }
            }
        }
        //pause
        else if (isRunning == 3) {
            console.log("3")
            if (confirm("Are you want to pause this?")) {
                // setIsRunning(true);
                try {
                    axios.get(url + '/api/v1/admin/HoldProduction/' + current_Line + '/' + id + '/' + "1" + '/' + UserId + "/reson").then(() => {
                        window.location.reload(false);
                    }).catch((err) => {
                        alert(err);
                    })
                } catch (error) {
                    console.error(error);
                }
            }
        }
        //resume
        else if (isRunning == 4) {
            console.log("4")
            if (confirm("Are you want to resume this?")) {
                // setIsRunning(true);
                try {
                    axios.get(url + '/api/v1/admin/HoldProduction/' + current_Line + '/' + id + '/' + "2" + '/' + UserId + "/reson").then(() => {
                        window.location.reload(false);
                    }).catch((err) => {
                        alert(err);
                    })
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
  

    //stop button
    const handleClickStop = async (id) => {
        if (confirm("Are you want to stop this?")) {
            // setIsRunning(false);
            try {
                axios.get(url + '/api/v1/admin/DeleteValuesByEndTime/' + current_Line + '/' + current_date + '/' + id).then(() => {
                    window.location.reload(false);
                }).catch((err) => {
                    alert(err);
                })
            } catch (error) {
                console.error(error);
            }
        }
    }

    const style = {
        // backgroundColor: isRunning ? 'red' : 'green',
        backgroundColor: (() => {
            switch (isRunning) {
                case 1:
                    return 'yellow';
                case 2:
                    return 'green';
                case 3:
                    return 'orange';
                case 4:
                    return 'orange';
                default:
                    return 'white';
            }
        })(),
        color: 'black'
    };

    //show the all customer details in ths page
    return (
        <div >
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
                                        // startbuttonhold = false;
                                        localStorage.setItem("testbuton" , false);
                                        return (
                                            <div class="columnrow rightrow"
                                                style={{ backgroundColor: "#027739", textShadow: "2px -1px 0 #000" }}
                                            >{Value.t_warmup}
                                            </div>
                                        );
                                    }
                                })}
                                <div class="columnrow leftrow fontsize">

                                    {/* <button onClick={() => handleClick(cusDetails.production_order)} className='btn btntest' style={style}
                                      >
                                        {isRunning ? 'Stop' : 'Start'}
                                    </button> */}

                                    <button className='btn btntest' style={style} disabled={boolValue}  onClick={() => handleClick1(cusDetails.production_order)}>
                                        {isRunning == 1
                                            ? 'Warmup'
                                            : isRunning == 2
                                                ? 'Start'
                                                : isRunning == 3
                                                    ? 'Pause'
                                                    : isRunning == 4
                                                        ? 'Resume'
                                                        : ''
                                        }</button>
                                    {/* {isRunning == 1 && <div>This will show when isRunning is 1</div>}
                                    {isRunning == 2 && <div>This will show when isRunning is 2</div>}
                                    {isRunning == 3 && <div>This will show when isRunning is 3</div>} */}

                                    {/* stop button */}
                                    <button className='btn' style={{ color: 'white', backgroundColor: "red" }} disabled={stopbutton} onClick={() => handleClickStop(cusDetails.production_order)}>Stop</button>
                                    &nbsp;&nbsp;&nbsp;

                                    {current_Line_name}
                                </div>
                            </div>
                            <div class="row1">
                                <div class="column1"><p className="linetitle">Job no :<p className="ptagRemove"> {cusDetails.job_id_ad}</p></p></div>
                                <div class="column1"><p className="linetitle" >Product :<p className="ptagRemove">  {cusDetails.product_name}</p></p> </div>
                                <div class="column1"><p className="linetitle">Quantity : <p className="ptagRemove"> {cusDetails.count_reg_bch}</p></p>  </div>
                                <div class="column1"><p className="linetitle">Batch : <p className="ptagRemove"> {cusDetails.batchid_reg_bch}</p></p> </div>
                                <div class="column1"><p className="linetitle">Customer : <p className="ptagRemove"> {cusDetails.customer_name}</p></p> </div>
                                <div class="column1"><p className="linetitle">Westage : <p className="ptagRemove"> {Wastage}</p></p></div>
                            </div>
                            {/* get to the ScrollMenuMachines to view all the machine view */}
                            <ScrollMenuMachines date={current_date} line={current_Line} pOrder={cusDetails.production_order} />
                        </>)
                }) : <p className="no-data-msg">Enter new production to  <b>{current_Line_name}</b></p>
            }

        </div>

    );
}

export default LineHeader;
