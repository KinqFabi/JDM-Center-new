import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { Container, Form, Button } from 'react-bootstrap'
import { TextField } from '@mui/material'
import Navbar from '../Components/Navbar'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/api/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
        //<Alert severity="error">{response.data.error}</Alert>
      } else {
     /*   localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });*/
        axios.get("http://localhost:3001/api/cookies/setCookie/RAAA");
       // navigate("/addPost");
        console.log("TEST SUCCESSFUL")
      }
    });


  };
  return (
    <>
        <Container className='mt-5 p-2'>
            <Navbar></Navbar>
            <h1>Login</h1>
            <hr />
            <TextField margin="normal" fullWidth variant="standard" label="Username"
            type="text" className="password-field" onChange={(e) => {
            setUsername(e.target.value);
            }}></TextField>

            <TextField margin="normal" fullWidth variant="standard" label="password"
            type="text" className="password-field" onChange={(e) => {
            setPassword(e.target.value);
            }}></TextField>

            <Button onClick={login} variant="primary" type="submit" >Login</Button>
        </Container>
    </>

  );  
} 

export default Login;  
