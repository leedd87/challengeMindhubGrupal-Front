import '../../src/styles/style.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ImageIcon from '@mui/icons-material/Image';
import FlagIcon from '@mui/icons-material/Flag';
import { Link as LinkRouter } from 'react-router-dom';

export default function Account(){
    
	return(
		<div className='formCtn'>
			<div className='box'>
				<div className='form'>
					<h2>Signup</h2>
					<form>
						<div className='inputBx'>
							<input type='text' placeholder='Name'/>
							<PersonOutlineIcon className='iconForm' fontSize='large'/>
						</div>
						<div className='inputBx'>
							<input type='text' placeholder='LastName'/>
							<PersonOutlineIcon className='iconForm' fontSize='large'/>
						</div>
						<div className='inputBx'>
							<input type='text' placeholder='Email'/>
							<AlternateEmailIcon className='iconForm'  fontSize='large'/>
						</div>
						<div className='inputBx'>
							<input type='password' placeholder='Password'/>
							<LockIcon className='iconForm' fontSize='large'/>
						</div>
						<div className='inputBx'>
							<input type='text' placeholder='Profile Pic'/>
							<ImageIcon className='iconForm' fontSize='large'/>
						</div>
						<div className='inputBx'>
							<input type='file'/>
							<ImageIcon className='iconForm' fontSize='large'/>
						</div>
						<div className='inputBx'>
							<input type='text' placeholder='Country'/>
							<FlagIcon className='iconForm' fontSize='large'/>
						</div>
						<label className='rememberCtn'>
							<input type='checkbox' className='remember'/>Remember Me
						</label>
						<div>
							<button className='submitBtn'>Submit</button>
						</div>
					</form>
					<div style={{display:'flex'}}>
                        <h3 style={{color:'white'}}>Do you already have an account?</h3>
                        <LinkRouter to='/login' style={{textDecoration:'none'}}>
                            <h3 style={{color:'white', textDecoration:'underline'}}>login</h3>
                        </LinkRouter>
                    </div>
				</div>
			</div>
		</div>
	)
}