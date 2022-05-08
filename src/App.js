import React, {useState}from "react";
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Login from "./pages/Login/Login";
import PreLoader from './components/PreLoader/PreLoader'
import updateDataEmail from './store/user/action.js';
import {connect} from 'react-redux';
import Sign_up from './pages/Sign_up/sign_up.js';
import User_profile from './pages/User_profile/user_profile.js';
import GetCookie from './components/auth/GetCookie';
import ProductInspect from './components/ProductInspect/ProductInspect';
import Lista from './pages/Lista/Lista.js';
function EmailLogued(){
  this.loading = true;

  this.EmailData = {}

  this.verifyEmailLogued = (setLogueado,updateDataEmail)=>{
    let Token = GetCookie();
    if(Token !== undefined){
      fetch(`http://localhost:3000/?Token=${Token}`)
      .then(response => response.json())
      .then(({data}) => {
        let {loggued} = data;
        this.loading = false;
        updateDataEmail(data);
        setLogueado(loggued);
      })
      .catch(err => {
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
        <Route path="/" element = {<PreLoader/>}/>
      )}

         <Route path="/" element = {<PreLoader/>}/>
         <Route path="/register" element = {<Sign_up/>}/>
         <Route path="product-inspect/*"  element = {<ProductInspect />}/>
         <Route path="/User_profile" element = {<User_profile/>}/>
         <Route path="/Lista" element = {<Lista/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default connect(null,{updateDataEmail})(App);