import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link as LinkRouter } from 'react-router-dom';

export default function LogIn(){
    return(
        <div className='formCtn'>
            <div className='box'>
				<div className='form'>
					<h2>Welcome</h2>
					<form>
						<div className='inputBx'>
							<input type='text' placeholder='Email'/>
							<AlternateEmailIcon className='iconForm'  fontSize='large'/>
						</div>
						<div className='inputBx'>
							<input type='password' placeholder='Password'/>
							<LockIcon className='iconForm' fontSize='large'/>
						</div>
						<label className='rememberCtn'>
							<input type='checkbox' className='remember'/>Remember Me
						</label>
						<div>
							<button className='submitBtn'>Submit</button>
						</div>
					</form>
                    <div style={{display:'flex'}}>
                        <h3 style={{color:'white'}}>Do not you have an account yet?</h3>
                        <LinkRouter to='/signup' style={{textDecoration:'none'}}>
                            <h3 style={{color:'white', textDecoration:'underline'}}>signup</h3>
                        </LinkRouter>
                    </div>
                </div>
			</div>
        </div>
    )
}