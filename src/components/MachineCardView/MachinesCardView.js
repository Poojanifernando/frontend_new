import React, { useState, useEffect } from "react"
import axios from "axios";


import CardParameterbody from "components/MachineCardView/CardParameterbody.js";

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
    <Container fluid>
      <Row>
        {/**card row start */}
        {Machins?.map((Machins, index) => {
          return (

            <Col lg="3" sm="6">
              <Card className="card-stats">
                <Card.Header>
                  <div className="stats">
                    {/* <i className="fas fa-redo mr-1"></i> */}
                    Stapping Machine - {Machins?.machineID}
                  </div>
                  <hr></hr>
                </Card.Header>
                <CardParameterbody />
              </Card>
            </Col>
            // {/* <Col lg="3" sm="6">
            //     <Card className="card-stats">
            //       <Card.Body>
            //         <Row>
            //           <Col xs="5">
            //             <div className="icon-big text-center icon-warning">
            //               <i className="nc-icon nc-light-3 text-success"></i>
            //             </div>
            //           </Col>
            //           <Col xs="7">
            //             <div className="numbers">
            //               <p className="card-category">Revenue</p>
            //               <Card.Title as="h4">$ 1,345</Card.Title>
            //             </div>
            //           </Col>
            //         </Row>
            //       </Card.Body>
            //       <Card.Footer>
            //         <hr></hr>
            //         <div className="stats">
            //           <i className="far fa-calendar-alt mr-1"></i>
            //           Last day
            //         </div>
            //       </Card.Footer>
            //     </Card>
            //   </Col>
            //   <Col lg="3" sm="6">
            //     <Card className="card-stats">
            //       <Card.Body>
            //         <Row>
            //           <Col xs="5">
            //             <div className="icon-big text-center icon-warning">
            //               <i className="nc-icon nc-vector text-danger"></i>
            //             </div>
            //           </Col>
            //           <Col xs="7">
            //             <div className="numbers">
            //               <p className="card-category">Errors</p>
            //               <Card.Title as="h4">23</Card.Title>
            //             </div>
            //           </Col>
            //         </Row>
            //       </Card.Body>
            //       <Card.Footer>
            //         <hr></hr>
            //         <div className="stats">
            //           <i className="far fa-clock-o mr-1"></i>
            //           In the last hour
            //         </div>
            //       </Card.Footer>
            //     </Card>
            //   </Col>
            //   <Col lg="3" sm="6">
            //     <Card className="card-stats">
            //       <Card.Body>
            //         <Row>
            //           <Col xs="5">
            //             <div className="icon-big text-center icon-warning">
            //               <i className="nc-icon nc-favourite-28 text-primary"></i>
            //             </div>
            //           </Col>
            //           <Col xs="7">
            //             <div className="numbers">
            //               <p className="card-category">Followers</p>
            //               <Card.Title as="h4">+45K</Card.Title>
            //             </div>
            //           </Col>
            //         </Row>
            //       </Card.Body>
            //       <Card.Footer>
            //         <hr></hr>
            //         <div className="stats">
            //           <i className="fas fa-redo mr-1"></i>
            //           Update now
            //         </div>
            //       </Card.Footer>
            //     </Card>
            //   </Col> */}

          )
        })}
        {/**card row End */}
      </Row>
    </Container>
  );
}

export default MachinesCardView;
