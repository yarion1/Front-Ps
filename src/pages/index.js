import React, {useState}from "react";
import {BrowserRouter as Router, Routes, Route, Navigate , Outlet, useLocation } from 'react-router-dom';
import Login from "./Login/Login";
import Home from "./Home/Home";
import {connect, useSelector} from 'react-redux';
import SignUp from './SignUp/signUp.js';
import User_profile from './UserProfile/userprofile.js';
import ProductInspect from '../components/ProductInspect/ProductInspect';
import Lista from './Lista/Lista.js';
import Rent from './rent/listRent';
import Worker from './Listworker/Listworker';
import PreLoader from "../components/PreLoader/PreLoader";
import Upload from "./upload/up";
import UpWorker from "./Upworker/UpWorker";
import Worker_profile from './WorkerProfile/workerProfile.js';
import DadosCadastro from "./SignUp/DadosCadastrais/DadosCadastrais";
import Equipment_Register from "./Equipment/Equipment_Register/Equipment_Register";
import auth from "../store/auth";


function RequireAuth({ children, redirectTo }) {
  let {isAuthenticated} = useSelector((state) => state.auth);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default () =>(

    <Routes>
     <Route path="/register" element = {<SignUp/>}/>
     <Route path="/login" element = {<Login/>}/>
      <Route path="/dadoscadastrais" element = {<DadosCadastro/>}/>
         <Route
              path="/"
              element={
                <RequireAuth redirectTo={'/login'}>
                  <Home />
                </RequireAuth>
              }
         />
         <Route
              path="/preloader"
              element={
                <RequireAuth redirectTo={'/login'}>
                  <PreLoader/>
                </RequireAuth>
            }
          />
          <Route
              path="product-inspect/*" 
              element={
                <RequireAuth redirectTo={'/login'}>
                  <ProductInspect/>
                </RequireAuth>
            }
           />
           <Route
              path="/User-profile/*"
              element={
                <RequireAuth redirectTo={'/login'}>
                  <User_profile/>
                </RequireAuth>
            }
            />
           <Route
                path="/Lista"
                element={
                  <RequireAuth redirectTo={'/login'}>
                    <Lista/>
                  </RequireAuth>
              }
            />
          <Route path="/Rent"  element={
                  <RequireAuth redirectTo={'/login'}>
                    <Rent/>
                  </RequireAuth>
              }
           />
          <Route path="/Worker"  element={
                  <RequireAuth redirectTo={'/login'}>
                    <Worker/>
                  </RequireAuth>
              }
           />
          <Route path="/upload" element={
                  <RequireAuth redirectTo={'/login'}>
                    <Upload/>
                  </RequireAuth>
              }
          />
          <Route path="/uploadW"  element={
                  <RequireAuth redirectTo={'/login'}>
                    <UpWorker/>
                  </RequireAuth>
              }
            />
          <Route path="/Worker_profile"  element={
                  <RequireAuth redirectTo={'/login'}>
                    <Worker_profile/>
                  </RequireAuth>
              }
            />
            <Route path="/Equipment_Register"  element={
                  <RequireAuth redirectTo={'/login'}>
                    <Equipment_Register/>
                  </RequireAuth>
              }
            />

        
    </Routes>

);