import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="/admin/dashboard" 
                // onClick={(e) => e.preventDefault()}
                >
                 
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                 
                </a>
              </li>
            </ul>
           
     
            <p className="copyright" style={{textAlign:"center"}}>
            <p>© {new Date().getFullYear()}{" "} All Rights Reserved. Solution by  <a href="http://www.siot.lk/">SIoT</a>Services (Pvt.) Ltd</p>
            </p>
        
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
