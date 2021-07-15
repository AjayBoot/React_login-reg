import React, { Fragment, useState } from "react"
import {Link} from "react-router-dom"

const Login = ({setAuth}) => {

  //Hook for needed information from the user for login
  const [inputs, setInputs] = useState({
    email:"",
    password:""
  });

  const {email, password} = inputs

  //Update parameters whenever user updates text field
  const onChange = (e) => {

    setInputs({...inputs, [e.target.name]: e.target.value});
  };

  //When user attempts to log-in, authenticate with server and get token
  const onSubmitForm = async(e) => {

    e.preventDefault()

    try{

      /* Send info to server to authenticate

      const body = {email, password}
      
      const response = await fetch("http://localhost:5000/auth/login",{
      method:"POST",
      headers: {"Content-Type" : "application/json"},
      bosy: JSON.stringify(body)  
    });


      const parseRes = await response.json();

      //Locally store token and update authentication state
      localStorage.setItem("token", parseRes.token);
      setAuth(true);
      */
     
    } catch(err){

      console.err(err.message)
    }
  }

  return(
    <Fragment>
      <h1 className="text-center my-5">Login</h1>
      <form onSubmit={onSubmitForm}> 
        <input type="email" name="email" placeholder="email" className="form-control my-3" value={email} onChange={e => onChange(e)}></input>
        <input type="password" name="password" placeholder="password" className="form-control my-3" value={password} onChange={e => onChange(e)}></input>
        <button className="btn btn-success btn-block">Submit</button>

        <Link to="/register">Register</Link>
      </form>
    </Fragment>
  )
};

export default Login;