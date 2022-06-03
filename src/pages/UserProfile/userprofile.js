import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {Form, FormGroup,Input,Label,Button} from 'reactstrap';
import NavbarPage from "../../components/Navbar/index";
import '../..';
import User_profile_infos from '../../components/UserProfileInfos/userprofileinfos.js';
import Navbar from "../../components/Navbar/index";
import '../..';
import styled, { 
  User_profile_button, 
  User_profile_container

} from './styleduserprofile.js';


 function User_profile () {
    return(
      <div>
        <Navbar/>
        <User_profile_container> 
        <User_profile_button>Editar perfil</User_profile_button>    
        <User_profile_infos/>
        </User_profile_container>
      </div>
    ) 
  }
export default User_profile;


