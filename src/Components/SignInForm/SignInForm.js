import React from 'react'
import {SignInAuthUserWithEmailAndPass,
        signInWithGooglePopup,
        createUserDocumentfromAuth } from "../../utils/firebase";
import { FormInput } from '../FormInput/FormInput';
import { Button } from "../Buttons/Button";
import "./SignInForm.scss"

const SignInForm = () => {

   const data={
        email:"",
        password:""
    }

    const [formFields, setFormfields]= React.useState(data)
    const {email,password}= formFields
    
    const logGoogleUser= async()=>{
        const {user}= await signInWithGooglePopup();
        const userDocref =await createUserDocumentfromAuth(user)
    }
    const resetFormFields = () => {
        setFormfields(data);
     };

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const {user}= await SignInAuthUserWithEmailAndPass(email,password);
        //   console.log(response)
        resetFormFields();
        }catch(error){
        switch(error.code){
            case 'auth/wrong-password':
                alert('incorrect-password for email')
            break;
            case 'auth/user-not-found':
                alert('no user associated with this email')
            break;
            default:
              console.log(error);
          }
        }
    }

    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormfields({...formFields,[name]:value})
    }
    
    return(
    <div>
      <div className='sign-in-container'>
      <h2> Already Have an Account!</h2>
      <p>Sign In with your Email and Password</p>
        <form onSubmit={handleSubmit}>
            <FormInput 
             label="Email"
             name="email"
             value={email}
             type="email"
             onChange={handleChange}
             required/>
           
            <FormInput 
            label="Password"
             name="password"
             value={password}
             type="password"
             onChange={handleChange}
             required/>
        
        <div className="buttons-container">
            <Button buttonType="inverted" type="submit">Submit</Button>
            <Button type="button" buttonType="google" 
                    onClick={logGoogleUser}>
                    Sign In with <img src="../images/googleimg.png"></img>
            </Button>
        </div>
        </form>
        </div>
    
    </div>)
  
}

export default SignInForm