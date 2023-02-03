import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import "../../assets/css/CardInsideBody.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Length from '../../assets/img/length1.jpeg'
import {
    Card,
} from "react-bootstrap";
import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    Indicator,
} from 'react-speedometer';

function PerameterValueView(props) {
    const { value, min, max } = props;

    let previouslength = 0;
    const gaugeWidth = 300;
    const gaugeHeight = 20;
    const gaugeColor = 'colorfromprop';
    const backgroundColor = '#D3D3D3';

    const valueWidth = (value / (max - min)) * gaugeWidth;


    const { score } = props;
    const calcColor = (percent, start, end) => {
        let a = percent / 100,
            b = (end - start) * a,
            c = b + start;

        // return an CSS hsl color string
        return 'hsl(' + c + ', 100%, 50%)';
    }

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

    console.log("valuesinbutton", valuesinbutton)

    //show the all values inside the parametrs 

    if (valuesinbutton == 2 || valuesinbutton == 3) {
        // console.log(value123)
        // console.log(previouslength)
        // let rangeofLength = value123-previouslength;
        // previouslength = value123;
        // console.log('previouslength',previouslength)
        // console.log("rangeofLength",rangeofLength)
        return (
            <div>
                {Values?.map((Value, index) => {
                    //check only length
                    if (Value.parameter_id_in_iot_input_tra == "LNTH") {
                        return (
                            <>
                                {/* <Card.Title className="" style={{ backgroundColor: colorfromprop }}>
                                <p className="asd">{value123} {Value.measuring_unit} </p></Card.Title> */}

                                <div className="Length" style={{ size: "50px" }}>
                                    <div> {value123 + Value.measuring_unit}
                                        <br></br>
                                        {/* <div class="length" src={require("assets/img/length1.jpeg")} alt="..." /> */}
                                        <img src={Length} alt="lengthImg" height={40} width={130} />
                                    </div>
                                </div>
                                <br />
                                <br />

                                {/* <p style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: "0 auto" }}>
                                    <p className=" textcolor" style={{ textAlign: "center", textAnchor: "middle", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        SPEED
                                    </p>

                                    <p className=" speed" style={{ textAlign: "center", textAnchor: "middle", fontSize: "1.3rem", fontWeight: "bold", textAlign: "center" }}>
                                        {(value123 / 60).toFixed(2)}
                                        <br />
                                        {"m/min"}
                                    </p>
                                </p> */}


                            </>
                        )
                        //other details
                    } else if (Value.parameter_id_in_iot_input_tra == "TEMP") {
                        return (
                            <>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                    <CircularProgressbar
                                        value={Value.value_tra}
                                        maxValue={250}
                                        text={Value.value_tra + Value.measuring_unit}
                                        circleRatio={0.7}
                                        styles={{
                                            trail: {
                                                strokeLinecap: "butt",
                                                transform: "rotate(-126deg)",
                                                transformOrigin: "center center",
                                                stroke: "#d6d6d6"
                                            },
                                            path: {
                                                strokeLinecap: "butt",
                                                transform: "rotate(-126deg)",
                                                transformOrigin: "center center",
                                                stroke: colorfromprop
                                            },
                                            text: {
                                                textAnchor: "middle"
                                            }
                                        }}
                                        strokeWidth={10}
                                    />
                                </div>
                            </>
                        )
                    } else (Value.parameter_id_in_iot_input_tra == "POWR")
                    {
                        return (
                            <>
                                <div className="speedometer" style={{ marginLeft: "50px" }}>
                                    <div style={{ textAlign: 'center', fontSize: '1.0rem' }}>{Value.value_tra + Value.measuring_unit}</div>
                                    {/* <Speedometer
                                        value={Value.value_tra}
                                        fontFamily='squada-one'
                                        width={70}
                                        alignItems="center"
                                    >
                                        <Background color={'white'} />
                                        <Arc />
                                        <Needle color={'black'} offset={15} baseWidth={4} circleRadius={8} />
                                        <Progress color={colorfromprop} />
                                        <Marks fontSize={10} lineSize={5} numbersRadius={8} lineColor={"black"} step={10} alignItems={"center"} />
                                    </Speedometer> */}
                                </div>
                            </>
                        )
                    }
                })}
            </div>
        );
    }
}

export default PerameterValueView;
