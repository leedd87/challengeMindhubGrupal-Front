import '../styles/style.css'
import { Link as LinkRouter } from 'react-router-dom';
import userActions from '../../src/redux/actions/userActions'
import { connect } from 'react-redux';
import GoogleSignIn from './GoogleSignIn';

function SignIn(props){
    const handleSubmit= async (event)=>{
        event.preventDefault()
        const userSignIn= {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "form-SignIn"
        }
        //console.log(event)
        props.signIn(userSignIn)
        // console.log(userSignIn);
    }
    return(
    <div className='body'> 
            <div className="container-signup" id="main">
            <div className="sign-in">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome</h1>
                    <div className="social-ctn">
                        <GoogleSignIn/>
                    </div>
                    <h3>or</h3>
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
 const mapDispatchToProps= {
    signIn: userActions.signIn
  }
export default connect(null, mapDispatchToProps)(SignIn)
    