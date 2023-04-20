import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { Container, Form, Button } from 'react-bootstrap'
import { Box, TextField } from '@mui/material'
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
import { Card } from 'react-bootstrap'


const Home = ({user}) => {



  let navigate = useNavigate();



  console.log(user)

  // check if logged in
  /*
  useEffect(() => {
    if(user.status === false){
      console.log("user is null")
      navigate( "/login" );
    }

  }, [user])*/

  const logout = () => {
    axios.get("http://localhost:3001/api/auth/logout", {withCredentials: true,})
  }

  const navToLogin = () => {
    navigate( "/login" );
  }

  return (
    <>
        <Container className='mt-5 p-2'>
        <Navbar></Navbar>
            <h1>Home</h1>
            <hr />
            <h1>ARG</h1>

            <MButton variant="primary" type="submit" onClick={navToLogin} >Login</MButton>
            <MButton variant="primary" type="submit" onClick={logout} >Logout</MButton>
              <Card>
                <Card.Img variant="top" src={user.userPicture} />
              </Card>
            
            <h1>ladjflkdsajfl</h1>
            <h1>{user.username}</h1>

        </Container>
    </>

  );  
} 

export default Home;  
