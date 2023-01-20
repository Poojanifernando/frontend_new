import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import "../../assets/css/ScrollView.css"
import LineHeader from "components/LineHeadder/LineHeader.js";
// import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Button,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function MachinesCardView() {
  const [dateState, setDateState] = useState(new Date());
  const [Lines, setLines] = useState([]);
  const [url, seturl] = useState('');
  const [lineDetails, setLineDetails] = useState([]);


  useEffect(() => {
    const myurl = getLocalhostUrl();
    seturl(myurl)

    //call date 
    setInterval(() => setDateState(new Date()), 30000);
    console.log("new")

    axios.get(myurl + '/api/v1/admin/getLineByDate/' + a).then((response) => {
      setLines(response.data);
      console.log(response.data)
    });
    axios.get(myurl + '/api/v1/line/getAllLineAndId').then((response) => {
      setLineDetails(response.data);
    });

  }, [])


  //get date
  let a = dateState.toLocaleDateString('en-CA', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })

  console.log(JSON.stringify(Lines))

  console.log("date " + a)
  return (
    <div>

<Form className="center-form">
  <Row>
    <Col className="pr-1" md="3">
      <Form.Group>
        <Form.Select size="lg" className="form-control min-width" name="product_lineid_ad"
        //  value={processDetails.values.product_lineid_ad} onChange={processDetails.handleChange}
         >
          <option value="">Select</option>
          {lineDetails.map(item => {
            return (<option key={item.lineId} value={item.lineId}>{item.lineName}</option>);
          })}
        </Form.Select>
      </Form.Group>
    </Col>
    <Col className="pr-5" md="6">
    <Button
      className="btn-fill center justify-content-center"
      type="submit"
      variant="primary"
    // onClick={batchDetails.handleSubmit}
    >
      submit
    </Button>
    </Col>
  </Row>
</Form>

<br/>
      {Lines.length !== 0 ?
        Lines.map((Line, index) => {
          return (
            <Container fluid className="test">
              <LineHeader date={a} line={Line.product_lineid_ad} lineName={Line.line_name} />
            </Container>
          )
        }) :<div className="d-flex justify-content-center align-items-center centerContent">
        <p className="no-data-msg" style={{color:"#5E5E5E"}}>Please select the line to show data</p>
      </div>
      }
    </div>
  );
}

export default MachinesCardView;
