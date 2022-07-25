import '../styles/style.css'
import { Link as LinkRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from '../../src/redux/actions/userActions'
import GoogleSignUp from './GoogleSignUp';

function AccountSignUp(props) {
    const countrys = ["Select Country", "Argentina", "Uruguay", "Chile", "Bolivia", "Peru", "Brazil", "Colombia", "Venezuela", "Paraguay", "Ecuador", 'Other']

    const handleSubmit = (event) => {
        event.preventDefault()
        const userData = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            photoUrl: event.target[4].value,
            country: event.target[5].value,
            from: 'form-Signup',
            role: 'user'
        }
        event.target.reset()
        // console.log(event);
        props.signUp(userData)
        // console.log(userData);
    }
    return (
        <div className='body'>
            <div className="container-signup" id="main">
                <div className='overlay-ctn'>
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div className="social-ctn">
                            <GoogleSignUp />
                        </div>
                        <h3>or</h3>
                        <input className='signUp-input' type='text' placeholder='FirstName' />
                        <input className='signUp-input' type='text' placeholder='LastName' />
                        <input className='signUp-input' type='text' placeholder='Email' />
                        <input className='signUp-input' type='password' placeholder='Password' />
                        <input className='signUp-input' type='text' placeholder='Profile Pic' />
                        <select className='signUp-input' style={{ cursor: 'pointer' }} name='country'>
                            {countrys.map((country, index) =>
                                <option style={{ cursor: 'pointer' }} key={index}>{country}</option>
                            )}
                        </select>
                        <button type="submit" value="submit" className='accountbtn'>Sign Up</button>
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
const mapDispatchToProps = {
    signUp: userActions.signUp
}
export default connect(null, mapDispatchToProps)(AccountSignUp);