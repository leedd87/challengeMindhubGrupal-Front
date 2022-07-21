import * as React from 'react';
import { useState } from "react";
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
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo.png';

import Drawer from 'react-modern-drawer'
import DeleteIcon from '@mui/icons-material/Delete';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import 'react-modern-drawer/dist/index.css'
import '../../src/styles/style.css'



import { Link as LinkRouter } from 'react-router-dom';


// const StyledBadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//         right: -3,
//         top: 13,
//         padding: '0 4px',
//     },
// }));



const pages = [
    { to: '/', name: 'Home' },
    { to: '/shop', name: 'Shop' }
];

// console.log("🚀 ~ file: Navbar.jsx ~ line 21 ~ pages", pages)

const settings = [
    { to: '/account', name: 'Account ' },
    // { to: '/signup', name: 'SignUp' }
];


const Nabvar = () => {
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

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#949494" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <LinkRouter
                            to='/'
                        >
                            <img src={logo} alt="logo" style={{ "height": "5rem" }} />
                        </LinkRouter>

                    </Typography>

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
                                display: { xs: 'block', md: 'none', },
                            }}
                        >
                            {pages.map((page, index) => (
                                <LinkRouter to={page.to} key={index} onClick={handleCloseNavMenu} className="linkR">
                                    <MenuItem>
                                        <Button textalign="center">{page.name}</Button>
                                    </MenuItem>
                                </LinkRouter>
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
                        <img src={logo} alt="logo" style={{ "height": "5rem" }} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((op, index) => (
                            <LinkRouter to={op.to} key={index} onClick={handleCloseNavMenu} className="linkR">
                                <MenuItem  >
                                    <Typography textalign="center" sx={{ color: "whitesmoke", fontWeight: "bold", fontSize: 20, textShadow: " 0 1px 0 rgb(255 255 255), 0 -1px 2px rgb(0 0 0 / 30%), 0 -2px 2px rgb(0 0 0 / 20%), 0 0 3px rgb(0 0 0 / 10%)" }}>{op.name}</Typography>
                                </MenuItem>
                            </LinkRouter>
                        ))}
                    </Box>
                    <MenuItem>

                        <Box>
                            <button onClick={toggleDrawer}>
                                <LocalMallIcon sx={{ cursor: 'pointer', margin: '10px' }} />
                            </button>
                            <Drawer
                                open={isOpen}
                                onClose={toggleDrawer}
                                direction='right'
                                className='drawer-ctn'
                            >
                                <div>
                                    <div className='h2-ctn'>
                                        <h2 className='title-cart'>SHOPPING CART</h2>
                                    </div>
                                    <div className="article-ctn">
                                        <div className="products">
                                            <img className="imgShops" src="https://media.revistagq.com/photos/5f2832773c95260b5c5ae0fc/4:3/w_1496,h_1122,c_limit/Captura%20de%20pantalla%202020-08-03%20a%20las%2017.50.14.png" alt="imgShoes" />
                                            <div>
                                                <h3 style={{ color: 'black' }}>Nike Jordan</h3>
                                                <p style={{ color: 'black' }}>$ 0 USD</p>
                                            </div>
                                        </div>
                                        <div>
                                            <DeleteIcon sx={{ cursor: 'pointer', marginRight: '5px', color: 'black' }} />
                                        </div>
                                    </div>
                                    <div className='total-ctn'>
                                        <div className='price-ctn'>
                                            <p>Total $ 0 USD</p>
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <button className='paypal-btn'><span style={{ color: '#003586' }}>Pay</span><span style={{ color: '#009ddd' }}>Pal</span></button>
                                            {/* <Paypal/> */}
                                            <button className='mp-btn'>Mercado Pago</button>
                                        </div>
                                    </div>
                                </div>
                            </Drawer>
                        </Box>

                    </MenuItem>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                            {settings.map((setting, index) => (
                                <LinkRouter to={setting.to} key={index} onClick={handleCloseUserMenu} className="linkR">
                                    <MenuItem >
                                        <Typography textalign="center">{setting.name}</Typography>
                                    </MenuItem>
                                </LinkRouter>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Nabvar;
