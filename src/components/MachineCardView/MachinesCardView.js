import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import "../../assets/css/ScrollView.css"
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
  const [dateState, setDateState] = useState(new Date());
  const [Lines, setLines] = useState([]);
  const [url, seturl] = useState('');


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
      {Lines?.map((Line, index) => {
        return (
          <Container fluid className="test">
            {Lines.product_lineid_ad}
            <LineHeader date={a} line={Line.product_lineid_ad} lineName={Line.line_name} />
          </Container>

        )
      })}
    </div>
  );
}

export default MachinesCardView;
