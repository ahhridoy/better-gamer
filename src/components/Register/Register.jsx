import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./_Register.scss";

const Register = () => {
  return (
    <main id="register">
      <Container>
        <div className="register-form">
          <div className="d-flex bg-white rounded">
            <img src="/assets/login.png" alt="" />
            <div className="input-text my-5">
              <h2 className="my-4 text-center">
                <strong>Sign Up to bettergamer</strong>
              </h2>

              <label>Email address</label>
              <InputGroup>
                <Form.Control
                  placeholder="Enter your email address"
                  className="py-3 w-100"
                />
              </InputGroup>

              <label className="mt-2">Username</label>
              <InputGroup>
                <Form.Control
                  placeholder="Enter your username"
                  className="py-3 w-100"
                />
              </InputGroup>

              <label className="mt-2">Password</label>
              <InputGroup>
                <Form.Control
                  placeholder="Enter your password"
                  className="py-3"
                />
              </InputGroup>

              <div className="mt-3">
                <input type="checkbox" className="me-2" />
                <label>
                  I agree to bettergamer’s{" "}
                  <a href="#" className="text-decoration-none">
                    Term of Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-decoration-none">
                    Privacy policy
                  </a>
                  , and am 13 years of age or older.
                </label>
              </div>

              <div className="text-center mt-4">
                <Button variant="outline-primary">Sign Up</Button>
              </div>

              <div className="mt-3 text-center">
                <span className="fs-5">
                  <i>Already have an account? </i>
                </span>
                <Link to="/login" className="text-decoration-none fs-5">
                  {" "}
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Register;
