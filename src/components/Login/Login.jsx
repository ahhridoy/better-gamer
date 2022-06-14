import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./_Login.scss";

const Login = () => {
  return (
    <main id="login">
      <Container>
        <div className="login-form">
          <div className="d-flex bg-white rounded">
            <img src="/assets/login.png" alt="" />
            <div className="input-text my-5">
              <h2 className="my-4 text-center">
                <strong>Login to bettergamer</strong>
              </h2>
              <label>Email address</label>
              <InputGroup>
                <Form.Control
                  placeholder="Enter your email address"
                  className="py-3"
                />
              </InputGroup>
              <label className="mt-3">Password</label>
              <InputGroup>
                <Form.Control
                  placeholder="Enter your password"
                  className="py-3"
                />
              </InputGroup>
              <div className="text-center mt-4">
                <Button variant="outline-primary">Login</Button>
              </div>
              <div className="mt-3 text-center">
                <span className="fs-5">
                  <i>New to BetterGamer? </i>
                </span>
                <Link to="/register" className="text-decoration-none fs-5">
                  {" "}
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Login;
