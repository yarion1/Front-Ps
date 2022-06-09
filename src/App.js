import React, {useState}from "react";
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import LandingPage from './pages/LandingPage/LandingPage';
import updateDataEmail from './store/user/action.js';
import {connect} from 'react-redux';
import SignUp from './pages/SignUp/signUp.js';
import User_profile from './pages/UserProfile/userprofile.js';
import GetCookie from './components/auth/GetCookie';
import ProductInspect from './components/ProductInspect/ProductInspect';
import Lista from './pages/Lista/Lista.js';
import Rent from './pages/rent/listRent';
import Worker from './pages/Listworker/Listworker';
import PreLoader from "./components/PreLoader/PreLoader";
import Upload from "./pages/upload/up";
import UpWorker from "./pages/Upworker/UpWorker";



import Worker_profile from './pages/WorkerProfile/workerProfile.js';
import DadosCadastro from "./pages/SignUp/DadosCadastrais/DadosCadastrais";

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
        <Route path="/" element = {<LandingPage/>}/>
      )}

         <Route path="/inicio" element = {<LandingPage/>}/>
         <Route path="/" element = {<Home/>}/>
         <Route path="/register" element = {<SignUp/>}/>
         <Route path="/PreLoader" element={<PreLoader/>} />
         <Route path="product-inspect/*"  element = {<ProductInspect />}/>
         <Route path="/User-profile/*" element = {<User_profile/>}/>
         <Route path="/Lista" element = {<Lista/>}/>
         <Route path="/Rent" element = {<Rent/>}/>
         <Route path="/dadoscadastrais" element = {<DadosCadastro/>}/>
         <Route path="/Worker" element = {<Worker/>}/>
         <Route path="/upload" element = {<Upload/>}/>
         <Route path="/uploadW" element = {<UpWorker/>}/>
         <Route path="/Worker_profile" element = {<Worker_profile/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default connect(null,{updateDataEmail})(App);