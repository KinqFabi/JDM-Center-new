import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { Container, Form, Button } from 'react-bootstrap'
import { Grid, TextField } from '@mui/material'
import { Box } from "@mui/system";
import AccountCircle from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import MUIButton from '@mui/material/Button';

import styled from 'styled-components'

const Register = () => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();

  const register = () => {
    const data = { username: username, firstName: firstName, lastName: lastName, email: email, password: password };
    axios.post("http://localhost:3001/api/users/createUser", data).then((response) => {
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
        navigate("/Posts");
        console.log("TEST SUCCESSFUL")
      }
    });


    const Centered = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      `;
   
  };
  return (
    <>
    
      <Box className='mt-5 p-2'
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginLeft={'auto'}
            
      >
         <Grid container spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            width={'30vw'}
            height={1}
            border={1}
            >
            <Grid item xs={12} sm={6}>
            <TextField
               
               id="input-with-icon-textfield"
               label="First Name"
               onChange={(e) => {
               setFirstName(e.target.value);
               }}
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                     <BadgeIcon />
                     </InputAdornment>
                  ),
               }}
               variant="outlined"
            />
            </Grid>
            <Grid item sm={6} xs={12}>
            <TextField
               id="input-with-icon-textfield"
               label="Last Name"
               onChange={(e) => {
               setLastName(e.target.value);
               }}
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                     <BadgeIcon />
                     </InputAdornment>
                  ),
               }}
               variant="outlined"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
               
               id="input-with-icon-textfield"
               label="Username"
               onChange={(e) => {
               setUsername(e.target.value);
               }}
               fullWidth
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                     <AccountCircle />
                     </InputAdornment>
                  ),
               }}
               variant="outlined"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
               
               id="input-with-icon-textfield"
               label="E-Mail"
               onChange={(e) => {
               setEmail(e.target.value);
               }}
               fullWidth
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                     <EmailIcon />
                     </InputAdornment>
                  ),
               }}
               variant="outlined"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
               
               id="input-with-icon-textfield"
               label="Password"
               onChange={(e) => {
               setPassword(e.target.value);
               }}
               fullWidth
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                     <HttpsIcon   />
                     </InputAdornment>
                  ),
               }}
               variant="outlined"
            />
            </Grid>
            <Grid item xs={12}>
               <MUIButton variant="contained" color="primary" onClick={register} fullWidth>
                  Register
               </MUIButton>
            </Grid>
         </Grid>
      </Box>
      
    </>

  );  
} 

export default Register;  
