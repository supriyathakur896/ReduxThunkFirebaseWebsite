import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import {
    getFirestore,doc,getDoc,setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD6bjHhP5Lm9RcNdyv8rDYR0BnAYJVEbZc",
  authDomain: "caratclassnew.firebaseapp.com",
  projectId: "caratclassnew",
  storageBucket: "caratclassnew.appspot.com",
  messagingSenderId: "778014155853",
  appId: "1:778014155853:web:324c0147715f0e4030a804"
};

const firebaseApp = initializeApp(firebaseConfig);  
const provider= new GoogleAuthProvider(); //class
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();

export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);

export const db= getFirestore();  //database

export const createUserDocumentfromAuth= async(
    userAuth,
    additionalInformation={})=>{
    if (!userAuth) return; //to protect our code

    const userDocref= doc(db,"user",userAuth.uid);
   // to get data from db database another user collection with userAuth.id

//    console.log(userDocref)
   const userSnapshop= await getDoc(userDocref)
   //to check the data exists in db
// console.log(userSnapshop.exists())
   if(!userSnapshop.exists()){
     const { displayName, email}= userAuth;  //id doesnt it pull the values
     const createdAt= new Date();
     try{
        await setDoc(userDocref,{
            displayName,
            email,
            createdAt,
            ...additionalInformation,
        });
     }catch(error){
       console.log("error creating the user", error.message)
     }
   }
 return userDocref;
}

export const createAuthUserWithEmailAndPass= async(email,password)=>{
    if (!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInAuthUserWithEmailAndPass= async(email,password)=>{
    if (!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
};