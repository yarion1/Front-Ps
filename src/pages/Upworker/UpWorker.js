import React from 'react';
import { useNavigate} from 'react-router-dom';
import logo from '../../assets/img/logo.jpeg';
import styled, {
    Globalpage,
    Cardpage,
    Cardlogin,
    Imageconstructor,
    Textinfo,
    Titlelog,
} from  '../../assets/styles/auth/authstyled';
import SignUpF from '../upload/up'
import {DivLogin} from './UpworkStyled.js';

 function SignUp () {
  
    let navigate = useNavigate();

    function handleClicklogin(){
        navigate('/login');
    }
    return(
        <Globalpage>
             <Cardpage>
                   <Cardlogin style={{top:'8%', height: '85%'}}>
                        <Titlelog>
                            Envio de Documentos
                        </Titlelog>
                        <SignUpF/>
                    </Cardlogin>
                    
                    <Imageconstructor>
                         <img src={logo}/>
                    </Imageconstructor>
                    <DivLogin style={{top:'24em', marginLeft: '90%'}}> 
                        <h2 style={{marginTop: '6px'}}>Possui login? </h2>
                        <button onClick={handleClicklogin}>Entre aqui.</button>  
                   </DivLogin>
                </Cardpage>
        </Globalpage>        
    )  
  }

export default SignUp;