import React, { Fragment, useState } from "react"
import {Link} from "react-router-dom"

const Register = ({setAuth}) => {


  //Hook for needed information from the user for registration
  const [inputs, setInputs] = useState({
    email: "", 
    password: "", 
    name: ""
  })

  const {email, password, name} = inputs;

  //Update parameters whenever user updates text field
  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value })
  }

  //When user registers, update server and get token
  const onSubmitForm = async e => {
    e.preventDefault()
  
    try{

      //information from inputs
      const body = {email, password, name}

      /*Update server with user's registration information
      const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST", 
      headers: {"Content-Type" : "application/json0"},
      body: JSON.stringify(body)
      });


      //token response from server
      const parseRes = await response.json()

      //Locally store token and update authentication state
      localStorage.setItem("token", parseRes.token)
      */
      setAuth(true);

    }
    catch(err){
      console.err(err.message);
    }
  };

  return(
    <Fragment>
      <h1 className="text-center my-5">Register</h1>
      <form onSubmit={onSubmitForm}>
      <input type="email" name="email" placeholder="email" className="form-control my-3" value={email} onChange={e => onChange(e)}/>
      <input type="password" name="password" placeholder="password" className="form-control my-3" value={password} onChange={e => onChange(e)}/>
      <input type="text" name="name" placeholder="name" className="form-control my-3" value={name} onChange={e => onChange(e)}/>
      <button className = "btn btn-success btn-block">Submit</button>
      <Link to="/login">Login</Link>
      </form>
    </Fragment>
  )
};

export default Register;