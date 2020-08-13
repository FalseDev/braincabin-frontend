import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import React from "react"

function RegisterForm(){
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
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>

      <Form.Group controlId="formGroupPassword">
        <Form.Label>Confirm your password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
 
      <Form.Group>
        <Button block variant="secondary" active type="submit">Register</Button>
      </Form.Group>
    </Form> 
  )
}

export default RegisterForm
