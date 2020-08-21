import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import { connect } from "react-redux";
import { loggingIn } from "./../../store/auth/authDispatchers";

function RegisterForm(props: any) {
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
          />
        </InputGroup>
      </Form.Group>

      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Your email" required />
      </Form.Group>

      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>

      <Form.Group controlId="formGroupPassword">
        <Form.Label>Confirm your password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>

      <Form.Group>
        <Button
          block
          disabled={props.loggingIn}
          variant="secondary"
          active
          type="submit"
          onClick={() => props.dispatchLogin()}
        >
          Register
        </Button>
      </Form.Group>
    </Form>
  );
}

const mapStateToProps = (state: any) => ({
  loggingIn: state.auth.loggingIn,
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchLogin: () => dispatch(loggingIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
