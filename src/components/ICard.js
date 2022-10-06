import React from "react";
import "./ICard.css";
import Tilt from "react-parallax-tilt";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const ICard = () => {
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
                <div className="val">Priyansh Khunt</div>
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
      <button onClick={printDocument} className="btns">
        Print
      </button>
    </>
  );
};

export default ICard;