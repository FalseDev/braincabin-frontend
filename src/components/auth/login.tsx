import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import { tryLoggingIn } from "./../../store/auth/authDispatchers";
import { connect } from "react-redux";

function LoginForm(props: any) {
  return (
    <Form className="ml-2 mr-2">
      <Form.Group controlId="validationCustomUsername">
        <Form.Label>Username</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
            id="username"
          />
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          id="password"
          required
        />
      </Form.Group>
      <Form.Group>
        <Button
          block
          variant="secondary"
          active
          disabled={props.loggingIn}
          // onClick={() => {
          //              const username = document.getElementById("username")!.value;
          //   const passwordField = document.getElementById<HTMLInputElement>(
          //     "password"
          //   );
          //   const password = passwordField.value;
          //   props.dispatchLogin({ username, password });
          // }}
          type="submit"
        >
          Login
        </Button>
      </Form.Group>
    </Form>
  );
}

const mapStateToProps = (state: any) => ({
  loggingIn: state.auth.loggingIn,
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchLogin: (credentials: any) => dispatch(tryLoggingIn(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
