import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { Container, Form, Button } from 'react-bootstrap'
import { TextField } from '@mui/material'
import Navbar from '../Components/Navbar'
import MButton from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";

const Home = ({user}) => {

  console.log("DASFHJKLSAJFSALFJSADFJSFJAIDJ")
  console.log(user);

  const logout = () => {
    axios.get("http://localhost:3001/api/auth/logout", {withCredentials: true,})
  }

  return (
    <>
        <Container className='mt-5 p-2'>
        <Navbar></Navbar>
            <h1>Home</h1>
            <hr />
            <h1>ARG</h1>

            <MButton variant="primary" type="submit" >Login</MButton>
            <MButton variant="primary" type="submit" onClick={logout} >Logout</MButton>
            
            <h1>ladjflkdsajfl</h1>
        </Container>
    </>

  );  
} 

export default Home;  
