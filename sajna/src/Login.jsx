import React from "react";
import styled from "styled-components";
import login from "./assets/login.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  background: linear-gradient(135deg, #6e8efb, #a777e3);
`;

const LoginBox = styled.div`
  width: 350px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
 
`;

const Logo = styled.img`
  width: 80px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #6e8efb;
    box-shadow: 0 0 5px rgba(110, 142, 251, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin: 20px 0;
  background-color: #6e8efb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a79e0;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "username" && password === "password") {
      navigate("/listview", { replace: true });
    } else {
      setShowModal(true);
      console.log("invalid message");
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setUsername("");
    setPassword("");
  };

  return (
    <Container>
      <LoginBox>
        <Logo src={login} alt="Logo" />
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />

          <Button type="submit">Login</Button>
        </form>
      </LoginBox>
      {showModal && <Modal  onClose={handleCloseModal} />}
    </Container>
  );
};

export default Login;
