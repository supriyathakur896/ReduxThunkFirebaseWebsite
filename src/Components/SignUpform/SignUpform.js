import React from "react";
import { createAuthUserWithEmailAndPass, createUserDocumentfromAuth } from "../../utils/firebase";
import { FormInput } from '../FormInput/FormInput';
import { Button } from "../Buttons/Button";

export default function SignUpform(){
    const data={
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
    }
    const [formFields, setFormfields]= React.useState(data)
    const {displayName,email,password,confirmPassword}= formFields
    
    const resetFormFields = () => {
        setFormfields(data);
      };

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("password do not match")
            return;
        }
        try{
          const {user}= await createAuthUserWithEmailAndPass(email,password);
          await createUserDocumentfromAuth(user,{displayName});
          resetFormFields();
       
        }catch(error){
             if (error.code === 'auth/mail-already-in-use'){

                alert('Cannot create user, email already in use');

                resetFormFields();
            }else{
                console.log('user creation encountered an error',error);
             }
        }
    }

    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormfields({...formFields,[name]:value})
    }
    
    return(
      <div>
      <h2>Do not have an account? </h2>
      <p> Sign Up with Email and password</p>
        
        <form onSubmit={handleSubmit}>
            
            <FormInput 
             label="Display Name"
             name="displayName"
             value={displayName}
             type="text"
             onChange={handleChange}
             required/>

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

           
            <FormInput 
             label="Confirm Password"
             name="confirmPassword"
             value={confirmPassword}
             type="password"
             onChange={handleChange}
             required/>

        <Button type="submit">Submit</Button>
        </form>
    </div>)
    
}