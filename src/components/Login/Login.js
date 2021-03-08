import React,{useState,useEffect} from 'react'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Home from "../Home/Home"


const Login=()=> {

    const config={
    
  apiKey:"AIzaSyDv7bHeU0NxNzfOIrHK3nFQ7huS1qEVlxs",
  authDomain:"fir-auth-5bb7c.firebaseapp.com"
}

firebase.initializeApp(config);



const uiConfig={
  signInflow:"popup",
  signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess:()=>false
  }
}


const[isSignedIn, setIsSignedIn] = useState(false);

useEffect(()=>{
const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user=>{
setIsSignedIn(!!user);
});

return () => unregisterAuthObserver();

},[]);

if(!isSignedIn){
    return <div>
        <h1>Login using any of the following</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>     
    </div>
}else{
    return <Home setSignedIn={setIsSignedIn} firebaseAuth={firebase.auth()} />
}

}

export default Login;