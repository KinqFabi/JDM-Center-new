import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { Container, Form, Button } from 'react-bootstrap'
import { CircularProgress, Grid, TextField, Typography } from '@mui/material'
import { Box } from "@mui/system";
import AccountCircle from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import MButton from '@mui/material/Button';
import { styled, ThemeProvider } from '@mui/material/styles';
import theme from '../index.js'
import { FormControl, InputLabel, OutlinedInput, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import Link from "@mui/material/Link";

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
   
  };

  /********* Frontend for Register.jsx ***********/


  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const Background = styled('div')({
    margin: '0',
    padding: '0',
    paddingTop: '80px',
    background: 'linear-gradient(to right bottom, #e63946,#457b9d)',
    height: '100vh',
    width: '100vw',
  });

  return (
    <>      
          <Box
            sx={{
              margin: 0,
              padding: 0,
              paddingTop: '80px',
              background: 'linear-gradient(to right bottom, #e63946,#457b9d)',
              height: '100vh',
              width: '100vw',
            }}
          >
          <Box sx={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
            <Container id="img__container">
            <Box id="signIn__box"
              
              sx={{
                backgroundImage: "url(../../img/signInCar.jpg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '40vw',
                height: '80vh'
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                <Box
                            component="img"
                            sx={{
                            width: 'auto',
                            maxHeight: { xs: '5rem', md: '8rem' },
                            maxWidth: { xs: 350, md: 250 },
                            padding: { xs: '0', md: '1rem' },
                            }}
                            alt="The house from the offer."
                            src="../img/JdmLogo.png"
                        />
                </Grid>
                <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                  <Typography variant="h2" gutterBottom color="common.white"
                  sx={{marginTop: '8vh', letterSpacing: '5px'}}
                  >
                    Welcome!
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            </Container>

            <Container id="signIn__container">
              <Box id="signIn__box"
                sx={{
                  background: 'white',
                  width: '30vw',
                  height: '80vh'
                }}
              >
              <Grid container spacing={0}
                  sx={{display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}>
                    <Box
                    className="vertical-center"
                    sx={{display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '10vh',
                  }}
                    >

                    
                    <Grid item xs={12}>
                      <Typography variant="h4" sx={{marginBottom: '20px', textAlign: 'center'}}>Replace with Logo</Typography> 
                    </Grid> 
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        value={firstName}
                        sx={{ 
                              width: '25vw',}}
                        margin="dense"
                          label="First Name"
                          InputProps={{
                          }}
                    />  
                    </Grid>  
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        value={lastName}
                        sx={{ width: '25vw',}}
                        margin="dense"
                          label="Last Name"
                          InputProps={{
                          }}
                    />  
                    </Grid> 
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                        sx={{ width: '25vw',}}
                        margin="dense"
                          label="E-Mail Address"
                          InputProps={{
                          }}
                    />  
                    </Grid> 
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        value={username}
                        sx={{ width: '25vw',}}
                        margin="dense"
                          label="Username"
                          InputProps={{
                          }}
                    />  
                    </Grid>  
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        value={password}
                        sx={{ width: '25vw',}}
                        margin="dense"
                          label="Password"
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
                    </Grid>  
                  <Grid item xs={12}>
                      <MButton variant="contained" sx={{width: '25vw', marginBottom: '20px', marginTop: '20px'}} onClick={register}>Register</MButton>
                  </Grid>
                  <Grid item xs={12}>
                      <Typography variant="subtitle1"  sx={{textAlign: 'center'}}>Already have an account?<Link to="/login" sx={{marginLeft: '5px', cursor: 'pointer'}}>Log in</Link></Typography>
                  </Grid>
                  </Box>
                </Grid>                  
              </Box>
            </Container>
          </Box>
        </Box>                  
    </>

  );  
} 

export default Register;  
