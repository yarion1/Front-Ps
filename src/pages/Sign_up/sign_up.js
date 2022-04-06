import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {Form, FormGroup,Input,Label,Button} from 'reactstrap';
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import { useNavigate} from 'react-router-dom';
import '../..';
import styled, {
  Globalpage,
  Divleft,
  Divright,
  TitleLog,
  Iconemail,
  Iconpassword,

} from  '../../assets/styles/auth/authstyled';

import {
  ButtonLogin2, 
  ButtonSign2,
  Botaosign2,
  IconconfirmpasswordSign,
} from './styled.js';

import Sign_up_form from '../../components/sign_up_form/sign_up_form.js';
 function Sign_up () {
    let navigate = useNavigate();

    function handleClicklogin(){
        navigate('/login');
    }

    function handleClickregister(){
        navigate('/register');
    }
  
    return(
        <Globalpage>
             <Divleft> 
                 <div className='botaoLogin2'><ButtonLogin2  onClick={handleClicklogin}>Login</ButtonLogin2></div>
                 <Botaosign2> <ButtonSign2  onClick={handleClickregister}>Sign up</ButtonSign2></Botaosign2>
             </Divleft>
             <Divright> 
             <TitleLog>Sign up</TitleLog>
             <Iconemail><AiOutlineMail/></Iconemail>
             <Iconpassword><RiLockPasswordFill/></Iconpassword>
             <IconconfirmpasswordSign><RiLockPasswordFill/></IconconfirmpasswordSign>
             <Sign_up_form/>
            </Divright>
        </Globalpage>        
    )  
  }

export default Sign_up;