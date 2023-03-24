import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { Container, Form, Button } from 'react-bootstrap'
import { TextField } from '@mui/material'
import Navbar from '../Components/Navbar'
import MButton from '@mui/material/Button';
import { styled, ThemeProvider } from '@mui/material/styles';
import theme from '../index.js'

import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();

  const login = () => {

    const input = { username: username, password: password };
    axios.post("http://localhost:3001/api/auth/login/", input, {withCredentials: true,}).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        console.log(response.data);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });

      }
    });
  };

  const logout = () => {
    axios.get("http://localhost:3001/api/auth/logout", {withCredentials: true,})
  }

  /************* Frontend for Login.jsx ***************/

function InputAdornments() {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  const Background = styled('div')({
    margin: '0',
    padding: '0',
    paddingTop: '80px',
    background: 'linear-gradient(to right bottom, #e63946,#457b9d)',
    height: '100vh',
    width: '100vw',
  });

  const LoginContainer = styled('div')({
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
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Background>
          <LoginContainer>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDonwPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          </LoginContainer>
        </Background>
      </ThemeProvider>
    </>

  );  
} 

export default Login;  
