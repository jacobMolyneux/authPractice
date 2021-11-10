import "./App.css";
import { LogInPage } from "./components/loginPage";
import { SignUpPage } from "./components/signupPage";
import { Homepage } from "./components/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div>
      <Nav className="m-3">
        <Nav.Item>
          <a href="/" className="p-3">
            Home
          </a>
        </Nav.Item>
        <Nav.Item>
          <a href="/login" className="p-3">
            Log In
          </a>
        </Nav.Item>
        <Nav.Item>
          <a href="/signup" className="p-3">
            Sign Up
          </a>
        </Nav.Item>
      </Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
