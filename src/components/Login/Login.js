import React,{useState,useEffect} from 'react'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {Form, Button} from "react-bootstrap"
import Home from "../Home/Home"


const Login=()=> {

    const config={    
  apiKey:"AIzaSyDv7bHeU0NxNzfOIrHK3nFQ7huS1qEVlxs",
  authDomain:"fir-auth-5bb7c.firebaseapp.com"
}

if(!firebase.apps.length){
firebase.initializeApp(config);
}else{
  firebase.app();
}

const auth = firebase.auth();

const uiConfig={
  signInflow:"popup",
  signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess:()=>false
  }
}

const [loaded, isLoaded] = useState(false);
const[isSignedIn, setIsSignedIn] = useState(false);
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [err, setError] = useState(null);
const [nemail, setNEmail] = useState('');
const [npassword, setNPassword] = useState('');
const [name, setName] = useState('');
const [tobeSentId, settobeSentId]=useState('');


useEffect(()=>{

    auth.onAuthStateChanged(user=>{
  setIsSignedIn(!!user);
})
isLoaded(true)
 // eslint-disable-next-line react-hooks/exhaustive-deps

},[])

const handleSignIn=(e, email, password)=>{
 e.preventDefault();

 auth.signInWithEmailAndPassword(email,password)
 .then((userCredential)=>{
   settobeSentId(userCredential.user.email);
   
   setEmail('');
   setPassword('');
    setNEmail('');
    setNPassword('');
    setName('');
   setIsSignedIn(true);

 })
 .catch(err=>{
   setError('Error signing in with email id and password');
   setTimeout(function(){
  setError(null);
   },2000)
 })

}

const handleSignUp=(e,email,password,name)=>{
  e.preventDefault();

  auth.createUserWithEmailAndPassword(nemail,npassword)
  .then((userCredential)=>{
    settobeSentId(userCredential.user.email);
    
   setEmail('');
   setPassword('');
    setNEmail('');
    setNPassword('');
    setName('');
    setIsSignedIn(true);
  }).catch(err=>{

    setError(err.message);
setTimeout(function(){
setError(null);
},2000)
    // console.log(err.message);
  })

}


const onChangeHandler=(e)=>{
  const {name,value}= e.currentTarget;
  if(name === "email"){
setEmail(value)
  }else{
setPassword(value)
  }
  e.currentTarget.value='';
}

const onChangeHandler2=(e)=>{
  const {name,value}=e.currentTarget;
  if(name==="name"){
setName(value);
  }else if(name==="nemail"){
setNEmail(value);
  }else if(name==="npassword"){
setNPassword(value);
  }
  e.currentTarget.value='';
}

if(!isLoaded){
    return <div style={{display:'flex', flexDirection:'column', verticalAlign:'center', margin:'0 auto', height:"30%", width:"30%"}}><img src="./unsplash.png" key="lorem312esds" alt="asdasd"/></div>
}


if(!isSignedIn){

    return(
    <div style={{display:'flex', flexDirection:'column', marginTop:'2em' }}>   

{
  err && <h1 style={{margin:'0 auto'}}>{err}</h1>
}


    <div style={{width:'30em',  border:'5px solid #f54260', margin:'0 auto', padding:'3em'}}>
      <h1>Sign in here...</h1>
<Form onSubmit={(e)=>handleSignIn(e,email,password)}
      style={{display:'flex', flexDirection:'column'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" value={email} type="email" placeholder="Enter email"  onChange={onChangeHandler}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" value={password} type="password" placeholder="Enter password" 
    onChange={onChangeHandler}/>
  </Form.Group>
  <Button variant="primary" type="submit">Submit</Button>
</Form>      
    </div>

    <div style={{ width:'30em',border:'5px solid #f54260', margin:'0 auto', marginTop:'5em',padding:'3em'}}>

       <h1>Sign up here...</h1>
    
    <Form onSubmit={(e)=>handleSignUp(e,email,password,name)}
      style={{display:'flex', flexDirection:'column'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="nemail" type="email" placeholder="Enter email" value={nemail} onChange={onChangeHandler2} />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="npassword"
    value={npassword}
    onChange={onChangeHandler2}
    type="password" placeholder="Password" />
    <Form.Text className="text-muted">
      Password must be at least six letters/numbers long.
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
    </div>
    
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
    )
}else{
   return <Home email={tobeSentId} auth={auth} setIsSignedIn={setIsSignedIn}></Home>
}

}

export default Login;