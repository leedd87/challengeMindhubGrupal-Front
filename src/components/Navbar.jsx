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
import logo from '../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';

import Drawer from 'react-modern-drawer'
import CancelIcon from '@mui/icons-material/Cancel';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import 'react-modern-drawer/dist/index.css'
import '../styles/style.css'


import PersonIcon from '@mui/icons-material/Person';
import { Link as LinkRouter } from 'react-router-dom';
import userActions from '../redux/actions/userActions';

import shopActions from '../redux/actions/shopActions';
import PayPal from './PayPal';
import GooglePay from './GooglePay';




const pages = [
    { to: '/', name: 'Home' },
    { to: '/shop', name: 'Shop' },
    { to: '/about', name: 'About' }
];


const settings = [
    { to: '/account', name: 'Account ' },
    // { to: '/signup', name: 'SignUp' }
];


const NavBar = () => {
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(userActions.logOut(user.email))
        // console.log(user.email);
    }


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
    const user = useSelector(store => store.userReducer.user)


    // CODIGO
    // const dispatch = useDispatch();

    const carrito = useSelector(store => store.shopReducer.productsInShop); // GUARDO MI CARRITO

    const priceTotal = carrito.reduce((total, producto) => total + producto.price, 0) // CALCULA EL PRECIO TOTAL DEL CARRITO

    const removeToShop = (producto) => {
        dispatch(shopActions.deleteToShop(producto))
        console.log('eliminaste un producto')
    } // ELIMINO PRODUCTOS DEL CARRITO

    // localStorage.setItem('carrito', JSON.stringify(carrito)) // GUARDAR MI CARRITO EN EL LOCAL STORAGE

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#949494" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* LOGO */}
                    <Typography
                        variant="h6"
                        noWrap
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
                                        <Button textalign="center" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>{page.name}</Button>
                                    </MenuItem>
                                </LinkRouter>
                            ))}
                        </Menu>

                    </Box>

                    <Box>
                        {/* BOTON CARRITO */}
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='right'
                            className='drawer-ctn'
                        >
                            <div>

                                <div className='h2-ctn'>
                                    <AddShoppingCartIcon sx={{ color: 'black' }} />
                                    <h1 className='title-cart-shop'>SHOPPING CART</h1>
                                </div>


                                <div className="article-ctn">

                                    {
                                        carrito.length !== 0 ?
                                            (
                                                carrito.map(producto => {
                                                    return (

                                                        <div className="products">
                                                            <div className='imgdiv'>
                                                                <img
                                                                    className="imgShops"
                                                                    src={producto.image}
                                                                    alt={producto.name}
                                                                />
                                                            </div>
                                                            <div className='titlediv'>
                                                                <h3 style={{ color: 'white' }}>{producto.name}</h3>
                                                                <p style={{ color: 'white' }}>$ {producto.price} USD</p>
                                                                <p>Unit: {producto.cant}</p>
                                                            </div>
                                                            <div
                                                                className='btndiv'
                                                                onClick={() => removeToShop(producto)}
                                                            >
                                                                <button className="btndelet">
                                                                    <CancelIcon
                                                                        sx={{ cursor: 'pointer', margin: '5px', color: 'white' }}
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>


                                                    )
                                                })

                                            )
                                            :
                                            (
                                                <p className='text-black'>No added products</p>
                                            )
                                    }


                                </div>

                                <div className='total-ctn'>
                                    <div className='price-ctn'>
                                        <p>Total $ {priceTotal} USD</p>
                                    </div>
                                    <div className='ctn-btn-pagos'>
                                        <PayPal />
                                        <GooglePay />
                                        {/* <button className='mp-btn'>Mercado Pago</button> */}
                                    </div>
                                </div>


                            </div>
                        </Drawer>

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
                                    <Typography onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} textalign="center" sx={{ color: "whitesmoke", fontWeight: "bold", fontSize: 20, textShadow: " 0 1px 0 rgb(255 255 255), 0 -1px 2px rgb(0 0 0 / 30%), 0 -2px 2px rgb(0 0 0 / 20%), 0 0 3px rgb(0 0 0 / 10%)" }}>{op.name}</Typography>
                                </MenuItem>
                            </LinkRouter>
                        ))}
                    </Box>
                    <div
                        onClick={toggleDrawer}
                        className='flex items-center justify-center'
                    >
                        <LocalMallIcon sx={{ cursor: 'pointer', margin: '10px' }} />
                        {
                            carrito.length !== 0
                                ? <span className='text-lg'>{carrito.length}</span>
                                : <></>
                        }
                    </div>
                    <MenuItem>

                        {/* ACA VA EL BOTON CARRITO */}

                        {/* BOTON CARRITO */}
                        {/* <div
                            onClick={toggleDrawer}
                            className='flex items-center justify-center mx-5'
                        >
                            <LocalMallIcon sx={{ cursor: 'pointer', margin: '10px' }} />
                            {
                                carrito.length !== 0
                                    ? <span className='text-lg'>{carrito.length}</span>
                                    : <></>
                            }
                        </div> */}

                        {/* BOTON ADMIN */}
                        {
                            user &&
                                user.role === 'admin'
                                ? <LinkRouter
                                    to='/adminForm'
                                >
                                    <button className='text-3xl mr-4'>👮‍♀️</button>
                                </LinkRouter>
                                : <></>
                        }
                        <Box sx={{ flexGrow: 0 }}>

                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {user ?
                                        <Box>
                                            <Avatar alt='' src={user.photoUrl} />
                                        </Box>
                                        :
                                        <Box>
                                            <PersonIcon fontSize='large' />
                                        </Box>
                                    }
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
                                {user ?
                                    <MenuItem>
                                        <Typography onClick={logOut} textalign="center">LogOut</Typography>
                                    </MenuItem>

                                    :
                                    <Box>
                                        {settings.map((setting, index) => (
                                            <LinkRouter to={setting.to} key={index} onClick={handleCloseUserMenu} className="linkR">
                                                <MenuItem >
                                                    <Typography textalign="center">{setting.name}</Typography>
                                                </MenuItem>
                                            </LinkRouter>
                                        ))}

                                    </Box>
                                }
                            </Menu>

                        </Box>

                    </MenuItem>
                    <Box sx={{ flexGrow: 0 }}>
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
                            {user ?
                                <MenuItem>
                                    <Typography onClick={logOut} textalign="center">LogOut</Typography>
                                </MenuItem>

                                :
                                <Box>
                                    {settings.map((setting, index) => (
                                        <LinkRouter to={setting.to} key={index} onClick={handleCloseUserMenu} className="linkR">
                                            <MenuItem >
                                                <Typography textalign="center">{setting.name}</Typography>
                                            </MenuItem>
                                        </LinkRouter>
                                    ))}

                                </Box>
                            }
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );

};
export default NavBar
