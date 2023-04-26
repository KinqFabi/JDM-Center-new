import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import MailIcon from '@mui/icons-material/Mail';
import { autocompleteClasses } from '@mui/material';


const Navbar = ({user}) => {


let navigate = useNavigate()

    //TODO: Move this code into seperate Profile.jsx file


    const logout = () => {
        axios.get("http://localhost:3001/api/auth/logout", {withCredentials: true,})
      }
    
    

/******* Frontend for Navbar.jsx *********/

const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};


const navigateToHome = () => {
    navigate('/')
}
const navigateToCreatePost = () => {
    navigate('/addPost')
}
const navigateToDiscover = () => {
    navigate('/posts')
}
const navigateToProfile = () => {
    navigate('/profile')
}
const navigateToSettings = () => {
    navigate('/settings')
}


const pages = ["Home", "Create Post", "Discover"]
const pageFunctions = {
    "Home": navigateToHome,  
    "Create Post": navigateToCreatePost,
    "Discover": navigateToDiscover,
  };
const settings = ["Profile", "Settings", "Logout"]
const settingFunctions = {
    "Profile": navigateToProfile,
    "Settings": navigateToSettings,
    "Logout": logout,
    };

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '15vw',
      },
    },
  }));

  // slices the image in the database to just get the image name.
  let slicedImage = user.image?.slice(21)


    return (
        <>
            <AppBar position="static" sx={{backgroundColor: '#2b2b2b', width: '100%'}}>
                <Container sx={{m: 0, p: 0, width: {xs: '100%', md: '100%', lg: '100%', xl: '100%'},
                maxWidth: {xs: '100%', md: '100%', lg: '100%', xl: '100%'}}}>
                    <Toolbar disableGutters sx={{width: '100%'}}>
                        <Box
                            component="img"
                            sx={{
                            width: 'auto',
                            maxHeight: { xs: '5rem', md: '8rem' },
                            maxWidth: { xs: 350, md: 250 },
                            padding: { xs: '0', md: '1rem' },
                            cursor: 'pointer',


                            }}
                            href="/"
                            alt="The house from the offer."
                            src="../img/JdmLogo-white.png"
                        />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center" >{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> 
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={() => { handleCloseNavMenu(); pageFunctions[page](); }}
                            sx={{ my: 2, color: 'common.white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>
                    
                    <Box sx={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                        <Search sx={{alignSelf: "center" }}>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex', marginRight: '1rem' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                            </IconButton>
                            <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={`../../../img/${slicedImage}`} /> 
                        </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={() => { handleCloseNavMenu(); settingFunctions[setting](); }}>
                            <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    </Toolbar>
                </Container>
                </AppBar>        
        </>
    )   
}

export default Navbar
