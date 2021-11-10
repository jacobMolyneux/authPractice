import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";

const LogInPage = () => {
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword((password = event.target.value));
  };
  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername((username = event.target.value));
  };
  const handleSubmission = async () => {
    const response = await axios.post("http://localhost:8000/auth/login", {
      username: username,
      password: password,
    });
    console.log(response);
    console.log(`Form Submitted`);
    console.log(`the password is: ${password}`);
    console.log(`the username is: ${username}`);
  };

  return (
    <Container className="border shadow">
      <Form className="m-3">
        <h1 className="border-bottom">Log In</h1>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={handleUsernameChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          ></Form.Control>
        </Form.Group>
        <Button className="mt-3" onClick={handleSubmission}>
          Log In
        </Button>
      </Form>
    </Container>
  );
};

export { LogInPage };
