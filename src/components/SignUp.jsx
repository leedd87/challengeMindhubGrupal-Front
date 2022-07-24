import '../styles/style.css'
import { Link as LinkRouter } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import logoGoogle from '../../src/assets/logoGoogle.png'
import logoFacebook from '../../src/assets/logoFacebook.png'
import logoInstagram from '../../src/assets/logoInstagram.png'
import { connect } from 'react-redux';
import userActions from '../../src/redux/actions/userActions'

function AccountSignUp(props){
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        const userData ={
          firstName:event.target[0].value,
          lastName:event.target[1].value,
          email:event.target[2].value,
          password:event.target[3].value,
          photoUrl:event.target[4].value,
          country:event.target[5].value,
          from:'form-Signup',
        }
        event.target.reset()
        // console.log(event);
        props.signUp(userData)
        //console.log(userData);
      }
    return(
        <div className='body'> 
            <div className="container-signup" id="main">
                <div className='overlay-ctn'>
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div className="social-ctn">
                            <Avatar sx={{margin:'8px'}} src={logoGoogle}/>
                            <Avatar sx={{margin:'8px'}} src={logoFacebook}/>
                            <Avatar sx={{margin:'8px'}} src={logoInstagram}/>
                        </div>
                        <h3>or</h3>
                        <input type='text' placeholder='FirstName'/>
                        <input type='text' placeholder='LastName'/>
                        <input type='text' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <input type='text' placeholder='Profile Pic'/>
                        {/* <input type='file' placeholder='Profile Pic'/> */}
                        <input type='text' placeholder='Country'/>
                        <button  type="submit" value="submit" className='accountbtn'>Sign Up</button>
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
const mapDispatchToProps= {
    signUp: userActions.signUp
  }
  export default connect(null, mapDispatchToProps)(AccountSignUp);