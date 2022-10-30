import SignInForm from '../../Components/SignInForm/SignInForm';
import SignUpform from '../../Components/SignUpform/SignUpform';
import "./Authentication.scss"

export const SignIn = () => {
   
  return (
    <div className='Authentication-container'>
        <SignInForm/>
        <SignUpform/>
    </div>
  )
}

export default SignIn;