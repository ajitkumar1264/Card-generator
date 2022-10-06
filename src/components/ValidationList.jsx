import React, { useState, useEffect } from "react";
import "./ValidationList.css";
import axios from "axios";
import { NavLink,usena4, useNavigate } from "react-router-dom";
import annex from "./Context/Context";
import { useContext } from "react";

const ValidationList = () => {
  const { clerklogin, dydologin, commisionerlogin } = useContext(annex);

  const [alluser, setalluser] = useState([]);
  const nav=useNavigate();
 
  const getData = async () => {
    const dat = await axios.get("http://localhost:8080/api/getuser");
    console.log(dat);
    if (dat.status === "401") {
      alert("error in geting data");
    } else {
      setalluser(dat.data.getuser);
    }
  };

  const getdydoData=async()=>{
    const dydo=await axios.get("http://localhost:8080/get/dydo");
    console.log(dydo.data.getdydo)
    setalluser(dydo.data.getdydo);
  }

  const getcom=async()=>{
    const comm=await axios.get("http://localhost:8080/get/commisioner");
    console.log(comm.data.getcom);
    setalluser(comm.data.getcom);
  }


  useEffect(() => {
    if(clerklogin)
    {
      getData();
    }
    else if(dydologin)
    {
      getdydoData();
    }
    else if(getcom)
    {
      getcom();
    }
   
  }, []);

  const approvedoc = async (id) => {
    const res = await axios.patch(
      `http://localhost:8080/api/getuser/PEON/${id}`
    );

    if (res) {
      alert("data updated");
      nav("/")
    } else {
      alert("error");
    }
  };
  const approvedofficer = async (id) => {
    const res = await axios.patch(
      `http://localhost:8080/api/getuser/officer/${id}`
    );

    if (res) {
      alert("data updated");
    } else {
      alert("error");
    }
  };
  const approvedcommisioner = async (id) => {
    const res = await axios.patch(
      `http://localhost:8080/api/getuser/commisioner/${id}`
    );

    if (res) {
      alert("data updated");
    } else {
      alert("error");
    }
  };

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
              { clerklogin && (
                <>
                  <th>clerk</th>
                  <th>update</th>
                </>
              )}
              { dydologin && 
                (<>
                  <th>DYDO</th>
                  <th>update</th>
                </>)
              }

              {commisionerlogin && (
                <>
                  <th>Commisioner</th>
                  <th>update</th>
                </>
              )}
              <th>profile</th>
            </tr>
          </thead>
          <tbody>
            {alluser.length > 0 ? (
              alluser.map((ele, id) => {
                return (
                  <tr>
                    <td>{ele.gname}</td>
                    <td>{ele.name}</td>
                    <td>{ele.FOICD}</td>
                    <td>
                      <a href="#">{ele.email}</a>
                    </td>
                    <td>03/10/2022</td>
                    {clerklogin && (
                      <>
                        <td className="pd">{ele.PEON}</td>
                        <td className="ap">
                          <button
                            onClick={() => {
                              approvedoc(ele._id);
                            }}
                          >
                            Approved
                          </button>
                        </td>
                      </>
                    )}

                    {dydologin && (
                      <>
                        <td className="pd">{ele.officer}</td>
                        <td className="ap">
                          <button
                            onClick={() => {
                              approvedofficer(ele._id);
                            }}
                          >
                            Approved
                          </button>
                        </td>
                      </>
                    )}

                    {commisionerlogin && (
                      <>
                        <td className="pd">{ele.commisioner}</td>
                        <td className="ap">
                          <button
                            onClick={() => {
                              approvedcommisioner(ele._id);
                            }}
                          >
                            Approved
                          </button>
                        </td>
                      </>
                    )}

                    <td>
                      <NavLink to={`/show/${ele._id}`}>
                        <button>show</button>
                      </NavLink>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1>Loadded...</h1>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ValidationList;
