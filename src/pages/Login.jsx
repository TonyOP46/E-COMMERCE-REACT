import axios from "axios";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const submit = (data) => {
    console.log(data);
    axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/users/login",
        data
      )
      .then((res) => {
        alert("Welcome user"),
          localStorage.setItem("token", res.data.data.token);
        console.log(res.data);
        navigate("/purchases");
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          alert("Invalid Credentials");
        }
        console.log(error.response);
      });
  };
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }} className="login">
      <Container>
        <h3>Welcome enter your email and password to continue</h3>
        <br />
        <div className="help">
          <h5>Test data</h5>
          <p>
            <i class="fa-solid fa-envelope"></i> prueba@gmail.com
          </p>
          <p>
            <i class="fa-solid fa-lock"></i> prueba1234
          </p>
        </div>
        <Form onSubmit={handleSubmit(submit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              {...register("email")}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              {...register("password")}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
