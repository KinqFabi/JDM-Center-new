import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { Container, Form, Button } from 'react-bootstrap'
import { Grid, Link, TextField } from '@mui/material'
import Navbar from '../Components/Navbar'
import MButton from '@mui/material/Button';
import { styled, ThemeProvider } from '@mui/material/styles';
import theme from '../index.js'

import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from '@mui/material/Box';



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();

  const login = () => {

    const input = { username: username, password: password };
    axios.post("http://localhost:3001/api/auth/login/", input, {withCredentials: true,}).then((response) => {
      if (response.data.error) {
        navigate("/");
      } else {

        navigate("/");
      }
    });
  };

  const logout = () => {
    axios.get("http://localhost:3001/api/auth/logout", {withCredentials: true,})
  }

  /************* Frontend for Login.jsx ***************/

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };



  return (
    <>
        <Box
        id="background"
        sx={{margin: 0,
            padding: 0,
            paddingTop: '80px',
            background: 'linear-gradient(to right bottom, #e63946,#457b9d)',
            height: '100vh',
            width: '100vw'}}>
            
            <Box
            id="container"
            sx={{
              background: 'white',
              height: '80vh',
              width: '30vw',
              margin: 'auto',
              marginBottom: '0',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >


      
            <Grid2 container spacing={0}
             sx={{display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  }}>
              <Grid2 item xs={12}>
                <Typography variant="h4" sx={{marginBottom: '20px', textAlign: 'center'}}>Replace with Logo</Typography> 
              </Grid2>  
              <Grid2 item xs={12}>
                <TextField
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                  sx={{ width: '25vw',
                        marginBottom: '20px' }}
                  margin="normal"
                    label="Username"
                    InputProps={{
                    }}
              />  
              </Grid2>  
              <Grid2 item xs={12}>
                <TextField

                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                sx={{ width: '25vw' }}
                type={showPassword ? 'text' :'password'}
                label="Password"
                defaultValue="initial value"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton   
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid2>
            <Grid2 item xs={12}>
                <Link><Typography variant="subtitle1"  sx={{marginBottom: '20px',marginTop: '5px', textAlign: 'end', cursor: 'pointer'}}>Forgotten password?</Typography></Link> 
            </Grid2> 
            <Grid2 item xs={12}>
                <MButton variant="contained" sx={{width: '25vw', marginBottom: '20px'}} onClick={login}>Login</MButton>
            </Grid2>
            <Grid2 item xs={12}>
                <Typography variant="subtitle1"  sx={{textAlign: 'center'}}>Don't have an account?<Link to="/register" sx={{marginLeft: '5px', cursor: 'pointer'}}>Sign up</Link></Typography>
            </Grid2>
          </Grid2>  
          </Box>
          </Box>
    </>

  );  
} 

export default Login;  
