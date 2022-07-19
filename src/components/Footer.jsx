import React from "react";
import logo from "../assets/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
//import {Link as LinkRouter} from 'react-router-dom';

function Footer(){
    return(
        <>
        
        <div className="footer">
        <div className="containBtnFooter">
        <div className="logo">
            <img src={logo} alt="logo" style={{"height":"4rem", backgroundColor: "white"}} />
        </div>
        <div className="menu">
            <h2>Home</h2>
            <h2>Home</h2>
        {/* <LinkRouter to={'/index'} className="btnFooter">Home </LinkRouter>
        <LinkRouter to={'/cities'} className="btnFooter">Cities</LinkRouter> */}
        </div>
        <div className="icons">
        <InstagramIcon/>
        <TwitterIcon/>
        <FacebookIcon/>
        </div>
        </div>
        <div className="p">
            <p>© 2022 MindHub - DAFTLAB. All rights reserved.</p>
        </div>
            
        </div>
        </>
    )
}
export default Footer;