
import React, { useState, useEffect, Component } from "react"
import { useHistory } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import useAuth from "isAuth/useAuth";
import image from 'assets/img/login.png';


function Login() {

  const [isAuth, loginAuth, logoutAuth] = useAuth(false)

  let navigate = useHistory();

  const login = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(login.values))
      //auth
      loginAuth()

      if (login.values.userEmail == "admin" && login.values.userPassword == "admin") {
        localStorage.setItem("isAuth", true)
        // localStorage.setItem("userId", login.values.userEmail)
        localStorage.setItem("userId", "UID_005")
        navigate.push('/admin/dashboard')
        window.location.reload(false);
      }
      else{
        alert("enter valid email or password !");
        window.location.reload(false);
      }



    }
  })


  useEffect(() => {
    // localStorage.setItem("isAuth", false)

    
  }, [])


  return (

    <div style={{backgroundImage: `url(${image})`}}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase col-md-12 text-center">Sign-In</h2>
                  {/* <p className=" mb-5">Please enter your login and password!</p> */}
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="userEmail"
                          onChange={login.handleChange}
                          value={login.values.userEmail} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="userPassword"
                          onChange={login.handleChange}
                          value={login.values.userPassword} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="col-md-12 text-center">
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={login.handleSubmit}
                          style={{width:"200px"}}
                          >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      {/* <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link className="text-primary fw-bold "
                        //  to={`/signup`}
                        >
                          Sign Up
                        </Link>
                      </p> */}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Login;
