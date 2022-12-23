import React, { useState, useEffect } from "react"
import axios from "axios";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "../../assets/css/ScrollView.css"



import CardParameterbody from "components/MachineCardView/CardParameterbody.js";
import LineHeader from "components/LineHeadder/LineHeader.js";

// import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function MachinesCardView() {
  const [Machins, setMachines] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/MachineLineTest/getalltests').then((response) => {
      setMachines(response.data);
      // console.log(response.data)
    });

    // http://localhost:8081/api/v1/PDM/getalltestsdevices
  }, [])

  return (

    <Container fluid className="test">
      <LineHeader />
      <br />
      <Row>


        <div class="scrollmenu">
          {/* <a href="#work">Work</a> */}
          {Machins?.map((Machins, index) => {
            return (

              <Col lg="3" sm="6" className="aa">
                <Card className="card-stats">
                  <Card.Header>
                    {/* <div className="stats"> */}
                    {/* <i className="fas fa-redo mr-1"></i> */}
                  Extruder 

                    {/* {Machins?.machineID} */}

                    {/* </div> */}
                  </Card.Header>
                  <CardParameterbody />
                </Card>
              </Col>

            )
          })}




        </div>

        {/**card row start */}

        {/**card row End */}
      </Row>

    </Container>
  );
}

export default MachinesCardView;
