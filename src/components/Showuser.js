import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,Link ,useNavigate} from 'react-router-dom'
import "./Showuser.css"

function Showuser() {

    const [data, setdata] = useState([])
    const {id}=useParams("");
    console.log(id)

    const nav=useNavigate();
    
const rejected=async(id)=>{

  await axios.delete(`http://localhost:8080/api/getuser/${id}`)
  .then((res)=>{
    const dat=res.data;
    console.log(dat)
   alert("deleted the data")
    setdata([dat])
    nav("/")
  })


}


        const profilenew=async()=>{
    
            await axios.get(`http://localhost:8080/api/getuser/${id}`).
            then((res)=>{
              console.log(res)
              const dat=res.data;
              setdata([dat])
            }).catch((err)=>{
              console.log(err)
            })
            }
            
    useEffect(()=>{
            
    profilenew();
            
    },[])
     



  return (
    <>
   
    {data.map((ele,id)=>{

        return(

       
    
    <div className="form-container">
    <header className="event-sec">
      <center>
        <div className="e-title">Artist Profile</div>
      </center>
    </header>
    <form className="event-form-f">
      <div className="col-f">
        <div className="regi-field">
          <label htmlFor="name">Name : </label>
          <div className="val">{ele.name}</div>
        </div>
        <div className="regi-field">
          <label htmlFor="gname">Group Name : </label>
          <div className="val">{ele.gname}</div>
        </div>
        <div className="regi-field">
          <label htmlFor="phone">Contact Number : </label>
          <div className="val">{ele.number}</div>
        </div>
        <div className="regi-field">
          <label htmlFor="email">Email : </label>
          <div className="val">{ele.email}</div>
        </div>
        <div className="regi-field">
          <label htmlFor="total-artist">Total number of artist : </label>
          <div className="val">{ele.tnartist}</div>
        </div>
        <div className="regi-field">
          <label htmlFor="theme">Theme of Performance : </label>
          <div className="val">{ele.TOP}</div>
        </div>
        <div className="regi-field">
          <label htmlFor="dance-form">Form of Indian Classical Dance: </label>
          <div className="val">{ele.FOICD}</div>
        </div>
        <div className="regi-field">
          <label htmlFor="awards">Details of Awards / Honors : </label>
          <div className="val">{ele.DOA}</div>
        </div>
        <div className="regi-field">
          <label htmlFor="past-work">
            Have you performed at District, State, National or International
            Level? If Yes, Provide Details
          </label>
          <div className="val">Ha ekvaar try kari ti</div>
        </div>
      </div>
      <div className="col-f">
        <div className="regi-field">
          <label htmlFor="photo">Upload your passport size photo</label>
          <div className="val">
            <img
              src={`http://localhost:8080/images/${ele.img}`}
              alt="new"
              className="dp"
            />
          </div>
        </div>
        <div className="regi-field">
          <label htmlFor="aadhar">Upload your Aadhar card's photo</label>
          <div className="val">
            <img
              src={`http://localhost:8080/images/${ele.adhar}`}
              alt="data"
              className="aadhar"
            />
          </div>
        </div>
        <div className="regi-field">
          <label htmlFor="sign">Upload the photo of your signature</label>
          <div className="val">
            <img
              src={`http://localhost:8080/images/${ele.sign}`} 
              alt="fetch"
              className="sign"
            />
          </div>
        </div>
        <div className="nav-btn bbox">
          <input className=" btns btn-s" type="submit" value="Approve" />
          <input className="btns btn-r" type="submit"  value="Reject" />
          <button onClick={()=>{rejected(ele._id)}}>reject</button>
        </div>
      </div>
    </form>
  </div>
  
  )
        
})}
</>
);

  
}

export default Showuser