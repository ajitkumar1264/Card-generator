import React,{useState,useEffect} from "react";
import "./ValidationList.css";
import axios from "axios";
import {NavLink} from 'react-router-dom'



const ValidationList = () => {

const [alluser, setalluser] = useState([])


const getData=async()=>{

const dat= await axios.get("http://localhost:8080/api/getuser")
console.log(dat.data.getuser)

if(dat.status==="401")
{
    alert("error in geting data")
}
else{
    setalluser(dat.data.getuser);
}

}


useEffect(() => {
  

getData();

},[])

const approvedoc=async(id)=>{

  const res=await axios.patch(`http://localhost:8080/api/getuser/PEON/${id}`)

  if(res)
  {
    
  alert("data updated")


  }else{
    alert("error");
  }




}
const approvedofficer=async(id)=>{

  const res=await axios.patch(`http://localhost:8080/api/getuser/officer/${id}`)

  if(res)
  {
    
  alert("data updated")


  }else{
    alert("error");
  }




}
const approvedcommisioner=async(id)=>{

  const res=await axios.patch(`http://localhost:8080/api/getuser/commisioner/${id}`)

  if(res)
  {
    
  alert("data updated")


  }else{
    alert("error");
  }




}




  return (



    <>
      <header className="event-sec">
        <center>
          <div className="e-title">List Of Artist To Validate</div>
        </center>
      </header>
      <div className="t-box">
        <table>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Lead Name</th>
              <th>Event Name</th>
              <th>Email</th>
              <th>Event Date</th>
              <th>Validation Status 1</th>
              <th>update</th>
              <th>Validation Status 2</th>
              <th>update</th>
              <th>Validation Status 2</th>
              <th>update</th>
              <th>profile</th>
            </tr>
          </thead>
          <tbody>

          {alluser.length>0? alluser.map((ele,id)=>{
            return(

        
            <tr>
              <td>{ele.gname}</td>
              <td>{ele.name}</td>
              <td>{ele.FOICD}</td>
              <td>
                <a href="#">{ele.email}</a>
              </td>
              <td>03/10/2022</td>
              <td className="pd">{ele.PEON}</td>
              <td className="ap"><button onClick={()=>{approvedoc(ele._id)}} >Approved</button></td>
              <td className="pd">{ele.officer}</td>
              <td className="ap"><button onClick={()=>{approvedofficer(ele._id)}} >Approved</button></td>
              <td className="pd">{ele.commisioner}</td>
              <td className="ap"><button onClick={()=>{approvedcommisioner(ele._id)}} >Approved</button></td>
              <td><NavLink to={`/show/${ele._id}`}><button>show</button></NavLink></td>
            </tr>
            

            )
          }):<h1>Loadded...</h1>}
           


          </tbody>
        </table>
      </div>
    </>
  );
};

export default ValidationList;