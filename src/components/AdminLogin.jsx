import { useState } from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {
 
  const [type, settype] = useState(null);
  const [id, setid] = useState("");
  const [password, setpassword] = useState("")
  
  const nav=useNavigate();
  console.log(type);
  
  
  const adminlogin=async(e)=>{
      e.preventDefault();
      const response=await fetch('http://localhost:8080/api/admin',{
          method:'POST',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify({
              type,
              id,
              password
          })
      })
  
  
      const data=await response.json();
      if(data.status=='ok')
      {
          alert("successfully login admin")
          nav("/")
      
      }
      else{
          alert("please enter the correct details")
      }
    }





  return (
    <>
      <div className="dis">
        <div className="form-card admin-f">
          <div className="left-i">
            <img
              src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/admin.png"
              alt
            />
          </div>
          <div className="right">
            <form action="#">
              <h1>Admin Login</h1>
              <div className="row">
                <h2>Select Role</h2>
                <div className="field">
                  <div className="box">
                    <select onChange={(e)=>settype(e.target.value)} >
                    <option value="none" selected disabled hidden>Select an Option</option>
                      <option value="clerk">Clerk</option>
                      <option value="dydo">
                        Distric Youth Development Officer
                      </option>
                      <option value="commissioner">Commissioner</option>
                    </select>
                  </div>
                  <i className="fa fa-user" />
                </div>
              </div>
              <div className="row">
                <h2>Unique Id</h2>
                <div className="field">
                  <input
                    type="text"
                    required
                    name="userId"
                    value={id} onChange={(e)=>{setid(e.target.value)}}
                    placeholder="Enter Your Unique Id Here"
                  />
                  <i className="fa fa-key" aria-hidden="true" />
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
                  I Agree With <span className="blue">Terms Of Services</span>{" "}
                  and
                  <span className="blue"> Privacy Policy. </span>
                </p>
              </div>
              <div className="row">
                <div className="btns">Log in</div>
              </div>
              <button onClick={adminlogin}>loginadmin</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
