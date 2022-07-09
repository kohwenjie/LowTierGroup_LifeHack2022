import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap"
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import Switch from "@mui/material/Switch";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <MKBox pt={4} pb={3} px={3}>
            <MKBox component="form" role="form">
              <MKBox mb={2}>
                <MKInput type="email" label="Email" fullWidth />
              </MKBox>
              <MKBox mb={2}>
                <MKInput type="password" label="Password" fullWidth />
              </MKBox>
              <MKBox mt={4} mb={1}>
                <MKButton variant="gradient" color="info" fullWidth>
                  sign in
                </MKButton>
              </MKBox>
              <MKBox mt={3} mb={1} textAlign="center">
                <MKTypography variant="button" color="text">
                  Don&apos;t have an account?{" "}
                  <MKTypography
                    component={Link}
                    to="/authentication/sign-up/cover"
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    textGradient
                  >
                    Sign up
                  </MKTypography>
                </MKTypography>
              </MKBox>
            </MKBox>
          </MKBox>
          {/* <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form> */}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
