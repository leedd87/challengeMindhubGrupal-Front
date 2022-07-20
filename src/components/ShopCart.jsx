import DeleteIcon from '@mui/icons-material/Delete';

export default function ShopCart(){
    return(
        <div className="shopCart-ctn">
            <div className="shopleft-ctn">
                <h2>Your cart</h2>
                <p>Finish the purchase process now to get them.</p>
                <div className="article">
                    <div className="items">
                        <img className="imgShops" src="https://media.revistagq.com/photos/5f2832773c95260b5c5ae0fc/4:3/w_1496,h_1122,c_limit/Captura%20de%20pantalla%202020-08-03%20a%20las%2017.50.14.png" alt="imgShoes"/>
                        <div>
                            <h3>Nike Jordan</h3>
                            <p>$ 0 USD</p>
                        </div>
                    </div>
                    <div>
                        <DeleteIcon sx={{cursor:'pointer'}}/>
                    </div>
                </div>
            </div>
            <div className="shopright-ctn">
                <div className='order-ctn'>
                    <h2>Order summary</h2>
                    <p>Total</p>
                    <p>Envio</p>
                    <button className='paypal-btn'><span style={{color:'#003586'}}>Pay</span><span style={{color:'#009ddd'}}>Pal</span></button>
                    <button className='mp-btn'>Mercado Pago</button>
                </div>
            </div>
        </div>
    )
}