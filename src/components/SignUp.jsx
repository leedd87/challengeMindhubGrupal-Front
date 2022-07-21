import '../styles/style.css'
import { Link as LinkRouter } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import logoGoogle from '../../src/assets/logoGoogle.png'

export default function AccountSignUp(){
    return(
        <div className='body'> 
            <div className="container" id="main">
                <div className='overlay-ctn'>
                    <form>
                        <h1>CREATE ACCOUNT</h1>
                        <div className="social-ctn">
                            <Avatar src={logoGoogle}/>
                        </div>
                        <h2>or</h2>
                        <input type='text' placeholder='Name'/>
                        <input type='text' placeholder='LastName'/>
                        <input type='text' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <input type='text' placeholder='Profile Pic'/>
                        <input type='file' placeholder='Profile Pic'/>
                        <input type='text' placeholder='Country'/>
                        <button className='accountbtn'>Sign Up</button>
                    </form>
                </div>
                <div className="sign-in">
                    <div className='overlay'>
                        <div className='overlay-right'>
                            <h1>Have you already created an account?</h1>
                            <LinkRouter to='/signIn'>
                                <button className='accountbtn' id='signUp'>Sign In</button>
                            </LinkRouter>
                        </div>   
                    </div>
                </div>
            </div>
        </div>   
    )
}