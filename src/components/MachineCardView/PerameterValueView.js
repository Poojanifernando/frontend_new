import React, { useState, useEffect } from "react"
import axios from "axios";
import "../../assets/css/CardInsideBody.css";

// import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function PerameterValueView(props) {

    const current_Job = props.job;
    const current_batch = props.batch;
    const current_Line = props.lid;
    const current_pOrder = props.proOder;
    const current_Machine = props.machine;
    const current_deviceId = props.deviceId;
    const current_pID = props.pID;
    const current_date = props.date;
    // console.log("current_date " + current_date + "and line id " + current_Line +"current_pOrder "+current_pOrder+
    // " current_Machine "+current_Machine)

    const [Values, setValues] = useState([]);
    const [color, setcolor] = useState(`rgb(182,251,213)`);
    const [value, setValue] = useState(0);


    function handleClick() {
        setValue(prevValue => prevValue + 1);
      }
    

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/admin/GetValueByDevice/'+current_Job+'/'+current_batch+'/'+current_Line+'/'+current_pOrder+'/'+current_Machine+'/'+current_deviceId+'/'+current_pID+'/'+current_date).then((response) => {
            setValues(response.data);
        });

        setInterval(() => (new axios.get('http://localhost:8081/api/v1/admin/GetValueByDevice/'+current_Job+'/'+current_batch+'/'+current_Line+'/'+current_pOrder+'/'+current_Machine+'/'+current_deviceId+'/'+current_pID+'/'+current_date).then((response) => {
            setValues(response.data);
            // console.log('Interval triggered '+JSON. stringify(response.data));
        })), 7000);
 
       
    }, [])

    return (
        <>
            {Values?.map((Value, index) => {
                if(Value.parameter_id_in_iot_input_tra == "LNTH" ){

                    return (
                        <Card.Title className="h3"  key ={Value} style={{ backgroundColor:color}}>{Value.value_tra} {Value.measuring_unit} </Card.Title>
                    )
                }else{
                    return (
                    <Card.Title className="h3" key ={Value} style={{ backgroundColor:color}}>{Value.value_tra} {Value.measuring_unit}</Card.Title>

                )}
               
            })}

        </>



    );
}

export default PerameterValueView;
