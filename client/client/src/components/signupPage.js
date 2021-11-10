import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword((password = e.target.value));
  };
  const handleUsernameChange = (e) => {
    e.preventDefault();
    setUsername((username = e.target.value));
  };
  const LogIn = async () => {
    const response = await axios.post("http://localhost:8000/auth/signUp", {
      username: username,
      password: password,
    });
    console.log(response);
    console.log(response);
    console.log(`Log In Succesful!`);
    console.log(`the username is: ${username}`);
    console.log(`the password is: ${password}`);
  };

  return (
    <Container>
      <Form className="border p-3 shadow">
        <h1 className="border-bottom">Sign Up</h1>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={handleUsernameChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          ></Form.Control>
        </Form.Group>
        <Button onClick={LogIn} className="m-3">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export { SignUpPage };
