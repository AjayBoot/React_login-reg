import React, { Fragment, useState } from "react"
import {Link} from "react-router-dom"

const Register = ({setAuth}) => {


  //Hook for needed information from the user for registration
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName:"",
    email: "", 
    password: "", 
    dob:"",
    college:"",
    gy:""
  })

  const { firstName, lastName, email, password, dob, college, gy } = inputs;

  //Update parameters whenever user updates text field
  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value })
  }

  //When user registers, update server and get token
  const onSubmitForm = async e => {
    e.preventDefault()
  
    try{

      //information from inputs
      const body = {firstName, lastName, email, password, dob, college, gy}

      // Update server with user's registration information
      const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST", 
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(body)
      });

      //token response from server
      const parseRes = await response.json()

      //checks if token was recieved (valid input)
      if(parseRes.token){
        //Locally store token and update authentication state
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      }
      else{

        console.log(parseRes);
      }

    }
    catch(err){
      console.error(err.message);
    }
  };

  return(
    <Fragment>
      <h1 className="text-center my-5">Register</h1>
      <form onSubmit={onSubmitForm}>
      <input type="text" name="firstName" placeholder="First Name" className="form-control my-3" value={firstName} onChange={e => onChange(e)}/>
      <input type="text" name="lastName" placeholder="Last Name" className="form-control my-3" value={lastName} onChange={e => onChange(e)}/>
      <input type="email" name="email" placeholder="email" className="form-control my-3" value={email} onChange={e => onChange(e)}/>
      <input type="password" name="password" placeholder="password" className="form-control my-3" value={password} onChange={e => onChange(e)}/>
      <input type="text" name="dob" placeholder="Date of Birth" className="form-control my-3" value={dob} onChange={e => onChange(e)}/>
      <input type="text" name="college" placeholder="College" className="form-control my-3" value={college} onChange={e => onChange(e)}/>
      <input type="text" name="gy" placeholder="Graduating Year" className="form-control my-3" value={gy} onChange={e => onChange(e)}/>
      <button className = "btn btn-success btn-block">Submit</button>
      <Link to="/login">Login</Link>
      </form>
    </Fragment>
  )
};

export default Register;