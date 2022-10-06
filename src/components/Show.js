import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import annex from "./Context/Context"
import { useContext } from "react";
import "./ICard.css";
import Tilt from "react-parallax-tilt";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";

function Show() {

const [data, setdata] = useState([])
const {Idcard}=useContext(annex);
  const id=Idcard;
  const date=new Date();

  let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;


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
        



function printDocument() {
  const input = document.getElementById("divToPrint");
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "JPEG", 0, 0);
    pdf.output("dataurlnewwindow");
    pdf.save("download.pdf");
  });
}


  return (
    <>

   {data.map((ele,id)=>{


    return(

      <Tilt
      glareEnable={true}
      glareColor="#ebe7ee80"
      glarePosition="all"
      tiltMaxAngleX="13"
      tiltMaxAngleY="4"
    >
      <div className="ID-card" id="divToPrint">
        <div className="id-top">
          <div className="logo">
            <img
              src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/gov-logo.png"
              alt=""
            />
          </div>
          <div className="id-title">
            <h1>Government of India</h1>
            <h2>Sports, Youth Cultural Activities Department</h2>
            <h3>Navratri Mahotsav (Rajkot) - 2022 ID-Card</h3>
          </div>
        </div>           
            <div className="id-info">
              <div className="left">
                <img src={`http://localhost:8080/images/${ele.img}`} alt="" className="id-dp" />
              </div>
              <div className="right">
                <div className="id-field">
                  <label htmlFor="name">Name : </label>
                  <div className="val">{ele.name}</div>
                </div>
                <div className="id-field">
                  <label htmlFor="id">ID : </label>
                  <div className="val">{ele._id}</div>
                </div>
                <div className="id-field">
                  <label htmlFor="gname">Group Name : </label>
                  <div className="val">{ele.gname}</div>
                </div>
                <div className="id-field">
                  <label htmlFor="dance-form">Dance Form :</label>
                  <div className="val">{ele.FOICD}</div>
                </div>
  
                <div className="id-field">
                  <label htmlFor="theme">Theme : </label>
                  <div className="val">{ele.TOP}</div>
                </div>
                <div className="id-field">
                  <label htmlFor="email">Email : </label>
                  <div className="val">{ele.email}</div>
                </div>
                <div className="id-field">
                  <label htmlFor="date">Date Of issue :</label>
                  <div className="val">{currentDate}</div>
                </div>
              </div>
            </div>
      </div>
    
    </Tilt>



    )
   })} 



 
  

    <button onClick={printDocument} className="btns">
      Print
    </button>


    
    </>
  )
}

export default Show