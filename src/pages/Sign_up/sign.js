import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {Form, FormGroup,Input,Label,Button} from 'reactstrap';
import {AiOutlineMail} from 'react-icons/ai';
import styled, {
  Globalpage,
  Divleft,
  Divright,
  Divbtn,
  BotaoLogin,
  ButtonSign,
  ButtonLogin,
  TitleLog,
  Iconemail,
  Iconpassword,
  Buttonlogin,

} from  '../../assets/styles/auth/authstyled';
import {RiLockPasswordFill} from 'react-icons/ri';
import '../..';
import Sign_up_form from '../../components/sign_up_form/sign_up_form.js';


 function Sign_up () {
    return(
      <Globalpage>
      <Divleft>
          <BotaoLogin><ButtonLogin onClick={handleClicklogin}>Login</ButtonLogin></BotaoLogin>
          <div> <ButtonSign onClick={handleClicksign}>Sign in</ButtonSign> </div>
      </Divleft>
      <Divright>
          <Iconemail><AiOutlineMail/></Iconemail>
          <Iconpassword><RiLockPasswordFill/></Iconpassword>
          
          <TitleLog>Sign in</TitleLog>
          
         </Divright>
         <Sign_up_form/>
      </Globalpage>
    ) 
  }

export default Sign_up;