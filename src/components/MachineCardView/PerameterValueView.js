import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl  } from 'components/url/Url.js'
import "../../assets/css/CardInsideBody.css";
import {
    Card,
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
    const [valuesinbutton, setvaluesinbutton] = useState();

    useEffect(() => {
        const myurl = getLocalhostUrl();
    // console.log("props.color",props.color)
        seturl(myurl)
        axios.get(myurl + '/api/v1/admin/GetValueByDevice/' + current_Job + '/' + current_batch + '/' + current_Line + '/' + current_pOrder + '/' + current_Machine + '/' + current_deviceId + '/' + current_pID + '/' + current_date).then((response) => {
            setValues(response.data);
            console.log('sad', response.data)
        });

        axios.get(myurl + '/api/v1/admin/getsumofproduct/' + current_Line).then((response) => {
            setValue(response.data.IOT);
        });

         //initial value setter
         axios.get(myurl + '/api/v1/admin/ButtonOnorNot/' + current_Line + '/' + current_date).then((response) => {
            setvaluesinbutton(response.data.ReturnVal);
            // console.log(response.data.ReturnVal)
            // setIsRunning(1);
        });

        setInterval(() => (new axios.get(myurl + '/api/v1/admin/GetValueByDevice/' + current_Job + '/' + current_batch + '/' + current_Line + '/' + current_pOrder + '/' + current_Machine + '/' + current_deviceId + '/' + current_pID + '/' + current_date).then((response) => {
            setValues(response.data);
            // setValues([{value_tra:0, measuring_unit:c}]);
            axios.get(myurl + '/api/v1/admin/getsumofproduct/' + current_Line).then((response) => {
                setValue(response.data.IOT);
            });
        })), 7000);
    }, [])


console.log("valuesinbutton",valuesinbutton)

    //show the all values inside the parametrs 

if(valuesinbutton == 2 || valuesinbutton==3){
    return (
        <>
            {Values?.map((Value, index) => {
                //check only length
                if (Value.parameter_id_in_iot_input_tra == "LNTH") {
                    return (
                        <Card.Title className="" style={{ backgroundColor: colorfromprop }}><p className="asd">{value123} {Value.measuring_unit} </p></Card.Title>
                    )
                    //other details
                } else {
                    let currentValue = Value.value_tra;
                    let maxValue = 200;
                    let percentage = (currentValue / maxValue) * 100;


                    return (
                        <Card.Title  className=""  style={{ backgroundColor: colorfromprop }}><p className="asd">{Value.value_tra} {Value.measuring_unit}
                         </p></Card.Title>
                    )
                }

            })}

        </>
    );
}
else{
    return (
        <>
            {Values?.map((Value, index) => {
                //check only length
                if (Value.parameter_id_in_iot_input_tra == "LNTH") {
                    return (
                        <Card.Title className="" style={{ backgroundColor: colorfromprop }}><p className="asd">0 {Value.measuring_unit} </p></Card.Title>
                    )
                    //other details
                } else {
                    return (
                        <Card.Title  className=""  style={{ backgroundColor: colorfromprop }}><p className="asd">0 {Value.measuring_unit}
                         </p></Card.Title>
                    )
                }

            })}

        </>
    );
    
}

    
}

export default PerameterValueView;
