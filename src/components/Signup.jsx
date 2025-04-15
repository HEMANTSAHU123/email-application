import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../Store/signupSlice";
import { Link } from "react-router-dom";
const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.auth);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    dispatch(signupUser(data));
   navigate('/login')
  };


  return (
    <>
   
      <MyNavbar />
      <Container fluid style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <Col md={8} lg={6}>
            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "10px",
              }}
            >
              <Row className="justify-content-center">
                <Col md={8}>
                  <h2 className="text-center mb-4">SignUp</h2>
                  {error && <p className="text-danger">{error}</p>}
                  <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 mt-3"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing Up..." : "sign Up"}
                    </Button>
                  </Form>
                  <p className="text-center mt-3">
                    have an account? <Link to="/login">login</Link>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "200px",
            height: "200px",
            backgroundColor: "lightblue",
            borderBottomLeftRadius: "200px",
          }}
        ></div>
      </Container>
    </>
  );
};

export default Signup;
