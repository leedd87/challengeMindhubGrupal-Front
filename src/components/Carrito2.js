import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import '../../src/styles/style.css'
import DeleteIcon from '@mui/icons-material/Delete';


const Carrito = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <div className='carrito'>
                <button onClick={toggleDrawer}>OPEN</button>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='drawer-ctn'
            >   
                <div>
                    <div className='h1-ctn'>
                        <h2 className='title'>SHOPPING CART</h2>
                    </div>
                    <div className="div1">
                        <div className="div2">
                            <img className="imgShops" src="https://media.revistagq.com/photos/5f2832773c95260b5c5ae0fc/4:3/w_1496,h_1122,c_limit/Captura%20de%20pantalla%202020-08-03%20a%20las%2017.50.14.png" alt="imgShoes"/>
                            <div>
                                <h3>Nike Jordan</h3>
                                <p>$ 0 USD</p>
                            </div>
                        </div>
                        <div>
                            <DeleteIcon sx={{cursor:'pointer',marginRight:'5px'}}/>
                        </div>
                    </div>
                    <div className='div3'>
                        <div className='div4'>
                            <p>Total $ 0 USD</p>
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <button className='paypal-btn'><span style={{color:'#003586'}}>Pay</span><span style={{color:'#009ddd'}}>Pal</span></button>
                            <button className='mp-btn'>Mercado Pago</button>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}
export default Carrito