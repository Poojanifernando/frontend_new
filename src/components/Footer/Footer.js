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
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Company
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Blog
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="http://www.creative-tim.com">Lalan Group</a>
              {/* , made withlove for a better web */}
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
