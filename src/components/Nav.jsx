import React from "react";
import { Link as LinkRouter } from 'react-router-dom';

export default function Nav(){
    return(
        <div className='navCtn'>
            <LinkRouter to='/signUp'>
                <button className='btn'>signUP</button>
            </LinkRouter>
            <LinkRouter to='/login'>
               <button className='btn'>Login</button>
            </LinkRouter>
            <LinkRouter to='/shopcart'>
               <button className='shopCart-btn'></button>
            </LinkRouter>
            <LinkRouter to='/carrito'>
               <button className='shopCart-btn'></button>
            </LinkRouter>
        </div>
    )
}
