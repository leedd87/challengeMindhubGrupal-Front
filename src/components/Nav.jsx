import React,{useState} from "react";
import { Link as LinkRouter } from 'react-router-dom';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import '../../src/styles/style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import LocalMallIcon from '@mui/icons-material/LocalMall';
// import Paypal from "../../src/components/PayPal";

export default function Nav(){
    const [isOpen, setIsOpen] =useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return(
        <div className='navCtn'>
                <LinkRouter to='/account'>
                    <button className='btn'>Account</button>
                </LinkRouter>
                <LinkRouter to='/adminForm'>
                    <button className='btn'>Admin</button>
                </LinkRouter>
            <div>
                <button onClick={toggleDrawer}>
                    <LocalMallIcon sx={{cursor:'pointer',margin:'10px'}}/>
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
                                <img className="imgShops" src="https://media.revistagq.com/photos/5f2832773c95260b5c5ae0fc/4:3/w_1496,h_1122,c_limit/Captura%20de%20pantalla%202020-08-03%20a%20las%2017.50.14.png" alt="imgShoes"/>
                                <div>
                                    <h3 style={{color:'black'}}>Nike Jordan</h3>
                                    <p style={{color:'black'}}>$ 0 USD</p>
                                </div>
                            </div>
                            <div>
                                <DeleteIcon sx={{cursor:'pointer',marginRight:'5px', color:'black'}}/>
                            </div>
                        </div>
                        <div className='total-ctn'>
                            <div className='price-ctn'>
                                <p>Total $ 0 USD</p>
                            </div>
                            <div style={{marginTop:'10px'}}>
                                <button className='paypal-btn'><span style={{color:'#003586'}}>Pay</span><span style={{color:'#009ddd'}}>Pal</span></button>
                                {/* <Paypal/> */}
                                <button className='mp-btn'>Mercado Pago</button>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}
