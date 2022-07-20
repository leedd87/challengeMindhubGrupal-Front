import Avatar from '@mui/material/Avatar';
import '../styles/style.css'
import { Link as LinkRouter } from 'react-router-dom';

export default function Account(){

    return(
    <div className='body'> 
        <div className="container" id="main">
            <div className="sign-in">
                <form>
                    <h1>Welcome</h1>
                    <div className="social-ctn">
                        <Avatar src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"/>
                    </div>
                    <h2>or</h2>
                    <input type='text' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <button className='accountbtn'>Sign In</button>
                </form>
            </div>
            <div className='overlay-ctn'>
                <div className='overlay'>
                    <div className='overlay-right'>
                        <h1>Do not you have an account yet?</h1>
                        <LinkRouter to='/signup'>
                            <button className='accountbtn' id='signUp'>Sign Up</button>
                        </LinkRouter>
                    </div>
                </div>
            </div>
        </div>
    </div>   
      )
 }
    