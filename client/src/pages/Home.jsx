import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { Container, Form, Button } from 'react-bootstrap'
import { TextField } from '@mui/material'
import Navbar from '../Components/Navbar'
import MButton from '@mui/material/Button';

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authState } = useContext(AuthContext);
    const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/auth/auth").then((response) => {
        if (!response.ok) {
            navigate("/login");
        } else {
        }
    });

}, []);

  return (
    <>
        <Container className='mt-5 p-2'>
            <Navbar></Navbar>
            <h1>Home</h1>
            <hr />
            <h1>ARG</h1>

            <MButton variant="primary" type="submit" >Login</MButton>
            <MButton variant="primary" type="submit" >Logout</MButton>
        </Container>
    </>

  );  
} 

export default Home;  
