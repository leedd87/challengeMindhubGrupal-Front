import React from "react";
import { Link as LinkRouter } from 'react-router-dom';

export default function Nav(){
    return(
        <div className='navCtn'>
            <LinkRouter to='/signUp'>
                <button>signUP</button>
            </LinkRouter>
            <LinkRouter to='/login'>
               <button>Login</button>
            </LinkRouter>
            <LinkRouter to='/account'>
               <button>account</button>
            </LinkRouter>
        </div>

    )
}
