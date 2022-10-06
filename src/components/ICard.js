import React,{useState,useEffect} from "react";
import "./ICard.css";
import Tilt from "react-parallax-tilt";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import annex from "./Context/Context"
import { useContext } from "react";


const ICard = () => {

  const [carddata, setcarddata] = useState([]);
  const {Idcard}=useContext(annex);
  const id=Idcard;


const cardshow=async(e)=>{
  
  await axios.get(`http://localhost:8080/api/idcard/${id}`)
  .then((res)=>{
    console.log(res.data);
    setcarddata(res.data);
  })
  .catch((err)=>{
    console.log(err.message)
  })
}


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
                <img src="../DPP.jpg" alt="" className="id-dp" />
              </div>
              <div className="right">
                <div className="id-field">
                  <label htmlFor="name">Name : </label>
                  <div className="val">Ajitkumar</div>
                </div>
                <div className="id-field">
                  <label htmlFor="id">ID : </label>
                  <div className="val">arts00069</div>
                </div>
                <div className="id-field">
                  <label htmlFor="gname">Group Name : </label>
                  <div className="val">Rinkiya Ke Papa</div>
                </div>
                <div className="id-field">
                  <label htmlFor="dance-form">Dance Form :</label>
                  <div className="val">Bharatnatyaam</div>
                </div>
  
                <div className="id-field">
                  <label htmlFor="theme">Theme : </label>
                  <div className="val">Beti Bachav Beti Padhav</div>
                </div>
                <div className="id-field">
                  <label htmlFor="email">Email : </label>
                  <div className="val">rinkiyaKePapa@gmail.com</div>
                </div>
                <div className="id-field">
                  <label htmlFor="date">Date Of issue :</label>
                  <div className="val">01/10/2022</div>
                </div>
              </div>
            </div>
      </div>
    
    </Tilt>


  {carddata?carddata.map((ele,id)=>{
    return(
      <>
      
      <h1>vaghela ajitkumar</h1>


      </>
    )
  }):""}


   
    

      <button onClick={printDocument} className="btns">
        Print
      </button>
      <button onClick={cardshow}>see the doc</button>
      
    </>
  );
};

export default ICard;