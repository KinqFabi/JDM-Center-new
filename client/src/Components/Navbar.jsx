import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';


import styled from 'styled-components'
import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';


const Navbar = () => {

   /* const Nav = styled.nav`
        width: 100%;
        height: 5rem;
        background-color: ${COL};
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        border: 1px solid ${COLORS.orange};
    `;
    const Logo = styled.h1`
        background-size: cover;
        color: ${COLORS.black};
        width: 15rem;
        height: 5rem;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    `;

    const Search = styled.div`
        margin-top: 1rem;
        height: 2rem;
        width: 80%;
        margin-left: 2rem;
  
    `;

    const LeftIcons = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 20rem;
        wrap: wrap;
        margin-Right: 2rem;
    `;  
*/

    //TODO: Move this code into seperate Profile.jsx file

    const [user, setUser] = useState([])

  /*  useEffect(() => {
        const getUser = async () => {
            const {data} = await axios.get(`https://localhost:3001/api/users/${user.id}`)
            console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA')
            console.log(data)
            setUser(data)
        }
        getUser()
    }, [])
    
    
                <Nav>
                <Logo>JDM Center</Logo>
                <Search>
                  <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                       // sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search...' }}
                    />
                </Paper>
                </Search>
                <LeftIcons>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit"
                    sx={{alignItems: 'flex-end',
                    //marginRight: '5rem',
                    }}>
                        <HomeIcon sx={{
                            fontSize: '2rem'
                        }} />
                    </IconButton>

                    <IconButton size="large" aria-label="show 4 new mails" color="inherit"
                    sx={{alignItems: 'flex-end',
                  //  marginRight: '5rem',
                    }}>
                        <QuestionAnswerIcon sx={{
                            fontSize: '2rem'
                        }} />

                    </IconButton>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit"
                    sx={{alignItems: 'flex-end',
                  //  marginRight: '5rem',
                    }}>
                     <Avatar alt="Remy Sharp" /*src={user.userPicture}
                     sx={{
                        fontSize: '2rem'
                     }} />
                    </IconButton>
                </LeftIcons>

            </Nav> */

    return (
        <>

        </>
    )   
}

export default Navbar
