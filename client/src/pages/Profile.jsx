import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { Container, Form, Button } from 'react-bootstrap'
import { Box, Paper, TextField, Typography } from '@mui/material'
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
import { Card } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';

const Profile = ({user}) => {

  const [listOfPosts, setListOfPosts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/api/posts/user/${user.id}`).then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  console.log("listOfPosts: ", listOfPosts)

  let slicedImage = user.image?.slice(21)
  
  return (
    <>
        <Container>
          <Navbar user={user} />
          <h1>Profile</h1>
            <hr />
          <Box id="profileBox" sx={{width: '80%', height: '25rem', margin: 'auto', mt: '2rem', display:'flex', justifyContent:'center'}}>

          <Avatar alt="Remy Sharp" src={`../../img/${slicedImage}`} sx={{width: '12rem', height: '12rem', m: '3.5rem', ml: '3rem'}} />
          <Paper id="profileInfo" elevation={2} sx={{width: '50%', height: '20rem', display:'flex', justifyContent:'center', flexDirection:'column', mt: '2rem'}}>
            <Box  sx={{width: '100%', height:'3rem', display: 'flex', justifyContent: "start"}}>
              <Typography variant="h4" component="div" sx={{ ml: '2rem', fontWeight: '600'}}>
                {user.username}
              </Typography>
              <MButton variant="contained" sx={{ ml :'2rem'}}>Follow</MButton>
              <MButton variant="outlined" sx={{ ml :'1rem'}}>Message</MButton>
            </Box>

            <Typography variant="h6" component="div" sx={{m: '1rem', ml: '2rem', mt:'3rem'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis velit esse voluptates. Praesentium unde quaerat odio natus quasi quod veritatis, aspernatur ratione, animi cum vel quis, nihil repudiandae vitae.
            </Typography>
          </Paper> 

          </Box>

          <div>
        {listOfPosts.map(post => (
          <div key={post.id}>
            <h2>{post.postTitle}</h2>
            <p>{post.postContent}</p>
            <p>{post.username}</p>
          </div>
        ))}
      </div>

        </Container>
    </>

  );  
} 

export default Profile;  
