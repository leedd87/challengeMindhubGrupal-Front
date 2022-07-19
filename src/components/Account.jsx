import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import '../styles/account.css'
import { Link as LinkRouter } from 'react-router-dom';

export default function Account(){
    const signUpButton= document.getElementById('signUp')
    const signInButton= document.getElementById('signIn')
    const main= document.getElementById('main')

    // signUpButton.addEventListener('click', ()=>{
    //     main.classList.add('right-panel-active')
    // })
    // signInButton.addEventListener('click', ()=>{
    //     main.classList.remove('right-panel-active')
    // })
    return(
    <div className='body'> 
        <div className="container" id="main">
            <div className="sign-up">
                <form>
                    <h1>CREATE ACCOUNT</h1>
                    <div className="social-ctn">
                        <FacebookIcon className='icons' fontSize='large' sx={{color:'blue'}}/>
                        <InstagramIcon className='icons' fontSize='large' sx={{color:'red'}}/>
                        <GoogleIcon className='icons' fontSize='large' sx={{color:'green'}}/>
                    </div>
                    <p>or</p>
                    <input type='text' placeholder='Name'/>
                    <input type='text' placeholder='LastName'/>
                    <input type='text' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <input type='text' placeholder='Profile Pic'/>
                    <input type='text' placeholder='Country'/>
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="sign-in">
                <form>
                    <h1>SignIn</h1>
                    <div className="social-ctn">
                        <FacebookIcon className='icons' fontSize='large' sx={{color:'blue'}}/>
                        <InstagramIcon className='icons' fontSize='large' sx={{color:'red'}}/>
                        <GoogleIcon className='icons' fontSize='large' sx={{color:'green'}}/>
                    </div>
                    <p>or</p>
                    <input type='text' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <button>Sign In</button>
                </form>
            </div>
            <div className='overlay-ctn'>
                <div className='overlay'>
                    <div className='overlay-left'>
                        <h1>Welcome</h1>
                        <button id='signIn' onClick={()=>'right-panel-active'}>Sign In</button>
                    </div>
                    <div className='overlay-right'>
                        <h1>Hello</h1>
                        <button id='signUp'onClick={()=>'right-panel-active'}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>   
      )
 }
    