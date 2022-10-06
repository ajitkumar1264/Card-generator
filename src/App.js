import React,{useState} from "react";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import Home from "./components/home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp";
import AdminLogin from "./components/AdminLogin";
import AfterLogInArtist from "./components/AfterLogInArtist";
import HidMenu from "./components/HidMenu";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Form from "./components/Form"
import Data from "./components/Datafile"
import ValidationList from "./components/ValidationList";
import Show from "./components/Show";
import Showuser from "./components/Showuser";
import annex from './components/Context/Context'
import ICard from "./components/ICard";

const App = () => {


const [loginuser, setloginuser] = useState(false);
const [currentuser, setcurrentuser] = useState("")
const [listshow, setlistshow] = useState(false);
const [clerklogin, setclerklogin] = useState(false);
const [dydologin, setdydologin] = useState(false);
const [commisionerlogin, setcommisionerlogin] = useState(false);
const [useridcard, setuseridcard] = useState(false);
const [Idcard, setIdcard] = useState("");


  return (


    
    <Router>
    <annex.Provider value={{loginuser,setloginuser,currentuser,setcurrentuser,listshow, setlistshow,clerklogin, setclerklogin,dydologin, setdydologin,commisionerlogin, setcommisionerlogin,useridcard, setuseridcard,Idcard, setIdcard}} >
      <Nav/>

   

      <Routes>
      <Route path="/hidMenu" element={<HidMenu />} />
      
      </Routes>
      <Home/>




      <Routes>
      <Route path="/show/:id" element={<Showuser />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/" element={<LogIn/>} />
      <Route path="/IDcard" element={<Show/>}/>
      <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Events/>
      <Routes>
      <Route path="/form" element={<Form/>}/>
      <Route path="/List" element={<ValidationList/>}/>
      
      </Routes>
      <About />
      <Showuser/>
      <Contact />
      </annex.Provider>
    </Router>
  


    );
};

export default App;
