import React from "react"
import Container from "react-bootstrap/Container"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import LoginForm from "./auth/login"
import RegisterForm from "./auth/register"

function AuthPage(){
  return (
    <Container className="mt-5">
      <Tabs defaultActiveKey="login">
        <Tab eventKey="login" title="Login">
          <LoginForm />
        </Tab>
        <Tab eventKey="register" title="Register">
          <RegisterForm />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default AuthPage
