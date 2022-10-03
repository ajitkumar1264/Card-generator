import React, { useState } from "react";
import "./LogIn.css";
import { Link,useNavigate } from "react-router-dom";

export default function LogIn() {
 

  const [email, setemail] = useState("")
 const [password, setpassword] = useState("")
 const nav=useNavigate();

 const registeruser=async(e)=>{

  e.preventDefault();
  const response=await fetch('http://localhost:8080/api/login',
  {
  method:'POST',
  headers:{
    'content-type':'application/json',
  },
  body:JSON.stringify({
    email,
    password
  })

  })

const data=await response.json();
if(data.user)
{
  alert('login successfully')
  nav("/")
}
else{
  alert('please check your username and password');
}

 }



  
  return (
    <div className="dis">
      <div className="form-card l-form">
        <div className="left-i">
          <img
            src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/login.png"
            alt
          />
        </div>
        <div className="right">
          <form action="#">
            <h1>Artist Login</h1>

            <div className="row">
              <h2>Email</h2>
              <div className="field">
                <input
                  type="text"
                  required
                  name="userUni"
                  value={email} onChange={(e)=>setemail(e.target.value)}
                  placeholder="Enter Your Email Here"
                />
                <i className="fa fa-envelope" aria-hidden="true" />
              </div>
            </div>
            <div className="row">
              <h2>Password</h2>
              <div className="field">
                <input
                  type="text"
                  required
                  name="userPhoneNo"
                  value={password} onChange={(e)=>setpassword(e.target.value)}
                  placeholder="Enter Your Password Here"
                />
                <i className="fa fa-eye" aria-hidden="true" />
              </div>
            </div>
            <div className="info">
              <input type="checkbox" name id defaultChecked />
              <p>
                I Agree With <span className="blue">Terms Of Services</span> and
                <span className="blue"> Privacy Policy. </span>
              </p>
            </div>
            <div className="row">
              <div className="btns">Login</div>
            </div>
            <div className="info">
              Don't have account
              <span className="blue">
                <Link to="/signUp">SignUp</Link>
              </span>
            </div>
            <button onClick={registeruser}>login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
