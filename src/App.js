import React, {useState}from "react";
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from './pages/Home/Home';
import updateDataEmail from './store/user/action.js';
import {connect} from 'react-redux';
import GetCookie from './components/GetCookie.js';
import Sign_in from './pages/Sign_in/sign_in.js';

function EmailLogued(){
  /**
   * Para colocar una pantalla de carga
   */
  this.loading = true;

  this.EmailData = {}

  this.verifyEmailLogued = (setLogueado,updateDataEmail)=>{
    let Token = GetCookie();
    if(Token !== undefined){
      fetch(`http://localhost:3000/?Token=${Token}`)
      .then(response=>response.json())
      .then(({data})=>{
        let {loggued} = data;
        this.loading = false;
        updateDataEmail(data);
        setLogueado(loggued);
      })
      .catch(err=>{
        console.log(err);
        this.loading = false;
        setLogueado(false);
      })
    }else{
      this.loading = false;
      setLogueado(false);
    }
  }
}
const EmailIsLoggued = new EmailLogued();
function App({updateDataEmail}) {
  let [logueado,setLogueado] = useState(undefined);
  if(logueado === undefined){
    EmailIsLoggued.verifyEmailLogued(setLogueado,updateDataEmail)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
        {!logueado && (
        <Route path="/login" element = {<Login/>}/>
      )}
      {logueado && (
     <Route path="/" element = {<Home/>}/>
      )}
         <Route path="/Sign_in" element = {<Sign_in/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default connect(null,{updateDataEmail})(App);