
import React, { useState, useEffect, Component } from "react"
import { Link, useHistory } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { getLocalhostUrl } from 'components/url/Url.js'
import axios from "axios";
import { useFormik } from 'formik';
import useAuth from "isAuth/useAuth";
import image from 'assets/img/login.png';
import logo_t from "assets/img/logo_t.png";
import "../../assets/css/loginpage.css";


function Login(props) {
  // localStorage.setItem("isAuth", false)
  const [url, seturl] = useState('');
  const [isAuth, loginAuth, logoutAuth] = useAuth(false)
  const [user, setuser] = useState([]);

  useEffect(() => {
    const myurl = getLocalhostUrl();
    seturl(myurl)
  });

  let navigate = useHistory();


  const handleClickLogin = async (username, password) => {


    console.log("alert", username);
    console.log("pass", password);
    // // setIsRunning(false);
    try {
      axios.get(url + '/api/v1/admin/checkuser/' + username + '/' + password).then((response) => {
        // setuser(response.data.USERLOG);
        console.log(response.data.USERLOG);
        console.log("response.data.USERLOG",response.data);

        if (response.data.USERLOG == 'Valid') {
         
          console.log("dashboard")
          // navigate.push('/admin/dashboard');
          localStorage.setItem("userId", response.data.USERID)
          localStorage.setItem("isAuth", true)
          navigate.push('/admin/dashboard')
          window.location.reload(false);
        }

      });

    } catch (error) {
      console.error(error);
    }

  }


  // useEffect(() => {
  //   const myurl = getLocalhostUrl();
  //   seturl(myurl)

  //   axios.get(myurl + '/api/v1/admin/checkuser' + login.values.userEmail + '/' + login.values.userPassword).then((response) => {
  //     setuser_name(response);

  //   });
  // }, [])



  const login = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },

    onSubmit: values => {
      console.log(JSON.stringify(login.values))
      //auth
      loginAuth()

      //   if (login.values.userEmail == user_name && login.values.userPassword == user_password) {
      //     console.log(response);
      //     localStorage.setItem("isAuth", true)
      //     localStorage.setuser_name(true)

      //     alert("valid");
      //     // localStorage.setItem("userId", login.values.userEmail)
      //     localStorage.setItem("userId", "UID_005")
      //     navigate.push('/admin/dashboard')
      //     window.location.reload(false);
      //   }
      //   // else {
      //   //   alert(response.data);
      //   //   window.location.reload(false);
      //   // }




    }
  })



  useEffect(() => {
    localStorage.setItem("isAuth", false)
  }, [])


  return (

    <div style={{ backgroundImage: `url(${image})` }}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className=""></div>
            <Card className="formbackground">
              {/* <Card.Body> */}
              {/* <div className="cardbody"> */}

              <h2 className="testlalan">LALAN</h2>
              <h5 className="testyear">Since 1940</h5>
              <img src={logo_t} alt="logoImg" height={80} width={80} className="logoimg" />
              {/* <p className=" mb-5">Please enter your login and password!</p> */}
              <div className="mb-3">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control
                      className="emailtext"
                      type="email"
                      placeholder="Email Address"
                      name="userEmail"
                      onChange={login.handleChange}
                      value={login.values.userEmail} />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                  >

                    <Form.Control
                      type="password"
                      className="emailtext"
                      placeholder="Password"
                      name="userPassword"
                      onChange={login.handleChange}
                      value={login.values.userPassword} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  >
                    <Button

                      type="submit"
                      onClick={() => handleClickLogin(login.values.userEmail, login.values.userPassword)}
                      className="loginButton"
                    > Login


                    </Button>

                    <p className="forgotpassword">
                      <a className="text-primary" href="#!">
                        Forgot password?
                      </a>
                    </p>
                  </Form.Group>
                  <div className="col-md-12 text-center">

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
              {/* </div> */}
              {/* </Card.Body> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Login;
