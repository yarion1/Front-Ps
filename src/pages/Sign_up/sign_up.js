import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import curvatopTop from '../../assets/curvatop.png'
import curvaBottom from '../../assets/curvabottom.png'
import retangulobtn from '../../assets/retangulobtn.png'
import {Form, FormGroup,Input,Label,Button} from 'reactstrap';
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import '../..';
import Sign_up_form from '../../components/sign_up_form/sign_up_form.js';
import '../Sign_up/sign_up.css'

 function Sign_up () {
    return(
        <div>
             <div className='divleft'> 
                 <div className='botaoLogin2'><button className='buttonLogin2'>Login</button></div>
                 <div className='botaoSign2'><button className='buttonSign2' >Sign up</button></div>
             </div>
             <div className='divright'> 
             <div className='iconemailSign'><AiOutlineMail/></div>
             <div className='iconpasswordSign'><RiLockPasswordFill/></div>
             <div className='iconconfirmpasswordSign'><RiLockPasswordFill/></div>
             <h2 className='titleLog'>Sign up</h2>
             <Sign_up_form/>
        </div>
        </div>        
    ) 
  }

export default Sign_up;