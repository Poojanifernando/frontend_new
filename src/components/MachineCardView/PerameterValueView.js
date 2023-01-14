import React, { useState, useEffect } from "react"
import axios from "axios";
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

function PerameterValueView(props) {

    const current_Job = props.job;
    const current_batch = props.batch;
    const current_Line = props.lid;
    const current_pOrder = props.proOder;
    const current_Machine = props.machine;
    const current_deviceId = props.deviceId;
    const current_pID = props.pID;
    const current_date = props.date;
    const colorfromprop = props.color;
    const msg = props.msg;

    const [Values, setValues] = useState([]);
    const [value123, setValue] = useState(0);
    const [url, seturl] = useState('');

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl+'/api/v1/admin/GetValueByDevice/' + current_Job + '/' + current_batch + '/' + current_Line + '/' + current_pOrder + '/' + current_Machine + '/' + current_deviceId + '/' + current_pID + '/' + current_date).then((response) => {
            setValues(response.data);
            console.log('sad',response.data)
        });
        
        axios.get(myurl+'/api/v1/admin/getsumofproduct/' + current_Line ).then((response) => {
            
            setValue(response.data.IOT);
        });

        setInterval(() => (new axios.get(myurl+'/api/v1/admin/GetValueByDevice/' + current_Job + '/' + current_batch + '/' + current_Line + '/' + current_pOrder + '/' + current_Machine + '/' + current_deviceId + '/' + current_pID + '/' + current_date).then((response) => {
            setValues(response.data);
            axios.get(myurl+'/api/v1/admin/getsumofproduct/' + current_Line ).then((response) => {
            setValue(response.data.IOT);
           
        });
        })), 7000);


    }, [])
    
    const changelength = (e) => {
        console.log(e)
    }

    return (
        <>
            {Values?.map((Value, index) => {
                if (Value.parameter_id_in_iot_input_tra == "LNTH") {
                    return (
                        <Card.Title className=""  style={{ backgroundColor: colorfromprop}}><p className="asd">{value123} {Value.measuring_unit} </p></Card.Title>
                    )
                } else {

                    return (

                        <Card.Title onChange={e => changelength(Value.value_tra)} className=""  style={{ backgroundColor: colorfromprop }}><p className="asd">{Value.value_tra} {Value.measuring_unit}
                         </p></Card.Title>

                    )
                }

            })}

        </>



    );
}

export default PerameterValueView;
