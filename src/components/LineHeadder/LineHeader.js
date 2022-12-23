
import React, { useState, useEffect } from "react"
import "../../assets/css/LineHeader.css"


import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function LineHeader() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() =>
        
        setDateState(new Date()), 1000);
        console.log("new")
    }, []);

    console.log(dateState)
    let a = dateState.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second:"numeric",
        hour12: true,
        
    })
    return (

        <div >
            <p>
            {a}
       
                {' '}
                {dateState.toLocaleDateString('es-CL', {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                })}
            </p>

            {/* <h3 className="title">Line - line 1</h3> */}
            <div >
                <div class="column left fontsize">LINE - LINE 1</div>
                <div class="column right"> Online </div>
            </div>

            <div class="row1">
                <div class="column1"><p className="linetitle">Job no : 1111</p></div>
                <div class="column1"><p className="linetitle" >Product : AUTO</p> </div>
                <div class="column1"><p className="linetitle">Quantity : AUTO</p>  </div>
                <div class="column1"><p className="linetitle">Batch : 2</p> </div>
                <div class="column1"><p className="linetitle">Customer : DDDDDDDDD</p> </div>
                <div class="column1"><p className="linetitle">Done :</p></div>
            </div>

            {/* <div className="inside_card_padding" >
                    <div className=" title">Job ID: </div>
                </div> */}
        </div>

    );
}

export default LineHeader;
