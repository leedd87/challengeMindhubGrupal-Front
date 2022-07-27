import '../styles/style.css'
import { Link as LinkRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from '../../src/redux/actions/userActions'
import GoogleSignUp from './GoogleSignUp';
import toast from 'react-hot-toast';


function AccountSignUp(props) {
    const countrys = ["Select Country", "Argentina", "Uruguay", "Chile", "Bolivia", "Peru", "Brazil", "Colombia", "Venezuela", "Paraguay", "Ecuador", 'Other']

    const handleSubmit = async (event) => {
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

        // console.log(event);
        const res = await props.signUp(userData)

        // console.log(res.data.message)
        // console.log(res.data.success)

        if (res.data.success) {

            toast.success(`${res.data.message}`)
            event.target.reset()

        } else {
            toast.success(`${res.data.message}`)
            event.target.reset()
        }

        // if (res.data.message.length !== 1) {
        //     res.data.message.map(mes => {
        //         toast.error(`${mes.message}`)
        //     })
        // } else {
        // if(res.data)
        //     event.target.reset()
        // }
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
                        <input className='signUp-input' type='text' placeholder='FirstName' required />
                        <input className='signUp-input' type='text' placeholder='LastName' required />
                        <input className='signUp-input' type='text' placeholder='Email' required />
                        <input className='signUp-input' type='password' placeholder='Password' required />
                        <input className='signUp-input' type='text' placeholder='Profile Pic' required />
                        <select className='signUp-input' style={{ cursor: 'pointer' }} name='country' required>
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