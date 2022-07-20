import '../styles/style.css'
import { Link as LinkRouter } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';


export default function AccountSignUp(){
    return(
        <div className='body'> 
        <div className="container" id="main">
            <div className='overlay-ctn'>
                <div className='overlay'>
                    <div className='overlay-right'>
                        <h1>Have you already created an account?</h1>
                        <LinkRouter to='/login'>
                            <button className='accountbtn' id='signUp'>login</button>
                        </LinkRouter>
                    </div>
                </div>
            </div>
            <div className="sign-in">
                <form>
                    <h1>CREATE ACCOUNT</h1>
                    <div className="social-ctn">
                        <Avatar src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"/>
                    </div>
                    <h2>or</h2>
                    <input type='text' placeholder='Name'/>
                    <input type='text' placeholder='LastName'/>
                    <input type='text' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <input type='text' placeholder='Profile Pic'/>
                    <input type='text' placeholder='Country'/>
                    <button className='accountbtn'>Sign Up</button>
                </form>
            </div>
        </div>
    </div>   
    )
}